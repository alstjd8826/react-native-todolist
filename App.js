import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, View } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import TaskModal from './components/TaskModal'
import SubHeader from './components/SubHeader'


export default class App extends React.Component {
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
    ]
  }
  render(){
    return (  
      <SafeAreaView style={styles.container}>
        <Header />
        <SubHeader />
        <View style={styles.subcontainer}>
          {/* 리스트 기능을 대체할 수 있는 FlatList */}
          <FlatList 
            data={this.state.todos}
            renderItem={({ item }) => {
              return (
              <TodoItem 
                title={item.title} 
                done={item.done} 
              />
            )
            }}
            //key값을 주기 위해서는 flatlist 태그 에서 키를 설정해주어야 한다.
            keyExtractor={(item, index) => {
              return `${index}`
            }}
          />
        </View>
        <TaskModal isVisible={false}/>
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
