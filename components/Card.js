import React, { useEffect, useState } from "react";
import { View, useWindowDimensions, StyleSheet } from "react-native";
import CardPosts from "./CardPosts";
import CardDescription from "./CardDescription";
import CardOwner from "./CardOwner";
import Application from "./Application";

export default Card = ({ item }) => {
  const { width } = useWindowDimensions();
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [desc, setDesc] = useState("");
  const [applicants, setApplicants] = useState("");
  const [rating, setRating] = useState("");
  const [designer, setDesigner] = useState("");
  const [profile, setProfile] = useState("");
  const [profession, setProfession] = useState("");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setPosts(item.posts);
    setCategories(item.categories);
    setDesc(item.description);
    setApplicants(item.applicants);
    setDesigner(item.designer.name);
    setProfile(item.designer.profile);
    setProfession(item.designer.profession);
    setRating(item.designer.rating);
  }, []);

  const open = () => {
    setVisible(true);
  };

  return (
    <View style={styles.container}>
      <Application
        visible={visible}
        setVisible={setVisible}
        width={width}
        posts={posts}
        designer={designer}
        applicants={applicants}
        desc={desc}
        profession={profession}
        profile={profile}
        rating={rating}
      />
      <CardOwner designer={designer} profile={profile} width={width} />
      <CardPosts posts={posts} width={width} open={open} />
      <CardDescription
        applicants={applicants}
        desc={desc}
        open={open}
        lines={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginBottom: "5%",
  },
});
