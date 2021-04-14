import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, ScrollView, Keyboard ,StyleSheet, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { editProfile, uploadPicture } from '../api/firebaseMethods';
import { useUserUpdate } from '../hooks/UserContext';

export default function EditProfileScreen({ route, navigation }) {

  const { id, currentProfileURI, currentName, currentBio } = route.params;
  const [bio, setBio] = useState(currentBio);
  const [image, setImage] = useState(currentProfileURI);
  const [name, setName] = useState(currentName);
  const updateUserInfo = useUserUpdate();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    console.log(result);
    if (!result.cancelled) {
      const compressedResult = await ImageManipulator.manipulateAsync(
        result.uri,
        [{ resize: { width: 200 } }],
        { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
      );
      console.log(compressedResult);
      setImage(compressedResult.uri);
    }
  };

  const emptyState = () => {
    setBio('');
    setImage('');
    setName('');
  };

  const profile = image ? { uri: image } : require('../assets/images/default.png')

  const handlePress = (id, bio) => {
    uploadPicture(image, id, "").then(
    () => editProfile(id, bio)).then(
    () => {
    // Profile picture only re-renders on context change...
    // Considering a total refactor where profile always looks at context
      updateUserInfo({ bio: bio });
      navigation.navigate('Me');
      emptyState();
    });
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.formSectionContainer}>
          <TouchableOpacity onPress={pickImage} >
          <Image source={profile} style={styles.imageContainer} />
            </TouchableOpacity>
        </View>
        <View style={styles.formSectionContainer}>
          <Text style={styles.formSectionText}>Display name</Text>
          <View style={styles.formBlockContainer}>
            <View style={styles.nameFormResponseContainer}>
              <TextInput
              style={styles.formResponseText}
              placeholder=""
              placeholderTextColor={"black"}
              value={name}
              textAlign={'left'}
              onChangeText={(text) => setBio(text)}
              />
            </View>
          </View>
          <Text style={styles.formSectionText}>Edit Bio</Text>
          <View style={styles.formBlockContainer}>
            <View style={styles.formResponseContainer}>
              <TextInput
              style={styles.formResponseText}
              placeholder="Something about you..."
              placeholderTextColor={"black"}
              multiline={true}
              value={bio}
              textAlign={'left'}
              onChangeText={(text) => setBio(text)}
              />
            </View>
            <Text style={styles.formHeaderText}>250 word max! Keep it snappy.</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handlePress(id, bio)} >
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
    marginTop: 20,
    backgroundColor: 'transparent',
    marginHorizontal: 30,
  },
  imageContainer: {
    alignSelf: 'center',
    marginTop: 20,
    borderRadius:60,
    height: 120,
    width: 120,
  },
  headerText: {
    fontSize: 18,
    paddingTop: 2,
  },
  formSectionContainer: {
    marginBottom: 20,
  },
  formSectionText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  formBlockContainer: {
    marginTop: 10,
  },
  formHeaderText: {
    fontSize: 12,
    fontWeight: '300',
  },
  formResponseText: {
    fontSize: 15,
    fontWeight: '300',
  },
  nameFormResponseContainer: {
    borderRadius: 5,
    marginVertical: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
  },
  formResponseContainer: {
    borderRadius: 5,
    marginVertical: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 30,
  },
  button: {
    marginTop: 20,
    borderColor: '#c23f39',
    borderWidth: 1,
    borderRadius: 15,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: 'white',
    width: "50%",
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#c23f39',
    fontSize: 16,
  },

});