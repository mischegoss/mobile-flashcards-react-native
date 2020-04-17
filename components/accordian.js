import React, { Component } from 'react';
import { Container, Header, Content, Separator,  Badge, Button, ListItem, Text, Left, Body, Right, Switch } from 'native-base';
export default class AccordianMain extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          
          
          <ListItem icon selected>
            <Left>
            <Badge primary>
            <Text>2</Text>
          </Badge>
            </Left>
            <Body>
              <Text>LIST ITEM 1 </Text>
            </Body>
            <Right>
            <Button rounded dark>
            <Text>PLAY</Text>
          </Button>
            </Right>
          </ListItem>
          <Separator bordered>
           
          </Separator>

          <ListItem icon selected>
            <Left>
            <Badge primary>
            <Text>2</Text>
          </Badge>
            </Left>
            <Body>
              <Text>LIST ITEM 1 </Text>
            </Body>
            <Right>
            <Button full dark>
            <Text>PLAY</Text>
          </Button>
            </Right>
          </ListItem>
          
        </Content>
      </Container>
    );
  }
}