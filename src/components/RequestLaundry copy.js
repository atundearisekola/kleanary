import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, DatePicker,
     Thumbnail, Text, Left, Body, Form,Picker,Item,Label,Input, Icon, H1, H3, Button } from 'native-base';

export default class DeckSwiperAdvancedExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          chosenDate: new Date(),
          selected: undefined ,
        };
        
        this.setDate = this.setDate.bind(this);
        
      }

      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }
      onValueChange2(value) {
        this.setState({ selected: value }); 
       } 

    
  render() {
   const Next = ()=>{
        let count = this.state.count;
        if (this.state.count !=2 ) {
            count = count+1;
            this.setState({
               ...this.state,
               count:count
           })
            
        }
   }
  const Back = ()=>{
       let count = this.state.count;
       if (this.state.count !=0 ) {
           count = count-1;
           this.setState({
              ...this.state,
              count:count
          })
           
       }
  }

  const requestCard = ()=>{

    if (this.count ==0) {
      return(
        <Card style={{ elevation: 3 }}>
               
                <CardItem cardBody>
                  <View>
                  <Form style={{ flexDirection: 'column' }} >
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
            
            <Item floatingLabel> 
                         <Label>Quantity</Label> 
                         <Input /> 
              </Item> 
              <Button iconRight >
            <Icon name="arrow-forward" />
            <Text>Add</Text>
          </Button>
          </Form>

                  </View>

                  <View>
                  <View>
                    <H1>Starch</H1>
                    <H3>EazyOn</H3>
                    <Text>500</Text>
                  </View>
                  <View>
                    <H1>Perfume</H1>
                    <H3>EazyOn</H3>
                    <Text>500</Text>
                  </View>
                  </View>

                  <View>
                  <Button iconRight >
            <Icon name="arrow-forward" />
            <Text>Just Starch</Text>
          </Button>
          <Button iconRight >
            <Icon name="arrow-forward" />
            <Text>Hang</Text>
          </Button>
          <Button iconRight >
            <Icon name="arrow-forward" />
            <Text>Add Perfume</Text>
          </Button>

                  </View>

                   <View>
                   <View>
                    <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select pickup date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
            <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text>

            
                    </View>
                    <View>
                    <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select delivery date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
            <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text>

            
                    </View>
                   </View>
                  
                </CardItem>
               
              </Card>
      )
      
    } else if(this.count == 1){
      return('')

    }else if (this.count == 2) {
      return(
        <Form>
        <Form style={{ flexDirection: 'row' }} > 
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
         <Form style={{ flexDirection: 'row' }} >  
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
<Item picker>
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
</Item>
<Item picker>
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
</Item>
<Item picker>
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
</Item>
</Form>
        </Form>
      )
      
    }

  }
    return (
      <Container>
        <Header />
        <View>
          
        <Card style={{ elevation: 3 }}>
               
               <CardItem cardBody>
                 <View>
                 <Form style={{ flexDirection: 'column' }} >
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
           
           <Item floatingLabel> 
                        <Label>Quantity</Label> 
                        <Input /> 
             </Item> 
             <Button iconRight >
           <Icon name="arrow-forward" />
           <Text>Add</Text>
         </Button>
         </Form>

                 </View>

                 <View>
                 <View>
                   <H1>Starch</H1>
                   <H3>EazyOn</H3>
                   <Text>500</Text>
                 </View>
                 <View>
                   <H1>Perfume</H1>
                   <H3>EazyOn</H3>
                   <Text>500</Text>
                 </View>
                 </View>

                 <View>
                 <Button iconRight >
           <Icon name="arrow-forward" />
           <Text>Just Starch</Text>
         </Button>
         <Button iconRight >
           <Icon name="arrow-forward" />
           <Text>Hang</Text>
         </Button>
         <Button iconRight >
           <Icon name="arrow-forward" />
           <Text>Add Perfume</Text>
         </Button>

                 </View>

                  <View>
                  <View>
                   <DatePicker
           defaultDate={new Date(2018, 4, 4)}
           minimumDate={new Date(2018, 1, 1)}
           maximumDate={new Date(2018, 12, 31)}
           locale={"en"}
           timeZoneOffsetInMinutes={undefined}
           modalTransparent={false}
           animationType={"fade"}
           androidMode={"default"}
           placeHolderText="Select pickup date"
           textStyle={{ color: "green" }}
           placeHolderTextStyle={{ color: "#d3d3d3" }}
           onDateChange={this.setDate}
           disabled={false}
           />
           <Text>
             Date: {this.state.chosenDate.toString().substr(4, 12)}
           </Text>

           
                   </View>
                   <View>
                   <DatePicker
           defaultDate={new Date(2018, 4, 4)}
           minimumDate={new Date(2018, 1, 1)}
           maximumDate={new Date(2018, 12, 31)}
           locale={"en"}
           timeZoneOffsetInMinutes={undefined}
           modalTransparent={false}
           animationType={"fade"}
           androidMode={"default"}
           placeHolderText="Select delivery date"
           textStyle={{ color: "green" }}
           placeHolderTextStyle={{ color: "#d3d3d3" }}
           onDateChange={this.setDate}
           disabled={false}
           />
           <Text>
             Date: {this.state.chosenDate.toString().substr(4, 12)}
           </Text>

           
                   </View>
                  </View>
                 
               </CardItem>
              
             </Card>
            
        </View>
        <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
          <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="arrow-back" />
            <Text>Back</Text>
          </Button>
          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            <Icon name="arrow-forward" />
            <Text>Next</Text>
          </Button>
        </View>
      </Container>
    );
  }
}