import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { GoChevronRight } from 'react-icons/go';

export default function AppMenu(props) {

    const menu = (props.menu) 
                    ? Object.keys(props.menu).map(x => <ListGroup.Item key={x} action href={props.menu[x]}><GoChevronRight />{x}</ListGroup.Item>)
                    : (<ListGroup.Item action href="/">No menu entries</ListGroup.Item>)
    
    return (
        <ListGroup>
          {menu}
        </ListGroup>
    );
  }