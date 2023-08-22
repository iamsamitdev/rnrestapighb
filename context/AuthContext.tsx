import axios from "axios"
import React, {createContext, ReactNode, useEffect, useState} from 'react'
import { BASE_URL } from '../config/config'
import { useNavigation } from '@react-navigation/native'
import { Alert } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'

// Create Types
interface AuthContextType {
    register: (firstName: string, lastName: string, email: string, password: string) => void,
    login: (email: string, password: string) => void,
}

interface AuthProviderProps {
    children: ReactNode,
}

// Create Context Object
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children  }) => {

    // Navigation
    const navigation: any = useNavigation()

    // Register
    const register = (firstName: string, lastName: string, email: string, password: string) => {

        axios.post(`${BASE_URL}auth/register`, {
            "firstname":firstName,
            "lastname":lastName,
            "email":email,
            "password":password
        }).then((response) => {
            // console.log(response.data)
            if(response.data.status === "ok") {
                navigation.navigate('Login')
            }else {
                Alert.alert("Error", response.data.message)
            }
        }).catch((error) => {
            console.log(error)
        })
    }
    
    // Login
    const login = (email: string, password: string) => {

        axios.post(`${BASE_URL}auth/login`, {
            "email":email,
            "password":password
        }).then((response) => {
            // console.log(response.data.status)
            if(response.data.status === "ok") {
                // keep user logged in
                AsyncStorage.setItem('token', response.data.token)
                AsyncStorage.setItem('user', JSON.stringify(response.data.user))
                navigation.navigate('Home')
            }else {
                Alert.alert("Error", response.data.message)
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <AuthContext.Provider value={{ register, login }}>
            {children}
        </AuthContext.Provider>
    )
}

