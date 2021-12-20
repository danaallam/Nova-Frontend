import React, { useEffect, useContext } from "react";
import { StyleSheet, View, Animated } from "react-native";
import Jobs from "../components/Jobs";
import { DesContext } from "../contexts/DesContext";

export default DesHome = ({ navigation }) => {
  const {
    state: { jobs, rating },
    actions: { getJobs, setRating },
  } = useContext(DesContext);

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
            <Jobs item={item} rating={rating} setRating={setRating} navigation={navigation}/>
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
