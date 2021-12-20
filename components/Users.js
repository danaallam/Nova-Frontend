import React, { useEffect, useState } from "react";
import { Modal, View, StyleSheet, Text, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
// import Url from "./Url";
// import Pdf from 'react-native-pdf';

export default Users = ({ visible, setVisible, users }) => {
  const [first, setFirst] = useState(0);
  const [end, setEnd] = useState(0);
  const [star, setStar] = useState(-1);
  const [show, setShow] = useState(false);
  const [ena, setEna] = useState(false);

  const startMov = (e) => {
    setFirst(e.nativeEvent.pageY);
  };

  const endMov = (e) => {
    setEnd(e.nativeEvent.pageY);
  };

  useEffect(() => {
    if (end) {
      if (first + 50 < end) {
        setVisible(false);
      }
    }
  }, [end]);

  return (
    <Modal visible={visible} animationType="slide" statusBarTranslucent={true}>
      <View style={styles.modalContent}>
        <MaterialIcons
          onTouchStart={(e) => {
            startMov(e);
          }}
          onTouchEnd={(e) => {
            endMov(e);
            setShow(false);
          }}
          name="horizontal-rule"
          size={45}
          color="black"
          style={styles.modalToggle}
        />
        {users &&
          users.map((user, key) => (
            // <Pdf
            //   source={Url + user.resume}
            //   onLoadComplete={(numberOfPages, filePath) => {
            //     console.log(`Number of pages: ${numberOfPages}`);
            //   }}
            //   onPageChanged={(page, numberOfPages) => {
            //     console.log(`Current page: ${page}`);
            //   }}
            //   onError={(error) => {
            //     console.log(error);
            //   }}
            //   onPressLink={(uri) => {
            //     console.log(`Link pressed: ${uri}`);
            //   }}
            //   style={styles.pdf}
            // />
            <Text key={key}>{user.freelancer.email}</Text>
          ))}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
  },
  modalToggle: {
    zIndex: 1,
    alignSelf: "center",
    top: "5%",
  },
  apply: {
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    alignSelf: "center",
    backgroundColor: "green",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingVertical: "2%",
  },
  txt: {
    fontSize: 17,
    color: "white",
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
