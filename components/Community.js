import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Image,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import Url from "./Url";
import prof from "../assets/profile.png";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import Pdf from "./Pdf";

export default Community = ({ item }) => {
  const [open, setOpen] = useState(false);

  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { height: width / 4 }]}>
      <Pdf visible={open} setVisible={setOpen} resume={item.resume} Url={Url} />

      <View style={styles.info}>
        <View style={styles.content}>
          <Image
            style={[styles.img, { width: width / 5, height: width / 5 }]}
            source={
              item.profile
                ? {
                    uri: Url + item.profile,
                  }
                : prof
            }
          />
          <View style={styles.txt}>
            <Text style={styles.name}>{item.name}</Text>
            <TouchableOpacity
              style={styles.link}
              onPress={() => Linking.openURL(item.link)}
            >
              <EvilIcons name="sc-pinterest" size={24} color="red" />
              <Text style={styles.email}>{item.email}</Text>
            </TouchableOpacity>
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
    backgroundColor: "#f7f5f5",
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
    paddingHorizontal: "2%",
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
    marginLeft: "3%",
  },
  email: {
    fontSize: 12,
    color: "blue",
  },
  pdf: {
    alignSelf: "center",
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
  },
});
