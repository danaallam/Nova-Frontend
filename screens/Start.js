import React, { useEffect, useRef, useState } from "react";
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

export default function Start({ navigation }) {
  const { width } = useWindowDimensions();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [fontsLoaded] = useFonts({
    HomemadeApple_400Regular,
  });

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      navigation.navigate("Login");
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
            opacity: fadeAnim,
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
}

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
