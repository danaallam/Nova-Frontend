import React, { useState } from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default Category = ({ Url, photo, name, handlePec, id }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.imgContainer,
          { backgroundColor: pressed ? "#c4bab9" : "white" },
        ]}
        onPress={() => {
          handlePec(id);
          setPressed(!pressed);
        }}
      >
        <Image
          style={styles.img}
          source={{
            uri: Url + photo,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.txt}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  imgContainer: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#c4bab9",
    padding: "5%",
  },
  img: { width: 50, height: 50 },
  txt: {
    fontSize: 11,
    fontWeight: "bold",
  },
});
