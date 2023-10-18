import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Image,
  ScrollView,
  FlatList
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
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


//import data
import dataBoaringHouse from "../../seeder/dataBoardingHouse/dataBoardingHouse";



const Areas = ({navigation}) => {

  const [selectedBoardingHouse, setSelectedBoardingHouse] = useState(null);
  const countsMap = {};
  dataBoaringHouse.forEach((item) => {
    const { "province/city": province } = item;
    if (countsMap[province]) {
      countsMap[province] += 1;
    } else {
      countsMap[province] = 1;
    }
  });
  
  const filteredDataProvince = Object.entries(countsMap).map(([province, count]) => ({
    province,
    count,
  }));
  
  // console.log(filteredDataProvince);

  const [fontsLoaded] = useFonts({
    openSansLight: require("../../assets/fonts/OpenSans-Light.ttf"),
    openSansMedium: require("../../assets/fonts/OpenSans-Medium.ttf"),
    openSansBold: require("../../assets/fonts/OpenSans-Bold.ttf"),
    openSansItalic: require("../../assets/fonts/OpenSans-Italic.ttf"),
    openSansRegular: require("../../assets/fonts/OpenSans-Regular.ttf"),
  });

  const handlePressBoardingHouse = (boardingHouse) => {
      setSelectedBoardingHouse(boardingHouse);

      //Lưu xuống AsyncStorage
      AsyncStorage.setItem('selectedBoardingHouse',JSON.stringify(boardingHouse));
      navigation.navigate('BoardingHouse')
  }
  
  // console.log(dataBoaringHouse)

  
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
        {/* endheader */}
      
    <ScrollView style={styles.body}>


    {filteredDataProvince.map((item,key) =>{
      return(

        <View style={styles.areaBox}>
        
        <Text key={filteredDataProvince.key} style={{fontSize:14,color:'white',fontWeight:'600',marginBottom:20}}>{item.province} ( {item.count} )</Text>
      
        <View style={styles.btnContainer}>
        {dataBoaringHouse.map((boardingHouse, index) => {
          if (boardingHouse['province/city'] === item.province) {
            return (
              <TouchableOpacity key={dataBoaringHouse.index} onPress={()=>handlePressBoardingHouse(boardingHouse.name)}  style={styles.btn}>
                {/* <Text style={{ color: 'white', fontWeight: 'bold' }}>{boardingHouse.name}</Text> */}
                <Image  style={{height:'30%',width:'40%'}}
                source={require('../../assets/logos/house.png')}>

                </Image>
                <Text style={{textAlign:"center",fontWeight:'600',color:"#3fb950",fontFamily:'openSansBold'}}>{boardingHouse.name}</Text>
                <Text style={{textAlign:'center',color:"#f0f6fc",fontSize:10,fontFamily:'openSansBold'}}>{boardingHouse.address + ' ' + boardingHouse.district}</Text>
              </TouchableOpacity>
            );
          }
        })}
      </View>
        
       
      </View>

      )
    })}


      
    </ScrollView>

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
    elevation:1,
    borderBottomWidth:0.4,
    borderBottomColor:'#1F2937'
  },
  text:{
    fontFamily:'openSansBold'
  },
  body:{
    flex:1,
    width:'100%',
    paddingLeft:'1%',
    paddingRight:'1%',
    paddingTop:'2%',
    paddingBottom:'2%'
  },
  areaBox:{
    width:'100%',
    paddingBottom:20,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:10,


  },
  btn: {
    height: 200,
    width: '48%',
    backgroundColor: '#30363d', 
    borderRadius: 10,
    elevation: 5,
    justifyContent:'center',
    alignItems:"center",
    padding:10,
    gap:10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginBottom:20
  },
  btnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    
  },
})