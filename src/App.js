import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/"><div className ="bannertextsize">SDE.Supply</div></Link>} scroll>
            <Navigation>
                <Link to="/userpage"><div className ="bannertextsize">User Page</div></Link>
                <Link to="/viewall"><div className ="bannertextsize">Browse</div></Link>
                <Link to="/signedoff"><div className ="bannertextsize">Sign Out</div></Link>
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
