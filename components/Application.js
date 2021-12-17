import React, { useEffect, useState } from "react";
import { Modal, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AppContent from "./AppContent";
import Rating from "./Rating";

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
  setRating,
  rating,
  categories,
  designerId,
  accepted,
  cardId,
  applied,
  setApplicants,
}) => {
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
        <AppContent
          setApplicants={setApplicants}
          cardId={cardId}
          ena={ena}
          setEna={setEna}
          applicants={applicants}
          width={width}
          posts={posts}
          applied={applied}
          accepted={accepted}
          designer={designer}
          desc={desc}
          profession={profession}
          profile={profile}
          rating={rating}
          categories={categories}
          setShow={setShow}
        />
        {show && (
          <Rating
            setRating={setRating}
            setEna={setEna}
            designer={designer}
            designerId={designerId}
            star={star}
            setStar={setStar}
            width={width}
            setShow={setShow}
          />
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
