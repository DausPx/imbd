import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';
import MovieScreen from '../screens/movie';
import MoviesScreen from '../screens/movies';
import ShowScreen from '../screens/show';
import TVShowsScreen from '../screens/tvshows';
import {RootStackParams, TabsStackParams} from '../types/types';

const RootStack = createNativeStackNavigator<RootStackParams>();
const Tab = createBottomTabNavigator<TabsStackParams>();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Movies"
      screenOptions={{
        tabBarIcon: () => {
          return <Text />;
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Movies"
        component={MoviesScreen}
        options={{tabBarLabel: 'Top Movies'}}
      />
      <Tab.Screen
        name="TVShows"
        component={TVShowsScreen}
        options={{tabBarLabel: 'Top Shows'}}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeTabs} />
        <RootStack.Screen name="Movie" component={MovieScreen} />
        <RootStack.Screen name="Show" component={ShowScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
