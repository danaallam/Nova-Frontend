import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "black",
    paddingHorizontal: "5%",
    paddingVertical: "2%",
    borderRadius: 30,
    marginBottom: "2%",
  },
  txt: {
    fontSize: 17,
    color: "white",
  },
});
