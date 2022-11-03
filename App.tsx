import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import * as SplashScreens from 'expo-splash-screen';

import theme from './src/global/styles/theme';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Routes } from './src/routes'; 
import { AppRoutes } from './src/routes/app.routes';

import { SignIn } from './src/screens/SignIn';

import { AuthProvider, useAuth } from './src/hooks/auth';

export default function App() {
  SplashScreens.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  const { userStorageLoading } = useAuth();

  if (!fontsLoaded || userStorageLoading) {
    return null;
  }

  SplashScreens.hideAsync();

  return (
    <GestureHandlerRootView style={{flex:1}}>
    <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content"/>
        <AuthProvider>
          <Routes />
        </AuthProvider>
    </ThemeProvider>
    </GestureHandlerRootView>   
  );
}