import React, { useEffect, useState } from "react";
import { View, useWindowDimensions, StyleSheet } from "react-native";
import CardPosts from "./CardPosts";
import CardDescription from "./CardDescription";
import CardOwner from "./CardOwner";
import Application from "./Application";

export default Card = ({ item, rating, setRating }) => {
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

  useEffect(() => {
    setCardId(item.id);
    setDesignerId(item.designer.id);
    setSave(item.saved);
    setAccepted(item.accepted);
    setApplied(item.applied);
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
        cardId={cardId}
        visible={visible}
        setVisible={setVisible}
        width={width}
        categories={categories}
        posts={posts}
        designer={designer}
        applicants={applicants}
        designerId={designerId}
        desc={desc}
        profession={profession}
        profile={profile}
        rating={rating}
        setRating={setRating}
        setApplicants={setApplicants}
        accepted={accepted}
        applied={applied}
      />
      <CardOwner
        designer={designer}
        profile={profile}
        width={width}
        cardId={cardId}
        save={save}
        setSave={setSave}
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
    // flex: 1,
    marginBottom: "5%",
  },
});
