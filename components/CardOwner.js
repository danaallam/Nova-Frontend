import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Url from "./Url";
import prof from "../assets/profile.png";

export default CardOwner = ({ designer, profile, width }) => {
  return (
    <View style={styles.imgContainer}>
      <Image
        style={[styles.img, { width: width / 10, height: width / 10 }]}
        source={
          profile != ""
            ? {
                uri: Url + profile,
              }
            : prof
        }
      />
      <Text style={styles.txt}>{designer}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "2%",
  },
  img: {
    borderWidth: 1,
    borderRadius: 200,
    marginRight: "1%",
  },
  txt: {
    fontWeight: "bold",
  },
});
