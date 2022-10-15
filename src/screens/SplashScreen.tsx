import React from 'react';
import { Center, Image, View, VStack } from 'native-base';
import {getColors} from '../theme/colors';
import { Text } from 'react-native';
// import {useTranslation} from 'react-i18next';


export const SplashScreen =()=>{
  // const {t} = useTranslation();
    
    return(
        <View style={{ flex: 1 }}>
        <Center flex={1}>
          <VStack justifyContent={'space-around'} width={"300px"}>
            <Image
              source={require('../assets/images/logoSplash.png')}
              alt='logo' 
              style={{resizeMode:'contain'}}
              />
          </VStack>
        </Center>
      </View>
    )
}