import React,{Component} from 'react';
import {Platform, StyleSheet, Text, View ,AsyncStorage} from 'react-native';
//import {createAppContainer,createSwitchNavigator} from 'react-navigation';
//import {createStackNavigator} from 'react-navigation-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/components/Splash';
import Main from './src/components/Main';
import AuthRoute from './src/components/AuthRoute';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
   
 
//const AppStack = createStackNavigator();
//const AuthStack = createStackNavigator();





const Stack = createStackNavigator();

 class  App extends Component {
  render(){
    return (
      <NavigationContainer>
         <Stack.Navigator
         initialRouteName= 'Starter'
        
         >
            <Stack.Screen options={{
          headerShown: false,
         }} name="Starter" component={Splash} />
         <Stack.Screen options={{
          headerShown: false,
         }} name="App" component={Main} />
         <Stack.Screen options={{
          headerShown: false,
         }} name="Auth" component={AuthRoute} />

         </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
}
const mapDispatchToProps = dispatch =>{
  return{
      ...bindActionCreators({
        
      },dispatch)
  }
}

const mapStateToProps = (state) =>{
  return{
      loader: state.AuthReducer.loader,
     
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


