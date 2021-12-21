import React, { useEffect, useContext } from "react";
import { StyleSheet, View, Animated } from "react-native";
import Community from "../components/Community";
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
        renderItem={({ item }) => <Community item={item} />}
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
