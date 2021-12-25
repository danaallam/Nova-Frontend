import { AntDesign, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState, useContext } from "react";
import {
  Modal,
  View,
  StyleSheet,
  useWindowDimensions,
  Text,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import CardPosts from "./CardPosts";
import Pdf from "./Pdf";
import { DesContext } from "../contexts/DesContext";
import prof from "../assets/profile.png";

export default UserInfo = ({
  openInfo,
  setOpenInfo,
  resume,
  Url,
  posts,
  experience,
  phone,
  cardId,
  uid,
  profile,
  name,
  email,
  link,
}) => {
  const { width } = useWindowDimensions();
  const [first, setFirst] = useState(0);
  const [end, setEnd] = useState(0);
  const [open, setOpen] = useState(false);
  const {
    actions: { setRef, accept, reject },
  } = useContext(DesContext);

  const startMov = (e) => {
    setFirst(e.nativeEvent.pageY);
  };

  const endMov = (e) => {
    setEnd(e.nativeEvent.pageY);
  };

  useEffect(() => {
    if (end) {
      if (first + 50 < end) {
        setOpenInfo(false);
      }
    }
  }, [end]);

  return (
    <Modal visible={openInfo} animationType="slide" statusBarTranslucent={true}>
      <Pdf visible={open} setVisible={setOpen} resume={resume} Url={Url} />
      <MaterialIcons
        onTouchStart={(e) => {
          startMov(e);
        }}
        onTouchEnd={(e) => {
          endMov(e);
        }}
        name="horizontal-rule"
        size={45}
        color="black"
        style={styles.modalToggle}
      />
      <View style={styles.modalContent}>
        <View style={styles.user}>
          <CardPosts posts={posts} width={width} open={() => {}} />
        </View>
        <View style={styles.desc}>
          <View>
            <View style={styles.exp}>
              <Text style={styles.txt}>Years of experience: </Text>
              <Text>{experience} years</Text>
            </View>
            <View style={styles.exp}>
              <Text style={styles.txt}>Phone Number: </Text>
              <Text
                style={styles.phone}
                onPress={() => Linking.openURL(`tel:${phone}`)}
              >
                {phone}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.pdf}
            onPress={() => {
              setOpen(true);
            }}
          >
            <AntDesign name="pdffile1" size={40} color="red" />
          </TouchableOpacity>
        </View>
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
        {cardId > 0 && (
          <View style={[styles.btns, { width }]}>
            <TouchableOpacity
              style={styles.acc}
              onPress={async () => {
                await accept(uid, cardId);
                setRef((prev) => prev + 1);
                setOpenInfo(false);
              }}
            >
              <Text style={styles.btnText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rej}
              onPress={async () => {
                await reject(uid, cardId);
                setRef((prev) => prev + 1);
                setOpenInfo(false);
              }}
            >
              <Text style={styles.btnText}>Reject</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: "2%",
  },
  modalToggle: {
    zIndex: 1,
    alignSelf: "center",
    top: "5%",
  },
  user: { marginTop: "15%" },
  desc: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txt: { fontWeight: "bold" },
  exp: { flexDirection: "row" },
  phone: { color: "blue" },
  btns: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    bottom: "5%",
    paddingHorizontal: "25%",
  },
  acc: {
    justifyContent: "center",
    backgroundColor: "green",
    padding: "4%",
    borderRadius: 10,
  },
  rej: {
    justifyContent: "center",
    backgroundColor: "red",
    padding: "4%",
    borderRadius: 10,
  },
  btnText: {
    color: "white",
    fontSize: 16,
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "15%",
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
