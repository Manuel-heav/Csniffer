import React from 'react'
import { ImageBackground, StyleSheet, View,Pressable, Text } from 'react-native'

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground 
    source={require("../src/images/back.png")}
    style={{ width: "100%", height: "100%" }}>
      <View style={styles.Container}>
      <Pressable style={styles.button} onPress={() => {navigation.navigate('CSniffer')}}>
                <Text style={styles.text}>WELCOME</Text>
        </Pressable>
        </View>
    </ImageBackground>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  Container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'gray',
    fontSize: 20
  },

})
