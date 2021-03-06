import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const SubHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>메모</Text>
    </View>
  );
};

const SubPinHeader = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="pushpin" size={20} color="black" />
      <Text style={styles.title}> 고정된 메모</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 56,
    marginBottom: 16,
    marginLeft: 22,
    marginRight: 16,
    flexDirection: "row",
  },
  title: {
    color: "#212121",
    fontSize: 20,
    fontWeight: "500",
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

export { SubHeader, SubPinHeader };
