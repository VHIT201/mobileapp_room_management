import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Image,
  FlatList
} from "react-native";
import React, { useState,useEffect,useRef } from "react";
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


//import data
import DataTime from "../../seeder/REdata/DataRE";


const RE = () => {

  //usestate 
  const currentMonthIndex = DataTime.indexOf(currentMonthSelect); 
  const [currentMonthSelect,setCurrentMonthSelect] = useState('10-2023')

  //useref
 
  

  //function
  const handleHeaderBtn =(month)=>{
    setCurrentMonthSelect(month)
  }
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
    <StatusBar/>
      <View style={styles.header}>
        <View style={{width:'20%',height:"100%",justifyContent:'center',alignItems:"flex-start",paddingLeft:'4%'}}>
          
        </View>
        <View style={{width:'60%',height:'100%',justifyContent:'center',alignItems:"center"}}>
          <Text style={[styles.textBold,{color:'#f0f6fc',fontSize:15}]}>Thu chi</Text>
          {/* <Text style={[styles.textBold,{color:'#f0f6fc',fontSize:15}]}></Text> */}
        </View>
        <View style={{width:'20%',height:"100%",justifyContent:'center',alignItems:"flex-end",paddingRight:'4%'}}>
          <TouchableOpacity style={{height:"100%",width:'40%',justifyContent:'center',alignItems:"center"}}>
            <Icon as={Entypo} name="dots-three-vertical" color={'#f0f6fc'}/>
          </TouchableOpacity>
        </View>
      </View>
      

      <View style={styles.header1}>

            <FlatList style={{height:"100%",width:"100%"}}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={DataTime}
      initialScrollIndex={currentMonthIndex}
      renderItem={({item}) => (
      <TouchableOpacity onPress={handleHeaderBtn(item)} style={ (item === currentMonthSelect)?(styles.headerBtnAct):(styles.headerBtn)}>
        <Text style={[styles.text,{color:'#f0f6fc',fontSize:12}]}>{item}</Text>
      </TouchableOpacity>
      )}
      />
        {/* <TouchableOpacity style={{height:"100%",width:'16%',justifyContent:"center",alignItems:"center"}}>
          <Text style={[styles.text,{color:'#f0f6fc',fontSize:12}]}>07-2023</Text>
        </TouchableOpacity> */}
    </View>
    </View>
    </NativeBaseProvider>
  )
}

export default RE

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
  textBold:{
    fontFamily:'openSansBold'
  },
  text:{
    fontFamily:'openSansRegular'
  },
  header1:{
    height:"6%",
    width:"100%",
    flexDirection:"row",
    alignItems:"center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation:2,
    
  },
  headerBtn:{
    height:"100%",width:100,justifyContent:"center",alignItems:"center",
    borderBottomWidth:1,
    borderBottomColor:'#1F2937'
  },
  headerBtnAct:{
    height:"100%",width:100,justifyContent:"center",alignItems:"center",
    borderBottomWidth:1,
    borderBottomColor:'#3fb950'
  },

})