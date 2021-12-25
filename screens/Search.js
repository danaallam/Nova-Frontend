import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, View, Animated } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CategoryContainer from "../components/CategoryContainer";
import { JobContext } from "../contexts/JobContext";
import Card from "../components/Card";
import Url from "../components/Url";

export default Search = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const {
    state: { allJobs, rating, ref },
    actions: { getAllJobs, setRating, setAllJobs },
  } = useContext(JobContext);

  useEffect(async () => {
    await getAllJobs();
  }, [rating, ref]);

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
        setData={setAllJobs}
      />
      <Animated.FlatList
        data={allJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card item={item} rating={rating} setRating={setRating} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
