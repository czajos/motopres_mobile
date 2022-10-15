import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getColors } from '../theme/colors';
import LoginScreen from '../screens/auth/LoginScreen';

export type AuthStackNavigationParamList = {
    StartScreen: undefined;
    LoginScreen:undefined;
};

export const AuthStackNavigation = () => {
    const Stack = createStackNavigator<AuthStackNavigationParamList>();

    return (
        <Stack.Navigator
            initialRouteName={'LoginScreen'}
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}>
           
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen} options={{
                    headerStyle: {
                        backgroundColor: getColors('primary')
                    }, headerTintColor: getColors('primary')
                }}
            />
        </Stack.Navigator>
    );
};
