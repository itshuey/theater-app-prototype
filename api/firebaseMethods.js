import * as firebase from "firebase";
import "firebase/firestore";
import {Alert} from "react-native";
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
    Alert.alert("There is something wrong!", err.message);
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}

export async function follow(user, userToFollow) {
  try {
    const db = firebase.firestore();
    function incrementNumFollowing(userID) {
      const userRef = db.collection("users").doc(userID);
      userRef.update({
          numFollowing: firebase.firestore.FieldValue.increment(1)
      });
    }
    function incrementNumFollowers(userID) {
      const userRef = db.collection("users").doc(userID);
      userRef.update({
          numFollowers: firebase.firestore.FieldValue.increment(1)
      });
    }
    function updateFollowing(userID, userIDToFollow) {
      const followingRef = db.collection("following").doc(userID);
      followingRef.update({
          following: firebase.firestore.FieldValue.arrayUnion(userIDToFollow)
      });
    }

    await Promise.all([incrementNumFollowing(user), incrementNumFollowers(userToFollow), updateFollowing(user, userToFollow)]);

  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}

export async function unfollow(user, userToUnfollow) {
  try {
    const db = firebase.firestore();
    function decrementNumFollowing(userID) {
      const userRef = db.collection("users").doc(userID);
      userRef.update({
          numFollowing: firebase.firestore.FieldValue.increment(-1)
      });
    }
    function decrementNumFollowers(userID) {
      const userRef = db.collection("users").doc(userID);
      userRef.update({
          numFollowers: firebase.firestore.FieldValue.increment(-1)
      });
    }
    function updateFollowing(userID, userIDToFollow) {
      const followingRef = db.collection("following").doc(userID);
      followingRef.update({
          following: firebase.firestore.FieldValue.arrayRemove(userIDToFollow)
      });
    }

    await Promise.all([decrementNumFollowing(user), decrementNumFollowers(userToUnfollow), updateFollowing(user, userToUnfollow)]);

  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}