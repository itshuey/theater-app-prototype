import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import FollowScreen from '../screens/FollowScreen';
import ExploreScreen from '../screens/ExploreScreen';
import { HomeTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const HomeTab = createMaterialTopTabNavigator<HomeTabParamList>();

export default function HomeTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <HomeTab.Navigator
      initialRouteName="Follow"
      style={{ backgroundColor: Colors[colorScheme].background,}}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#000',
        indicatorStyle: {
          backgroundColor: Colors[colorScheme].tint,
        },
        tabStyle: {
          paddingTop: 0,
          height: 0,
        }
      }}>
      <HomeTab.Screen
        name="Follow"
        component={TabOneNavigator}
      />
      <HomeTab.Screen
        name="Explore"
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
        component={ExploreScreen}
        options={{ headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}

