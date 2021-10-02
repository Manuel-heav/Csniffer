import React, {useEffect,useState} from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import MapView, { Callout, Circle, Marker } from 'react-native-maps'
const Map = () => {
  const [countries,setCountries] = useState([]);
  const [gps, setGps] = useState([])

  useEffect(()=> {
    const fetchedData = async  () =>  {
    await fetch("https://disease.sh/v3/covid-19/countries")
   .then(res => res.json())
   .then(data => {
    const exactLocation = data.map(locations => (
      {
        cases: locations.cases,
        latitude: locations.countryInfo.lat,
        longitude: locations.countryInfo.long
      }
    ))
    setGps(exactLocation)
  })
}
fetchedData()
 },[])
 console.log(gps)
  return (
    <View style={styles.container}>
     <MapView  style={styles.map} initialRegion={{
      latitude: 9.033140,
      longitude: 38.750080,
      latitudeDelta: 155,
      longitudeDelta: 90,
    }}>
       {
        gps.map(singleLocation => (
          <Circle center={{ 
            latitude: singleLocation.latitude,
            longitude: singleLocation.longitude
          }} 
          radius={Math.sqrt(singleLocation.cases) * 200} 
          fillColor="#fb4443" 
          key={Math.random() * 10000}/>
        ))
      } 
      {/* <Circle center={{ latitude: 9.033140,
      // longitude: 38.750080,}} radius={100000} fillColor="red" /> */}
      </MapView>    
    </View>
  )
}

//  Math.sqrt(country.cases)

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
    height: Dimensions.get('window').height  
  }
})
