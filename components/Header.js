import React from "react";
import { Text, View, StyleSheet, useWindowDimensions } from "react-native";

export default Header = ({ text }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.header, { width, height: width / 4.5 }]}>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#dfe1e5",
    paddingVertical: "2%",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
