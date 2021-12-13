import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  useWindowDimensions,
  Modal,
} from "react-native";
import bg from "../assets/bg.jpg";
import RegisterForm from "../components/RegisterForm";
import { MaterialIcons } from "@expo/vector-icons";

export default Register = ({ navigation, visible, setVisible }) => {
  const { width } = useWindowDimensions();

  return (
    <Modal visible={visible} animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContent}>
          <View style={styles.modalView}>
            <MaterialIcons
              style={styles.modalToggle}
              name="close"
              color="white"
              size={25}
              onPress={() => setVisible(false)}
            />
          </View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Image source={bg} style={{ width, height: width / 2 }} />
              <RegisterForm navigation={navigation} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  modalContent: {
    flex: 1,
  },
  modalView: {
    borderRadius: 10,
    zIndex: 1,
    borderWidth: 1,
    borderColor: "white",
    padding: "2%",
    justifyContent: "center",
    alignSelf: "center",
    top: "5%",
    position: "absolute",
    backgroundColor: "black",
  },
  modalToggle: {
    alignSelf: "center",
  },
});
