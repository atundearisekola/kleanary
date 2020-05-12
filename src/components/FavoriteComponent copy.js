import React, { Component } from "react"; 
import { Container, Header, Content, Icon, Picker, Form } from "native-base"; 
import HeaderComponent from './HeaderComponent';




export default class FavoriteComponent extends Component { 
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
            selected: undefined 
        }; 
        } 
        onValueChange(value) {
             this.setState({ selected: value }); 
            } 
        render() { 
            return (
                 <Container>
                      
                      <Content> 
                          <Form  style={{ flexDirection: 'row' }} > 
                              
                              <Picker mode="dropdown"
                               iosIcon={<Icon name="arrow-down" />} 
                               placeholder="Select your Starch" 
                               placeholderStyle={{ color: "#bfc6ea" }} 
                               placeholderIconColor="#007aff" 
                               style={{ width: undefined }} 
                               selectedValue={this.state.selected} 
                               onValueChange={this.onValueChange.bind(this)} > 
                               <Picker.Item label="Wallet" value="key0" /> 
                               <Picker.Item label="ATM Card" value="key1" /> 
                               <Picker.Item label="Debit Card" value="key2" /> 
                               <Picker.Item label="Credit Card" value="key3" /> 
                               <Picker.Item label="Net Banking" value="key4" /> 
                               </Picker> 

                               <Picker mode="dropdown"
                               iosIcon={<Icon name="arrow-down" />} 
                               placeholder="Select your Perfume" 
                               placeholderStyle={{ color: "#bfc6ea" }} 
                               placeholderIconColor="#007aff" 
                               style={{ width: undefined }} 
                               selectedValue={this.state.selected} 
                               onValueChange={this.onValueChange.bind(this)} > 
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
