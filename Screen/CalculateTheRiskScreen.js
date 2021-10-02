import React from 'react'
import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native'

const CalculateTheRisk = ({navigation}) => {
  return (
    <ImageBackground
    source={require("../src/images/back.png")}
        style={{ width: "100%", height: "100%" }}>
      <View style={styles.container}>
        <Pressable style={styles.button} onPress={() => {navigation.navigate('AirQuality')}}>
                <Text style={styles.text}>Air Quality Map</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {navigation.navigate('Population')}}>
                <Text style={styles.text}>Population Map</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {navigation.navigate('GreenHouse')}}>
                <Text style={styles.text}>GreenHouse Map</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {navigation.navigate('Calculation')}}>
                <Text style={styles.text}>Calculation</Text>
        </Pressable>
  </View>
  </ImageBackground>
  )
}


export default CalculateTheRisk

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    margin: 10,
    // width: 400,
    width: 300,
    backgroundColor: 'gray',
    fontFamily: 'Inter_900Black'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})
