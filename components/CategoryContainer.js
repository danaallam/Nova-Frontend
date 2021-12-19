import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Animated } from "react-native";
import Category from "./Category";

export default CategoryContainer = ({ categories, Url, setData }) => {
  const [perc, setPerc] = useState([]);

  useEffect(async () => {
    if (perc.length > 0) {
      const body = new FormData();
      const token = await AsyncStorage.getItem("token");
      perc.forEach((e) => {
        body.append("category[]", e);
      });
      const res = await fetch(Url + "api/user/filter", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      });
      const d = await res.json();
      setData(d.cards);
    }
  }, [perc]);

  const handlePec = (value) => {
    let ind = perc.indexOf(value);
    if (ind == -1) setPerc((prev) => [...prev, value]);
    else {
      setPerc((prev) => [
        ...prev.slice(0, ind),
        ...prev.slice(ind + 1, prev.length),
      ]);
    }
    console.log(perc);
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        style={styles.flatList}
        horizontal={true}
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Category
            photo={item.photo}
            name={item.name}
            id={item.id}
            Url={Url}
            handlePec={handlePec}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  flatList: {
    marginVertical: "2%",
    marginHorizontal: "1%",
  },
});
