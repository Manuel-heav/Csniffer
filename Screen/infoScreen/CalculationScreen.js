import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-elements'

const CalculationScreen = () => {
  return (
    <View style={styles.container}>
      <Card.Title style={{fontWeight: "bold", fontSize: 30, marginTop: 20, backgroundColor: "gray", color: "white", padding: 20}}>Continent</Card.Title>
      <Card.Divider/>
      <Card.Title>Africa</Card.Title>
      <Card.Divider/>
      <Card.Title>Asia</Card.Title>
      <Card.Divider/>
      <Card.Title>North America</Card.Title>
      <Card.Divider/>
      <Card.Title>South America</Card.Title>
      <Card.Divider/>
      <Card.Title>Australia</Card.Title>
      <Card.Divider/>
    </View>
  )
}

export default CalculationScreen

const styles = StyleSheet.create({})
