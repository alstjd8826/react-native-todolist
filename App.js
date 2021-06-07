import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, FlatList, View } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import TaskModal from "./components/TaskModal";
import { SubHeader, SubPinHeader } from "./components/SubHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
// npm install @react-native-async-storage/async-storage 를 해야 asyncstorage를 사용할 수 있다.

export default class App extends React.Component {
  componentDidMount() {
    // 할일 목록 불러오기
    // @todo:state 라는 이름의 상태를 불러온다.
    AsyncStorage.getItem("@todos:state").then((state) => {
      this.setState(JSON.parse(state));
    });
  }
  state = {
    todos: [
      {
        title: "고정지출",
        done: true,
        pin: false,
      },
      {
        title: "헬스 스케쥴",
        done: false,
        pin: false,
      },
      {
        title: "장보기",
        done: false,
        pin: false,
      },
      {
        title: "잠 일찍 자기",
        done: false,
        pin: false,
      },
    ],
    pinTodos: [],
    showModal: false,
  };
  // 할일 목록 저장
  // @todo:state 라는 이름으로 상태를 저장한다.
  save = () => {
    AsyncStorage.setItem("@todos:state", JSON.stringify(this.state));
  };
  // updateRef = (ref) => {
  //   this._swipeableRow = ref;
  // };
  // close = () => {
  //   this._swipeableRow.close();
  // };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          show={() => {
            this.setState({ showModal: true });
          }}
        />
        <SubPinHeader />
        <View style={styles.subcontainer}>
          <FlatList
            data={this.state.pinTodos}
            renderItem={({ item, index }) => {
              return (
                <TodoItem
                  title={item.title}
                  done={item.done}
                  checkPin={item.pin}
                  remove={() => {
                    this.setState(
                      {
                        pinTodos: this.state.pinTodos.filter(
                          (item, i) => i !== index
                        ),
                      },
                      this.save
                    );
                  }}
                  toggle={() => {
                    const newTodos = [...this.state.pinTodos];
                    newTodos[index].done = !newTodos[index].done;
                    this.setState({ pinTodos: newTodos }, this.save);
                  }}
                  unpin={() => {
                    const changePin = [...this.state.pinTodos];
                    changePin[index].pin = !changePin[index].pin;
                    this.setState(
                      {
                        pinTodos: changePin.filter((item, i) => i !== index),
                        todos: this.state.todos.concat(
                          changePin.filter((item, i) => i === index)
                        ),
                      },
                      this.save
                    );
                    //기존 고정된 메모에서 지우고, 일반 메모에 값이 뜨게 한다.
                  }}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
          />
        </View>
        <SubHeader />
        <View style={styles.subcontainer}>
          {/* 리스트 기능을 대체할 수 있는 FlatList */}
          <FlatList
            data={this.state.todos}
            renderItem={({ item, index }) => {
              return (
                <TodoItem
                  title={item.title}
                  done={item.done}
                  remove={() => {
                    this.setState(
                      {
                        todos: this.state.todos.filter(
                          (item, i) => i !== index
                        ),
                      },
                      this.save
                    );
                  }}
                  toggle={() => {
                    const newTodos = [...this.state.todos];
                    console.log(newTodos[index]);
                    newTodos[index].done = !newTodos[index].done;
                    this.setState({ todos: newTodos }, this.save);
                  }}
                  pin={() => {
                    const changePin = [...this.state.todos];
                    changePin[index].pin = !changePin[index].pin;
                    this.setState(
                      {
                        todos: changePin.filter((item, i) => i !== index),
                        pinTodos: this.state.pinTodos.concat(
                          changePin.filter((item, i) => i === index)
                        ),
                      },
                      this.save
                    );
                    //기존 메모에서 지우고, 고정된 메모에 값이 뜨게 한다.
                    // console.log(this.state.pinTodos);
                  }}
                />
              );
            }}
            //key값을 주기 위해서는 flatlist 태그 에서 키를 설정해주어야 한다.
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
          />
        </View>
        <TaskModal
          isVisible={this.state.showModal}
          add={(title) => {
            this.setState(
              {
                todos: this.state.todos.concat({
                  title: title,
                  done: false,
                  pin: false,
                }),
                showModal: false,
              },
              this.save
            );
          }}
          hide={() => {
            this.setState({ showModal: false });
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#E5E5E5",
    justifyContent: "flex-start",
  },
  subcontainer: {
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#FFFFFF",
  },
});
