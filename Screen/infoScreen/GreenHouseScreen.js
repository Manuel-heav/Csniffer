import * as React from 'react'; 
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { WebView } from 'react-native-webview';

const GreenHouseScreen = () => {
  return (
    <View style={styles.container}>
     <WebView
            style={{width: Dimensions.get('window').width/2, height: Dimensions.get('window').height/2}}
    source={{uri: 'https://eodashboard.org/iframe?poi=W4-N2'}}/> 
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
