import React, { useEffect, useState } from "react";
import { Modal, View, StyleSheet, Animated, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import User from "./User";

export default Users = ({ visible, setVisible, users, cardId }) => {
  const [first, setFirst] = useState(0);
  const [end, setEnd] = useState(0);

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
          }}
          name="horizontal-rule"
          size={45}
          color="black"
          style={styles.modalToggle}
        />

        <Text style={styles.title}>Applicants</Text>

        <Animated.FlatList
          style={styles.flatList}
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <User item={item} cardId={cardId} />}
        />
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
  title: {
    marginTop: "10%",
    marginBottom: "5%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  flatList: {
    // marginTop: "15%",
    marginHorizontal: "1%",
  },
});
