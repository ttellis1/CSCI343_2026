import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import Colors from '../constants/Colors';
import Title from '../components/Title';

export default function HomeScreen({ onNavigateToMenu }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image 
        source={require('../assets/restaurant.jpg')} 
        style={styles.restaurantImage} 
      />
      
      <Title text="The Gourmet Bistro" />

      <View style={styles.detailsContainer}>
        <TouchableOpacity onPress={() => Linking.openURL('tel:5551234567')}>
          <Text style={styles.linkText}>📞 Phone: (555) 123-4567</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://maps.google.com/?q=123+Food+Street')}>
          <Text style={styles.linkText}>📍 Address: 123 Food Street, Culinary City</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://www.example.com')}>
          <Text style={styles.linkText}>🌐 Website: www.gourmetbistro.com</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={onNavigateToMenu}>
        <Text style={styles.buttonText}>View Menu</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  restaurantImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderRadius: 12,
    marginBottom: 15,
  },
  detailsContainer: {
    width: '100%',
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  linkText: {
    fontSize: 16,
    color: Colors.primary,
    marginVertical: 8,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});