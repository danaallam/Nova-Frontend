import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import CardCategories from "./CardCategories";

export default CardDescription = ({
  desc,
  applicants,
  open,
  lines,
  setLines,
  categories,
}) => {
  const more = () => {
    setLines(0);
  };

  const less = () => {
    setLines(2);
  };

  return (
    <>
      <View style={styles.applicants}>
        <FontAwesome name="users" size={15} color="black" />
        <Text style={{ color: applicants > 0 ? "green" : "gray" }}>
          {" "}
          {applicants == 1
            ? applicants + " applicant"
            : applicants + " applicants"}
        </Text>
      </View>
      <View
        style={[
          styles.container,
          {
            flexDirection: lines > 0 ? "row" : "column",
            paddingRight: lines > 0 ? "15%" : 0,
          },
        ]}
      >
        <Text numberOfLines={lines} ellipsizeMode="tail" selectable>
          {desc}
        </Text>
        {lines > 0 && (
          <TouchableOpacity style={styles.nav} onPress={() => more()}>
            <Text style={styles.more}> more</Text>
          </TouchableOpacity>
        )}
        {open && lines == 0 && (
          <TouchableOpacity style={styles.nav} onPress={() => less()}>
            <Text style={styles.more}> less</Text>
          </TouchableOpacity>
        )}
      </View>
      <CardCategories categories={categories} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: "4%",
    alignSelf: "flex-start",
  },
  applicants: {
    flexDirection: "row",
    marginTop: "1%",
    paddingHorizontal: "4%",
    alignSelf: "flex-start",
  },
  nav: {
    alignSelf: "flex-end",
  },
  more: {
    color: "gray",
  },
});
