import React, {Component} from 'react';
import {StyleSheet, Text, View,FlatList,Alert, ActivityIndicator} from 'react-native';
import { getmemes } from '../../publics/redux/actions/memes'
import { connect } from 'react-redux';
import { Body,Left,Card, CardItem,Button,Icon,Right } from 'native-base';
class Meme extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(getmemes())
  }
  renderItem = ({ item, index }) => {
    return (
      <Card key={index}>
            <CardItem>
              <Left>
                <Body>
                  <Text>{item.content}</Text>
                  <Text note>{item.title}</Text>
                </Body>
              </Left>
              <Right>
                <Text>{item.created_at}</Text>
              </Right>
            </CardItem>
            <CardItem cardBody>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="reply" type="Entypo" />
                  <Text>Reply</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="comment-multiple" type="MaterialCommunityIcons" />
                  <Text>Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>MemeNews</Text>
              </Right>
            </CardItem>
          </Card>
    )
  }

  render() {
    if (this.props.memes.isLoading){
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <Card>
        <FlatList
            data={this.props.memes.data}
            renderItem={this.renderItem}
            keyExtractor={({id}, index) => index.toString()}
          />
      </Card>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    memes: state.memes
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  FlatListItemStyle: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect(mapStateToProps)(Meme);