import { View, Text, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile = ({navigation}:any) => {

  return (
    <View>
      <Text style={{fontSize: 20, textAlign: 'center'}}>Samit Koyom</Text>
      <Button title="Logout" onPress={() => {
        AsyncStorage.removeItem('token')
        AsyncStorage.removeItem('user')
        navigation.navigate('Login')
      }} />
    </View>
  )
}

export default Profile