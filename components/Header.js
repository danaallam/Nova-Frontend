import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Text, View, StyleSheet, useWindowDimensions } from "react-native";

export default Header = ({ text }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.header, { width, height: width / 4.5 }]}>
      <Entypo name="menu" size={28} style={styles.burger} />

      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    borderBottomWidth: 1,
    borderColor: "#dfe1e5",
    paddingVertical: "2%",
    marginBottom: "1%",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  burger: {
    position: "absolute",
    bottom: "5%",
    left: "5%",
  },
});
