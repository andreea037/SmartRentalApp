import 'react-native-gesture-handler'; // Gesture handler necesar pentru navigare
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Pentru iconuri

// Creăm componentele pentru ferestrele din drawer
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

// Noua componentă pentru fereastra de setări
const SetariScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Setări</Text>
  </SafeAreaView>
);

// Tipuri pentru navigare
type RootDrawerParamList = {
  Home: undefined;
  Inchiriaza: undefined;
  Recicleaza: undefined;
  Setari: undefined;
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

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon name="menu" size={30} color="black" style={{ marginLeft: 15 }} />
            </TouchableOpacity>
          ),
        })}
      >
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Meniu' }} />
        <Drawer.Screen name="Inchiriaza" component={InchiriazaScreen} />
        <Drawer.Screen name="Recicleaza" component={ReciclezaScreen} />
        <Drawer.Screen name="Setari" component={SetariScreen} />
      </Drawer.Navigator>
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
