import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Product from '../../screens/tabs/Product'

const Stack = createNativeStackNavigator()

const ProductStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  )
}

export default ProductStack