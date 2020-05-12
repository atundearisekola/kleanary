import React,{Component} from 'react';
import {Platform, StyleSheet, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

//import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';
import {Container,Text,Content} from 'native-base';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';




 
export const Main =  createBottomTabNavigator({
    LoginForm:{
      screen:LoginForm,
      navigationOptions:{
        tabBarLabel: "Login",
        tabBarIcon:({tintColor})=>{
         return <FontAwesome name="lock" size={25} style={{color:tintColor}} />
      
        }
      }
    },
    SignupForm:{
        screen:SignupForm,
        navigationOptions:{
          tabBarLabel: "Sign Up",
          
          
          tabBarIcon:({tintColor})=>{
           return <FontAwesome name="unlock"  size={25} style={{color:tintColor}} />
        
          }
      }
  }
},{
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    style: {
      backgroundColor: 'white'
    },
    activeTintColor: '#5db8fe',
    inactiveTintColor: 'gray'
  }
}
  );


