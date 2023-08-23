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

  const getUser = async () => {
    const user:any = await AsyncStorage.getItem('user')
    setUser(JSON.parse(user))
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize: 30}}>Welcome:</Text>
      <Text style={{fontSize: 20}}>{user.firstname} {user.lastname}</Text>
      <Text style={{fontSize: 20}}>{user.email}</Text>
    </View>
  )
}

export default Home