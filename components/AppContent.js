import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
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
  rating,
}) => {
  return (
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
          {[...Array(rating)].map((s, key) => (
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
        <CardDescription applicants={applicants} desc={desc} lines={0} />
        <Button title="Submit Resume" />
        <Button title="Cover Letter" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    // flex: 1,
    alignItems: "center",
    marginTop: "7%",
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
});
