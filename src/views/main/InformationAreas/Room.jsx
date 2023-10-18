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
    FlatList,
    KeyboardAvoidingView
  } from "react-native";
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import React, { useEffect, useState } from "react";
  import { useFonts } from "expo-font";
  import { Icon, Center, HStack, NativeBaseProvider } from "native-base";
  import {
    MaterialCommunityIcons,
    AntDesign,
    Entypo,
    MaterialIcons,
    FontAwesome6,
    FontAwesome5
  } from "@expo/vector-icons";
  
  import { SSRProvider } from "@react-aria/ssr";
  import { NavigationContainer } from "@react-navigation/native";
  import { createNativeStackNavigator } from "@react-navigation/native-stack";
  
  //import data
  import dataBoaringHouse from "../../../seeder/dataBoardingHouse/dataBoardingHouse";
  import tanvandata from "../../../seeder/dataBoardingHouse/tanvandata";
  import khu38data from "../../../seeder/dataBoardingHouse/khu38data";
  import khu38adata from "../../../seeder/khu38a";
  import khukiosdata from "../../../seeder/dataBoardingHouse/kiosdata";
  

  //import Components
import DescribeRoom from "../../../components/Room/DescribeRoom";
import BoardingHouse from "./BoardingHouse";


  const Room = ({navigation}) => {
  
  //useState
  const [selectedRoom, setSelectedRoom] = useState('');
  const [headerButtonAct, setheaderButtonAct] = useState(true)
  const [boardingHouse, setBoardingHouse] = useState('');
    const [roomData, setRoomData] = useState([]);
    const [room, setRoom] = useState('');
    // const countsMap = {}

    const getBoardingHouse = async () => {
      try {
        const boardingHouseString = await AsyncStorage.getItem('selectedBoardingHouse');
        setBoardingHouse(boardingHouseString.slice(1,-1));
        console.log('boarding House :' + boardingHouse)
        
      } catch (e) {
        console.log('Có lỗi: ' + e);
      }
    };
    const getRoom = async () => {
        try {
          const roomString = await AsyncStorage.getItem('setSelectedRoom');
          setSelectedRoom(roomString.slice(1,-1));
          console.log('Selected Room :'+ selectedRoom)
        } catch (e) {
          console.log('Có lỗi: ' + e);
        }
      };



      const getDataRoom = (boardingHouse,selectedRoom) =>{
        if(boardingHouse == 'Khu trọ Tân Vạn - Bình Dương'){
          for(let i = 0; i< tanvandata.length; i++){
            const tanvanRoom = tanvandata[i]
            if(tanvanRoom.name == selectedRoom){
              setRoomData(tanvanRoom)
              console.log('Lấy data '+selectedRoom + ' thành công')

            }
          }
          
          console.log("Chạy test nè")
        }
        if(boardingHouse === 'Khu trọ 38A'){
          for(let i = 0; i< khu38adata.length; i++){
            const khu38aRoom = khu38adata[i]
            if(khu38aRoom.name == selectedRoom){
              setRoomData(khu38aRoom)
              console.log('Lấy data '+selectedRoom + ' thành công')
            }
          }
          console.log('Lấy data '+selectedRoom + ' thành công')
          console.log("Chạy test 1 ")
        }
        if(boardingHouse == 'Khu trọ 38'){
          for(let i = 0; i< khu38data.length; i++){
            if(khu38data[i].name == selectedRoom){
              setRoomData(khu38data[i])
            }
          }
          console.log('Lấy data '+selectedRoom + ' thành công')
        }
        if(boardingHouse == 'Khu Kios'){
          for(let i = 0; i< khukiosdata.length; i++){
            console.log('hi ' + khukiosdata[i].name);
            if(khukiosdata[i].name == selectedRoom){
              
              setRoomData(khukiosdata[i])
              
            }
          }
          console.log('Lấy data '+selectedRoom + ' thành công')
        }
        
        
      }
   
    useEffect(() => {
      getBoardingHouse();
      getRoom();
    }, []);
  
    useEffect(() => {
    
     getDataRoom(boardingHouse,selectedRoom)
    // console.log(roomData)
    }, [selectedRoom,boardingHouse]);
  

    
  
 
  
      
      
  
  //Xử lý format
      const formatPrice = (price) => {
        const numericPrice = parseFloat(price.replace('m', ''));
        const formattedPrice = numericPrice * 1000000;
        return formattedPrice.toLocaleString("vi-VN") + "đ";
      };
  
  
  //hàm nhấn nút
  const handlePressButtonHeader1 = ()=>{
    setheaderButtonAct(true);
  }
  const handlePressButtonHeader2 = ()=>{
    setheaderButtonAct(false);
  }
  
  const handlePressBackButton = async () => {
    await AsyncStorage.removeItem('setSelectedRoom');
    setSelectedRoom(null);
    navigation.goBack();
  }

  
    return (
      <NativeBaseProvider>
        <KeyboardAvoidingView
          behavior="height" 
          keyboardVerticalOffset={0}
          enabled={false}
        >
      <View style={styles.container}>
      <StatusBar/>
      
      <View style={styles.header}>
          <View style={{width:'20%',height:"100%",justifyContent:'center',alignItems:"flex-start",paddingLeft:'4%'}}>
            <TouchableOpacity onPress={()=>handlePressBackButton()}>
              <Icon as={AntDesign} name="left" size={'lg'} color={'#3fb950'} />
            </TouchableOpacity>
          </View>
          <View style={{width:'60%',height:'100%',justifyContent:'center',alignItems:"center"}}>
            <Text style={[styles.textBold,{color:'#f0f6fc',fontSize:15}]}>Phòng {selectedRoom}</Text>
            {/* <Text style={[styles.textBold,{color:'#f0f6fc',fontSize:15}]}></Text> */}
          </View>
          <View style={{width:'20%',height:"100%",justifyContent:'center',alignItems:"flex-end",paddingRight:'4%'}}>
            <TouchableOpacity style={{height:"100%",width:'40%',justifyContent:'center',alignItems:"center"}}>
              <Icon as={AntDesign} name='questioncircleo' size={'lg'} color={'#3fb950'}/>
            </TouchableOpacity>
          </View>
        </View>
          {/* endheader */}
         
      <View style={styles.header1}>
        <TouchableOpacity onPress={()=>handlePressButtonHeader1()}  style={ headerButtonAct === true ? styles.btn_header1_Act : styles.btn_header1 }>
          <Text style={[styles.textBold,{color:"#f0f6fc",fontSize:13}]}>Thông tin</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handlePressButtonHeader2()} style={ headerButtonAct === false ? styles.btn_header1_Act : styles.btn_header1 }>
          <Text style={[styles.textBold,{color:"#f0f6fc",fontSize:13}]}>Người thuê</Text>
        </TouchableOpacity>
      </View>
  
        <View style={styles.body}>
          <DescribeRoom expectedRoomPrice={roomData.expectedRoomPrice}/>
      
  
        </View>
     
      </View>
      </KeyboardAvoidingView>
      </NativeBaseProvider>
      
    );
  }
  
  export default Room;
  
  
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
    text:{
      fontFamily:'openSansRegular'
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
      height:'87%',
      marginTop:1,
      width:'100%',
      paddingLeft:'4%',
      paddingRight:'4%',
      justifyContent: 'flex-start',
      alignItems:'center',
    },
    body_ListRoom:{
      flex:1,
      width:"100%",
      justifyContent: 'center',
      alignItems:'center',
      marginTop:10,
      marginBottom:4
    },
    btn: {
      height: 180,
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
      marginBottom:20,
      position:"relative"
    },
    
    btnContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      
    },
    infoRoom:{
      height:'15%',
      width:"100%",
      flexDirection:'row',
      alignItems:"center",
      justifyContent:"space-evenly"
    }
  })