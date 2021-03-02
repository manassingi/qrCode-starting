import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import {createAppContainer}from 'react-navigation'
import {createBottomTabNavigator}from 'react-navigation-tabs'
import Booktran from './screens/booktran';
import SearchBook  from './screens/searchBook'

export default class App extends React.Component{
render(){
  return(
    <AppContainer/>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
  },
});
const tabNavigator=createBottomTabNavigator({
book:{
  screen:Booktran
},
search:{
  screen:SearchBook
}
})
const AppContainer=createAppContainer(tabNavigator);