import React, { Component } from 'react'; 
import { Container, Header, Icon, Content, Form, Item,Picker, Input, Label } from 'native-base';
import HeaderComponent from './HeaderComponent';
 export default class FloatingLabelExample extends Component { 
   /*
    static navigationOptions=({navigation})=>{
        let drawerLabel='dashboard';
        let drawerIcon = ()=>(
           <Icon name='ios-book-outline' style={{width:26,height:26,color:'#0067a7'}} />
        );
        return {drawerLabel,drawerIcon};

    }
*/
    constructor(props) {
        super(props);
        this.state = {
          selected2: undefined
        };
      }
      onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }
     render() {
          return ( 
          <Container>
               
                <Content>
                    
                    <Form style={{ flexDirection: 'column' }} > 
                         <Item floatingLabel> 
                         <Label>First Name</Label> 
                         <Input /> 
                         </Item> 
                         <Item floatingLabel last> 
                         <Label>Last Name</Label> 
                         <Input /> 
                         </Item> 
                     </Form> 
                     <Item floatingLabel> 
                         <Label>Username</Label> 
                         <Input /> 
                        </Item> 
                     <Form style={{ flexDirection: 'column' }} >  
                         <Item floatingLabel> 
                         <Label>Email</Label> 
                         <Input /> 
                         </Item> 
                         <Item floatingLabel last> 
                         <Label>Phone</Label> 
                         <Input /> 
                         </Item> 
                     </Form> 
                     <Item floatingLabel> 
                         <Label>Address</Label> 
                         <Input /> 
                     </Item> 

                     <Form style={{ flexDirection: 'row' }} >
            
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your Country"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
           
           
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your State"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your LGA"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
           
          </Form>
                   

                 </Content> 
             </Container> 
                ); 
            } 
        }