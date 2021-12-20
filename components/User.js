import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import Url from "./Url";
import prof from "../assets/profile.png";
import { AntDesign } from "@expo/vector-icons";

import { WebView } from "react-native-webview";
import Pdf from "./Pdf";

export default User = ({ resume, name, email, profile, navigation }) => {
  const [open, setOpen] = useState(false);

  const { width } = useWindowDimensions();

  useEffect(() => {
    // console.log(resume);
    // console.log(name);
    // console.log(email);
    // console.log(profile);
  }, []);

  return (
    <View style={[styles.container, { height: width / 4 }]}>
      <Pdf visible={open} setVisible={setOpen} resume={resume} Url={Url} />

      {/* <WebView style={{flex:1}}
        source={{
          uri: Url + resume,
        }}
      /> */}
      <View style={styles.info}>
        <View style={styles.content}>
          <Image
            style={[styles.img, { width: width / 5, height: width / 5 }]}
            source={
              profile
                ? {
                    uri: Url + profile,
                  }
                : prof
            }
          />
          <View style={styles.txt}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.pdf}
          onPress={() => {
            setOpen(true);
          }}
        >
          <AntDesign name="pdffile1" size={50} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#dfe1e5",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: "2%",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    borderWidth: 1,
    borderRadius: 70,
    backgroundColor: "white",
  },
  txt: {
    marginLeft: "1%",
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
  },
  email: {
    fontSize: 12,
  },
  pdf: {
    alignSelf: "center",
  },
});
