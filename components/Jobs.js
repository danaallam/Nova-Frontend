import React, { useEffect, useState, useContext } from "react";
import { View, useWindowDimensions, StyleSheet } from "react-native";
import CardPosts from "./CardPosts";
import CardDescription from "./CardDescription";
import Users from "./Users";
import { DesContext } from "../contexts/DesContext";

export default Jobs = ({ item }) => {
  const { width } = useWindowDimensions();
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [desc, setDesc] = useState("");
  const [applicants, setApplicants] = useState("");
  const [visible, setVisible] = useState(false);
  const [lines, setLines] = useState(2);
  const [cardId, setCardId] = useState(0);
  const [users, setUsers] = useState([]);
  const {
    state: { jobs },
  } = useContext(DesContext);

  useEffect(() => {
    setCardId(item.id);
    setPosts(item.posts);
    setCategories(item.categories);
    setDesc(item.description);
    setApplicants(item.applicants);
    setUsers(item.users);
  }, [jobs]);

  const open = () => {
    setVisible(true);
  };

  return (
    <View style={styles.container}>
      <Users
        visible={visible}
        setVisible={setVisible}
        users={users}
        cardId={cardId}
      />
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
