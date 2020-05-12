import React ,{Component}from 'react';
import { StyleSheet, Text, View ,Image,TouchableWithoutFeedback,
StatusBar,TextInput,SafeAreaView,Keyboard,TouchableOpacity,KeyboardAvoidingView,ScrollView} from 'react-native';
import { Icon } from 'native-base';




class LoginForm extends  Component {
  static tabBarIcon=({tintColor})=>{
    return <Icon name='ios-book-outline' style={{color:tintColor}} />

  }

    render(){
      
        return (
            <ScrollView style={styles.container}>
              <SafeAreaView >
                <StatusBar barStyle='light-content'/>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
              <View style={styles.logoContainer}>
                  <Image style={styles.logo}
                  source={require('../../assets/icon.png')}>

                  </Image>
                  <Text style={styles.title}>Welcome to Kleanary laundry service</Text>
              </View>
              <View style={styles.infoContainer}>
                  <TextInput style={styles.input} 
                  placeholder="Enter Email"
                  placeholderTextColor="rgba(255,255,255,0.8)"
                  keyboardType="email-address"
                  returnKeyType="next"
                  autoCorrect={false}
                  onSubmitEditing={()=> this.refs.txtPassword.focus()}
                  />

                 <TextInput style={styles.input} 
                  placeholder="Enter Password"
                  placeholderTextColor="rgba(255,255,255,0.8)"
                  returnKeyType="go"
                  secureTextEntry
                  autoCorrect={false}
                  ref={'txtPassord'}/>  
                  <TouchableOpacity style={styles.buttonContainer}>
                      <Text style={styles.buttonText}>SIGN IN</Text>

                  </TouchableOpacity>

              </View>
            </View>

                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
            </ScrollView>
            
          );

    }
  
}
export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(32,53,70)',
    flexDirection:'column',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20,
    marginTop:20,
  },
  logo: {
    width:128,
    height:56,
  },
  title:{
      textAlign:'center',
      fontSize:18,
      color:'#f7c744',
      marginTop:5,
      opacity:0.9,
  },
  infoContainer:{
      position:'relative',
      left:0,
      right:0,
      bottom:0,
      height:300,
      padding:20,
    //  backgroundColor:'red',
  },
  input:{
      height:40,
      backgroundColor:'rgba(255,255,255,0.2)',
      color:'#FFF',
      marginBottom:20,
      paddingHorizontal: 10,
  },
  buttonContainer:{
      backgroundColor:'#f7c744',
      paddingVertical:15,

  },
  buttonText:{
      textAlign:'center',
      color:'rgb(32,53,70)',
      fontSize:18,
      fontWeight:'bold'



  }
});
