import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { AuthStackNavigation } from './AuthStackNavigation';
import { SplashScreen } from '../screens/SplashScreen';
import { MainStackNavigation } from './MainStackNavigation';


const AppNavigator = () => {
  
  const [splash, setSplash] = useState<boolean>(true);

  useEffect(() => {
    const delayDuration: number = 2000;
    setTimeout((): void => setSplash(false), delayDuration);
  }, []);

  return (
    <NavigationContainer>
      {splash ? (
        <SplashScreen/>
      ):
      // <AuthStackNavigation/> 
      <MainStackNavigation/>
      }
    </NavigationContainer>

  );
};

export default AppNavigator;
