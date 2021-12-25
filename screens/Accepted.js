import React, { useEffect, useContext } from "react";
import { Animated, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import { JobContext } from "../contexts/JobContext";

export default Accepted = () => {
  const {
    state: { accJobs, rating, ref },
    actions: { getAccJobs, setRating },
  } = useContext(JobContext);

  useEffect(async () => {
    await getAccJobs();
  }, [rating, ref]);

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={accJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card item={item} rating={rating} setRating={setRating} />
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
