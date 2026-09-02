import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("./assets/images/Profile.jpg")} 
            />
          </View>
          <Text style={styles.name}>Timmoy Ellis</Text>
          <Text style={styles.title}>Information Technology Student</Text>

          <View style={styles.infoContainer}>
            <Text
              style={styles.linkText}
              onPress={() => Linking.openURL('tel:+1(843)2314139')}
            >
              Phone: +1 (843) 231-4139
            </Text>
              
            <Text
              style={styles.linkText}
              onPress={() => Linking.openURL('mailto:ttellis@coastal.edu')}
            >
              Email: ttellis@coastal.edu
            </Text>

            <Text 
              style={styles.linkText}
              onPress={() => Linking.openURL('https://github.com/ttellis1/CSCI343_2026.git')}
            >
              GitHub: https://github.com/ttellis1/CSCI343_2026.git
            </Text>
          </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0ae72f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    padding: 20,
    alignItems: 'center',
  },
  imageContainer: {
    width: 125,
    height: 125,
    borderRadius: 52,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: '#d3430a',
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: 'center',
  },
  linkText: {
    color: '#1eff62',
    textDecorationLine: 'underline',
    marginBottom: 10,
  }, 
});
