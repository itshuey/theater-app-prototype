import * as React from 'react';
import { Image, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';

export default function ProfileScreen({ navigation: { goBack } }) {

  const about = "But the only way to get it remotely circular on Android is to add the, but I need this to be transparent so the design behind is visible. The property transparent does not work."

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => goBack()}>
        <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.navContainerActions}>
          <Ionicons name="md-person-add-outline" size={24} color="black" />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Image source={require('../assets/images/default.png')} style={styles.imageContainer} />
          <View style={styles.titleInfoContainer}>
            <Text style={styles.titleText}>Eva Wang</Text>
            <Text style={styles.handleText}>@evawang0426</Text>
            <View style={styles.followInfoContainer}>
              <View style={styles.followContainer}>
                <Text style={styles.followNumberText}>200 </Text>
                <Text style={styles.followText}>followers</Text>
              </View>
              <View style={styles.followContainer}>
                <Text style={styles.followNumberText}>200 </Text>
                <Text style={styles.followText}>following</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutText}>
            {about}
          </Text>
        </View>

        <View style={styles.sectionInfoContainer}>
          <Text style={styles.containerTitleText}>
            Reflections
          </Text>
          <View style={styles.savedContainer}>
            <Image source={require('../assets/images/default.png')} style={styles.savedImageContainer} />
            <Image source={require('../assets/images/default.png')} style={styles.savedImageContainer} />
            <Image source={require('../assets/images/default.png')} style={styles.savedImageContainer} />
          </View>
        </View>
        <View style={styles.sectionInfoContainer}>
          <Text style={styles.containerTitleText}>
            Saved Shows
          </Text>
          <View style={styles.savedContainer}>
            <Image source={require('../assets/images/default.png')} style={styles.savedImageContainer} />
          </View>
        </View>
        <View style={styles.sectionInfoContainer}>
          <Text style={styles.containerTitleText}>
            Watched Shows
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  navContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  navContainerActions: {
    flexDirection: 'row',
  },
  contentContainer: {
    paddingTop: 10,
    backgroundColor: 'transparent',
    marginHorizontal: 30,
  },
  titleContainer: {
    marginTop: 30,
    marginBottom: 5,
    marginLeft: 10,
    flexDirection: 'row',
  },
  titleInfoContainer: {
    marginLeft: 15,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
  },
  handleText: {
    marginTop: 1,
    color: 'gray',
  },
  followInfoContainer: {
    marginTop: 8,
    flexDirection: 'row',
  },
  followContainer: {
    flexDirection: 'row',
    marginRight: 5,
  },
  followNumberText: {
    fontSize: 12,
    fontWeight: "600",
  },
  followText: {
    fontSize: 12,
  },
  imageContainer: {
    borderRadius:40,
    height: 70,
    width: 70,
  },
  aboutContainer: {
    borderRadius: 5,
    marginVertical: 20,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 30,
  },
  aboutText: {
    lineHeight: 19,
  },
  containerTitleText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  sectionInfoContainer: {
    marginBottom: 20
  },
  savedContainer: {
    flexDirection: 'row',
  },
  savedImageContainer: {
    marginTop: 10,
    borderRadius: 10,
    height: 100,
    width: 80,
    marginRight: 12,
  },

});
