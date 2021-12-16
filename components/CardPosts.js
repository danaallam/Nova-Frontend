import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Swiper from "react-native-swiper";
import Url from "./Url";

export default CardPosts = ({ posts, width, open }) => {
  return (
    <View style={[styles.container, { height: width }]}>
      <Swiper
        loop={false}
        bounces={true}
        showsButtons={posts.length > 0 ? true : false}
        showsPagination={false}
        nextButton={<Text style={styles.buttonText}>›</Text>}
        prevButton={<Text style={styles.buttonText}>‹</Text>}
      >
        {posts &&
          posts.map((img, key) => (
            <TouchableOpacity
              activeOpacity={1}
              key={key}
              onPress={() => open()}
            >
              <Image
                style={{ width, height: width }}
                source={{
                  uri: Url + img.name,
                }}
              />
            </TouchableOpacity>
          ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: "1%",
  },
  buttonText: { fontSize: 50 },
});
