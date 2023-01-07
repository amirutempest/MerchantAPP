import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native';
import Login from './src/screen/Login';
import ProdukMenu from './src/screen/ProdukMenu';
import Register from './src/screen/Register';
import SplashScreen from './src/screen/SplashScreen';
import PesananMenu from './src/screen/PesananMenu';
import ProfilMenu from './src/screen/ProfilMenu';
import KelolaKategori from './src/screen/KelolaKategori';
import KelolaProduk from './src/screen/KelolaProduk';
import KatalogProduk from './src/screen/KatalogProduk';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#EA4335'
          }
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="LoginScreen" component={Login} options={{
          headerShown: false
        }} />
        <Stack.Screen name="RegisterScreen" component={Register} options={{
          headerShown: false
        }} />
        <Stack.Screen name="ProdukMenu" component={BottomNav} options={{
          headerShown: false
        }} />
        <Stack.Screen name="KelolaKategori" component={KelolaKategori} options={{
          title: "Tambah Kategori",
          headerTintColor: 'white',
          headerTitleAlign: 'center'
        }} />
        <Stack.Screen name="KelolaProduk" component={KelolaProduk} options={{
          title: "Tambah Produk",
          headerTintColor: 'white',
          headerTitleAlign: 'center'
        }} />
        <Stack.Screen name="KatalogProduk" component={KatalogProduk} options={{
          title: "Katalog Produk",
          headerTintColor: 'white',
          headerTitleAlign: 'center'
        }} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#EA4335',
        tabBarInactiveTintColor: '#d8d4d4',
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          paddingBottom: 10
        },
        tabBarStyle: {
          height: 70,
          elevation: 5,
          paddingTop: 10
        }
      }}
    >
      <Tab.Screen
        name="Produk" component={ProdukMenu} options={{
          headerShown: false,
          tabBarIcon: () => <Image style={{ width: 30, height: 30 }} source={require('./src/asset/icon/produkmenu.png')} />
        }}
      />
      <Tab.Screen
        name="Pesanan" component={PesananMenu} options={{
          headerShown: false,
          tabBarIcon: () => <Image style={{ width: 30, height: 30 }} source={require('./src/asset/icon/pesananmenu.png')} />
        }}
      />
      <Tab.Screen
        name="Profil" component={ProfilMenu} options={{
          headerShown: false,
          tabBarIcon: () => <Image style={{ width: 30, height: 30 }} source={require('./src/asset/icon/profilmenu.png')} />
        }}
      />
    </Tab.Navigator>
  )
}