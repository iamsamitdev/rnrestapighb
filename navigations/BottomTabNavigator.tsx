import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import HomeStack from './stack-navigators/HomeStack'
import ProductStack from './stack-navigators/ProductStack'
import ProfileStack from './stack-navigators/ProfileStack'
import AuthNavigator from './AuthNavigator'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="HomeTab" 
      component={HomeStack} 
      options={{
        title: 'Home',
        tabBarLabel: 'Home',
        tabBarIcon: () => (
          <Icon name="home" color={'teal'} size={24} />
        ),
      }}
      />
      <Tab.Screen 
        name="ProductTab" 
        component={ProductStack} 
        options={{
            title: 'Product',
            tabBarLabel: 'Product',
            tabBarIcon: () => (
              <Icon name="database" color={'teal'} size={24} />
            ),
        }}
        />
      <Tab.Screen 
        name="ProfileTab" 
        component={ProfileStack} 
        options={{
            title: 'Profile',
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
              <Icon name="user" color={'teal'} size={24} />
            ),
        }}
        />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator