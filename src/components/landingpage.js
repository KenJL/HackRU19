import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1>SDE.Supply</h1>
          </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Landing;
