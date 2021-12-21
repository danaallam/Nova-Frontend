import React, { useState } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Image,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import Url from "./Url";
import prof from "../assets/profile.png";
import { AntDesign } from "@expo/vector-icons";
import Pdf from "./Pdf";
import UserInfo from "./UserInfo";

export default User = ({ item, cardId }) => {
  const [open, setOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { height: width / 4 }]}>
      <Pdf visible={open} setVisible={setOpen} resume={item.resume} Url={Url} />
      <UserInfo
        openInfo={openInfo}
        setOpenInfo={setOpenInfo}
        resume={item.resume}
        uid={item.freelancer.id}
        cardId={cardId}
        Url={Url}
        posts={item.freelancer.posts}
        experience={item.freelancer.experience}
        phone={item.freelancer.phone}
        setVisible={setOpen}
        profile={item.freelancer.profile}
        name={item.freelancer.name}
        email={item.freelancer.email}
        link={item.freelancer.link}
      />

      <TouchableOpacity onPress={() => setOpenInfo(true)} style={styles.info}>
        <View style={styles.content}>
          <Image
            style={[styles.img, { width: width / 5, height: width / 5 }]}
            source={
              item.freelancer.profile
                ? {
                    uri: Url + item.freelancer.profile,
                  }
                : prof
            }
          />
          <View style={styles.txt}>
            <Text style={styles.name}>{item.freelancer.name}</Text>
            <Text style={styles.email}>{item.freelancer.email}</Text>
            <View style={styles.icons}>
              <TouchableOpacity
                style={styles.link}
                onPress={() => Linking.openURL(item.freelancer.link)}
              >
                <AntDesign name="linkedin-square" size={20} color="#0077b5" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.link}
                onPress={() => Linking.openURL(item.freelancer.link)}
              >
                <AntDesign name="facebook-square" size={20} color="#4867aa" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.link}
                onPress={() => Linking.openURL(item.freelancer.link)}
              >
                <AntDesign name="instagram" size={20} color="#de4574" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.pdf}
          onPress={() => {
            setOpen(true);
          }}
        >
          <AntDesign name="pdffile1" size={50} color="red" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f5f5",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: "2%",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "2%",
  },
  img: {
    borderWidth: 1,
    borderRadius: 70,
    backgroundColor: "white",
  },
  txt: {
    marginLeft: "1%",
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    marginLeft: "3%",
  },
  email: {
    fontSize: 12,
    marginLeft: "3%",
  },
  pdf: {
    alignSelf: "center",
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: "3%",
  },
  icons: {
    flexDirection: "row",
    marginLeft: "3%",
    marginTop: "8%",
  },
});
