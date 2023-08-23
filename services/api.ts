import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { BASE_URL } from '../config/config'

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

// add Bear token to header
axiosInstance.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

// Get All Products
export const getAllProducts = async () => {
    try {
        const response = await axiosInstance.get('products')
        return response.data
    } catch (error) {
        throw error
    }
}