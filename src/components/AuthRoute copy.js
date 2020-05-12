import React,{Component} from 'react';
import {Platform, StyleSheet, View } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
//import {Icon} from 'native-base';
import {Container,Text,Content} from 'native-base';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import {Dashboard, Favorite, Account, Request,Detail} from './screenNames'
import DashboardComponent from './DashboardComponent';
import RequestLaundry from './RequestLaundry';
import LaundryDetail from './LaundryDetail';
import AccountComponent from './AccountComponent';
import FavoriteComponent from './FavoriteComponent';


 

let routeConfigs={
    Dashboard:{
        screen:DashboardComponent
    },
    Request:{
        screen:RequestLaundry
    },
    Account:{
        screen:AccountComponent
    },
    Favorite:{
        screen:FavoriteComponent
    },
    Detail:{
        screen: LaundryDetail
    }



}

let drawerNavigatorConfigs={
    
       initialRouteName: Dashboard,
       drawerWidth: 500,
       drawerPosition: 'left',
       drawerOpenRoute: 'DrawerOpen',
       drawerCloseRoute: 'DrawerClose',
       drawerToggleRoute: 'DrawerToggle',
     //drawerBackgroundColor: 'orange',
       contentOptions:{
        activeTintColor:'blue',
        inactiveTintColor:'black'
       },
       //order:[]

        
}
export const AuthRoute =  createDrawerNavigator(routeConfigs,drawerNavigatorConfigs)


