import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, View} from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import TaskModal from './components/TaskModal'
import SubHeader from './components/SubHeader'
import AsyncStorage from "@react-native-async-storage/async-storage";
// npm install @react-native-async-storage/async-storage 를 해야 asyncstorage를 사용할 수 있다.

export default class App extends React.Component {
  componentDidMount(){
    // 할일 목록 불러오기
    // @todo:state 라는 이름의 상태를 불러온다.
    AsyncStorage.getItem('@todos:state').then((state) => {
      this.setState(JSON.parse(state))
    })
  }
  state = {
    todos:[
      {
        title:"고정지출",
        done:true
      },
      {
        title:"헬스 스케쥴",
        done:false
      },
      {
        title:"장보기",
        done:false
      },
      {
        title:"잠 일찍 자기",
        done:false
      },
    ],
    showModal: false,
  }
  // 할일 목록 저장
  // @todo:state 라는 이름으로 상태를 저장한다.
  save = () => {
    AsyncStorage.setItem('@todos:state', JSON.stringify(this.state))
  }
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <Header show={() => {
          this.setState({showModal:true})
        }} />
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
                remove={()=>{
                  this.setState({
                    todos:this.state.todos.filter((item, i) => i !== index)
                  }, this.save)
                }}
                toggle={() => {
                  const newTodos = [...this.state.todos]
                  newTodos[index].done = !newTodos[index].done
                  this.setState({todos:newTodos}, this.save)
                }} 
              />
            )
            }}
            //key값을 주기 위해서는 flatlist 태그 에서 키를 설정해주어야 한다.
            keyExtractor={(item, index) => {
              return `${index}`
            }}
          />
        </View>
        <TaskModal 
          isVisible={this.state.showModal}
          add={(title)=>{
            this.setState({
              todos:this.state.todos.concat({
                title: title,
                done: false,
              }),
              showModal: false,
            },this.save)
          }}
          hide={() => {
            this.setState({showModal: false})
          }}/>
      </SafeAreaView>
    );
  }
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft:20,
    paddingRight:20,
    backgroundColor: '#E5E5E5',
    justifyContent: 'flex-start',
  },
  subcontainer:{
    borderRadius:8,
    marginTop: 20,
    marginLeft:20,
    marginRight:20,
    backgroundColor: '#FFFFFF',
  }
});
