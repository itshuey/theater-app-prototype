import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import LogoHeader from '../components/LogoHeader';
import FavoritesScreen from '../screens/FavoritesScreen';
import SearchScreen from '../screens/SearchScreen';
import MeScreen from '../screens/MeScreen';
import ShowScreen from '../screens/ShowScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ReflectionScreen from '../screens/ReflectionScreen';
import HomeTabNavigator from './HomeTabNavigator';
import CreateEventScreen from '../screens/CreateEventScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import FollowingScreen from '../screens/FollowingScreen';
import FollowersScreen from '../screens/FollowersScreen';
import SavedWatchedPages from '../navigation/SavedWatchedPages';
import TopPart from '../components/TopPart';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

import { colors } from '../styles/colors';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false,
      }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-star-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Me"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person-circle-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={22} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Feed"
        component={HomeTabNavigator}
        options={{
          headerTitle: props => <LogoHeader {...props} />,
          headerStyle: {
            backgroundColor: colors.bg,
            shadowColor: 'transparent',
          },
        }}
      />
      <TabOneStack.Screen
        name="Show"
        component={ShowScreen}
        options={{ headerShown: false }}
      />
      <TabOneStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <TabOneStack.Screen
        name="Reflection"
        component={ReflectionScreen}
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
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <TabOneStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <TabTwoStack.Screen
        name="Following"
        component={FollowingScreen}
        options={{ headerTitle: 'Following' }}
      />
      <TabTwoStack.Screen
        name="Followers"
        component={FollowersScreen}
        options={{ headerTitle: 'Followers' }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="SavedWatched"
        component={SavedWatchedPages}
        options={{
          headerTitle: () => <TopPart />,
          headerStyle: {
            backgroundColor: colors.bg,
            shadowColor: 'transparent',
          },
        }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="Me"
        component={MeScreen}
        options={{ headerShown: false }}
      />
      <TabFourStack.Screen
        name="Edit Profile"
        component={EditProfileScreen}
        options={{ headerShown: false }}
      />
      <TabTwoStack.Screen
        name="Following"
        component={FollowingScreen}
        options={{ headerTitle: 'Following' }}
      />
      <TabTwoStack.Screen
        name="Followers"
        component={FollowersScreen}
        options={{ headerTitle: 'Followers' }}
      />
      <TabFourStack.Screen
        name="Create Event"
        component={CreateEventScreen}
        options={{ headerShown: false }}
      />
    </TabFourStack.Navigator>
  );
}
