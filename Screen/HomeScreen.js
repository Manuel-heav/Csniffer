import React from 'react'
import { StyleSheet,  View, ImageBackground,Pressable } from 'react-native'
import { Text, Button , Header} from 'react-native-elements'
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

const HomeScreen = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
        <ImageBackground
        source={require("../src/images/back.png")}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <Header
  leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/> */}
<View
          style={{
            flexDirection: "row",
            marginTop: 40,
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
          <Icon name="menu" size={30} color="#a2a2db" style={{ width: 20 }} />
          <Icon
            name="account-circle"
            size={33}
            color="#a2a2db"
            style={{ marginLeft: 450 }}
          />
        </View>

  
        <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => {navigation.navigate('Calculate The Risk')}}>
                <Text style={styles.text}>COVID-19, Calculate The Risk</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {navigation.navigate('Dashboard')}}>
                <Text style={styles.text}>Dashboard</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {navigation.navigate('Info')}}>
                <Text style={styles.text}>Info With Location</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {navigation.navigate('Map')}}>
                <Text style={styles.text}>Map</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {navigation.navigate('Masthead')}}>
                <Text style={styles.text}>About</Text>
        </Pressable>
       
          {/* <Button title="Dashboard" containerStyle={styles.btnPrimary} onPress={() => {navigation.navigate('Dashboard')}}/>
          <Button title="Info with Location" containerStyle={styles.btnSecondary} onPress={() => {navigation.navigate('Info')}}/>
          <Button title="Articles and Resources" containerStyle={styles.btnSecondary} onPress={() => {navigation.navigate('Article')}}/>
          <Button title="About"  containerStyle={styles.btnTeritary} onPress={() => {navigation.navigate('Masthead')}}/> */}
          </View>
        </ImageBackground>
  )
        }
}

export default HomeScreen

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // btnPrimary:{
  //   width: 400,
  //   margin: 20,
  // },
  // btnSecondary:{
  //   width: 400,
  //   margin: 20,
  // },
  // btnTeritary:{
  //   width: 400,
  //   margin: 20,
  // }
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    margin: 10,
    width: 400,
    backgroundColor: 'white',
    fontFamily: 'Inter_900Black'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'gray',
  },
})
