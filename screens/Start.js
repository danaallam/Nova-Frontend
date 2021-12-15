import React, { useEffect, useRef } from "react";
import {
  Image,
  StyleSheet,
  Animated,
  useWindowDimensions,
  Text,
} from "react-native";
import Logo from "../assets/logo.png";
import {
  useFonts,
  HomemadeApple_400Regular,
} from "@expo-google-fonts/homemade-apple";
import Url from "../components/Url";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default Start = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const fade = useRef(new Animated.Value(0)).current;
  const [fontsLoaded] = useFonts({
    HomemadeApple_400Regular,
  });

  useEffect(async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + "api/user/checkToken", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();
    Animated.timing(fade, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      if (result.status == 200) navigation.navigate("Account");
      else navigation.navigate("Login");
    }, 3500);
  }, []);

  if (!fontsLoaded) {
    return <></>;
  } else {
    return (
      <Animated.View
        style={[
          styles.container,
          {
            opacity: fade,
          },
        ]}
      >
        <Image source={Logo} style={{ width }} />
        <Text style={[styles.txt, { fontFamily: "HomemadeApple_400Regular" }]}>
          N O V A
        </Text>
      </Animated.View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 30,
    color: "#464a46",
  },
});
