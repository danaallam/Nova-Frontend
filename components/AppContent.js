import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import prof from "../assets/profile.png";
import Button from "./Button";
import CardDescription from "./CardDescription";
import CardPosts from "./CardPosts";
import Url from "./Url";

export default AppContent = ({
  posts,
  designer,
  desc,
  applicants,
  profession,
  profile,
  width,
  categories,
  rating,
  accepted,
  setShow,
}) => {
  const open = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Image
            style={[styles.img, { width: width / 3, height: width / 3 }]}
            source={
              profile != ""
                ? {
                    uri: Url + profile,
                  }
                : prof
            }
          />
          <Text style={styles.designer}>{designer}</Text>
          <Text style={styles.designer}>{profession}</Text>
          <View style={styles.rating}>
            {[...Array(rating)].map((_, key) => (
              <Ionicons
                key={key}
                name="star"
                size={15}
                color="gold"
                style={styles.empty}
              />
            ))}
            {[...Array(5 - rating)].map((s, key) => (
              <Ionicons
                key={key}
                name="star-outline"
                size={15}
                color="gold"
                style={styles.empty}
              />
            ))}
          </View>
          <CardPosts posts={posts} width={width} open={() => {}} />
          <CardDescription
            applicants={applicants}
            desc={desc}
            lines={0}
            categories={categories}
          />
          {accepted == 0 ? (
            <>
              <Button title="Submit Resume" onPress={() => {}} />
              <Button title="Cover Letter" onPress={() => {}} />
            </>
          ) : (
            <Button title="Done" onPress={open} />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "7%",
    marginBottom: "4%",
  },
  contentContainer: {
    alignItems: "center",
  },
  img: {
    borderRadius: 100,
  },
  designer: {
    fontSize: 16,
  },
  rating: {
    flexDirection: "row",
    marginBottom: "5%",
  },
  empty: {
    paddingHorizontal: 1,
  },
});
