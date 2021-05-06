import React, { useState } from 'react';
import { View, Picker, FlatList, Switch, Text, TextInput, Alert, ScrollView, Keyboard, StyleSheet, SafeAreaView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { createEvent } from '../api/firebaseMethods';
import { editProfile, uploadPicture } from '../api/firebaseMethods';

import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import DefaultImg from '../assets/images/defaultprofile.png'

import styles from '../constants/Styles';
import CastField from '../components/CastField';

export default function CastFieldList({title, cast, onTextUpdate, getUserProfile}) {
  const castRet = cast.map((c, index) =>
    <CastField
      key={index}
      cast={c}
      onTextUpdate={onTextUpdate}
    />
  );

  return (
  <View style={styles.infoBlockContainer}>
    <Text style={styles.infoBlockHeaderText}>{title}</Text>
    <FlatList
      style={styles.userList}
      data={castRet}
      renderItem={({ item, index }) => getUserProfile(item)}
    />
  </View>
  );
};