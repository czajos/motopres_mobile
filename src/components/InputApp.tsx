import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View, Text, TextInputProps} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {getColors} from '../theme/colors';

interface InputAppI extends TextInputProps {
  title?: string;
  placeholder: string;
  props?: TextInputProps;
}

export const InputApp = ({
  title,
  placeholder,
  ...props
}: InputAppI): React.ReactElement => {
  return (
    <View style={{marginTop: 15}}>
      <Text
        style={{fontSize: 16, color: getColors('black'), fontWeight: 'bold'}}>
        {title}
      </Text>
      <View style={{borderBottomWidth: 1, borderColor: getColors('gray')}}>
        <TextInput placeholder={placeholder} {...props} />
      </View>
    </View>
  );
};
