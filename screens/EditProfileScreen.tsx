import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Keyboard, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';

import { editProfile, uploadPicture } from '../api/firebaseMethods';

import styles from '../styles/index';
import { useUserUpdate } from '../hooks/UserContext';

import ChooseImg from '../components/ChooseImg';
import BlockEntry from '../components/BlockEntry';
import SingleEntry from '../components/SingleEntry';

export default function EditProfileScreen({ route, navigation }) {

  const [chars, setChars] = useState(0)

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
    <SafeAreaView style={styles.fullView}>
      <ScrollView style={styles.scrollView}>
        <ChooseImg onPress={pickImage} profPic={profile}/>
        <View style={styles.contentView}>
          <SingleEntry title={'Edit Name'} placeholder={''} val={name} onValUpdate={setName}/>
          <BlockEntry title={''} placeholder={'Something about you...'} numChars={250} chars={chars} block={bio} onCharsUpdate={setChars} onBlockUpdate={setBio}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handlePress(id, bio)} >
          <Text style={styles.captionText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}