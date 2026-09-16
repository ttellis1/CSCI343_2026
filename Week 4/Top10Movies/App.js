import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MOVIES_DATA } from './src/data/moviesData';
import MovieItem from './src/components/MovieItem';

export default function App() {
  const renderItem = ({ item }) => (
    <MovieItem 
      title={item.title} 
      rating={item.rating} 
      poster={item.poster} 
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      
      {/* App Header Title */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Top 10 Movies</Text>
      </View>

      {/* FlatList to display movies */}
      <FlatList
        data={MOVIES_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
    backgroundColor: '#181818',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#e50914',
    letterSpacing: 0.5,
  },
  listContainer: {
    padding: 16,
  },
});