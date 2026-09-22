import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default function Title({ text }) {
  return <Text style={styles.title}>{text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginVertical: 10,
    // fontFamily: 'YourCustomFontName', // Uncomment once custom font is loaded
  },
});