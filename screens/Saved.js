import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Animated } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";
import Url from "../components/Url";
import { JobContext } from "../contexts/JobContext";

export default Saved = () => {
  const [data, setData] = useState([]);
  const [rating, setRating] = useState("");
  const {
    state: { ref },
  } = useContext(JobContext);

  useEffect(async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + "api/user/save", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const d = await res.json();
    setData(d.savedCards);
  }, [rating, ref]);

  return (
    <View style={styles.container}>
      <Header text="Saved" />
      {data && data.length > 0 && (
        <Animated.FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card item={item} rating={rating} setRating={setRating} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
