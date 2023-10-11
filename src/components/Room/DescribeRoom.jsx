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
  import React, {useMemo, useEffect, useState } from "react";
  import { useFonts } from "expo-font";
  import { Icon, Center, HStack, NativeBaseProvider,Radio } from "native-base";
  import {
    MaterialCommunityIcons,
    AntDesign,
    Entypo,
    MaterialIcons,
    FontAwesome6,
    FontAwesome5
  } from "@expo/vector-icons";
  import RadioGroup from 'react-native-radio-buttons-group';
  import { SSRProvider } from "@react-aria/ssr";
  import { NavigationContainer } from "@react-navigation/native";
  import { createNativeStackNavigator } from "@react-navigation/native-stack";
  
  //import data
import khu38adata from "../../seeder/khu38a";
import khu38data from "../../seeder/dataBoardingHouse/khu38data";
import khukiosdata from "../../seeder/dataBoardingHouse/kiosdata";
import tanvandata from "../../seeder/dataBoardingHouse/tanvandata";

const DescribeRoom = ({expectedRoomPrice}) => {

  const radioButtons = useMemo(() => ([
    {
        id: '1',
        label: 'Không',
        value: 'option1'
    },
    {
        id: '2',
        label: 'Cơ bản',
        value: 'option2'
    },
    {
        id: '3',
        label: 'Đầy đủ',
        value: 'option3'
    }
]), []);

const [selectedId, setSelectedId] = useState();
const onSelect = (id) => {
  setSelectedId(id);
}
const stateRoom = (data) => {
  if(data === "empty"){
    return "Phòng trống"
  }
  if(data === "currently renting"){
    return "Đang thuê"
  }
}


//Xử lý format
const formatPrice = (price) => {
  const numericPrice = parseFloat(price.replace('m', ''));
  const formattedPrice = numericPrice * 1000000;
  return formattedPrice.toLocaleString("vi-VN") + "đ";
};


  return (
    
    <View style={styles.container}>
      <ScrollView  indicatorStyle="#DC2626" style={{width:"100%",height:'100%'}}>
        <View style={{width:'100%',justifyContent:"center",alignItems:"flex-start",marginTop:20,marginBottom:20}}>
            <Text style={[styles.textBold,{color:'#f0f6fc'}]}></Text>

            <View style={styles.mainInfo}>
                <Text style={[styles.textBold,{color:'#f0f6fc',fontSize:16}]}>{expectedRoomPrice}</Text>
                <View style={styles.frameMainInfo}>
                    <View style={{height:"100%",width:"50%",borderTopLeftRadius:10,borderBottomLeftRadius:10,justifyContent:"center",alignItems:"center"}}>
                        <Text style={[styles.textBold,{color:'#f0f6fc',fontSize:12}]}>Diện tích</Text>
                        <Text style={[styles.textBold,{color:'#DC2626',fontSize:12,marginBottom:6}]}>40m2</Text>
                        <Text style={[styles.textBold,{color:'#f0f6fc',fontSize:12}]}>Phòng ngủ</Text>
                        <Text style={[styles.textBold,{color:'#DC2626',fontSize:12,marginBottom:6}]}>1</Text>
                        <Text style={[styles.textBold,{color:'#f0f6fc',fontSize:12}]}>Số người tối đa</Text>
                        <Text style={[styles.textBold,{color:'#DC2626',fontSize:12}]}>4</Text>
                    </View>
                    <View style={{height:"100%",width:"50%",borderTopRightRadius:10,borderBottomRightRadius:10,justifyContent:"center",alignItems:"center"}}>
                        <Text style={[styles.textBold,{color:'#f0f6fc',fontSize:12}]}>Tầng</Text>
                        <Text style={[styles.textBold,{color:'#DC2626',fontSize:12,marginBottom:6}]}>0</Text>
                        <Text style={[styles.textBold,{color:'#f0f6fc',fontSize:12}]}>Phòng khách</Text>
                        <Text style={[styles.textBold,{color:'#DC2626',fontSize:12,marginBottom:6}]}>1</Text>
                        <Text style={[styles.textBold,{color:'#f0f6fc',fontSize:12}]}>Tiền cọc</Text>
                        <Text style={[styles.textBold,{color:'#DC2626',fontSize:12}]}>2.500.000 đ</Text>
                    </View>
                </View>

            </View>

            <Text style={[styles.textBold,{color:'#f0f6fc',marginTop:30,fontSize:12}]}>Dịch vụ có phí</Text>
            <View style={{height:70,width:'100%',justifyContent:'center',alignItems:'center'}}>
                <Text style={[styles.text,{color:'#6e7681',fontSize:12}]}>Dữ liệu trống</Text>
            </View>
            <Text style={[styles.textBold,{color:'#f0f6fc',fontSize:12}]}>Dịch vụ miễn phí</Text>
            <View style={{height:70,width:'100%',justifyContent:'center',alignItems:'center'}}>
                <Text style={[styles.text,{color:'#6e7681',fontSize:12}]}>Dữ liệu trống</Text>
            </View>
            <Text style={[styles.textBold,{color:'#f0f6fc',fontSize:12}]}>Tiện ích phòng</Text>
            <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:'center',marginTop:20,gap:10}}>
                <TouchableOpacity style={{backgroundColor:'#6e7681',height:26,width:70,justifyContent:'center',alignItems:"center",borderRadius:10}}>
                    <Text style={[styles.textBold,{color:'#f0f6fc',fontSize:10}]}>Khép kín</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#6e7681',height:26,width:70,justifyContent:'center',alignItems:"center",borderRadius:10}}>
                    <Text style={[styles.textBold,{color:'#f0f6fc',fontSize:10}]}>Khoá từ</Text>
                </TouchableOpacity>
            </View>
            <Text style={[styles.textBold,{color:'#f0f6fc',fontSize:12,marginTop:20}]}>Nội thất</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center',width:'100%',marginTop:10 }}>
            <RadioGroup 
              radioButtons={radioButtons} 
              onPress={setSelectedId}
              selectedButton={selectedId}
              onSelect={onSelect}
              selectedId={selectedId}
              layout="row"
              labelStyle={{ color: '#f0f6fc', fontSize: 10 }} // Thay đổi màu chữ tại đây
              containerStyle={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '100%'}}
              
            />
            </View>
            <Text style={[styles.textBold,{color:'#f0f6fc',fontSize:12,marginTop:20}]}>Mô tả phòng</Text>
            <View style={{height:70,width:'100%',justifyContent:'center',alignItems:'center'}}>
                <Text style={[styles.text,{color:'#6e7681',fontSize:12}]}>Dữ liệu trống</Text>
            </View>
            <Text style={[styles.textBold,{color:'#f0f6fc',fontSize:12,marginTop:20}]}>Lưu ý cho người thuê phòng</Text>
            <View style={{height:70,width:'100%',justifyContent:'center',alignItems:'center',}}>
                <Text style={[styles.text,{color:'#6e7681',fontSize:12}]}>Dữ liệu trống</Text>
            </View>


            <View style={{height:20}}></View>

            <TouchableOpacity style={{width:"100%",height:40,backgroundColor:"#EF4444",borderRadius:10,justifyContent:'center',alignItems:'center'}}>
              <Text style={[styles.textBold,{color:"#f0f6fc"}]}>Xoá phòng</Text>
            </TouchableOpacity>
        </View>


      </ScrollView>
    </View>
    
  )
}

export default DescribeRoom

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:"100%",
        
    },
    text:{
        fontFamily:'openSansRegular'
      },
      textBold:{
        fontFamily:'openSansBold'
      },
      mainInfo:{
        justifyContent: 'center',
        alignItems:"center",
        width:"100%",
        marginTop:10,
      },
      frameMainInfo:{
        
        height:140,
        width:'90%',
        borderRadius:10,
        marginTop:10,
        backgroundColor:"#3fb950",
        flexDirection:'row'

      }
})