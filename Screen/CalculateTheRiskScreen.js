import React, {useEffect,useState} from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import { WebView } from 'react-native-webview';

const url = "https://eodashboard.org/iframe?poi=W7-FB"
const url2 = "https://www.google.com/"
const Map = () => {
  const [countries,setCountries] = useState([]);
  const [gps, setGps] = useState([])

  return (
    <ScrollView >
      <View style={styles.container}>
     {/* <MapView  style={styles.map} initialRegion={{
      latitude: 9.033140,
      longitude: 38.750080,
      latitudeDelta: 155,
      longitudeDelta: 90,
    }}>
      </MapView>    */}
      <View >
         {/* <WebView source={{uri: url2}}
          onLoad={console.log('Loaded')}
        /> */}
            {/* <WebView
            style={{width: 600, height: 500}}
    source={{uri: 'https://eodashboard.org/iframe?poi=W6-NASAPopulation'}}
/> 
<Text style={styles.text}>
The Covid-19 is a highly contagious disease which becomes a serious global health concern. The residents living in areas with high population density, such as big or metropolitan cities, have a higher probability to come into close contact with others and consequently any contagious disease is expected to spread rapidly in dense areas. However, recently, after analyzing Covid-19 cases in the USA researchers at the Johns Hopkins Bloomberg School of Public Health, London school of economics, and IZA-Institute of Labour Economics conclude that the spread of Covid-19 is not linked with population density. Here, we investigate the influence of population density on Covid-19 spread and related mortality in the context of India. After a detailed correlation and regression analysis of infection and mortality rates due to Covid-19 at the district level, we find moderate association between Covid-19 spread and population density.
</Text>
            <WebView
            style={{width: 600, height: 500}}
    source={{uri: 'https://eodashboard.org/iframe?poi=W1-N1'}}
/> 

<Text style={styles.text}>
Air pollution may increase COVID-19 morbidity and mortality through its action on associated comorbidities. Experimental studies conducted for other respiratory viruses support the hypothesis that air pollution exposure maybfacilitate the occurrence of COVID-19 infection through a decrease in immune response. In vitro, animal and human studies have reported that exposure to air pollutants leads to increased mucosal permeability and oxidative stress, decreased antioxidants and surfactant antimicrobial proteins, as well as impaired macrophage phagocytosis. In addition, SARS-CoV-2 entry in host cells through ACE 2 requires the cleavage of the viral spike protein by proteases, and such protease activity may be increased by air pollution, as is documented for several other respiratory viruses.
</Text>

<WebView
            style={{width: 600, height: 500}}
    source={{uri: 'https://eodashboard.org/iframe?poi=W4-N2'}}
/>  */}

<Pressable style={styles.button} onPress={() => {navigation.navigate('Calculate The Risk')}}>
                <Text style={styles.text}>COVID-19, Calculate The Risk</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {navigation.navigate('Dashboard')}}>
                <Text style={styles.text}>Dashboard</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {navigation.navigate('Info')}}>
                <Text style={styles.text}>Info With Location</Text>
        </Pressable>
      </View>
</View>
    </ScrollView>
  )
}


export default Map

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/1.5  
  },
  text:{
    margin: 20,
    fontSize: 20
  }
})
