import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import Navbar from './Components/Navbar';
import MenuList from './Components/MenuList';
import CloudButton from './Components/CloudButton';

export default function App() {
  return (
    <NativeBaseProvider>
      <ScrollView>
    <View style={styles.container}>
      <Navbar />
      <MenuList />
    <CloudButton />
    </View>
    </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:70,
    height:"100%"
  },
});
