import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  useWindowDimensions,
} from "react-native";
import LoginForm from "../components/LoginForm";
import bg from "../assets/bg.jpg";

export default Login = ({ navigation }) => {
  const { width } = useWindowDimensions();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image source={bg} style={{ width, height: width / 2 }} />
        <LoginForm navigation={navigation} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
