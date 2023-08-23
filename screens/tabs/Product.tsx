import { Text, View, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../../services/api'
import { BASE_URL_IMAGE } from '../../config/config'

const Product = () => {

  // สร้างตัวแปรไว้เก็บข้อมูลที่ได้จาก API
  const [products, setProducts] = useState([])

  // สร้างฟังก์ชันเพื่อเรียกข้อมูลจาก API
  const fetchProducts = async () => {
    try {
      const result = await getAllProducts()
      setProducts(result)
    } catch (error) {
      console.log(error)
    }
  }

  // สั่งให้ฟังก์ชันทำงานเมื่อ Component ถูกโหลด
  useEffect(() => {
    fetchProducts()
    // console.log(products)
  }, [])

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View style={{
              flexDirection: 'row', 
              alignItems:'center', 
              margin: 10,
              padding: 10, 
              backgroundColor: '#fff',
              borderRadius: 10,
            }}>
            <Image source={{uri: `${BASE_URL_IMAGE}${item.image}`}} 
              style={{width: 80, height: 80}} />
            <View style={{ marginLeft: 10, flexShrink: 1 }}>
              <Text style={{ flexWrap: 'wrap', fontWeight: 'bold', fontSize: 18}}>{item.name}</Text>
              <Text>Barcode: {item.barcode}</Text>
              <Text>Price: {item.price} THB</Text>
            </View>
          </View>
        )}
        />
    </View>
  )
}

export default Product