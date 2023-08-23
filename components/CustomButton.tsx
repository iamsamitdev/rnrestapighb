// rnfe
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({title, onPress}: any) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{ title }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#db0e9a',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
})

export default CustomButton