import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import FeedPost from '../components/FeedPost.tsx';
import { Text, View } from '../components/Themed';
import { ReviewPost, ReviewPostData } from '../data/reviewpostdata';
import LoadingScreen from './LoadingScreen.js';
import * as firebase from 'firebase';

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
    <View style={styles.container}>
      <FlatList
        data={feed}
        renderItem={({ item, index }) => (
          <FeedPost
            id={item.id}
            navigation={navigation}
            username={item.username}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
    backgroundColor: '#fff8f7'
  },
});
