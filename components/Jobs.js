import React, { useEffect, useState } from "react";
import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import CardPosts from "./CardPosts";
import CardDescription from "./CardDescription";
import CardOwner from "./CardOwner";
import Application from "./Application";
import Users from "./Users";

export default Jobs = ({ item, rating, setRating }) => {
  const { width } = useWindowDimensions();
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [desc, setDesc] = useState("");
  const [applicants, setApplicants] = useState("");
  const [designer, setDesigner] = useState("");
  const [profile, setProfile] = useState("");
  const [profession, setProfession] = useState("");
  const [visible, setVisible] = useState(false);
  const [lines, setLines] = useState(2);
  const [cardId, setCardId] = useState(0);
  const [designerId, setDesignerId] = useState(0);
  const [save, setSave] = useState(-1);
  const [accepted, setAccepted] = useState(-1);
  const [applied, setApplied] = useState(-1);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // setCardId(item.id);
    // setDesignerId(item.designer.id);
    // setSave(item.saved);
    // setAccepted(item.accepted);
    // setApplied(item.applied);
    setPosts(item.posts);
    setCategories(item.categories);
    setDesc(item.description);
    setApplicants(item.applicants);
    setUsers(item.users);
    // setDesigner(item.designer.name);
    // setProfile(item.designer.profile);
    // setProfession(item.designer.profession);
    // setRating(item.designer.rating);
  }, []);

  const open = () => {
    setVisible(true);
  };

  return (
    <View style={styles.container}>
      <Users visible={visible} setVisible={setVisible} users={users} />
      <CardPosts posts={posts} width={width} open={open} />
      <CardDescription
        categories={categories}
        applicants={applicants}
        desc={desc}
        open={open}
        setLines={setLines}
        lines={lines}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: "5%",
    borderTopWidth: 1,
    borderColor: "#dfe1e5",
  },
});
