import  "react-native-gesture-handler"
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DashBoardScreen from './Screen/DashboardScreen'
import InfoScreen from './Screen/infoWithLocationScreen'
import MastheadScreen from './Screen/MastheadScreen'
import HomeScreen  from './Screen/HomeScreen'
import MapScreen from './Screen/MapScreen'
import WelcomeScreen from './Screen/WelcomeScreen'
import CalculateTheRisk from './Screen/CalculateTheRiskScreen'
import AirQuality from './Screen/infoScreen/AirQualityScreen'
import GreenHouse from './Screen/infoScreen/GreenHouseScreen'
import Population from './Screen/infoScreen/PopulationScreen'
import Calculation from './Screen/infoScreen/CalculationScreen'

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerStyle: {backgroundColor: "#ccc"},
  headerTitleStyle: {color: "#000"},
  headerTintColor: "White",
}
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions} initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen}options={{headerShown: false}} />
        <Stack.Screen name="Calculate The Risk" component={CalculateTheRisk}/>
        <Stack.Screen name="AirQuality" component={AirQuality}/>
        <Stack.Screen name="GreenHouse" component={GreenHouse}/>
        <Stack.Screen name="Population" component={Population}/>
        <Stack.Screen name="Calculation" component={Calculation}/>
          <Stack.Screen name="CSniffer" component={HomeScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Dashboard" component={DashBoardScreen} />
          <Stack.Screen name="Info" component={InfoScreen}/>
        <Stack.Screen name="Masthead" component={MastheadScreen}/>
        <Stack.Screen name="Map" component={MapScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    // padding: 20,
   flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  }
});
