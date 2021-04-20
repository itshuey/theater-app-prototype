import * as firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";
import { useUserUpdate } from "../hooks/UserContext.js";

export async function registration(email, password, handle, lastName, firstName) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("users")
      .doc(currentUser.uid)
      .set({
        email: currentUser.email,
        lastName: lastName,
        firstName: firstName,
        handle: handle,
        numFollowers: 0,
        numFollowing: 0,
        bio: "",
      });
  } catch (err) {
    Alert.alert("There is something wrong!!!!", err.message);
  }
}

export async function createEvent(showName, description, venueName, venueAddress) {
  try {
    const db = firebase.firestore();
    await db.collection("events")
      .add({
        showName: showName,
        description: description,
        venueName: venueName,
        venueAddress: venueAddress,
      });
  } catch (err) {
    Alert.alert("Issue creating event!", err.message);
  }
}

export async function editProfile(userID, bio) {
  try {
    const update = {
      bio: bio,
    }

    const db = firebase.firestore();
    await db.collection("users")
      .doc(userID)
      .update(update);
  } catch (err) {
    Alert.alert("Issue editing profile!", err.message);
  }
}

export async function uploadPicture(uri, id, folder) {
  try {

    const imageName = folder ? folder + "/" + id : id;
    const metadata = { contentType: 'image/jpeg', };

    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase.storage().ref().child(imageName + ".jpg");
    await ref.put(blob, metadata).then((snapshot) => {
      //You can check the image is now uploaded in the storage bucket
      console.log(`${imageName} has been successfully uploaded.`);
    })
    .catch((e) => console.log('uploading image error => ', e));
  } catch (err) {
    Alert.alert("Issue uploading picture!", err.message);
  }
}

export async function getInitialUserContextParams(user) {
  let doc = await firebase
  .firestore()
  .collection('following')
  .doc(user.uid)
  .get();

  if (!doc.exists){
    return null;
  } else {
    const dataObj = doc.data();
    const following = dataObj.following;
    const params = {
      id: user.uid,
      following: following,
      bio: user.bio,
    }
    return params;
  }
}

export async function signIn(email, password) {
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert("Sign in error!", err.message);
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert('Sign out error!', err.message);
  }
}

export async function follow(user, userToFollow) {
  try {
    const db = firebase.firestore();
    const increment = firebase.firestore.FieldValue.increment(1);
    const updateFollowing = firebase.firestore.FieldValue.arrayUnion(userToFollow);

    const userRef = db.collection("users").doc(user);
    const userToFollowRef = db.collection("users").doc(userToFollow);
    const followingRef = db.collection("following").doc(user);

    const batch = db.batch();
    batch.set(followingRef, { following: updateFollowing }, { merge: true });
    batch.set(userRef, { numFollowing: increment }, { merge: true });
    batch.set(userToFollowRef, { numFollowers: increment }, { merge: true });

    await batch.commit();

  } catch (err) {
    Alert.alert('Error following!', err.message);
  }
}

export async function unfollow(user, userToUnfollow) {
  try {
    const db = firebase.firestore();
    const decrement = firebase.firestore.FieldValue.increment(-1);
    const removeFromFollowing = firebase.firestore.FieldValue.arrayRemove(userToUnfollow);

    const userRef = db.collection("users").doc(user);
    const userToUnfollowRef = db.collection("users").doc(userToUnfollow);
    const followingRef = db.collection("following").doc(user);

    const batch = db.batch();
    batch.set(followingRef, { following: removeFromFollowing }, { merge: true });
    batch.set(userRef, { numFollowing: decrement }, { merge: true });
    batch.set(userToUnfollowRef, { numFollowers: decrement }, { merge: true });

    await batch.commit();

  } catch (err) {
    Alert.alert('Error unfollowing!', err.message);
  }
}