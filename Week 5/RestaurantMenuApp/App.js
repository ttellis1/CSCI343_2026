import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Colors from './constants/Colors';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';

const MENU_DATA = [
  { id: '1', name: 'Truffle Burger', price: 15.99, image: require('./assets/burger.jpg') },
  { id: '2', name: 'Margherita Pizza', price: 13.50, image: require('./assets/pizza.jpg') },
  { id: '3', name: 'Caesar Salad', price: 10.00, image: require('./assets/salad.jpg') },
  { id: '4', name: 'Garlic Butter Pasta', price: 14.25, image: require('./assets/pasta.jpg') },
  { id: '5', name: 'Chocolate Lava Cake', price: 7.99, image: require('./assets/dessert.jpg') },
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {currentScreen === 'home' ? (
        <HomeScreen onNavigateToMenu={() => setCurrentScreen('menu')} />
      ) : (
        <MenuScreen 
          menuData={MENU_DATA} 
          onBackToHome={() => setCurrentScreen('home')} 
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 40,
  },
});