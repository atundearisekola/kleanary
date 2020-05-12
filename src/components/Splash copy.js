import React ,{Component}from 'react';
import { StyleSheet, Text, View ,StatusBar, ActivityIndicator,AsyncStorage} from 'react-native';


class Splash extends  Component {

  constructor() {
    super();
    this._bootstrap();
}

  _bootstrap = async () => {

    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(!userToken ? 'Auth' : 'App');
}

    render(){

        return (
            <View style={styles.container}>
               <ActivityIndicator />
                <StatusBar barStyle="default" />
             
             
            </View>
          );

    }
  
}
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
      fontWeight:'bold',
      fontSize:18,
      color:'black'
  }
});
