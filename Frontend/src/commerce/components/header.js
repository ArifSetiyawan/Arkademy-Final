import React, { Component } from 'react';
import { Header,Body, Right, Button, Icon,Text,Thumbnail, Left } from 'native-base';
import { withNavigation } from 'react-navigation';

class Headercommerce extends Component {
    render() {
        return (
            <Header style={{ backgroundColor: "#016fba" }} androidStatusBarColor="#016fba">
                <Body style={{left:15}}>
                    <Text style={{color:"#FFF",fontSize:27}}>Memesnews</Text>
                </Body>
                <Right/>
            </Header>
            
        );
    }
}
export default withNavigation(Headercommerce);