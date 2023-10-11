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

const BoardingHouse = ({navigation}) => {

//useState
const [selectedRoom, setSelectedRoom] = useState(null);
const [headerButtonAct, setheaderButtonAct] = useState(true)
  const [roomData, setRoomData] = useState([]);
  const [boardingHouse, setBoardingHouse] = useState('');
  // const countsMap = {}

  

 
  //SECTION -  hàm lấy giá trị tên khu
 
  useEffect(() => {
    const getBoardingHouse = async () => {
      try {
        const boardingHouseString = await AsyncStorage.getItem('selectedBoardingHouse');
        setBoardingHouse(boardingHouseString.slice(1,-1));
      } catch (e) {
        console.log('Có lỗi: ' + e);
      }
    };
  
    getBoardingHouse();
  }, []);
// console.log(boardingHouse);

useEffect(() => {
  getData(boardingHouse);
}, [boardingHouse]);

    const getData = (boardingHouse) => {
      if(boardingHouse === 'Khu trọ 38A'){
        setRoomData(khu38adata.area)
        console.log('Lấy data '+boardingHouse + ' thành công')
      }
      if(boardingHouse === 'Khu trọ 38'){
        setRoomData(khu38data.area)
        console.log('Lấy data '+boardingHouse + ' thành công')
      }
      if(boardingHouse === 'Khu trọ Tân Vạn - Bình Dương'){
        setRoomData(tanvandata.area)
        console.log('Lấy data '+boardingHouse + ' thành công')
      }
      if(boardingHouse === 'Khu Kios'){
        setRoomData(khukiosdata.area)
        console.log('Lấy data '+boardingHouse + ' thành công')
      }
    } 
    
  
    const countsFloor = {};
    roomData.forEach((item) => {
      const { "floor": floor } = item;
      if (countsFloor[floor]) {
        countsFloor[floor] += 1;
      } else {
        countsFloor[floor] = 1;
      }
    });
    
    const filteredDatafloor = Object.entries(countsFloor).map(([floor, count]) => ({
      floor,
      count,
    }));
    
    

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
  await AsyncStorage.removeItem('selectedBoardingHouse');
  setBoardingHouse(null);
  navigation.goBack();
}
//hàm nhấn nút

const handlePressRoom = (roomName) => {
  setSelectedRoom(roomName);

  //Lưu xuống AsyncStorage
  AsyncStorage.setItem('setSelectedRoom',JSON.stringify(roomName));
  navigation.navigate('Room')
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
          <Text style={[styles.textBold,{color:'#f0f6fc',fontSize:15}]}>{boardingHouse}</Text>
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
        <Text style={[styles.textBold,{color:"#f0f6fc",fontSize:13}]}>Danh sách phòng</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handlePressButtonHeader2()} style={ headerButtonAct === false ? styles.btn_header1_Act : styles.btn_header1 }>
        <Text style={[styles.textBold,{color:"#f0f6fc",fontSize:13}]}>Chi tiết</Text>
      </TouchableOpacity>
    </View>

      <View style={styles.body}>
        <View style={{height:38,width:"96%",backgroundColor:'rgba(75, 85, 99, 0.3)',borderRadius:20,fontSize:12,
          fontFamily:'openSansRegular',marginTop:10,justifyContent:"center",alignItems:"center",flexDirection:'row',
          paddingRight:"4%",paddingLeft:"1%"
          }} >

         <View style={{height:"100%",width:'10%',justifyContent:'center',alignItems:"center"}}>
            <Icon as={AntDesign} 
            name="search1" size={'md'} color={'rgba(229, 231, 235, 0.5)'}/>
         </View>

         <TextInput 
  style={{
    width:"90%",
    height:'100%',
    color:"#f0f6fc", 
    fontFamily: 'openSansRegular',
    fontSize:12
  }}

  placeholderTextColor={'rgba(229, 231, 235, 0.5)'}

  placeholderStyle={{
 
    fontFamily: 'openSansRegular' 
  }}

  placeholder="Tìm kiếm theo tên"
/>
        </View>

        <View style={styles.body_ListRoom}>
          <ScrollView style={{width:'100%',marginTop:10}}>
          {/* {filteredDatafloor.map(item =>{
      return( */}

        <View style={styles.areaBox}>
        
      
        <View style={styles.btnContainer}>
          {roomData.map((room, index) => {
            return (
              <TouchableOpacity onPress={()=>handlePressRoom(room.name)}  style={styles.btn}>
              <View style={{height:"20%",width:"20%",position:"absolute",top:0,right:"6%",justifyContent:"center",alignItems:"center"}}>
              <Image
  style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
  source={room.state === 'empty' ? require('../../../assets/logos/empty.png') : require('../../../assets/logos/rent.png')}
/>
              </View>
                {/* <Text style={{ color: 'white', fontWeight: 'bold' }}>{boardingHouse.name}</Text> */}
                <Image  style={{height:'40%',width:'40%'}}
                source={require('../../../assets/logos/house.png')}>

                </Image>
                <Text style={{textAlign:"center",fontWeight:'600',color:"#3fb950",fontFamily:'openSansBold'}}>{room.name}</Text>
                <Text style={{textAlign:'center',color:"#f0f6fc",fontSize:10,fontFamily:'openSansBold'}}>{formatPrice(room.expectedRoomPrice)}</Text>
                <View style={styles.infoRoom}>
                  <View style={{flexDirection:"row", justifyContent:"center",alignItems:"center",gap:4}}>
                  <Icon as={MaterialIcons} name='people-alt' color={'#9CA3AF'} size={'xs'}/>
                  <Text style={{color:"#9CA3AF",fontFamily:'openSansBold',fontSize:12}}>{room.state === "currently renting"? 4:0}</Text>
                  </View>
                  <View style={{flexDirection:"row", justifyContent:"center",alignItems:"center",gap:4}}>
                  <Icon as={FontAwesome5} name='money-bill' color={'#9CA3AF'} size={'xs'}/>
                  <Text style={{color:"#9CA3AF",fontFamily:'openSansBold',fontSize:12}}>0</Text>
                  </View>
                  <View style={{flexDirection:"row", justifyContent:"center",alignItems:"center",gap:4}}>
                  <Icon as={MaterialIcons} name='dangerous' color={'#9CA3AF'} size={'xs'}/>
                  <Text style={{color:"#9CA3AF",fontFamily:'openSansBold',fontSize:12}}>0</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
        })}
        </View>
        
       
      </View>

      {/* )
    })} */}
          </ScrollView>


        </View>


      </View>
   
    </View>
    </KeyboardAvoidingView>
    </NativeBaseProvider>
    
  );
}

export default BoardingHouse;


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