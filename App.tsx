import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'


// BottomTabNavigator Navigator
import BottomTabNavigator from './navigations/BottomTabNavigator'

// Auth Navigator
import AuthNavigator from './navigations/AuthNavigator'

const App = () => {

  // Read token from AsyncStorage
  const [token, setToken] = useState()
  const getToken = async () => {
    const token:any = await AsyncStorage.getItem('token')
    setToken(token)
  }
  getToken()

  return (
    <NavigationContainer>
      {
        token == null ?
        <AuthNavigator />
        :
        <BottomTabNavigator />
      }
    </NavigationContainer>
  )
}

export default App