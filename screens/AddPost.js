import React, { useState } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import Url from "../components/Url";

export default AddPost = () => {
  const { width, height } = useWindowDimensions();
  const [openIm, setOpenIm] = useState(false);
  const [prof, setProf] = useState("");
  const [photo, setPhoto] = useState("");

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
    setOpenIm(true);
    setPhoto(pickerResult);
  };

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={Keyboard.dismiss}
    >
      <View style={styles.container}>
        <View style={styles.contain}>
          <Image
            source={
              selectedImage == null
                ? prof
                  ? { uri: Url + prof }
                  : require("../assets/profile.png")
                : { uri: selectedImage.localUri }
            }
            style={[
              styles.pic,
              {
                width: width / 2,
                height: width / 2,
              },
            ]}
          />
          <MaterialIcons
            name="edit"
            onPress={openImagePickerAsync}
            size={25}
            color="black"
            style={{ position: "absolute", top: 0, right: width / 3 }}
          />
        </View>

        <TouchableOpacity
          onPress={() => {}}
          disabled={openIm ? false : true}
          style={[styles.button, { backgroundColor: openIm ? "blue" : "gray" }]}
        >
          <Text style={styles.buttonText}>Update profile</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: "3%",
  },
  button: {
    marginTop: "5%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 5,
  },
  pic: { borderRadius: 200, borderColor: "#05336a", borderWidth: 2 },
  buttonText: {
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
  },
  contain: { marginTop: "5%", alignItems: "center" },
  textArea: {
    marginVertical: "5%",
    backgroundColor: "#f7f5f5",
    paddingHorizontal: "3%",
  },
  done: {
    backgroundColor: "black",
    padding: "3%",
    borderRadius: 20,
    alignSelf: "center",
    marginTop: "20%",
  },
  btnText: {
    color: "white",
    fontSize: 17,
  },
});
