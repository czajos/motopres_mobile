import React, {useState, useEffect} from 'react';
import {View, Pressable} from 'native-base';
import {Dimensions, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import {getColors} from '../../theme/colors';
import PersonSvg from '../../assets/svg/PersonSvg';
import LockSvg from '../../assets/svg/LockSvg';
import {InputLogin} from '../../components/InputLogin';
import EyeBlockSvg from '../../assets/svg/EyeBlockSvg';
import {convertAbsoluteToRem} from 'native-base/lib/typescript/theme/tools';
import EyeOpenSvg from '../../assets/svg/EyeOpenSvg';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../../redux/actions/auth.actions';
import { useAppDispatch } from '../../redux/hook';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

export const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  console.log(showPassword);
  const {t} = useTranslation();
  const [username,setUserName]=useState<string>('')
  const [password,setPassword]=useState<string>('')
  const dispatch=useAppDispatch()
  
  const submit=()=>{
   dispatch(AuthActions.loginAction(username,password))
  }
  

  // const [data, setData] = useState({
  //   username: '',
  //   password: '',
  //   isValidUser: true,
  //   isValidPassword: true,
  //   checkInput: false,
  //   secureTextEntry: true,
  // });

  // //Sprawdzenie wprowadzanych znaków jeżeli puste pojawia się informacja
  // const validUser = val => {
  //   if (val.trim().length > 0) {
  //     setData({
  //       ...data,
  //       username: val,
  //       isValidUser: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       username: val,
  //       isValidUser: false,
  //     });
  //   }
  // };

  // const validPassword = val => {
  //   if (val.trim().length > 0) {
  //     setData({
  //       ...data,
  //       password: val,
  //       isValidPassword: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       password: val,
  //       isValidPassword: false,
  //     });
  //   }
  // };

  // // odsłanianie hasła ikoną
  // const updateSecureTextEntry = () => {
  //   setData({
  //     ...data,
  //     secureTextEntry: !data.secureTextEntry,
  //   });
  // };

  // const inputChangeUserName = text => {
  //   if (text.length != 0) {
  //     setData({
  //       ...data,
  //       username: text,
  //       checkInput: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       username: text,
  //       checkInput: false,
  //     });
  //   }
  // };

  // const inputChangePassword = text => {
  //   if (text.length != 0) {
  //     setData({
  //       ...data,
  //       password: text,
  //       checkInput: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       password: text,
  //       checkInput: false,
  //     });
  //   }
  // };
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo-menu.png')} />
      <Text
        style={{
          color: getColors('primary'),
          fontSize: 30,
          fontFamily: 'Montserrat-Bold',
        }}>
        {t('loginScreen.login')}
      </Text>
      <InputLogin value={username} onChangeText={(val)=>setUserName(val)} iconLeft={<PersonSvg />} placeholder={'login'} />
      <InputLogin
        iconLeft={<LockSvg />}
        placeholder={'hasło'}
        type={showPassword ? 'text' : 'password'}
        InputRightElement={
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOpenSvg /> : <EyeBlockSvg />}
          </Pressable>
        }
      />
      <TouchableOpacity
        onPress={submit}
        style={{
          width: 100,
          borderRadius: 10,
          backgroundColor: getColors('gray'),
          height: 35,
          justifyContent:'center',
          alignItems:'center',
          marginTop:40
        }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Montserrat-Bold',
            color: getColors('white'),
          }}>
          {t('loginScreen.login')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColors('secondary'),
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
});
