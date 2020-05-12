import React,{Component} from 'react';
import {Platform, StyleSheet, View,Button } from 'react-native';
import {Container,Text,Content,Header, Tab, Tabs, TabHeading, Icon,Fab  } from 'native-base';
import HeaderComponent from './HeaderComponent'


 class  DashboardComponent extends Component {
   /*
     static navigationOptions=({navigation})=>{
         let drawerLabel='dashboard';
         let drawerIcon = ()=>(
            <Icon name='ios-book-outline' style={{width:26, height:26, color:'#0067a7'}} />
         );
         return {drawerLabel,drawerIcon};

     }
     */
     constructor(props) {
      super(props)
      this.state = {
        active: false
      };
    }
  render(){
  
    console.log(this.props)

    return (
      <Container>
       
        
        <View style={{ flex: 1 }}>
        <Header hasTabs/>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="apps" /><Text>Pending Laundry</Text></TabHeading>}>
            <Text>Pendding Laundry</Text>
          </Tab>
          <Tab heading={ <TabHeading><Text>Delivered Laundry</Text></TabHeading>}>
          <Text>Delivered Laundry</Text>
          </Tab>
         
        </Tabs>
       
        
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>
        </View>
      </Container>
    );
  }
  
}
export default DashboardComponent;