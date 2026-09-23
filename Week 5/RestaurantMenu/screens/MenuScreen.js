import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import Title from '../components/Title';
import MenuItem from '../components/MenuItem';

export default function MenuScreen({ menuData, onBackToHome }) {
  return (
    <View style={styles.container}>
      <Title text="Our Menu" />
      
      <FlatList
        data={menuData}
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