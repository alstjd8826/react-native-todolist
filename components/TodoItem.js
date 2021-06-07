import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import DeleteButton from "./DeleteButton";
import Swipeable from "react-native-gesture-handler/Swipeable";
//TouchableOpacity를 사용하는 이유: Button 컴포넌트는 안드로이드와 ios에서 다르게 보이기 때문에 관리하는데에 어려움이 있다
const TodoItem = ({ title, done, remove, toggle }) => {
  return (
    <Swipeable renderRightActions={() => <DeleteButton onPress={remove} />}>
      <View style={styles.container}>
        <View style={styles.todo}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={done ? styles.done : styles.check}
            onPress={toggle}
          >
            <FontAwesome
              name="check"
              color={done ? "#FFFFFF" : "#E0E0E0"}
              size={14}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </Swipeable>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
  },
  todo: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  title: {
    fontSize: 16,
    color: "#424242",
  },
  check: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    borderRadius: 14,
  },
  done: {
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    borderRadius: 14,
    backgroundColor: "#F5C630",
  },
});
export default TodoItem;
