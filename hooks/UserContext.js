import React, { useContext, useState } from 'react';

const UserContext = React.createContext();
const UserUpdateContext = React.createContext();

const user = {
  id: "",
  bio: "",
  following: [],
  likedEvents: [],
  lastUpdate: "",
}

export function useUser() {
  return useContext(UserContext);
}

export function useUserUpdate() {
  return useContext(UserUpdateContext);
}

export function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState(user)

  function updateUserInfo(params) {

    const updatedTimestamp = Date.now();
    const updatedID = params.id ? params.id : userInfo.id;
    const updatedBio = params.bio ? params.bio : userInfo.bio;
    const updatedFollowing = !params.following ? userInfo.following :
      (Array.isArray(params.following) ? params.following : [...userInfo.following, params.following]);
    const updatedLikedEvents = !params.likedEvents ? userInfo.likedEvents :
      (Array.isArray(params.likedEvents) ? params.likedEvents : [...userInfo.likedEvents, params.likedEvents]);

    console.log("Updated at " + updatedTimestamp);

    setUserInfo({
      id: updatedID,
      bio: updatedBio,
      following: updatedFollowing,
      likedEvents: updatedLikedEvents,
      lastUpdate: updatedTimestamp,
    });
  }

  return (
    <UserContext.Provider value={userInfo}>
      <UserUpdateContext.Provider value={updateUserInfo}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  )
}