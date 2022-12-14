import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStackNavigation} from './AuthStackNavigation';
import {SplashScreen} from '../screens/SplashScreen';
import {MainStackNavigation} from './MainStackNavigation';
import {ModeratorStackNavigation} from './ModeratorStackNavigation';
import {useDispatch, useSelector} from 'react-redux';
import { InitialActions } from '../redux/actions/initial.actions';

const AppNavigator = () => {
  const [splash, setSplash] = useState<boolean>(true);
  const token = useSelector((state: any) => state.auth.token);
  const isEditor = useSelector((state: any) => state.auth.isEditor);
  const dispatch=useDispatch()

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

  return (
    <NavigationContainer>
      {
        splash ? (
          <SplashScreen />
        ) : token === null ? (
          <AuthStackNavigation />
        ) : isEditor === true ? (
          <ModeratorStackNavigation />
        ) : (
          <MainStackNavigation />
        )
      }
    </NavigationContainer>
  );
};

export default AppNavigator;
