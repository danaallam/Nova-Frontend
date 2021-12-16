import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default CardDescription = ({ desc, applicants, open, lines }) => {
  return (
    <>
      <View
        style={{
          flexDirection: lines > 0 ? "row" : "column",
          marginRight: lines > 0 ? "7%" : 0,
          paddingHorizontal: lines > 0 ? "4%" : 0,
        }}
      >
        <Text numberOfLines={lines} ellipsizeMode="tail" selectable>
          {desc}
        </Text>
        {lines > 0 && (
          <TouchableOpacity style={styles.nav} onPress={() => open()}>
            <Text style={styles.more}> more</Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={[
          styles.applicants,
          {
            marginHorizontal: lines > 0 ? "4%" : "1%",
            alignSelf: "flex-start",
          },
        ]}
      >
        <FontAwesome name="users" size={15} color="black" />
        <Text style={{color: applicants>0 ? "green" : "gray"}}>
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
  applicants: {
    flexDirection: "row",
  },
  nav: {
    alignSelf: "flex-end",
  },
  more: {
    color: "gray",
  },
});
