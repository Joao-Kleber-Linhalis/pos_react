import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MovieList from './src/MovieList';
import MovieDetails from './src/MovieDetails';

const Stack = createStackNavigator();
//const Drawer = createDrawerNavigator();
//const Tab = createBottomTabNavigator();


function MyApp(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={MovieList} name='Lista de Filmes'/>
        <Stack.Screen component={MovieDetails} name='Detalhes do Filme'/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyApp;
