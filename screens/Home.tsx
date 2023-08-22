import { View, Text, Button } from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = ({navigation}:any) => {

  interface User {
    firstname: string,
    lastname: string,
    email: string,
  }

  const [user, setUser] = useState({} as User)
  const [token, setToken] = useState('')

  const getUser = async () => {
    const user:any = await AsyncStorage.getItem('user')
    setUser(JSON.parse(user))
  }

  const getToken = async () => {
    const token:any = await AsyncStorage.getItem('token')
    setToken(token)
  }
  
  useEffect(() => {
    getUser(),
    getToken()
  }, [])

  return (
    <View>
      <Text>Welcome: {user.firstname}</Text>
      <Text>Token: {token}</Text>
      <Button title="Go to About" 
        onPress={() => navigation.navigate('About')} 
      />
    </View>
  )
}

export default Home