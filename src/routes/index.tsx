/* eslint-disable */
import React, { useEffect, useState } from "react"
import { NavigationContainer } from '@react-navigation/native'

// Pages
import AuthNavigator from './Navigators/Auth'
import AppNavigator from './Navigators/App'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAuthentication } from "@contexts/authentication/authentication.context"
import { useUser } from "@contexts/user/user.context"

// Contexts
const Routes: React.FC<any> = () => {
  const {verifyAuth, auth} = useAuthentication();

  useEffect(() => {
    verifyAuth()
  }, []);

	return (
    <SafeAreaProvider>
      <NavigationContainer>
        {auth.userIsAuthenticated ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
	)
}

export default Routes
