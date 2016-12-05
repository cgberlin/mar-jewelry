import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import store from '../index'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Router, Route, Link } from 'react-router'


var App = function(props) {
    return (
      <MuiThemeProvider>
        <div>
            <div>
              <h1 id = "main-title">Mar Jewelry</h1>
            </div>
            <Tabs>
              <Tab label="Home">
                <div>
                  <h3 className = "roboto-text"> Mock up for Mar
                  </h3>
                </div>
              </Tab>
              <Tab label="Collections">
                <div>
                  <h2>Collections</h2>
                </div>
              </Tab>
              <Tab label="About" >
                <div>
                  <h2>About section</h2>
                </div>
              </Tab>
              <Tab label="Contact" >
                <div>
                  <h2>Contact Info</h2>
                </div>
              </Tab>
            </Tabs>
            <div>
                {props.children}
            </div>
        </div>
      </MuiThemeProvider>
    );
  };
 export default App;
