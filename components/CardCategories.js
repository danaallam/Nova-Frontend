import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default CardCategories = ({ categories }) => {
  return (
    <View style={styles.categoriesContainer}>
      {categories &&
        categories.map((cat, key) => (
          <View key={key} style={styles.categories}>
            <Text style={styles.txt}>{cat.category.name}</Text>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    paddingHorizontal: "4%",
    marginVertical: "1%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  categories: {
    paddingHorizontal: "2%",
    paddingVertical: "1%",
    marginVertical: "1%",
    borderRadius: 20,
    marginRight: "2%",
    backgroundColor: "#e6e3dc",
  },
  txt: {
    fontSize: 13,
    color: "gray",
  },
});
