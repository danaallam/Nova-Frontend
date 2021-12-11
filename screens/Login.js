import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Keyboard,
} from "react-native";
import bg from "../assets/bg.jpg";
import {
  useFonts,
  HomemadeApple_400Regular,
} from "@expo-google-fonts/homemade-apple";

export default function Login({ navigation }) {
  const { width } = useWindowDimensions();
  const [fontsLoaded] = useFonts({
    HomemadeApple_400Regular,
  });

  if (!fontsLoaded) {
    return <></>;
  } else
    return (
      <View style={styles.container}>
        <ImageBackground
          source={bg}
          style={[styles.img, { width: width, height: width / 2 }]}
        />
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={[styles.txt, { width: width / 2 }]}
            placeholder="Email"
          />
          <TextInput
            style={[styles.txt, { width: width / 2 }]}
            placeholder="Password"
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>
          <View style={styles.innerView}>
            <Text style={styles.nav}>
              New to{" "}
              <Text
                style={{ fontFamily: "HomemadeApple_400Regular", fontSize: 10 }}
              >
                NOVA
              </Text>
              ?{" "}
            </Text>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.reg}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  img: {
    flex: 1,
  },
  innerContainer: {
    flex: 2,
    // justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    marginBottom: "5%",
    fontSize: 40,
  },
  btn: {
    backgroundColor: "black",
    padding: "2%",
    borderRadius: 10,
  },
  btnTxt: {
    color: "white",
  },
  innerView: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  txt: {
    marginBottom: "5%",
    borderWidth: 1,
    padding: "1%",
  },
  nav: {
    marginTop: "5%",
  },
  reg: {
    color: "fuchsia",
  },
  touch: {
    padding: "1.2%",
  },
});
