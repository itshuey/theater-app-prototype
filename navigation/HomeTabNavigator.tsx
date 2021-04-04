import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import FollowScreen from '../screens/FollowScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MessagesScreen from '../screens/MessagesScreen';
import NearbyScreen from '../screens/NearbyScreen';
import { HomeTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const HomeTab = createMaterialTopTabNavigator<HomeTabParamList>();

export default function HomeTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <HomeTab.Navigator
      initialRouteName="Follow"
      tabBarOptions={{
        style: {
          backgroundColor: Colors[colorScheme].backgroundColor,
          marginTop: -10,
        },
        tabStyle:{

        },
        activeTintColor: Colors[colorScheme].tint,
        indicatorStyle: {
          backgroundColor: Colors[colorScheme].tint,
        }
      }}>
      <HomeTab.Screen
        name="Follow"
        component={TabOneNavigator}
      />
      <HomeTab.Screen
        name="Explore"
        component={TabTwoNavigator}
        options={{

        }}
      />
      <HomeTab.Screen
        name="Nearby"
        component={TabThreeNavigator}
        options={{

        }}
      />
    </HomeTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Follow"
        component={FollowScreen}
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
        name="Explore"
        component={FavoritesScreen}
        options={{ headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="Nearby"
        component={NearbyScreen}
        options={{ headerShown: false }}
      />
    </TabThreeStack.Navigator>
  );
}

