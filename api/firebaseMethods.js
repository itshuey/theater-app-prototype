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

export async function createEvent(
  showName,
  description,
  tags,
  dates,
  cast,
  ticketPrice,
  ticketLink,
  intermission,
  ticketRequired,
  venueName,
  venueAddress,
  wheelchair,
  hearingAssistance) {
  try {
    const db = firebase.firestore();
    await db.collection("events")
      .add({
        showName: showName,
        description: description,
        tags: tags,
        dates: dates,
        cast: cast,
        ticketPrice: ticketPrice,
        ticketLink: ticketLink,
        intermission: intermission,
        ticketRequired: ticketRequired,
        venueName: venueName,
        venueAddress: venueAddress,
        wheelchair: wheelchair,
        hearingAssistance: hearingAssistance,
      });
  } catch (err) {
    Alert.alert("Issue creating event!", err.message);
  }
}

// PROFILE

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

export async function getUserInfo(user){
  const doc = await firebase
  .firestore()
  .collection('users')
  .doc(user)
  .get();

  if (!doc.exists){
    Alert.alert('No user data found!')
  } else {
    const fields = doc.data();
    const f = fields.firstName;
    const l = fields.lastName;
    const h = fields.handle;
    const params = {
      f:f,
      l:l,
      h:h,
    };
    return params;
  }
}

// LOGIN

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

// FOLLOW/UNFOLLOW

export async function follow(user, userToFollow) {
  try {
    const db = firebase.firestore();
    const increment = firebase.firestore.FieldValue.increment(1);
    const updateFollowing = firebase.firestore.FieldValue.arrayUnion(userToFollow);
    const updateFollowers = firebase.firestore.FieldValue.arrayUnion(user);

    const userRef = db.collection("users").doc(user);
    const userToFollowRef = db.collection("users").doc(userToFollow);
    const followingRef = db.collection("following").doc(user);
    const followersRef = db.collection("followers").doc(userToFollow);

    const batch = db.batch();
    batch.set(followingRef, { following: updateFollowing }, { merge: true });
    batch.set(userRef, { numFollowing: increment }, { merge: true });
    batch.set(followersRef, { followers: updateFollowers }, { merge: true });
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
    const removeFromFollowers = firebase.firestore.FieldValue.arrayRemove(user);

    const userRef = db.collection("users").doc(user);
    const userToUnfollowRef = db.collection("users").doc(userToUnfollow);
    const followingRef = db.collection("following").doc(user);
    const followersRef = db.collection("followers").doc(userToUnfollow);

    const batch = db.batch();
    batch.set(followingRef, { following: removeFromFollowing }, { merge: true });
    batch.set(userRef, { numFollowing: decrement }, { merge: true });
    batch.set(followersRef, { followers: removeFromFollowers }, { merge: true });
    batch.set(userToUnfollowRef, { numFollowers: decrement }, { merge: true });

    await batch.commit();

  } catch (err) {
    Alert.alert('Error unfollowing!', err.message);
  }
}

// WATCHED/SAVED

export async function addToWatched(user, event) {
  try {
    const db = firebase.firestore();
    const addToWatched = firebase.firestore.FieldValue.arrayUnion(event);

    const watchedRef = db.collection("watched").doc(user);

    const batch = db.batch();
    batch.set(watchedRef, { watched: addToWatched }, { merge: true });

    await batch.commit();

  } catch (err) {
    Alert.alert('Error adding to watched!', err.message);
  }
}

export async function removeFromWatched(user, event) {
  try {
    const db = firebase.firestore();
    const removeFromWatched = firebase.firestore.FieldValue.arrayRemove(event);

    const watchedRef = db.collection("watched").doc(user);

    const batch = db.batch();
    batch.set(watchedRef, { following: removeFromWatched }, { merge: true });

    await batch.commit();

  } catch (err) {
    Alert.alert('Error removing from watched!', err.message);
  }
}

export async function addToSaved(user, event) {
  try {
    const db = firebase.firestore();
    const addToSaved = firebase.firestore.FieldValue.arrayUnion(event);

    const savedRef = db.collection("saved").doc(user);

    const batch = db.batch();
    batch.set(savedRef, { watched: addToSaved }, { merge: true });

    await batch.commit();

  } catch (err) {
    Alert.alert('Error adding to saved!', err.message);
  }
}

export async function removeFromSaved(user, event) {
  try {
    const db = firebase.firestore();
    const removeFromSaved = firebase.firestore.FieldValue.arrayRemove(event);

    const savedRef = db.collection("saved").doc(user);

    const batch = db.batch();
    batch.set(savedRef, { following: removeFromSaved }, { merge: true });

    await batch.commit();

  } catch (err) {
    Alert.alert('Error removing from saved!', err.message);
  }
}

