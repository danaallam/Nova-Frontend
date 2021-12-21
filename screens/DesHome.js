import React, { useEffect, useContext } from "react";
import { StyleSheet, View, Animated } from "react-native";
import Jobs from "../components/Jobs";
import { DesContext } from "../contexts/DesContext";

export default DesHome = ({ navigation }) => {
  const {
    state: { jobs, ref },
    actions: { getJobs },
  } = useContext(DesContext);

  useEffect(async () => {
    await getJobs();
  }, [ref]);

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Jobs item={item} />}
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
