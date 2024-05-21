import React from 'react'
import { styles } from './home.styles'
import { TouchableOpacity, Image, SafeAreaView, ScrollView, ImageBackground, Dimensions, Text, View } from 'react-native'
import masterCard from '../assets/Group.png'
import dot from '../assets/dot.png'
import back from '../assets/back.png'
import { useNavigation } from '@react-navigation/native'
import { cars } from '../mock-data'
import CustomView from '../components/CusomView'

const Home = () => {
  const navigation = useNavigation()
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={styles.container}>

        {/* first block  */}
        <CustomView style={styles.auto_model}>
          <TouchableOpacity onPress={() => {navigation.navigate('allCars')}}>
             <Text style={{ position: 'absolute', left: 20, top: 20, color: '#9B9B9A' }}>Другая</Text>
          </TouchableOpacity>
          <Image source={{
          uri: cars[0].image,
        }} style={styles.car_logo}></Image>
          <Text style={{ color: 'black', marginHorizontal: 'auto', marginTop: 5, fontSize: 16 }}>{cars[0].name}</Text>
          <Text style={{ color: '#9B9B9A', marginHorizontal: 'auto', marginTop: 5, fontSize: 16 }}>${cars[0].price} / Min</Text>
          <TouchableOpacity onPress={() => {navigation.navigate('carPage', {car: cars[0]})}} style={{ backgroundColor: '#DC4433', padding: 24, borderRadius: 24, marginTop: 10 }}>
            <Text style={{ marginHorizontal: 'auto' }}>Начать аренду</Text>
          </TouchableOpacity>
        </CustomView>

        <View style={styles.auto_model}>
          <Text style={{ color: 'black', marginHorizontal: 'auto', padding: 5, fontSize: 20 }}>Выбери карту</Text>
          <TouchableOpacity onPress={() => {navigation.navigate('changeCard')}} style={{ borderRadius: 40, width: '90%', height: 180, marginHorizontal: 'auto', position: 'relative', backgroundColor: 'black' }}>
            <Image source={masterCard} style={{ position: 'absolute', top: 30, left: 30, width: 44, height: 26 }} />
            <View style={{ backgroundColor: 'black', width: '90%', height: 50, marginHorizontal: 'auto', marginTop: 'auto', marginBottom: 40, display: 'flex', flexDirection: 'row', columnGap: 5, paddingHorizontal: 10, justifyContent: 'center' }}>
              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2].map(el =>
                  <Text style={{ color: 'white', fontSize: 44 }}>.</Text>
                )
              }
            </View>
          </TouchableOpacity>
        </View>

        <ImageBackground resizeMode="cover" source={back} style={{
          width: Dimensions.get('screen').width - 40,
          marginHorizontal: 'auto',
        }} imageStyle={{ borderRadius: 48 }}>

          <View style={{
            width: '100%',
            height: 230,
            backgroundColor: 'transparent',
            position: 'relative'
          }}>
            <TouchableOpacity style={{ position: 'absolute', bottom: 15, right: 15, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
              <View style={{ backgroundColor: '#DC4433', width: 60, height: 60, borderRadius: 15 }}>
                <Text style={{ color: 'white', marginHorizontal: 'auto', marginVertical: 'auto', fontSize: 20 }}>{">"}</Text>
              </View>
            </TouchableOpacity>

            <View style={{ backgroundColor: '#DC4433', width: 20, height: 20, borderRadius: 10, position: 'absolute', top:90, left:100, border: 2}}>

            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  )
}

export default Home
