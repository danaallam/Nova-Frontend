import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import Categories from "../components/Categories";
import Url from "../components/Url";
// import { ImageBrowser } from "expo-image-picker-multiple";
// import CameraRollPicker from 'react-native-camera-roll-picker';
// import ImageCropPicker from "react-native-image-crop-picker";

export default CreateJob = () => {
  // const [photo, setPhoto] = useState(null);
  // const [selectedImage, setSelectedImage] = useState(null);
  const { width, height } = useWindowDimensions();
  const [openIm, setOpenIm] = useState(false);
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [items, setItems] = useState([]);
  const [prof, setProf] = useState("");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState("");

  // const handleBack = () => {
  //   route.params.setBk((prev) => {
  //     return prev + 1;
  //   });
  //   navigation.navigate("Profile");
  // };

  useEffect(() => {
    //   if (cat1.length > 0 && cat2.length > 0 && cat3.length > 0) {
    //     ind1 = items
    //       .map((e) => {
    //         return e.value;
    //       })
    //       .indexOf(cat1[0].value);
    //     ind2 = items
    //       .map((e) => {
    //         return e.value;
    //       })
    //       .indexOf(cat2[0].value);
    //     ind3 = items
    //       .map((e) => {
    //         return e.value;
    //       })
    //       .indexOf(cat3[0].value);
    //     console.log(ind1);
    //     items.splice(ind1, 1);
    //     items.splice(ind2, 1);
    //     items.splice(ind3, 1);
    //   }
    //   console.log(value);
    // console.log(ImageCropPicker);
  }, []);

  // const post = async () => {
  //   const token = await AsyncStorage.getItem("token");
  //   const formData = new FormData();
  //   formData.append("profile", {
  //     name: "SampleFile.jpg", // Whatever your filename is
  //     uri: photo.uri,
  //     type: "image/jpg", // video/mp4 for videos..or image/png etc...
  //   });
  //   const res = await fetch(Url + "api/setProf", {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: formData,
  //   });
  //   const d = await res.json();
  //   setOpenIm(false);
  //   alert(d.message);
  // };

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
          onPress={() => post()}
          disabled={openIm ? false : true}
          style={[styles.button, { backgroundColor: openIm ? "blue" : "gray" }]}
        >
          <Text style={styles.buttonText}>Update profile</Text>
        </TouchableOpacity>

        <TextInput
          placeholder="  Add description"
          style={[styles.textArea, { height: width / 5 }]}
          multiline={true}
          onChangeText={(text) => setDesc(text)}
          value={desc}
        />
        <Text>Choose job categories</Text>
        <Categories Url={Url} />
        <TouchableOpacity
          style={styles.done}
          // onPress={async () => {
          //   await reject(uid, cardId);
          //   setRef((prev) => prev + 1);
          //   setOpenInfo(false);
          // }}
        >
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

//   let openImagePickerAsync = async () => {
//     let permissionResult =
//       await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if (permissionResult.granted === false) {
//       alert("Permission to access camera roll is required!");
//       return;
//     }

//     let pickerResult = await ImagePicker.launchImageLibraryAsync();

//     if (pickerResult.cancelled === true) {
//       return;
//     }
//     setSelectedImage({ localUri: pickerResult.uri });
//     setPhoto(pickerResult);
//   };

//   useEffect(() => {
//     // ImagePicker.openCamera({
//     //   cropping: cropping,
//     //   width: 500,
//     //   height: 500,
//     //   includeExif: true,
//     //   mediaType,
//     // }).then((img) => {
//     //   console.log(img);
//     // });
//   }, []);

//   return (
//     <View style={styles.container}>
//       {/* <ImageBrowser
//         max={4}
//         onChange={(num, onSubmit) => {}}
//         callback={(callback) => {}}
//       /> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   imgContainer: {},
// });
