import React, { useState, useContext } from 'react'
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native'

import { AuthContext } from '../context/AuthContext'

const Login = ({navigation}:any) => {

  // create state variables for each input
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // context
  const { login } : any = useContext(AuthContext)

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View style={styles.container}>
        <View style={styles.wrapper}>

            <View style={{alignItems: 'center', marginBottom: 30}}>
                <Image source={require('../assets/images/ghbloog.png')} 
                style={{width: 100, height: 100}} />
            </View>

            <TextInput
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.nativeEvent.text)}
            placeholder="Email"
            />

            <TextInput
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.nativeEvent.text)}
            placeholder="Password"
            secureTextEntry
            />

            <Button
            title="Login"
            onPress={() => {
                login(email, password)
                // navigation.navigate('Home')
            }}
            />

            <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'center'}}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.link}>Register</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: 'blue',
  },
});

export default Login