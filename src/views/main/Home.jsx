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

const Home = () => {
  const [fontsLoaded] = useFonts({
    openSansLight: require("../../assets/fonts/OpenSans-Light.ttf"),
    openSansMedium: require("../../assets/fonts/OpenSans-Medium.ttf"),
    openSansBold: require("../../assets/fonts/OpenSans-Bold.ttf"),
    openSansItalic: require("../../assets/fonts/OpenSans-Italic.ttf"),
    openSansRegular: require("../../assets/fonts/OpenSans-Regular.ttf"),
  });

  return (
    <NativeBaseProvider style={{height:'100%',width:"100%"}}>
      <View style={styles.container}>
        <View style={styles.rectangle1}>
          <View
            style={{
              flexDirection: "row",
              height: "50%",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "2%",
              }}
            >
              <Text
                style={{
                  color: "#f0f6fc",
                  fontFamily: "openSansRegular",
                  fontSize: 11,
                }}
              >
                Số khu
              </Text>
              <Text
                style={{
                  color: "#f0f6fc",
                  fontFamily: "openSansRegular",
                  fontSize: 11,
                }}
              >
                5
              </Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "2%",
              }}
            >
              <Text
                style={{
                  color: "#f0f6fc",
                  fontFamily: "openSansRegular",
                  fontSize: 11,
                }}
              >
                Số người thuê
              </Text>
              <Text
                style={{
                  color: "#f0f6fc",
                  fontFamily: "openSansRegular",
                  fontSize: 11,
                }}
              >
                0
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              height: "50%",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
              paddingBottom: "2%",
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  color: "#f0f6fc",
                  fontFamily: "openSansRegular",
                  fontSize: 11,
                }}
              >
                Số phòng
              </Text>
              <Text
                style={{
                  color: "#f0f6fc",
                  fontFamily: "openSansRegular",
                  fontSize: 11,
                }}
              >
                0
              </Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  color: "#f0f6fc",
                  fontFamily: "openSansRegular",
                  fontSize: 11,
                }}
              >
                Số phòng trống
              </Text>
              <Text
                style={{
                  color: "#f0f6fc",
                  fontFamily: "openSansRegular",
                  fontSize: 11,
                }}
              >
                0
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.rectangle2}>
          <View style={styles.rectangle2_list}>
            <TouchableOpacity style={styles.btn}>
              <Image
                style={{ height: "30%", width: "30%" }}
                resizeMode="cover"
                source={require("../../assets/logos/light-bulb.png")}
              />
              <Text style={styles.btnText}>Dịch vụ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Image
                style={{ height: "30%", width: "30%" }}
                resizeMode="cover"
                source={require("../../assets/logos/water-meter.png")}
              />
              <Text style={styles.btnText}>Chốt điện nước</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Image
                style={{ height: "30%", width: "30%" }}
                resizeMode="cover"
                source={require("../../assets/logos/bill.png")}
              />
              <Text style={styles.btnText}>Hoá đơn</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rectangle2_list}>
            <TouchableOpacity style={styles.btn}>
              <Image
                style={{ height: "30%", width: "30%" }}
                resizeMode="cover"
                source={require("../../assets/logos/users.png")}
              />
              <Text style={styles.btnText}>Người thuê</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Image
                style={{ height: "30%", width: "30%" }}
                resizeMode="cover"
                source={require("../../assets/logos/warning.png")}
              />
              <Text style={styles.btnText}>Sự cố</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Image
                style={{ height: "30%", width: "30%" }}
                resizeMode="cover"
                source={require("../../assets/logos/handshake.png")}
              />
              <Text style={styles.btnText}>Hợp đồng</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rectangle2_list}>
            <TouchableOpacity style={styles.btn}>
              <Image
                style={{ height: "30%", width: "30%" }}
                resizeMode="cover"
                source={require("../../assets/logos/money-bag.png")}
              />
              <Text style={styles.btnText}>Tiền cọc</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Image
                style={{ height: "30%", width: "30%" }}
                resizeMode="cover"
                source={require("../../assets/logos/sign.png")}
              />
              <Text style={styles.btnText}>Sổ nợ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Image
                style={{ height: "30%", width: "30%" }}
                resizeMode="cover"
                source={require("../../assets/logos/deal.png")}
              />
              <Text style={styles.btnText}>Đẩy phòng</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rectangle2_list}>
            <TouchableOpacity style={styles.btn}>
              <Image
                style={{ height: "30%", width: "30%" }}
                resizeMode="cover"
                source={require("../../assets/logos/interrogation.png")}
              />
              <Text style={styles.btnText}>Hướng dẫn</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.circle}>
          <View style={{}}>
            <Text style={{ fontFamily: "openSansMedium", color: "#f0f6fc" }}>
              Xin chào
            </Text>
            <Text
              style={{
                fontFamily: "openSansBold",
                color: "#f0f6fc",
                fontSize: 16,
              }}
            >
              Phạm Văn Hoàng
            </Text>
          </View>

          <TouchableOpacity>
            <Icon
              as={MaterialIcons}
              name="settings"
              size={"lg"}
              color={"#f0f6fc"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#30363d",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent:"flex-start"
  },
  circle: {
    position: "absolute",
    height: '90%',
    width: '158%',
    borderRadius: 300,
    backgroundColor: "#3fb950",
    top: "-64%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    paddingBottom: "14%",
    zIndex: 2,
    gap: 70,
  },
  rectangle1: {
    height: "14%",
    width: "90%",
    backgroundColor: "#30363d",
    // backgroundColor:"pink",
    position: "absolute",
    zIndex: 4,
    top: "16%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.4,
    borderColor: "#3fb950",
  },
  rectangle2: {
    height: "65%",
    width: "90%",
    backgroundColor: "#30363d",
    // backgroundColor:"pink",
    position: "absolute",
    zIndex: 4,
    bottom: "3%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.4,
    // borderColor: "#3fb950",
    elevation:0.4,
    paddingTop: "10%",
    paddingBottom: "10%",
    gap: 5,
  },
  rectangle2_list: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 5,
    // borderWidth:1,
    // borderColor:'white',
    height: "28%",
  },

  btn: {
    height: "100%",
    width: "30%",
    // borderWidth:1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    gap: 5,
  },
  btnText: {
    fontSize: 12,
    color: "#f0f6fc",
    fontFamily: "openSansRegular",
  },
});
