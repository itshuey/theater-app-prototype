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

import { useUserUpdate } from '../hooks/UserContext';
import { getInitialUserContextParams } from '../api/firebaseMethods';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const [loading, setLoading] = React.useState(true)
  const [user, setUser] = React.useState(null)
  const initializeUserContext = useUserUpdate();

  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  React.useEffect(() => {
    const authSubscriber = firebase.auth().onAuthStateChanged(
      (user) => {
        setUser(user);
        if (loading) setLoading(false);
        getInitialUserContextParams(user).then((params) => {
          initializeUserContext(params);
        });
      }
    )
    return authSubscriber
  }, [])

  if (loading) return <LoadingScreen />

  return user ? (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </Stack.Navigator>
    ) : (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Sign Up" component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name="Sign In" component={SignIn} options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
}
