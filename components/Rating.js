import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Button from "./Button";
import Url from "./Url";

export default Rating = ({
  designer,
  designerId,
  star,
  setStar,
  width,
  setShow,
  setEna,
  setRating,
}) => {
  const addRating = async () => {
    if (star + 1 > 0) {
      const body = new FormData();
      const token = await AsyncStorage.getItem("token");
      const id = await AsyncStorage.getItem("user");
      body.append("rating", star + 1);
      body.append("freelancer_id", JSON.parse(id));
      body.append("designer_id", designerId);
      const res = await fetch(Url + "api/user/rating", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      });
      setRating((prev) => (prev + star + 1) / 2);
      setEna(true);
    }
    setShow(false);
  };

  const close = () => {
    setShow(false);
  };

  return (
    <View
      style={[
        styles.container,
        {
          width: width - (20 * width) / 100,
          height: width - (20 * width) / 100,
          top: width - (25 * width) / 100,
        },
      ]}
    >
      <TouchableOpacity style={styles.close} onPress={() => close()}>
        <Ionicons name="close-circle" size={28} color="black" />
      </TouchableOpacity>
      <Text style={styles.txt}>Tell us about your work with {designer}!</Text>
      <View style={styles.star}>
        {[...Array(5)].map((_, key) => (
          <TouchableOpacity
            key={key}
            onPress={() => {
              if (star == key) {
                setStar(-1);
              } else {
                setStar(key);
              }
            }}
            style={styles.rating}
          >
            <Ionicons
              key={key}
              name={key > star ? "star-outline" : "star"}
              size={20}
              color="gold"
            />
          </TouchableOpacity>
        ))}
      </View>
      <Button title="Done" onPress={addRating} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  star: { flexDirection: "row" },
  rating: { paddingHorizontal: 1, marginBottom: "5%" },
  txt: { fontSize: 16, marginBottom: "5%" },
  close: {
    position: "absolute",
    alignSelf: "flex-end",
    top: "2%",
    right: "2%",
  },
});
