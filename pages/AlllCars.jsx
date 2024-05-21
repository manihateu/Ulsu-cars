import React from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { styles } from './home.styles'
import { cars } from '../mock-data'
import { useNavigation } from '@react-navigation/native'

const AlllCars = () => {
    const navigation = useNavigation()
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={{backgroundColor: 'white'}}>
        {cars.map(car => 
            <View style={{...styles.auto_model, marginVertical: 10}}>
                <TouchableOpacity onPress={() => {navigation.navigate('carPage', {car: car})}}>
                    <Image source={{
                        uri: car.image,
                    }} style={{width: '100%', height: 300, borderRadius: 30}}></Image>
                    <Text style={{ color: 'black', marginHorizontal: 'auto', marginTop: 5, fontSize: 16 }}>{car.name}</Text>
                    <Text style={{ color: '#9B9B9A', marginHorizontal: 'auto', marginTop: 5, fontSize: 16 }}>${car.price} / Min</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{ backgroundColor: '#DC4433', padding: 24, borderRadius: 24, marginTop: 10 }}>
                    <Text style={{ marginHorizontal: 'auto' }}>Выбрать авто</Text>
                </TouchableOpacity>
            </View>
        )}
        
      </View>
    </ScrollView>
  )
}

export default AlllCars