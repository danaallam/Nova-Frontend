import React, { useState } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";

export default AddPost = () => {
  const { width } = useWindowDimensions();
  const [desc, setDesc] = useState("");

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
  };

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={Keyboard.dismiss}
    >
      <View style={styles.container}>
        <View style={styles.contain}>
          <AntDesign
            name="cloudupload"
            size={80}
            color="black"
            onPress={openImagePickerAsync}
          />
          <Text>Upload photos</Text>
        </View>

        <TextInput
          placeholder="  Add description"
          style={[styles.textArea, { height: width / 5 }]}
          multiline={true}
          onChangeText={(text) => setDesc(text)}
          value={desc}
        />
        <TouchableOpacity style={styles.done}>
          <Text style={styles.btnText}>Done</Text>
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
  contain: { marginTop: "25%", alignItems: "center", marginBottom: "20%" },
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
    top: "10%",
  },
  btnText: {
    color: "white",
    fontSize: 17,
  },
});
