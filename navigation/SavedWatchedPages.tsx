import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import styles from '../styles/index';
import { colors } from '../styles/colors';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import SavedScreen from '../screens/SavedScreen';
import WatchedScreen from '../screens/WatchedScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

import * as firebase from 'firebase';
import { useUser } from '../hooks/UserContext';

import TopPart from '../components/TopPart';

const HomeTab = createMaterialTopTabNavigator<BottomTabParamList>();

export default function SavedWatchedPages({ navigation }) {
  const colorScheme = useColorScheme();

  return (
    <HomeTab.Navigator
      initialRouteName="Saved"
      style={{backgroundColor: colors.bg}}
      tabBarOptions={{
        showLabel: true,
        activeTintColor: '#000',
        indicatorStyle: {
          backgroundColor: colors.accent,
        },
        tabStyle: {
          paddingTop: 100,
          height: 0,
        }
      }}>
      <HomeTab.Screen
        name="Saved"
        component={TabOneNavigator}
      />
      <HomeTab.Screen
        name="Watched"
        component={TabTwoNavigator}
      />
    </HomeTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Saved"
        component={SavedScreen}
        options={{ headerShown: false }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Watched"
        component={WatchedScreen}
        options={{ headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}