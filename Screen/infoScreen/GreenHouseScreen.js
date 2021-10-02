import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview';

const GreenHouseScreen = () => {
  return (
    <View>
     <WebView
            style={{width: 600, height: 500}}
    source={{uri: 'https://eodashboard.org/iframe?poi=W4-N2'}}
/> 
    </View>
  )
}

export default GreenHouseScreen
export default GreenHouseScreen

const styles = StyleSheet.create({
  text:{
    margin: 20,
    fontSize: 20
  }
})
