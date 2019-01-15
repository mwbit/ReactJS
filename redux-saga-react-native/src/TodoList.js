import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, FlatList } from 'react-native';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



import * as TodoActions from './store/actions'



const TodoList = ({ todos, addTodo }) => (
  <View style={{paddingBottom:10}}>  

    <Button
      title="Add Todo"
      color="#841584"
      onPress={() => addTodo('Play drums ')}
    />

    <FlatList 
      data={todos}
      renderItem={({ item }) => <Text>{item.text}</Text>}
    />

    
    {/* </Ul> */}
  </View>
)
const mapStateToProps = state => ({
  todos: state.todos,  
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)  
