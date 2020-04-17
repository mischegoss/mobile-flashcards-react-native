import React, { Component } from 'react';
import { Container, Header, Content, Separator,  Badge, Button, ListItem, Text, Left, Body, Right, Switch } from 'native-base';
export default class AccordianMain extends Component {

  
  render() {

    const startingDeck = 
    {
    deckId:'Deck32355',
    deckTitle: 'React',
    cards: [
            {
                question: 'Did Facebook create React?',
                answer: true
            },
            {
                question: 'Does React Only Work On Web?',
                answer: false
            },
            {
                question: 'Does React use JSX?',
                answer: true
            }
        ]
    }


    return (
     
       
        <Container>
        <Content>
      
          
        {Object.keys(startingDeck).map(deck => {
          return(  
            
          <ListItem icon selected>
            <Left>
            <Badge primary>
            <Text>{2}</Text>
          </Badge>
            </Left>
            <Body>
              <Text>{deck.deckTitle} </Text>
            </Body>
            <Right>
            <Button rounded dark>
            <Text>PLAY</Text>
          </Button>
            </Right>
          </ListItem>
         
          
          )})}
          </Content>
          </Container>
        
     
    );
  }
}