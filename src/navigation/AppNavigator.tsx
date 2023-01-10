import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStackNavigation} from './AuthStackNavigation';
import {SplashScreen} from '../screens/SplashScreen';
import {MainStackNavigation} from './MainStackNavigation';
import {ModeratorStackNavigation} from './ModeratorStackNavigation';
import {useDispatch, useSelector} from 'react-redux';
import {InitialActions} from '../redux/actions/initial.actions';
import {AuthActions} from '../redux/actions/auth.actions';
import { notificationsService } from '../utils/notificationsService';
import { Platform } from 'react-native';

const AppNavigator = () => {
  const [splash, setSplash] = useState<boolean>(true);
  const token = useSelector((state: any) => state.auth.token);
  const isEditor = useSelector((state: any) => state.auth.isEditor);
  const dispatch = useDispatch();
  const [versionApk, setVersionApk] = useState('0.4');
  useEffect(() => {
    const delayDuration: number = 2000;
    setTimeout((): void => setSplash(false), delayDuration);
  }, []);

  useEffect(() => {
    const asyncAction = async () => {
      await dispatch(InitialActions.initApp());
    };
    asyncAction();
  }, []);

  useEffect(() => {
    console.log('platform',Platform.OS)
    dispatch(AuthActions.versionAction(versionApk,Platform.OS));
  }, []);
  useEffect(() => {
    notificationsService.initializeFirebaseMessaging();
  }, []);

  return (
    <NavigationContainer>
      {splash ? (
        <SplashScreen />
      ) : token === null ? (
        <AuthStackNavigation />
      ) : isEditor === true ? (
        <ModeratorStackNavigation />
      ) : (
        <MainStackNavigation />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
