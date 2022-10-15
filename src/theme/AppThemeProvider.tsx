import {NativeBaseProvider} from 'native-base';
import React from 'react';
// import {theme} from './theme';

interface AppThemeProviderI {
  children: React.ReactNode;
}

const AppThemeProvider = ({children}: AppThemeProviderI) => {
  return <NativeBaseProvider >{children}</NativeBaseProvider>;
};

export default AppThemeProvider;
