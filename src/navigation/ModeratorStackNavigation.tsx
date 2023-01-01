import React, { useEffect } from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from '../screens/user/HomeScreen';
import {DrawerNavigation} from '../components/DrawerNavigation';
import {DoneScreen} from '../screens/user/DoneScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {AddRegeneratedScreen} from '../screens/moderator/AddRegeneratedScreen';
import {ChoiceFormScreen} from '../screens/moderator/ChoiceFormScreen';
import {getColors} from '../theme/colors';
import { AddNewScreen } from '../screens/moderator/AddNewScreen';
import { EditOrderScreen } from '../screens/moderator/EditOrderScreen';
import { notificationsService } from '../utils/notificationsService';

export type MainStackNaviagtionParamList = {
  HomeScreen: undefined;
  AddRegeneratedScreen: undefined;
  DoneScreen: undefined;
  HomeStack: undefined;
  ChoiceFormScreen: undefined;
  AddNewScreen:undefined;
  EditOrderScreen:undefined;
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
            headerShown: false,
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
          <Drawer.Screen
          name={'AddNewScreen'}
          component={AddNewScreen}
          options={{
            headerShown: false,
          }}
        />
          <Drawer.Screen
          name={'EditOrderScreen'}
          component={EditOrderScreen}
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
          title: 'Wykonane',
          headerStyle: {
            backgroundColor: '#BA2727',
          },
          headerTintColor: '#fff',
        }}
      />
    </Drawer.Navigator>
  );
};
