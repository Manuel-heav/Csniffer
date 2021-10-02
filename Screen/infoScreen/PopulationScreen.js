import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview';

const PopulationScreen = () => {
  return (
    <View>
      <WebView
            style={{width: 600, height: 500}}
    source={{uri: 'https://eodashboard.org/iframe?poi=W6-NASAPopulation'}}
/> 
<Text style={styles.text}>
The Covid-19 is a highly contagious disease which becomes a serious global health concern. The residents living in areas with high population density, such as big or metropolitan cities, have a higher probability to come into close contact with others and consequently any contagious disease is expected to spread rapidly in dense areas. However, recently, after analyzing Covid-19 cases in the USA researchers at the Johns Hopkins Bloomberg School of Public Health, London school of economics, and IZA-Institute of Labour Economics conclude that the spread of Covid-19 is not linked with population density. Here, we investigate the influence of population density on Covid-19 spread and related mortality in the context of India. After a detailed correlation and regression analysis of infection and mortality rates due to Covid-19 at the district level, we find moderate association between Covid-19 spread and population density.
</Text>
    </View>
  )
}

export default PopulationScreen

const styles = StyleSheet.create({
  text:{
    margin: 20,
    fontSize: 20
  }
})
