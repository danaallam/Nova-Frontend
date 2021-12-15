import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default CardDescription = ({ desc, applicants }) => {
  return (
    <>
      <View style={styles.descContainer}>
        <Text numberOfLines={2} ellipsizeMode="tail" selectable>
          {desc}
        </Text>
        <TouchableOpacity style={styles.nav}>
          <Text style={styles.more}> more</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.descContainer}>
        <FontAwesome name="users" size={15} color="black" />
        <Text style={styles.more}>
          {" "}
          {applicants == 1
            ? applicants + " applicant"
            : applicants + " applicants"}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  descContainer: {
    flexDirection: "row",
    paddingHorizontal: "4%",
    marginRight: "7%",
    // justifyContent: "space-between",
  },
  nav: {
    alignSelf: "flex-end",
  },
  more: {
    color: "gray",
  },
});
