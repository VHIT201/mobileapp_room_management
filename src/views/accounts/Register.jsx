import { StyleSheet, Text, View,Dimensions,TouchableOpacity, StatusBar, TextInput,Image } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import { Icon, Center, HStack, NativeBaseProvider } from "native-base";
import { MaterialCommunityIcons, AntDesign, Entypo } from "@expo/vector-icons";
import { SSRProvider } from '@react-aria/ssr';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
StatusBar.setBackgroundColor('#3fb950')
const { height, width } = Dimensions.get('window');

const Register = () => {
  const [fontsLoaded] = useFonts({
    'openSansLight' : require('../../assets/fonts/OpenSans-Light.ttf'),
    'openSansMedium' : require('../../assets/fonts/OpenSans-Medium.ttf'),
    'openSansBold' : require('../../assets/fonts/OpenSans-Bold.ttf'),
    'openSansItalic' : require('../../assets/fonts/OpenSans-Italic.ttf'),
    'openSansRegular' : require('../../assets/fonts/OpenSans-Regular.ttf'),

 });
  return (
    <View style={styles.container}>
        <View style={styles.header}>

        </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container:{
    height:height,
    width:width,
    backgroundColor:"#30363d",
    
},
header:{
  height:'9%',
  width:'100%',
  backgroundColor:"pink"
},
})