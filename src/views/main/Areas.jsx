import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { Icon, Center, HStack, NativeBaseProvider } from "native-base";
import {
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import { SSRProvider } from "@react-aria/ssr";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Areas = () => {
  const [fontsLoaded] = useFonts({
    openSansLight: require("../../assets/fonts/OpenSans-Light.ttf"),
    openSansMedium: require("../../assets/fonts/OpenSans-Medium.ttf"),
    openSansBold: require("../../assets/fonts/OpenSans-Bold.ttf"),
    openSansItalic: require("../../assets/fonts/OpenSans-Italic.ttf"),
    openSansRegular: require("../../assets/fonts/OpenSans-Regular.ttf"),
  });
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
    <StatusBar/>
      <View style={styles.header}>
        <View style={{width:'30%'}}></View>
        <View style={{width:'40%',height:'100%',justifyContent:'center',alignItems:"center"}}>
          <Text style={[styles.text,{color:'#f0f6fc',fontSize:15}]}>Khu</Text>
        </View>
        <View style={{width:'30%',height:"100%",justifyContent:'center',alignItems:"flex-end",paddingRight:'4%'}}>
          <TouchableOpacity style={{height:"100%",width:'40%',justifyContent:'center',alignItems:"center"}}>
            <Icon as={AntDesign} name='questioncircleo' size={'lg'} color={'#3fb950'}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </NativeBaseProvider>
  )
}

export default Areas

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#30363d",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  header:{
    height:"7%",
    width:"100%",
    flexDirection:"row",
   
    alignItems:"center",
    elevation:1
  },
  text:{
    fontFamily:'openSansBold'
  }
})