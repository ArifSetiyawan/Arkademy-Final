import React from 'react';
import { Icon} from 'native-base'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import {Image} from 'react-native'

import Home from '../../commerce/screens/Home'
import Meme from '../../commerce/screens/Meme'
import Account from '../../commerce/screens/Account'
import Login from '../../commerce/screens/Auth/LoginForm'
import Register from '../../commerce/screens/Auth/Register'
import Headermeme from '../../commerce/components/header'

const App = createMaterialBottomTabNavigator({
  Home: {
     screen: Home,
     navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{ color: tintColor, fontSize: 25 }} type="FontAwesome" name="home" />
      )
    }
    },
  Meme: { 
      screen: Meme,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon style={{ color: tintColor, fontSize: 25 }} type="Entypo" name="news" />
        )
      } 
    },
  Account: { 
    screen: Account,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{ color: tintColor, fontSize: 25 }} type="MaterialCommunityIcons" name="account" />
      )
    } 
  },
}, {
  initialRouteName: 'Home',
  activeColor: 'white',
  inactiveColor: 'black',
  barStyle: { backgroundColor: '#016fba' },
});

const RootNavigator = createStackNavigator({
  App: {
    screen: App,
    navigationOptions: {
      header: (
        <Headermeme style={{ elevation: 0 }} />
      )
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#016fba",
      },
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#016fba",
        height: 60
      },
    }
  }


});
export default createAppContainer(RootNavigator);