import React, {useState} from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import { Card } from 'react-native-elements';
import ModalPicker from '../components/ModalPicker'
const infoWithLocationScreen = () => {
  const [chooseData, setChooseData] = useState('Select Item');
  const [countryData, setCountryData] = useState([
    {
      "updated": 1633158055961,
      "country": "Afghanistan",
      "countryInfo": {
          "_id": 4,
          "iso2": "AF",
          "iso3": "AFG",
          "lat": 33,
          "long": 65,
          "flag": "https://disease.sh/assets/img/flags/af.png"
      },
      "cases": 155239,
      "todayCases": 0,
      "deaths": 7211,
      "todayDeaths": 0,
      "recovered": 125021,
      "todayRecovered": 0,
      "active": 23007,
      "critical": 1124,
      "casesPerOneMillion": 3879,
      "deathsPerOneMillion": 180,
      "tests": 761015,
      "testsPerOneMillion": 19016,
      "population": 40020361,
      "continent": "Asia",
      "oneCasePerPeople": 258,
      "oneDeathPerPeople": 5550,
      "oneTestPerPeople": 53,
      "activePerOneMillion": 574.88,
      "recoveredPerOneMillion": 3123.93,
      "criticalPerOneMillion": 28.09
  },
  ])
  const [isModalVisible, setIsModalVisible] = useState(false);
  const changeModalVisibility = (bool) => {
    setIsModalVisible(bool)
  }

  const setCountryInformation = (countryInformation) => {
      setCountryData(countryInformation);
  }
const setData = (option) => {
  setChooseData(option)
}
console.log(countryData)

// const onCountryChange = async (reqCountry) => {
  // const url = `https://disease.sh/v3/covid-19/countries/${reqCountry}`
  // await fetch(url)
  // .then(res => res.json())
  // .then(data => {
    // setCountryInfo(data)
  // })
// }
return (
    <ImageBackground
    source={require("../src/images/back.png")}
    style={{ width: "100%", height: "100%" }}
    >
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={() => changeModalVisibility(true)}>
            <Text style={styles.text}>{chooseData}</Text>
      </TouchableOpacity>
      <Modal transparent={true} animationType="fade" visible={isModalVisible} nRequestClose={() => changeModalVisibility(false)}>
        <ModalPicker changeModalVisibility={changeModalVisibility} setData={setData} setCountryInformation={setCountryInformation}/>
      </Modal>
{/* 
{countryData.map(pureData => (
      <Card>
      <Card.Title>{pureData.country}</Card.Title>
      <Card.Divider />
      <Card.Title>Total Cases  : {pureData.cases}</Card.Title>
      <Card.Divider />
      <Card.Title>Total Recovered : {pureData.recovered}</Card.Title>
      <Card.Divider />
      <Card.Title>Total Death today : {!pureData.deaths ? 0 : pureData.deaths}</Card.Title>
      <Card.Divider />
      <Card.Title>Type of mask to wear : {pureData.cases > 10000 ? "Strong" : "Weak"}</Card.Title>
      <Card.Divider />
    </Card>
))} */}
  
    </SafeAreaView>
    </ImageBackground>
  )
}

export default infoWithLocationScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableOpacity: {
    backgroundColor: "white",
    alignSelf: "stretch",
    paddingHorizontal: 40,
    paddingVertical: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  text: {
    fontSize: 20
  }

})
