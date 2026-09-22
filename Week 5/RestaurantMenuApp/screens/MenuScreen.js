import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import Title from '../components/Title';
import MenuItem from '../components/MenuItem';

const MENU_DATA = [
  { id: '1', name: 'Truffle Burger', price: 15.99, image: require('../assets/burger.jpg') },
  { id: '2', name: 'Margherita Pizza', price: 13.50, image: require('../assets/pizza.jpg') },
  { id: '3', name: 'Caesar Salad', price: 10.00, image: require('../assets/salad.jpg') },
  { id: '4', name: 'Garlic Butter Pasta', price: 14.25, image: require('../assets/pasta.jpg') },
  { id: '5', name: 'Chocolate Lava Cake', price: 7.99, image: require('../assets/dessert.jpg') },
];

export default function MenuScreen({ onBackToHome }) {
  return (
    <View style={styles.container}>
      <Title text="Our Menu" />
      
      <FlatList
        data={MENU_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MenuItem 
            name={item.name} 
            price={item.price} 
            image={item.image} 
          />
        )}
      />

      <TouchableOpacity style={styles.backButton} onPress={onBackToHome}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  backButton: {
    backgroundColor: Colors.secondary,
    paddingVertical: 12,
    alignItems: 'center',
    margin: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});