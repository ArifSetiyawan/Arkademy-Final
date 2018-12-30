import React, { Component } from 'react';
import {
  Container, Content, Card, CardItem, Text, Left, Body, Right, Button, Icon, Title, Thumbnail, ListItem
} from 'native-base';
import { View } from 'react-native'
import { logout } from '../../publics/redux/actions/auth';
import { connect } from 'react-redux';

class Account extends Component {
  componentDidMount() {
    this.props.auth.user.length !== 0 ? this.props.navigation.navigate('Home') : null
  }
  handleLogout(){
    this.props.dispatch(logout());
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <Container>
        <Content>
          {this.props.auth.user.length !== 0 ?
          <View style={{ flex: 1, flexDirection: "row", paddingLeft: 30, paddingTop: 30 }}>
            <View>
              <Icon name="log-out" type="Entypo" style={{ color: '#0e0e0e' }} />
            </View>
            <View style={{ marginLeft: 30, paddingTop: 3 }}>
              <Text onPress={() => this.handleLogout()} style={{ color: '#0e0e0e' }}>Keluar</Text>
            </View>
          </View> :
          <View style={{ flex: 1, flexDirection: "row", paddingLeft: 30, paddingTop: 30 }}>
            <View>
              <Icon name="login" type="Entypo" style={{ color: '#0e0e0e' }} />
            </View>
            <View style={{ marginLeft: 30, paddingTop: 3 }}>
              <Text onPress={()=>this.props.navigation.navigate('Login')} style={{ color: '#0e0e0e' }}>Masuk</Text>
            </View>
          </View>
          }         
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps)(Account);