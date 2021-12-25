import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import {
  useFonts,
  HomemadeApple_400Regular,
} from "@expo-google-fonts/homemade-apple";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Register from "../screens/Register";
import Url from "./Url";
import styles from "./GlobalStyle";

export default LoginForm = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(" ");
  const [fontsLoaded] = useFonts({
    HomemadeApple_400Regular,
  });

  const login = async () => {
    const body = new FormData();
    body.append("email", email.toLowerCase());
    body.append("password", password);
    const res = await fetch(Url + "api/user/login", {
      method: "POST",
      body,
    });
    const data = await res.json();
    if (data.access_token) {
      setEmail("");
      setPassword("");
      await AsyncStorage.setItem("token", data.access_token);
      await AsyncStorage.setItem("user", JSON.stringify(data.user.id));
      navigation.navigate("Account");
    } else {
      setError(data.error);
      setTimeout(() => {
        setError(" ");
      }, 1500);
    }
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Register visible={visible} setVisible={setVisible} />
        <Text style={styles.title}>Login</Text>
        <TextInput
          value={email}
          onChangeText={(e) => setEmail(e)}
          style={[styles.txt, { width: width / 2 }]}
          placeholder="Email"
        />
        <TextInput
          secureTextEntry={true}
          value={password}
          onChangeText={(e) => setPassword(e)}
          style={[styles.txt, { width: width / 2 }]}
          placeholder="Password"
        />
        <Text style={styles.error}>{error}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => login()}>
          <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>
        <View style={styles.innerView}>
          <Text style={styles.nav}>
            New to <Text>NOVA</Text>?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.reg}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else
    return (
      <View style={styles.container}>
        <Register visible={visible} setVisible={setVisible} />
        <Text style={styles.title}>Login</Text>
        <TextInput
          value={email}
          onChangeText={(e) => setEmail(e)}
          style={[styles.txt, { width: width / 2 }]}
          placeholder="Email"
        />
        <TextInput
          value={password}
          secureTextEntry={true}
          onChangeText={(e) => setPassword(e)}
          style={[styles.txt, { width: width / 2 }]}
          placeholder="Password"
        />
        <Text style={styles.error}>{error}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => login()}>
          <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>
        <View style={styles.innerView}>
          <Text style={styles.nav}>
            New to{" "}
            <Text
              style={{
                fontFamily: "HomemadeApple_400Regular",
                fontSize: 10,
              }}
            >
              NOVA
            </Text>
            ?{" "}
          </Text>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => setVisible(true)}
          >
            <Text style={styles.reg}>Register</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text>Login as Designer</Text>
        </TouchableOpacity>
      </View>
    );
};
