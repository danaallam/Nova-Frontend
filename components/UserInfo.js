import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState, useContext } from "react";
import {
  Modal,
  View,
  StyleSheet,
  useWindowDimensions,
  Text,
  ScrollView,
  Linking,
  TouchableOpacity,
} from "react-native";
import CardPosts from "./CardPosts";
import Pdf from "./Pdf";
import { DesContext } from "../contexts/DesContext";

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
      <ScrollView style={styles.modalContent}>
        <View style={styles.user}>
          <CardPosts posts={posts} width={width} open={() => {}} />
        </View>
        <View style={styles.desc}>
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
          <AntDesign name="pdffile1" size={100} color="red" />
        </TouchableOpacity>
        <View style={styles.btns}>
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
      </ScrollView>
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
  desc: { marginTop: "5%" },
  txt: { fontWeight: "bold" },
  exp: { flexDirection: "row" },
  phone: { color: "blue" },
  pdf: {
    alignSelf: "center",
    marginVertical: "10%",
  },
  btns: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  acc: {
    backgroundColor: "green",
    padding: "3%",
    borderRadius: 20,
  },
  rej: {
    backgroundColor: "red",
    padding: "3%",
    borderRadius: 20,
  },
  btnText: {
    color: "white",
    fontSize: 16,
  },
});
