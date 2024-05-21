import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import masterCard from '../assets/Group.png'

const ChangeCard = () => {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={{backgroundColor: 'white'}}>
        <TouchableOpacity style={{ borderRadius: 40, width: '90%', height: 180, marginHorizontal: 'auto', position: 'relative', backgroundColor: 'black', marginVertical: 10 }}>
            <Image source={masterCard} style={{ position: 'absolute', top: 30, left: 30, width: 44, height: 26 }} />
            <View style={{ backgroundColor: 'black', width: '90%', height: 50, marginHorizontal: 'auto', marginTop: 'auto', marginBottom: 40, display: 'flex', flexDirection: 'row', columnGap: 5, paddingHorizontal: 10, justifyContent: 'center' }}>
              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2].map(el =>
                    <View>{
                        el % 4 == 0 ?
                            <Text style={{ color: 'white', fontSize: 44, marginRight: 10 }}>.</Text>
                        :
                            <Text style={{ color: 'white', fontSize: 44 }}>.</Text>
                    }</View>
                    
                )
              }
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ borderRadius: 40, width: '90%', height: 180, marginHorizontal: 'auto', position: 'relative', backgroundColor: 'black', marginVertical: 10 }}>
            <Image source={masterCard} style={{ position: 'absolute', top: 30, left: 30, width: 44, height: 26 }} />
            <View style={{ backgroundColor: 'black', width: '90%', height: 50, marginHorizontal: 'auto', marginTop: 'auto', marginBottom: 40, display: 'flex', flexDirection: 'row', columnGap: 5, paddingHorizontal: 10, justifyContent: 'center' }}>
              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2].map(el =>
                    <View>{
                        el % 4 == 0 ?
                            <Text style={{ color: 'white', fontSize: 44, marginRight: 10 }}>.</Text>
                        :
                            <Text style={{ color: 'white', fontSize: 44 }}>.</Text>
                    }</View>
                    
                )
              }
            </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default ChangeCard