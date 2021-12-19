import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput, Animated } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CategoryContainer from "../components/CategoryContainer";
import Url from "../components/Url";
import Card from "../components/Card";

export default Search = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const [rating, setRating] = useState("");

  useEffect(async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + "api/user/card", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const d = await res.json();
    setData(d.cards);
    console.log("id", data[0].id);
  }, [rating]);

  useEffect(async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + "api/user/categories", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const d = await res.json();
    setCategories(d.category);
  }, []);

  return (
    <View style={styles.container}>
      <CategoryContainer
        categories={categories}
        Url={Url}
        setData={setData}
      />
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
