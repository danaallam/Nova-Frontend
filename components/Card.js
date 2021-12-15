import React, { useEffect, useState } from "react";
import { View, useWindowDimensions, StyleSheet } from "react-native";
import CardPosts from "./CardPosts";
import CardDescription from "./CardDescription";
import CardOwner from "./CardOwner";

export default Card = ({ item }) => {
  const { width } = useWindowDimensions();
  const [posts, setPosts] = useState([]);
  const [desc, setDesc] = useState("");
  const [applicants, setApplicants] = useState("");
  const [designer, setDesigner] = useState("");
  const [profile, setProfile] = useState("");

  useEffect(() => {
    setPosts(item.posts);
    setDesc(item.description);
    setApplicants(item.applicants);
    setDesigner(item.designer.name);
    setProfile(item.designer.profile);
  }, []);

  return (
    <View style={styles.container}>
      <CardOwner designer={designer} profile={profile} width={width} />
      <CardPosts posts={posts} width={width} />
      <CardDescription applicants={applicants} desc={desc} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginBottom: "5%",
  },
});
