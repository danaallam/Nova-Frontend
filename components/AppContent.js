import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState, useContext } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import prof from "../assets/profile.png";
import Button from "./Button";
import CardDescription from "./CardDescription";
import * as DocumentPicker from "expo-document-picker";
import CardPosts from "./CardPosts";
import Url from "./Url";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../contexts/UserContext";
import { JobContext } from "../contexts/JobContext";

export default AppContent = ({
  posts,
  designer,
  desc,
  applicants,
  profession,
  profile,
  width,
  categories,
  rating,
  accepted,
  setShow,
  ena,
  setEna,
  cardId,
  applied,
  setApplicants,
}) => {
  const [file, setFile] = useState("");
  const [cv, setCv] = useState("");
  const [msg, setMsg] = useState("");
  const {
    state: { res, ref },
    actions: { getResume },
  } = useContext(UserContext);

  const {
    actions: { setRef },
  } = useContext(JobContext);

  useEffect(async () => {
    if (applied == 1 && accepted == 0) {
      setEna(true);
    }
    await getResume();
  }, []);

  const open = () => {
    setShow(true);
  };

  // const uploadResume = async () => {
  //   const permissionResult = await DocumentPicker.getDocumentAsync({
  //     type: "application/pdf",
  //   });
  //   if (permissionResult.type == "success") {
  //     setFile(permissionResult.name);
  //     setCv(permissionResult);
  //   } else {
  //     return;
  //   }
  // };

  const apply = async () => {
    const token = await AsyncStorage.getItem("token");
    const body = new FormData();
    body.append("resume", res);
    body.append("card_id", cardId);
    const resp = await fetch(Url + "api/user/ownCard", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body,
    });
    const data = await resp.json();
    setMsg(data.message);
    setEna(true);
    setApplicants((prev) => {
      return prev + 1;
    });
    setRef((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Image
            style={[styles.img, { width: width / 3, height: width / 3 }]}
            source={
              profile != ""
                ? {
                    uri: Url + profile,
                  }
                : prof
            }
          />
          <Text style={styles.designer}>{designer}</Text>
          <Text style={styles.designer}>{profession}</Text>
          <View style={styles.rating}>
            {[...Array(rating)].map((_, key) => (
              <Ionicons
                key={key}
                name="star"
                size={15}
                color="gold"
                style={styles.empty}
              />
            ))}
            {[...Array(5 - rating)].map((s, key) => (
              <Ionicons
                key={key}
                name="star-outline"
                size={15}
                color="gold"
                style={styles.empty}
              />
            ))}
          </View>
          <CardPosts posts={posts} width={width} open={() => {}} />
          <CardDescription
            applicants={applicants}
            desc={desc}
            lines={0}
            categories={categories}
          />
          {applied == 0 || (applied == 1 && accepted == 0) ? (
            <>
              {/* {file == "" ? (
                <>
                  <Button title="Apply" onPress={uploadResume} ena={ena} />
                  <View style={msg ? styles.resume : styles.empty}>
                    <Text>{msg}</Text>
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.resume}>
                    <Text>{file}</Text>
                  </View>
                  <Button title="Done" onPress={apply} ena={ena} />
                </>
              )} */}
              <Button title="Apply" onPress={apply} ena={ena} />
              <View style={msg ? styles.resume : styles.empty}>
                <Text>{msg}</Text>
              </View>
            </>
          ) : (
            <Button title="Done" onPress={open} ena={ena} />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "7%",
    marginBottom: "4%",
  },
  contentContainer: {
    alignItems: "center",
  },
  img: {
    borderRadius: 100,
  },
  designer: {
    fontSize: 16,
  },
  rating: {
    flexDirection: "row",
    marginBottom: "5%",
  },
  empty: {
    paddingHorizontal: 1,
  },
  resume: {
    paddingHorizontal: "1%",
    backgroundColor: "lightblue",
    marginBottom: "2%",
    borderRadius: 15,
  },
});
