import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Colors from './constants/Colors';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {currentScreen === 'home' ? (
        <HomeScreen onNavigateToMenu={() => setCurrentScreen('menu')} />
      ) : (
        <MenuScreen onBackToHome={() => setCurrentScreen('home')} />
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