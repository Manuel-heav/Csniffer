import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview';

const AirQualityScreen = () => {
  return (
    <View style={styles.container}>
       <WebView
            style={{width: Dimensions.get('window').width/2, height: Dimensions.get('window').height/2}}
    source={{uri: 'https://eodashboard.org/iframe?poi=W1-N1'}}
/>  

<Text style={styles.text}>
Air pollution may increase COVID-19 morbidity and mortality through its action on associated comorbidities. Experimental studies conducted for other respiratory viruses support the hypothesis that air pollution exposure may facilitate the occurrence of COVID-19 infection through a decrease in immune response. In vitro, animal and human studies have reported that exposure to air pollutants leads to increased mucosal permeability and oxidative stress, decreased antioxidants and surfactant antimicrobial proteins, as well as impaired macrophage phagocytosis. In addition, SARS-CoV-2 entry in host cells through ACE 2 requires the cleavage of the viral spike protein by proteases, and such protease activity may be increased by air pollution, as is documented for several other respiratory viruses.
</Text>

    </View>
  )
}

export default AirQualityScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text:{
    margin: 20,
    fontSize: 20
  }
})
