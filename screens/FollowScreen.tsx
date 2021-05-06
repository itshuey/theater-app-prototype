import * as React from 'react';
import { FlatList } from 'react-native';

import * as firebase from 'firebase';

import styles from '../styles/index';
import { Text, View } from '../components/Themed';
import FeedPost from '../components/FeedPost';
import LoadingScreen from './LoadingScreen.js';
import { ReviewPost, ReviewPostData } from '../data/reviewpostdata';

export default function FollowScreen({ navigation }) {
  const [loading, setLoading] = React.useState(true)
  const [feed, setFeed] = React.useState(null)
  const currentUserUID = firebase.auth().currentUser.uid;

  const data = { "posts": ReviewPostData };

  React.useEffect(() => {

    async function getUserFeed(){
      let doc = await firebase.firestore()
      .collection('feeds-test-0')
      .doc(currentUserUID)
      .get();

      if (!doc.exists){
        console.log('No user data found!');
      } else {
        let dataObj = doc.data();
        setFeed(dataObj.posts)
      }
      if (loading) setLoading(false);
    }
    getUserFeed();
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <View style={styles.fullView}>
      <FlatList
        data={feed}
        renderItem={({ item, index }) => (
          <FeedPost
            id={item.id}
            navigation={navigation}
            username={item.username}
            userID={item.userID}
            pictureUrl={item.pictureUrl}
            timeStamp={item.timeStamp}
            review={item.review}
            event={item.event}
            numLikes={item.numLikes}
            numComments={item.numComments}
            comments={item.comments}
          />
        )}
      />
    </View>
  );
}