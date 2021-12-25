import React, { useEffect, useContext } from "react";
import { StyleSheet, View, Animated } from "react-native";
import User from "../components/User";
import { DesContext } from "../contexts/DesContext";

export default Requests = ({ navigation }) => {
  const {
    state: { users, ref },
    actions: { getUsers },
  } = useContext(DesContext);

  useEffect(async () => {
    await getUsers();
  }, [ref]);

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <User
            resume={item.resume}
            uid={item.id}
            posts={item.posts}
            experience={item.experience}
            phone={item.phone}
            profile={item.profile}
            name={item.name}
            email={item.email}
            link={item.link}
            cardId={0}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
