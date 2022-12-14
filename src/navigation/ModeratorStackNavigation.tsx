import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from '../screens/user/HomeScreen';
import {DrawerNavigation} from '../components/DrawerNavigation';
import {DoneScreen} from '../screens/user/DoneScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {AddRegeneratedScreen} from '../screens/moderator/AddRegeneratedScreen';
import {ChoiceFormScreen} from '../screens/moderator/ChoiceFormScreen';
import {getColors} from '../theme/colors';

export type MainStackNaviagtionParamList = {
  HomeScreen: undefined;
  AddRegeneratedScreen: undefined;
  DoneScreen: undefined;
  HomeStack: undefined;
  ChoiceFormScreen: undefined;
};

export const ModeratorStackNavigation = () => {
  const Stack = createStackNavigator<MainStackNaviagtionParamList>();
  const Drawer = createDrawerNavigator<MainStackNaviagtionParamList>();

  function HomeStack() {
    return (
      <Drawer.Navigator
        screenOptions={{sceneContainerStyle: {backgroundColor: 'white'}}}
        drawerContent={props => <DrawerNavigation {...props} />}>
        <Drawer.Screen
          options={{
            title: 'Zlecenia',
            headerStyle: {
              backgroundColor: '#BA2727',
            },
            headerTintColor: '#fff',
          }}
          name={'HomeScreen'}
          component={HomeScreen}
        />
        <Drawer.Screen
          options={{
            title: 'Dodaj zlecenie',
            headerStyle: {
              backgroundColor: '#BA2727',
            },

            headerTintColor: '#fff',
          }}
          name={'ChoiceFormScreen'}
          component={ChoiceFormScreen}
        />
        <Drawer.Screen
          name={'AddRegeneratedScreen'}
          component={AddRegeneratedScreen}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <Drawer.Navigator drawerContent={props => <DrawerNavigation {...props} />}>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="DoneScreen"
        component={DoneScreen}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};
