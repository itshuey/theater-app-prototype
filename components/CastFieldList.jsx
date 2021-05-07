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

export default function CastFieldList({title, cast, onTextUpdate}) {
  const castRet = cast.map((c, index) =>
    <CastField
      index={index}
      name={c.name}
      role={c.role}
      onTextUpdate={onTextUpdate}
    />
  );

  return (
  <View style={styles.infoBlockContainer}>
    <Text style={styles.infoBlockHeaderText}>{title}</Text>
    <View>
      {castRet}
    </View>
  </View>
  );
};