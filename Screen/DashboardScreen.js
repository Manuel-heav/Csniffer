import React, {useState,useEffect}from 'react';
import {  StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Card } from 'react-native-elements'
import { ScrollView } from 'react-native';

const DashboardScreen = () => {

  const [cases, setCases] = useState([]);
  const [death, setDeath] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [affectedCountries, setAffectedCountries] = useState([]);
  // Per Millions
  const [activePerOneMillion, setActivePerOneMillion] = useState([]);
  const [casesPerOneMillion, setCasesPerOneMillion] = useState([]);
  const [criticalPerOneMillion, setCriticalPerOneMillion] = useState([]);
  const [deathPerOneMillion, setDeathPerOneMillion] = useState([]);
  const [recoveredPerOneMillion, setRecoveredPerOneMillion] = useState([]);
  const [testsPerOneMillion, setTestsPerOneMillion] = useState([]);
  
  const [population, setPopulation] = useState([]);
  const [critical, setCritical] = useState([]);
  const [tests, setTests] = useState([]);
// Today cases
const [todayCases, setTodayCases] = useState([]);
const [todayRecovered, setTodayRecovered] = useState([]);
const [todayDeath, setTodayDeath] = useState([]);



  useEffect(()=> {
     fetch("https://disease.sh/v3/covid-19/all")
    .then(res => res.json())
    .then(data => {
      setCases(data.cases)
      setDeath(data.deaths)
      setRecovered(data.recovered)
      setAffectedCountries(data.affectedCountries)
      setActivePerOneMillion(data.activePerOneMillion)
      setCasesPerOneMillion(data.casesPerOneMillion)
      setCriticalPerOneMillion(data.criticalPerOneMillion)
      setDeathPerOneMillion(data.deathPerOneMillion)
      setRecoveredPerOneMillion(data.recoveredPerOneMillion)
      setTestsPerOneMillion(data.testsPerOneMillion)
      setPopulation(data.population)
      setCritical(data.critical)
      setTests(data.tests)
      setTodayCases(data.todayCases)
      setTodayDeath(data.todayDeath)
      setTodayRecovered(data.todayRecovered)
    })

  },[])

  const commas = (number) => (
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  )
  return (
    <ImageBackground
    source={require("../src/images/back.png")}
        style={{ width: "100%", height: "100%" }}>
          <ScrollView>
        <Card>
          <Card.Title style={{fontSize: 30, backgroundColor: "#1F2833", color: "#fff", padding: 10, borderRadius: 5}}>LIVE CASES ALL OVER THE WORLD</Card.Title>
        </Card>
      <Card>
        <Card.Title>Cases Globally :  {commas(cases)}</Card.Title>
        <Card.Divider />
        <Card.Title>Recovered Globally : {commas(recovered)}</Card.Title>
        <Card.Divider />
        <Card.Title>Death Globally: {commas(death)}</Card.Title>
        <Card.Divider />
      </Card>

 <Card>
  <Card.Title style={{fontSize: 30, backgroundColor: "#E27D60", color: "#fff", padding: 10, borderRadius: 5}}>TODAY'S UPDATE</Card.Title>
</Card>
      <Card>
        <Card.Title>Total Cases today : {commas(todayCases)}</Card.Title>
        <Card.Divider />
        <Card.Title>Total Recovered today : {commas(todayRecovered)}</Card.Title>
        <Card.Divider />
        <Card.Title>Total Death today : {!todayDeath ? 0 : todayDeath}</Card.Title>
        <Card.Divider />
      </Card>

      <Card>
        <Card.Title>Population: {commas(population)}</Card.Title>
        <Card.Divider />
        <Card.Title>Critical: {commas(critical)}</Card.Title>
        <Card.Divider />
        <Card.Title>Total Tests : {commas(tests)}</Card.Title>
        <Card.Divider />
      </Card>
      <Card>
        <Card.Title style={{fontSize: 30, backgroundColor: "#6B6E70", color: "#fff", padding: 10, borderRadius: 5}}>INFORMATIONS PER ONE MILLION</Card.Title>
      </Card>

<Card>
        <Card.Title>Active Cases Per One Million: {activePerOneMillion}</Card.Title>
        <Card.Divider />
        <Card.Title>Total Cases Per One Million: {casesPerOneMillion}</Card.Title>
        <Card.Divider />
        <Card.Title>Recoverd Cases Per One Million : {recoveredPerOneMillion}</Card.Title>
        <Card.Divider />
        <Card.Title>Tests Per One Million : {testsPerOneMillion}</Card.Title>
        <Card.Divider />
        <Card.Title>Death  Per One Million :  {!deathPerOneMillion ? 0 : deathPerOneMillion}</Card.Title>
        <Card.Divider />
</Card>
<Card>
  <Card.Title>Affected Countries: {affectedCountries}</Card.Title>
</Card> 
      </ScrollView>
    </ImageBackground>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({

})
