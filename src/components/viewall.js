import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button,List, ListItem, ListItemContent} from 'react-mdl';
import { Link } from 'react-router-dom';

import googleLogo from './images/googleLogo.jpg';
import userOne from './images/user1.png';
import userTwo from './images/user2.png';
import userThree from './images/user3.png';


class ViewAll extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="viewall-grid">
          <Grid className="aboutus-grid">

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {googleLogo}
              height = '300px'
              width = '320px'
              />
            <CardText>
              <h6>Google</h6>
            </CardText>
            <CardActions border>
              <a href="https://careers.google.com/jobs/results/132641722552197830/" rel="noopener noreferrer" target="_blank">
              <Button colored>Apply</Button>
              </a>
              <Button colored>About</Button>
              <Link to="/userlist"><Button colored>Add To Profile</Button></Link>
            </CardActions>
          </Card>

          <Cell col = {12}>
          </Cell>

          </Grid>
          </div>

      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>TO BE IMPLEMENTED IN THE FUTURE</h1>
        <img
          src = {userOne}
          height = '500px'
          width = '500px'
          alighn
          /></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>TO BE IMPLEMENTED IN THE FUTURE</h1>
        <img
          src = {userTwo}
          height = '500px'
          width = '500px'
          /></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>TO BE IMPLEMENTED IN THE FUTURE</h1>
        <img
          src = {userThree}
          height = '500px'
          width = '500px'
          />
        </div>
      )
    }

  }

  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab><h6>Next</h6></Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

    </div>
    )
  }
}

export default ViewAll;
