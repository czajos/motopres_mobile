import * as React from 'react';
import {View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import ListSvg from '../assets/svg/ListSvg';
import CheckSvg from '../assets/svg/CheckSvg';
import LogOutSvg from '../assets/svg/LogOutSvg';

export function DrawerNavigation({props}: {props: any}) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <Drawer.Section>
          <DrawerItem
            icon={() => <ListSvg />}
            label="Zlecenia"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
          <DrawerItem
            icon={() => <CheckSvg />}
            label="Wykonane"
            onPress={() => {
              props.navigation.navigate('Wykonane');
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section>
        <DrawerItem
          // onPress={()=>{signOut()}}
          icon={() => <LogOutSvg />}
          label="Wyloguj się"
        />
      </Drawer.Section>
    </View>
  );
}
