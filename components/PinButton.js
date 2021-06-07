import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
const Pinbutton = ({ onPress, checkPin, unpin }) => {
  return checkPin ? (
    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={unpin}>
      <Text style={styles.text}>고정해제</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>고정</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    width: 60,
    height: 60,
    backgroundColor: "#4630EB",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  text: {
    color: "#FFFFFF",
  },
};
export default Pinbutton;
