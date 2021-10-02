import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

const CalculateTheRisk = ({navigation}) => {
  return (
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
  </View>
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
    width: 400,
    backgroundColor: 'white',
    fontFamily: 'Inter_900Black'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'gray',
  },
})
