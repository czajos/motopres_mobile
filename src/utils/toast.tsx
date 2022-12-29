import {Alert, Platform, ToastAndroid} from 'react-native';

export function toast(msg: string) {
  if (Platform.OS === 'ios') {
    Alert.alert(msg);
  } else {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  }
}
