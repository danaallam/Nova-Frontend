import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Url from "./Url";
import prof from "../assets/profile.png";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { JobContext } from "../contexts/JobContext";

export default CardOwner = ({
  designer,
  profile,
  width,
  cardId,
  save,
  setSave,
}) => {
  const {
    state: { ref },
    actions: { setRef },
  } = useContext(JobContext);
  useEffect(() => {}, [ref]);
  const saved = async () => {
    const body = new FormData();
    const token = await AsyncStorage.getItem("token");
    const id = await AsyncStorage.getItem("user");

    body.append("freelancer_id", Number(id));
    body.append("card_id", cardId);
    const res = await fetch(Url + "api/user/save", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body,
    });
  };

  const unSave = async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + `api/user/save/${cardId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <View style={styles.imgContainer}>
      <Image
        style={[styles.img, { width: width / 10, height: width / 10 }]}
        source={
          profile != ""
            ? {
                uri: Url + profile,
              }
            : prof
        }
      />
      <Text style={styles.txt}>{designer}</Text>
      <TouchableOpacity
        style={styles.save}
        onPress={async () => {
          save ? await unSave() : await saved();
          setRef((prev) => prev + 1);
        }}
      >
        <MaterialIcons
          name={save == 1 ? "favorite" : "favorite-outline"}
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "2%",
  },
  img: {
    borderWidth: 1,
    borderRadius: 200,
    marginRight: "1%",
  },
  txt: {
    fontWeight: "bold",
  },
  save: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
