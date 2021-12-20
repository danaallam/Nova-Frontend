import React, { useState } from "react";
import { Platform, View, Image } from "react-native";
import Header from "../components/Header";
import * as DocumentPicker from "expo-document-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Url from "../components/Url";

export default Profile = () => {
  const [file, setFile] = useState("");
  const [cv, setCv] = useState("");

  const uploadResume = async () => {
    const permissionResult = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });
    if (permissionResult.type == "success") {
      setFile(permissionResult.name);
      setCv(permissionResult);
    } else {
      return;
    }
  };

  const saveResume = async () => {
    const token = await AsyncStorage.getItem("token");
    const body = new FormData();
    body.append("resume", {
      name: file,
      uri: Platform.OS === "ios" ? cv.uri.replace("file://", "") : cv.uri,
      type: "application/pdf",
    });
    const res = await fetch(Url + "api/user/setResume", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body,
    });
    const data = await res.json();
    await AsyncStorage.setItem("resume", data.user.resume);
  };

  return (
    <View>
      <Header text="Profile" />
      {/* <Image
        style={[styles.img, { width: width / 3, height: width / 3 }]}
        source={
          profile != ""
            ? {
                uri: Url + profile,
              }
            : prof
        }
      /> */}
    </View>
  );
};
