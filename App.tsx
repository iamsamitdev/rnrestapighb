import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import About from './screens/About'
import Welcome from './screens/Welcome'
import Login from './screens/Login'
import Register from './screens/Register'
import { AuthProvider } from './context/AuthContext'

// Create a Stack Navigator
const Stack = createNativeStackNavigator()

const App = () => {
  return (
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen name="Welcome" component={Welcome} 
            options={{headerShown:false}} />
            <Stack.Screen name="Login" component={Login} 
            options={{headerShown:false}}/>
            <Stack.Screen name="Register" component={Register}
            options={{headerShown:false}}/>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
          </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
  )
}

export default App