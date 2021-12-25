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
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Pdf from "./Pdf";
import UserInfo from "./UserInfo";

export default User = ({
  resume,
  profile,
  posts,
  uid,
  phone,
  name,
  experience,
  email,
  link,
  cardId,
}) => {
  const [open, setOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { height: width / 4 }]}>
      <Pdf visible={open} setVisible={setOpen} resume={resume} Url={Url} />
      <UserInfo
        openInfo={openInfo}
        setOpenInfo={setOpenInfo}
        resume={resume}
        uid={uid}
        cardId={cardId}
        Url={Url}
        posts={posts}
        experience={experience}
        phone={phone}
        setVisible={setOpen}
        profile={profile}
        name={name}
        email={email}
        link={link}
      />

      <TouchableOpacity onPress={() => setOpenInfo(true)} style={styles.info}>
        <View style={styles.content}>
          <Image
            style={[styles.img, { width: width / 5, height: width / 5 }]}
            source={
              profile
                ? {
                    uri: Url + profile,
                  }
                : prof
            }
          />
          <View style={styles.txt}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
            <View style={styles.icons}>
              <TouchableOpacity
                style={styles.link}
                onPress={() => Linking.openURL(link)}
              >
                <AntDesign name="linkedin-square" size={20} color="#0077b5" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.link}
                onPress={() => Linking.openURL(link)}
              >
                <AntDesign name="facebook-square" size={20} color="#4867aa" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.link}
                onPress={() => Linking.openURL(link)}
              >
                <AntDesign name="instagram" size={20} color="#de4574" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.link}
                onPress={() => Linking.openURL(link)}
              >
                <FontAwesome name="pinterest" size={20} color="red" />
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
