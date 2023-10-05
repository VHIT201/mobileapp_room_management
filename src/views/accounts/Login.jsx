import { StyleSheet, Text, View,Dimensions,TouchableOpacity, StatusBar, TextInput,Image } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import { Icon, Center, HStack, NativeBaseProvider } from "native-base";
import { MaterialCommunityIcons, AntDesign, Entypo } from "@expo/vector-icons";
import { SSRProvider } from '@react-aria/ssr';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './Register';
import AsyncStorage from '@react-native-async-storage/async-storage';

StatusBar.setBackgroundColor('#3fb950')
const { height, width } = Dimensions.get('window');
const Login = ({navigation}) => {
    const [fontsLoaded] = useFonts({
       'openSansLight' : require('../../assets/fonts/OpenSans-Light.ttf'),
       'openSansMedium' : require('../../assets/fonts/OpenSans-Medium.ttf'),
       'openSansBold' : require('../../assets/fonts/OpenSans-Bold.ttf'),
       'openSansItalic' : require('../../assets/fonts/OpenSans-Italic.ttf'),
       'openSansRegular' : require('../../assets/fonts/OpenSans-Regular.ttf'),

    });
    
  return (
    <NativeBaseProvider style={{height:"100%",width:'100%'}}>
    <View style={styles.container}>
    
      <View style={styles.top}>
      <View style={{height:100,width:100,justifyContent:"center",alignItems:"center",overflow:'hidden',marginBottom:10}}>
        <Image style={{height:'100%',width:'100%'}} resizeMode='contain' source={require('../../assets/logos/VHlogo.png')}/>
      </View>
        <Text style={{color:'#f0f6fc',fontSize:16, fontFamily:"openSansBold"}}>Chào mừng bạn đến với</Text>
        <Text style={{color:'#f0f6fc',fontFamily:"openSansBold",fontSize:16}}>2H Home</Text>
        
      </View>

      <View style={styles.middle}>
        <View style={styles.boxTextinput}>
          <Icon as={Entypo} name='mail' color={'#f0f6fc'} size={'md'}/>
          <TextInput style={styles.textinput} placeholder='Email' placeholderTextColor={'#6e7681'} placeholderStyle={{fontFamily:'openSansMedium'}}>

          </TextInput>

        </View>
        <View style={styles.boxTextinput}>
          <Icon as={Entypo} name='lock' color={'#f0f6fc'} size={'md'}/>
          <TextInput style={styles.textinput} placeholder='Mật khẩu' placeholderTextColor={'#6e7681'} placeholderStyle={{fontFamily:'openSansMedium'}}>

          </TextInput>

        </View>
        
        <TouchableOpacity onPress={()=>navigation.navigate("MainTabNavigator")} style={{height:40,width:'100%',backgroundColor:"#3fb950",justifyContent:"center",alignItems:"center",borderRadius:6,marginTop:10}}>
          <Text style={{color:'#f0f6fc',fontFamily:'openSansBold'}} >Đăng nhập</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{fontFamily:'openSansRegular',textDecorationLine:'underline',color:'#f0f6fc'}}>Bạn quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <View style={{flexDirection:'row',height:20,width:'100%',justifyContent:'center'}}>
          <Text style={{fontFamily:'openSansRegula',color:"#f0f6fc"}}>Bạn chưa có tài khoản?  </Text>
          <TouchableOpacity onPress={()=>navigation.navigate(Register)}>
          <Text style={{fontFamily:'openSansRegula',color:"#3fb950",textDecorationLine:"underline"}}>Đăng ký ngay</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity >
        <Text style={{fontFamily:'openSansRegula',color:"#3fb950",textDecorationLine:"underline"}}>Hướng dẫn</Text>
        </TouchableOpacity>
      </View>
    </View>
    </NativeBaseProvider>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:"#30363d",
        paddingLeft:20,
        paddingRight:20
    },
    top:{
        height:'35%',
        width:"100%",
        justifyContent:'flex-end',
        alignItems:"center",
       
    
    },
    middle:{
        height:'38%',
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        gap:20
      
    },
    bottom:{
        height:'27%',
        width:"100%",
        justifyContent:'center',
        alignItems:"center",
        gap:10
       
    },
    textinput:{
      width:'100%',
      height:30,
      color:'#f0f6fc',
      fontFamily:'openSansMedium'
      
    },
    boxTextinput:{
      width:'100%',
      height:31,
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:"center",
      gap:10,
      borderBottomWidth:1,
      borderColor:'#3fb950'
    },
})