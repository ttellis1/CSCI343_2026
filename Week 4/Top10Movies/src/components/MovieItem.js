import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function MovieItem({ title, rating, poster }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: poster }} style={styles.poster} />
      <View style={styles.infoContainer}>
        <Text style={styles.movieTitle} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.rating}>⭐ {rating}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  poster: {
    width: 90,
    height: 120,
    backgroundColor: '#333',
  },
  infoContainer: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  rating: {
    fontSize: 14,
    color: '#ffc107',
    fontWeight: '600',
  },
});