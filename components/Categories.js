import React, { useState, useContext, useEffect } from "react";
import { View, Animated } from "react-native";
import Category from "./Category";
import { DesContext } from "../contexts/DesContext";

export default Categories = ({ Url }) => {
  const [perc, setPerc] = useState([]);
  const {
    state: { categories },
    actions: { getCategories },
  } = useContext(DesContext);

  useEffect(async () => {
    await getCategories();
  }, []);

  const handlePec = (value) => {
    let ind = perc.indexOf(value);
    if (ind == -1) setPerc((prev) => [...prev, value]);
    else {
      setPerc((prev) => [
        ...prev.slice(0, ind),
        ...prev.slice(ind + 1, prev.length),
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        style={styles.flatList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
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
