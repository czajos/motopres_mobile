import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { AuthStackNavigation } from './AuthStackNavigation';
import { SplashScreen } from '../screens/SplashScreen';


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
      <AuthStackNavigation/> 
      }
    </NavigationContainer>

  );
};

export default AppNavigator;
