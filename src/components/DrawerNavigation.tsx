import * as React from 'react';
import {View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import ListSvg from '../assets/svg/ListSvg';
import CheckSvg from '../assets/svg/CheckSvg';
import LogOutSvg from '../assets/svg/LogOutSvg';
import {useDispatch, useSelector} from 'react-redux';
import {AuthActions} from '../redux/actions/auth.actions';
import {serverAddress} from '../config';
import RNFetchBlob from 'rn-fetch-blob';
import RNFS from 'react-native-fs';
import {getColors} from '../theme/colors';
import {t} from 'i18next';
import DownloadSvg from '../assets/svg/DownloadSvg';

export function DrawerNavigation(props) {
  const dispatch = useDispatch();
  const versionApk = useSelector(state => state.versionApk);
  const downloadPath = `${RNFS.ExternalStorageDirectoryPath}/Download/app-release.apk`;
  
  const downloadNewVersion = () => {
    const android = RNFetchBlob.android;
    RNFetchBlob.config({
      appendExt: 'apk',
      timeout: 180000,
      addAndroidDownloads: {
        notification: true,
        useDownloadManager: true,
        mime: 'application/vnd.android.package-archive',
        mediaScannable: true,
        title: 'Motopres aktualizacja',
        description: '',
        path: downloadPath,
      },
    })
      .fetch('GET', `${serverAddress}/upload/download`)
      .then(res => {
        android.actionViewIntent(
          res.path(),
          'application/vnd.android.package-archive',
        );
      });
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <Drawer.Section>
          <DrawerItem
            icon={() => <ListSvg />}
            label="Zlecenia"
            onPress={() => {
              props.navigation.navigate('HomeScreen');
            }}
          />
          <DrawerItem
            icon={() => <CheckSvg />}
            label="Wykonane"
            onPress={() => {
              props.navigation.navigate('DoneScreen');
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      {versionApk.version === true ? (
        <DrawerItem
          labelStyle={{color: getColors('red')}}
          label="Pobierz aktualizację"
          onPress={downloadNewVersion}
          icon={() => <DownloadSvg />}
        />
      ) : null}
      <Drawer.Section>
        <DrawerItem
          onPress={() => dispatch(AuthActions.logoutAction())}
          icon={() => <LogOutSvg />}
          label="Wyloguj się"
        />
      </Drawer.Section>
    </View>
  );
}
