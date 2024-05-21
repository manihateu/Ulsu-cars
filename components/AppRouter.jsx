import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from '../pages/Home';
import AlllCars from '../pages/AlllCars';
import changeCard from '../pages/ChangeCard';
import CarPage from '../pages/CarPage';

const Stack = createNativeStackNavigator();

const AppRouter = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='home' component={Home}/>
            <Stack.Screen name="allCars" component={AlllCars}/>
            <Stack.Screen name="changeCard" component={changeCard}/>
            <Stack.Screen name='carPage' component={CarPage}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter