import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

const CarPage = ({route}) => {
    const { car } = route.params;
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={{backgroundColor: 'white'}}>
            <Image source={{
                        uri: car.image,
                    }} style={{width: "90%", height: 400, marginHorizontal: 'auto', marginVertical: 20, borderRadius: 30}}/>
            <Text style={{marginHorizontal: 'auto', fontSize: 36}}>{car.name}</Text>
            <Text style={{marginLeft: '5%', fontSize: 24}}>${car.price}/min</Text>
            <Text style={{marginHorizontal: '5%'}}>
                {car.description}
            </Text>
            <TouchableOpacity style={{ backgroundColor: '#DC4433', padding: 24, borderRadius: 15, marginTop: 10, marginHorizontal: '5%' }}>
                <Text style={{ marginHorizontal: 'auto' }}>Начать аренду</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default CarPage