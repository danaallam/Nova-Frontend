import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AppContent from "./AppContent";

export default Application = ({
  visible,
  setVisible,
  applicants,
  posts,
  designer,
  desc,
  profession,
  profile,
  width,
  rating,
}) => {
  const [first, setFirst] = useState(0);
  const [end, setEnd] = useState(0);

  const startMov = (e) => {
    setFirst(e.nativeEvent.pageY);
  };

  const endMov = (e) => {
    setEnd(e.nativeEvent.pageY);
  };

  // useEffect(() => {
  //   if (end) {
  //     if (first + 50 < end) {
  //       setVisible(false);
  //     }
  //   }
  // }, [end]);

  return (
    <Modal visible={visible} animationType="slide" statusBarTranslucent={true}>
      <View style={styles.modalContent}>
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
        <AppContent
          applicants={applicants}
          width={width}
          posts={posts}
          designer={designer}
          desc={desc}
          profession={profession}
          profile={profile}
          rating={rating}
        />
      </View>
      {/* <TouchableOpacity
        style={[
          styles.btn,
          {
            marginBottom: Platform.OS == "ios" ? "5%" : 0,
          },
        ]}
      >
        <Text style={styles.txt}>Submit Resume</Text>
      </TouchableOpacity> */}
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
});
