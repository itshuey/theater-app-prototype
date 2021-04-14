import React, { useState } from 'react';
import { View, Text, TextInput, Alert, ScrollView, Keyboard ,StyleSheet, SafeAreaView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { editProfile } from '../api/firebaseMethods';
import { useUserUpdate } from '../hooks/UserContext';

export default function EditProfileScreen({ route, navigation }) {

  const { id, oldBio } = route.params;
  const [ bio, setBio ] = useState(oldBio);
  const updateUserInfo = useUserUpdate();

  const emptyState = () => {
    setBio('');
  };

  const handlePress = (id, bio) => {
    editProfile(id, bio).then(() => {
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
          <Text style={styles.formSectionText}>Upload picture</Text>
        </View>
        <View style={styles.formSectionContainer}>
          <Text style={styles.formSectionText}>Edit Bio</Text>
          <View style={styles.formBlockContainer}>
            <View style={styles.formResponseContainer}>
              <TextInput
              style={styles.formResponseText}
              placeholder="Show name here"
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
          <Text style={styles.buttonText}>Submit</Text>
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
    marginTop: 50,
    backgroundColor: 'transparent',
    marginHorizontal: 30,
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