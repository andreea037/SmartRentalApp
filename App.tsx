import 'react-native-gesture-handler'; // Gesture handler necesar pentru navigare
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Pentru iconuri
import { Alert } from 'react-native';


// Creăm componentele pentru cele două ferestre
const InchiriazaScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Inchiriaza</Text>
  </SafeAreaView>
);


const ReciclezaScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Recicleaza</Text>
  </SafeAreaView>
);

// Tipuri pentru navigare
type RootStackParamList = {
  Home: undefined;
  Inchiriaza: undefined;
  Recicleaza: undefined;
};

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Smart Rental App</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inchiriaza')}>
        <Text style={styles.buttonText}>Inchiriaza</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Recicleaza')}>
        <Text style={styles.buttonText}>Recicleaza</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: 'Meniu',
            headerLeft: () => (
              <TouchableOpacity onPress={() => Alert.alert('Menu button pressed')}>
                <Icon name="menu" size={30} color="black" style={{ marginLeft: 15 }} />
              </TouchableOpacity>
            ),
          }} 
        />
        <Stack.Screen name="Inchiriaza" component={InchiriazaScreen} />
        <Stack.Screen name="Recicleaza" component={ReciclezaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5DEB3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#00008B',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00008B',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  text: {
    fontSize: 24,
    color: '#00008B',
  },
});

export default App;
