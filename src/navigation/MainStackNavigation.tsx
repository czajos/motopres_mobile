import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import {getColors} from '../theme/colors';
import LoginScreen from '../screens/auth/LoginScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from '../screens/user/HomeScreen';
import {DrawerNavigation} from '../components/DrawerNavigation';
import { DoneScreen } from '../screens/user/DoneScreen';


export type MainStackNaviagtionParamList={
  HomeScreen:undefined;
  DoneScreen:undefined;
}

export const MainStackNavigation = () => {
const Drawer = createDrawerNavigator<MainStackNaviagtionParamList>();

  return (
    <Drawer.Navigator drawerContent={props => <DrawerNavigation {...props} />}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Zlecenia',
          headerStyle: {
            backgroundColor: '#BA2727',
          },
          headerTintColor: '#fff',
        }}
      />
        <Drawer.Screen
        name="DoneScreen"
        component={DoneScreen}
        options={{
          title: 'Zlecenia',
          headerStyle: {
            backgroundColor: '#BA2727',
          },
          headerTintColor: '#fff',
        }}
      />
    </Drawer.Navigator>
  );
};
