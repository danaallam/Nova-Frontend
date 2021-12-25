import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  useWindowDimensions,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./GlobalStyle";
import profile from "../assets/profile.png";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Url from "./Url";

export default DesRegForm = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [nameError, setNameError] = useState(" ");
  const [emailError, setEmailError] = useState(" ");
  const [passError, setPassError] = useState(" ");
  const [profession, setProfession] = useState(" ");
  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
    setPhoto(pickerResult);
  };

  const register = async () => {
    console.log("ji");
    const body = new FormData();
    body.append("name", name);
    body.append("email", email.toLowerCase());
    body.append("password", password);
    body.append("profession", profession);
    if (photo != null) {
      body.append("profile", {
        name: "SampleFile.jpg",
        uri: photo.uri,
        type: "image/jpg",
      });
    }

    const res = await fetch(Url + "api/designer/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body,
    });
    const data = await res.json();
    console.log(data);
    if (data.access_token) {
      setName("");
      setEmail("");
      setProfession("");
      setPassword("");
      setSelectedImage(null);
      await AsyncStorage.setItem("token", data.access_token);
      await AsyncStorage.setItem("user", JSON.stringify(data.designer.id));
      // navigation.navigate("Account");
    } else {
      if (data.errors.email) {
        setEmailError(data.errors.email[0]);
      }
      if (data.errors.name) {
        setNameError(data.errors.name[0]);
      }
      if (data.errors.password) {
        setPassError(data.errors.password[0]);
      }
    }
    setTimeout(() => {
      setNameError(" ");
      setEmailError(" ");
      setPassError(" ");
    }, 2000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : ""}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.title}>Register</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ alignItems: "center" }}
          >
            <TouchableOpacity style={styles.img} onPress={openImagePickerAsync}>
              <Image
                source={
                  selectedImage ? { uri: selectedImage.localUri } : profile
                }
                style={[styles.img, { width: width / 4, height: width / 4 }]}
              />
            </TouchableOpacity>
            <TextInput
              value={name}
              onChangeText={(e) => setName(e)}
              style={[styles.txt, { width: width / 2 }]}
              placeholder="Name"
            />
            <Text style={styles.error}>{nameError}</Text>
            <TextInput
              value={email}
              onChangeText={(e) => setEmail(e)}
              style={[styles.txt, { width: width / 2 }]}
              placeholder="Email"
            />
            <Text style={styles.error}>{emailError}</Text>
            <TextInput
              value={profession}
              onChangeText={(e) => setProfession(e)}
              style={[styles.txt, { width: width / 2 }]}
              placeholder="Profession"
            />
            <Text style={styles.error}>{passError}</Text>
            <TextInput
              secureTextEntry
              value={password}
              onChangeText={(e) => setPassword(e)}
              style={[styles.txt, { width: width / 2 }]}
              placeholder="Password"
            />
            <Text style={styles.error}>{passError}</Text>
            <TouchableOpacity
              style={[styles.btn, { padding: "5%" }]}
              onPress={() => register()}
            >
              <Text style={styles.btnTxt}>Create account</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
