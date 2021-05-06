const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.handleFollow = functions.firestore
    .document("/following/{userId}")
    .onUpdate((change, context) => {
      // Grab the old and current lists
      const oldList = change.before.data().following;
      const newList = change.after.data().following;
      const targetUser = context.params.userId;

      if (oldList.length > newList.length) {
        const followedUser = findDifference(oldList, newList);
        createFollowNotification(followedUser, targetUser);
        updateFeedAfterFollow(targetUser, followedUser);
      } else if (oldList.length < newList.length) {
        const unfollowedUser = findDifference(newList, oldList);
        removeFollowNotifications(unfollowedUser, targetUser);
        updateFeedAfterUnfollow(targetUser, unfollowedUser);
      }
    });

function findDifference(list1, list2) {
  const listSet = new Set(list2);
  for (const userId of list1) {
    if (!listSet.has(userId)) return userId;
  }
  return "";
}

function createFollowNotification(followedUser, targetUser) {
  const ref = functions.firestore.collection("notifications");
  ref.add({
    user: followedUser,
    referrer: targetUser,
    type: "follow",
  });
}

async function updateFeedAfterFollow(targetUser, followedUser) {
  try {
    const db = functions.firestore;
    const feedRef = db.collection("feed").doc(targetUser);
    const feedDoc = await feedRef.get();
    const feed = feedDoc.exists ? feedDoc.data() : [];

    const newPosts = await db.collection("posts").where("user", "==", followedUser);
    newPosts.forEach((doc) => {
      const postData = doc.data();
      feed.push({
        user: postData.user,
        text: postData.text,
        timestamp: postData.timestamp,
      });
    });

    feed.sort((a, b) => a.timestamp - b.timestamp);
    await feedRef.set({
      posts: feed,
    });
    functions.logger.log("Updated feed for user ", targetUser);
  } catch (err) {
    functions.logger.log("Error updating feed:", err.message);
  }
}

function removeFollowNotifications(followedUser, targetUser) {
  const ref = functions.firestore.collection("notifications")
      .where("user", "==", followedUser)
      .where("type", "==", "follow")
      .where("referrer", "==", targetUser);
  ref.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      doc.ref.delete();
    });
  });
}

async function updateFeedAfterUnfollow(targetUser, unfollowedUser) {
  const db = functions.firestore;
  const feedRef = db.collection("feed").doc(targetUser);
  const feedDoc = await feedRef.get();
  const feed = feedDoc.exists ? feedDoc.data() : [];
  const filteredFeed = feed.filter((post) => post.user !== unfollowedUser);
  feedRef.set({posts: filteredFeed});
}

exports.handleCreatePost = functions.firestore
    .document("posts/{postId}")
    .onWrite((snap, context) => {
      const post = snap.data();
      const followers = getFollowers(post.user);

      for (const user of followers) {
        const ref = functions.firestore.collection("feeds").doc(user);
        ref.update({
          feed: functions.firestore.FieldValue.arrayUnion(post),
        });
      }
    });

async function getFollowers(user) {
  const ref = functions.firestore.collection("following")
      .where("following", "array-contains", user);

  const followersDoc = await ref.get();
  return followersDoc.map((doc) => doc.id);
}

exports.handleUpdatePost = functions.firestore
    .document("posts/{postId}")
    .onUpdate((change, context) => {
      const post = change.after.data();
      const followers = getFollowers(post.user);

      for (const user of followers) updateFeed(user, post.id, post);
    });

async function updateFeed(userId, postId, post) {
  const ref = functions.firestore.collection("feeds").doc(userId);
  const feed = await ref.get().data().feed;
  const index = feed.findIndex((post) => post.id == postId);
  feed[index] = post;
  await ref.set({feed: feed});
  functions.logger.log("Updated feed for user ", userId);
}

exports.handleDeletePost = functions.firestore
    .document("posts/{postId}")
    .onDelete((snap, context) => {
      const deletedPost = snap.data();
      const followers = getFollowers(deletedPost.user);

      for (const user of followers) {
        const ref = functions.firestore.collection("feeds").doc(user);
        ref.update({
          feed: functions.firestore.FieldValue.arrayRemove(deletedPost),
        });
      }
    });
