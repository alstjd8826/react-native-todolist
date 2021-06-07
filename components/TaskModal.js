import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Modal from "react-native-modal";
//  isVisible 이란 변수를 설정하고, Modal 속성으로 avoidKeyboard 를 설정한다.
// avoidKeyboard 는 키보드 화면이 열렸을 때 화면이동 시켜주는 설정이다.
const TaskModal = ({ isVisible, add, hide }) => {
  let content = "";
  return (
    <Modal
      isVisible={isVisible}
      avoidKeyboard
      style={styles.modal}
      onBackdropPress={hide}
    >
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => {
            content = text;
          }}
          placeholder="Where are you going todo?"
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={() => add(content)}>
          <FontAwesome name="plus" color="#F5C630" size={20} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 15,
  },
  container: {
    paddingTop: 16,
    paddingRight: 10,
    paddingBottom: 16,
    paddingLeft: 16,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderWidth: 1,
    borderColor: "#F5C630",
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    borderRadius: 14,
    paddingTop: Platform.select({
      ios: 2,
      android: 0,
    }),
    paddingLeft: Platform.select({
      ios: 1,
      android: 0,
    }),
  },
});

export default TaskModal;
