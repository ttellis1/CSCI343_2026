import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <>
       <StatusBar style="auto" />
       <SafeAreaView style={styles.root}>
         <view style={styles.imageContainer}>
          <image
            style={styles.image}
            source={require("./assets/images/Profile.jpg ")} 
          /> 
         </view>
       </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
