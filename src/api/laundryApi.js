import {Platform, StyleSheet, Text, View ,AsyncStorage} from 'react-native';

import { loadState, saveState } from "../Utils/localstorage";
const axios = require('axios');



 


export  async function requestApi(data){
    axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
   
    console.log(data)
    return await axios.post('http://127.0.0.1:8000/api/requestlaundry', data
    )
    .then(function (response) {
      console.log(response)
      return response;
    })
    .catch(function (error) {
     console.log(error)
     return error;
    })
  };


  export  async function verifyStackApi(data){
    axios.defaults.headers.common["Authorization"] = `Bearer ${AsyncStorage.getItem("state").AuthReducer.access_token}`;
   
    console.log(data)
    return await axios.post('http://127.0.0.1:8000/api/payment/callback', data
    )
    .then(function (response) {
      console.log(response)
      return response;
    })
    .catch(function (error) {
     console.log(error)
     return error;
    })
  };


  ///////////////////////////////////////////////////////

  export  async function getPLApi(){
    axios.defaults.headers.common["Authorization"] = `Bearer ${loadState().AuthReducer.access_token}`;
    return await axios.get('http://127.0.0.1:8000/api/requestpl')
    .then(function (response) {
      console.log(response)
      return response;
    })
    .catch(function (error) {
     console.log(error)
     return error;
    })
  };

   ///////////////////////////////////////////////////////

  export  async function getDLApi(){ 
    axios.defaults.headers.common["Authorization"] = `Bearer ${loadState().AuthReducer.access_token}`;
    return await axios.get('http://127.0.0.1:8000/api/requestdl')
    .then(function (response) {
      console.log(response)
      return response;
    })
    .catch(function (error) {
     console.log(error)
     return error;
    })
  };



  //////////////////////

  export  async function getLApi(data){
    axios.defaults.headers.common["Authorization"] = `Bearer ${loadState().AuthReducer.access_token}`;
   
    console.log(data)
    return await axios.post('http://127.0.0.1:8000/api/laundrydetail', data
    )
    .then(function (response) {
      console.log(response)
      return response;
    })
    .catch(function (error) {
     console.log(error)
     return error;
    })
  };


