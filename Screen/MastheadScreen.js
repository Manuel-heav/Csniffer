import React from 'react'
import { ImageBackground, StyleSheet,  View } from 'react-native'
import {Text} from 'react-native-elements'
import { Card } from 'react-native-elements'
const MastheadScreen = () => {
  return (
    <ImageBackground
    source={require("../src/images/back.png")}
        style={{ width: "100%", height: "100%" }} >
      <Card style={styles.container}>
        <Card.Title style={{fontSize: 20}}>DEVELOPED BY:</Card.Title>
        <Card.Title>Amanuael Kebede</Card.Title>
        <Card.Title>Brook Alemayehu</Card.Title>
        <Card.Title>Eyuel Arega</Card.Title>
        <Card.Title>Natnael Belete</Card.Title>
        <Card.Title>Yohannes Hailemariam</Card.Title>
      </Card>
    </ImageBackground>
  )
}

export default MastheadScreen

const styles = StyleSheet.create({
})
