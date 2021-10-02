import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const CountryData = (props) => {
  return (
    <ImageBackground
    source={require("../src/images/back.png")}
    style={{ width: "100%", height: "100%" }}
    >
      <ScrollView>

      </ScrollView>
    </ImageBackground>
  )
}

export default CountryData

const styles = StyleSheet.create({})
