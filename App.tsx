import React from 'react';
import { NativeBaseProvider } from 'native-base';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaView } from 'react-native';
import { StoreProvider } from './src/redux/StoreProvider';
import AppThemeProvider from './src/theme/AppThemeProvider';


const App = () => {
  
  return (
    // <NativeBaseProvider>
    //   <AppNavigator/>
    // </NativeBaseProvider>
    <SafeAreaView style={{flex:1}}>
      <StoreProvider>
        <AppThemeProvider>
          <AppNavigator />
        </AppThemeProvider>
      </StoreProvider>
    </SafeAreaView>
  );
};

export default App;
