import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {Provider} from 'react-redux'

import store from './store'
import TodoList from './TodoList'

   
export default class App extends Component {
  render() {
    return (
      <Provider store = {store}> 
      <View style={styles.container}>   
        <View style={{flex:1, width:200, paddingTop: 20  }}> 
          <TodoList/>  
        </View> 
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white', 
  }
  
});
