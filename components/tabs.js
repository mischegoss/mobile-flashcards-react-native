import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import AccordianMain from './accordian'
export default class MyTabs extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="camera" /><Text>All Decks</Text></TabHeading>}>
            <AccordianMain/>
          </Tab>
          <Tab heading={ <TabHeading><Text>Add New</Text></TabHeading>}>
          <Text>This2</Text>
          </Tab>
         
        </Tabs>
      </Container>
    );
  }
}