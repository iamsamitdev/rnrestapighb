import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import Welcome from './../screens/Welcome'
import Login from './../screens/Login'
import Register from './../screens/Register'
import { AuthProvider } from './../context/AuthContext'
import BottomTabNavigator from './BottomTabNavigator'

// Create a Stack Navigator
const Stack = createNativeStackNavigator()

const AuthNavigator = () => {

  // Read token from AsyncStorage
  const [token, setToken] = useState()
  const getToken = async () => {
    const token:any = await AsyncStorage.getItem('token')
    setToken(token)
  }
  getToken()
  // console.log(token)

  return (
    <AuthProvider>
        <Stack.Navigator>
            {
             token == null ? <Stack.Screen name="Welcome" component={Welcome} /> : null
            }
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen 
                name="BottomTabNav" 
                component={BottomTabNavigator}
                options={{
                    headerShown: false
                }} 
            />
        </Stack.Navigator>
    </AuthProvider>
  )
}

export default AuthNavigator