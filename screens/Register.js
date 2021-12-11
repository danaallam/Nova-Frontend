import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
        <Text style={styles.txt}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    marginTop: "1%",
    backgroundColor: "black",
    padding: 5,
  },
  txt: {
    color: "white",
  },
});