// REFLECTIONS



// SEARCH

export async function fetchUsers(query) {
  const userDoc = await firebase.firestore()
  .collection('users')
  .where('firstName','>=',query)
  .where('firstName','<=',query+"\uf8ff")
  .get()

  const users = userDoc.docs.map(doc => {
      const id = doc.id;
      const data = doc.data();
      return { id, ...data }
    })

  return users;
}

export async function fetchShow(query) {
  const showDoc = await firebase.firestore()
  .collection('events')
  .where('name','>=',query)
  .where('name','<=',query+"\uf8ff")
  .get()

  const shows = showDoc.docs.map(doc => {
      const id = doc.id;
      const data = doc.data();
      return { id, ...data }
    })

  return shows;
}

export async function fetchGenre(query) {
  const genreDoc = await firebase.firestore()
  .collection('genres')
  .where('genre','>=',query)
  .where('genre','<=',query+"\uf8ff")
  .get()

  const genres = genreDoc.docs.map(doc => {
      const id = doc.id;
      const data = doc.data();
      return { id, ...data }
    })

  return genres;
}

export async function fetchWatched(query) {
  const watchedDoc = await firebase.firestore()
  .collection('watched')
  .where('name','>=',query)
  .where('name','<=',query+"\uf8ff")
  .get()

  const watched = watchedDoc.docs.map(doc => {
      const id = doc.id;
      const data = doc.data();
      return { id, ...data }
    })

  return watched;
}

export async function fetchSaved(query) {
  const savedDoc = await firebase.firestore()
  .collection('saved')
  .where('name','>=',query)
  .where('name','<=',query+"\uf8ff")
  .get()

  const saved = savedDoc.docs.map(doc => {
      const id = doc.id;
      const data = doc.data();
      return { id, ...data }
    })

  return saved;
}

export async function fetchReflection(query) {
  const postDoc = await firebase.firestore()
  .collection('posts')
  .where('name','>=',query)
  .where('name','<=',query+"\uf8ff")
  .get()

  const posts = postDoc.docs.map(doc => {
      const id = doc.id;
      const data = doc.data();
      return { id, ...data }
    })

  return posts;
}

// FEED PULLS

export async function pullFollowers(user) {
  const followersDoc = await firebase.firestore()
  .collection('followers')
  .doc(user)
  .get()

  const followers = followersDoc.docs.map(doc => {
      const id = doc.id;
      const data = doc.data();
      return { id, ...data }
    })

  return followers;
}

export async function pullFollowing(user) {
  const followingDoc = await firebase.firestore()
  .collection('following')
  .doc(user)
  .get()

  if (!followingDoc.exists){
    console.log('No user data found!');
  } else {
    const following = followingDoc.data().following;
    console.log(following);
    return following;
  }
}

export async function pullShows() {
  const showDoc = await firebase.firestore().collection('events')
  .get()

  const shows = showDoc.docs.map(doc => {
      const id = doc.id;
      const data = doc.data();
      return { id, ...data }
    })

  return shows;
}

export async function pullWatched(user) {
  const getList = () => {
    const tempDoc = firebase.firestore()
    .collection('watched')
    .doc(user)
    .get()

    const temp = tempDoc.map(item => item.data())

    return temp;
  }

  const watchedDoc = getList().map(show => {
    firebase.firestore()
    .collection('events')
    .where('name', '==', show)
    .get()
  })

  const watched = watchedDoc.docs.map(doc => {
      const id = doc.id;
      const data = doc.data();
      return { id, ...data }
    })

  return watched;
}

export async function pullSaved(user) {
  const getList = () => {
    const tempDoc = firebase.firestore()
    .collection('saved')
    .doc(user)
    .get()

    const temp = tempDoc.map(item => item.data())

    return temp;
  }

  const savedDoc = getList().map(show => {
    firebase.firestore()
    .collection('events')
    .where('name', '==', show)
    .get()
  })

  const saved = savedDoc.docs.map(doc => {
      const id = doc.id;
      const data = doc.data();
      return { id, ...data }
    })

  return saved;
}

// ADD PROFILE

const addUserProfile = (user) => {
  return (
    <TouchableOpacity onPress={() => onChange(user.name, 'name')}>
      <View style={styles.bodyText}>
        <View>
          <Text style={styles.titleText}>{user.firstName} {user.lastName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}