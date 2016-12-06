import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import store from '../index'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Router, Route, Link } from 'react-router'
import HomePage from './home-page'


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
                  <div id = "home-page-container">
                    <HomePage />
                    <h4>
                            Mar jewelry has been designed and made
                        <br /> in Santa Barbara, California for over thirty years. 
                        <br /> Winner of numerous design awards.  
                        <br />Each piece is meticulously handmade in our studio.
                        <br />  Mar jewelry can be found in fine galleries and 
                        <br />museum shops throughout the United States.
                    </h4>
                  </div>
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
