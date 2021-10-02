import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
const ModalPicker = (props) => {
  const [countries, setCountries] = useState([]);
  const [countryInfo, setCountryInfo] = useState({})
  // Passing the option to the infowithlocationScreen to set the Data
  const onPressItem = (option) => {
    props.changeModalVisibility(false);
    props.setData(option)
    props.setCountryInformation(countryInfo)
  }

  // Fetching countries and putting them in a state
  useEffect(() => {
    const fetchCountries = async () => {
        await fetch("https://disease.sh/v3/covid-19/countries")
        .then(res => res.json())
        .then(data => {
          const countriesData = data.map(country => (
            {
              name: country.country,
              value: country.countryInfo.iso2
            }
          ));
          setCountries(countriesData)
        })
      }
      fetchCountries();
  },[])
// Set Data for every individual country

const onCountryChange = async (reqCountry) => {
  const url = `https://disease.sh/v3/covid-19/countries/${reqCountry}`
  await fetch(url)
  .then(res => res.json())
  .then(data => {
    setCountryInfo(data)
  })
}

  // Looping through the state and returning the name in a touchable opacity
  const option = countries.map((country, index) => 
    (
      <TouchableOpacity
      style={styles.option}
      key={index}
      onPress={() => {
        onPressItem(country.name);
         onCountryChange(country.value);
        }}
      >
        <Text style={styles.text}>
          {country.name}
        </Text>
      </TouchableOpacity>
    )
  )

  // The actual Modal
  return (
    <TouchableOpacity 
    style={styles.container}
    onPress={()=> props.changeModalVisibility(false)}>
      <View style={styles.modal}>
            <ScrollView>
              {option}
            </ScrollView>
      </View>
    </TouchableOpacity>
  )
}

export default ModalPicker

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal:{
    backgroundColor: "white",
    borderRadius: 10,
    width: (Dimensions.get('window').width) - 20,
    height: (Dimensions.get('window').height)/2,
  },
  option: {
    alignItems: 'flex-start'
  },
  text:{
    margin: 20,
    fontSize: 20,
    fontWeight: "bold"
  }
})
