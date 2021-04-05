import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

import * as firebase from 'firebase';
import apiKeys from '../config/keys';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import LoadingScreen from '../screens/LoadingScreen';
import Dashboard from '../screens/Dashboard';
import Main from '../screens/Main';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {

  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={WelcomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Sign Up" component={SignUp} options={{ headerShown: false }}/>
      <Stack.Screen name="Sign In" component={SignIn} options={{ headerShown: false }}/>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
