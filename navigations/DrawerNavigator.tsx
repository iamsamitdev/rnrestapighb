import * as React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome'
import Location from '../screens/drawers/Location'
import Rewards from '../screens/drawers/Rewards'
import BottomTabNavigator from './BottomTabNavigator'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="BottomNav" component={BottomTabNavigator} />
            {/* <Drawer.Screen name="Loacation" component={Location} /> */}
            {/* <Drawer.Screen name="Rewards" component={Rewards} /> */}
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
