import * as React from 'react'; 
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview';

const GreenHouseScreen = () => {
  return (
    <View style={styles.container}>
     <WebView
            style={{width: 600, height: 50090}}
    source={{uri: 'https://eodashboard.org/iframe?poi=W4-N2'}}
/> 
    </View>
  )
}

export default GreenHouseScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text:{
    margin: 20,
    fontSize: 20
  }
})
