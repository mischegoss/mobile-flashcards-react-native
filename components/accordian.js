import React, { Component } from "react";
import { Container, Content, Accordion } from "native-base";

const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "4th Element", content: "Lorem ipsum dolor sit amet" },
];
export default class AccordionMain extends Component {
  render() {
    return (
      
       
        
          <Accordion dataArray={dataArray} expanded={0}/>
      
        
      
    );
  }
}