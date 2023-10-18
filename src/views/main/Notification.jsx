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
import React, { useState } from "react";
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


const Notification = ({navigation}) => {

//useState
const [headerButtonAct, setheaderButtonAct] = useState(true)
  //function
  const handlePressBackButton = async () => {
    navigation.goBack();
  }
  const handlePressButtonHeader1 = ()=>{
    setheaderButtonAct(true);
  }
  const handlePressButtonHeader2 = ()=>{
    setheaderButtonAct(false);
  }

  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{width:'20%',height:"100%",justifyContent:'center',alignItems:"flex-start",paddingLeft:'4%'}}>
          
        </View>
        <View style={{width:'60%',height:'100%',justifyContent:'center',alignItems:"center"}}>
          <Text style={[styles.textBold,{color:'#f0f6fc',fontSize:15}]}>Thông báo</Text>
          {/* <Text style={[styles.textBold,{color:'#f0f6fc',fontSize:15}]}></Text> */}
        </View>
        <View style={{width:'20%',height:"100%",justifyContent:'center',alignItems:"flex-end",paddingRight:'4%'}}>
          <TouchableOpacity style={{height:"100%",width:'40%',justifyContent:'center',alignItems:"center"}}>
            <Icon as={AntDesign} name='questioncircleo' size={'lg'} color={'#3fb950'}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.header1}>
      <TouchableOpacity onPress={()=>handlePressButtonHeader1()}  style={ headerButtonAct === true ? styles.btn_header1_Act : styles.btn_header1 }>
        <Text style={[styles.textBold,{color:"#f0f6fc",fontSize:12}]}>Hệ thống</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handlePressButtonHeader2()} style={ headerButtonAct === false ? styles.btn_header1_Act : styles.btn_header1 }>
        <Text style={[styles.textBold,{color:"#f0f6fc",fontSize:12}]}>Khuyến mãi</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.body}>
      <Text style={[styles.textBold,{color:"#f0f6fc",fontSize:12,color:'#6e7681'}]}>Dữ liệu trống</Text>
    </View>
    </View>
    </NativeBaseProvider>
  )
}

export default Notification

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
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 10
    // },
    // shadowOpacity: 0.5,
    // shadowRadius: 10,
    // elevation:5,
    borderBottomWidth:0.4,
    borderBottomColor:'#1F2937'
  },
  header1:{
    height:"6%",
    width:"100%",
    flexDirection:"row",
    alignItems:"center",
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 10
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 10,
    // elevation:2
  },
  textBold:{
    fontFamily:'openSansBold'
  },
  btn_header1:{
    height:'100%',
    width:"50%",
    justifyContent: 'center',
    alignItems:"center",
    borderBottomWidth:1,
    borderBottomColor:'#30363d',
  },
  btn_header1_Act:{
    height:'100%',
    width:"50%",
    justifyContent: 'center',
    alignItems:"center",
    borderBottomColor:'#3fb950',
    borderBottomWidth:1
  },
  body:{
    flex:1,
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
  }
})