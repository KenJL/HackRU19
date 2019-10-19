import React, { Component } from 'react';
import {Grid, Cell,List, ListItem, ListItemContent, Card, CardText, CardActions, Button} from 'react-mdl';
import { Link } from 'react-router-dom';

import userOne from './images/user1.png';

class UserPage extends Component {
  render() {
    return(
      <div className="aboutus-body">
        <Grid className="aboutus-grid">
        <Cell col ={12}>
          <h1>Profile</h1>
        </Cell>
          <Cell col={6}>
            <h2>HackRU</h2>
            <img
              src={userOne}
              alt="avatar"
              style={{height: '400px', width: '400px'}}
               />

             <p style={{ width: '80%', margin: 'auto', paddingTop: '25px'}}>Hire Me Please</p>

          </Cell>
          <Cell col={6}>
            <hr/>

            <div className="aboutus-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Consolas'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    000-000-0000
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Consolas'}}>
                    <e className="fa fa-envelope" aria-hidden="true"/>
                    Email@Email.com
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>

          <Cell col = {12}>
          </Cell>

        </Grid>


      </div>

    )
  }
}

export default UserPage;
