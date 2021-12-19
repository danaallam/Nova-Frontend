import React, { useEffect, useContext } from "react";
import { StyleSheet, View, Animated } from "react-native";
import Card from "../components/Card";
import { JobContext } from "../contexts/JobContext";

export default Home = ({ navigation }) => {
  const {
    state: { jobs, rating },
    actions: { getJobs, setRating },
  } = useContext(JobContext);

  useEffect(async () => {
    await getJobs();
  }, [rating]);

  return (
    <View style={styles.container}>
      {jobs && jobs.length > 0 && (
        <Animated.FlatList
          data={jobs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card item={item} rating={rating} setRating={setRating} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
