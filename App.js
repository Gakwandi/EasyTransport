/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import Home from './src/components/Main/Home.js';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import BusStations from './src/components/Main/BusStations';
import RequestBus from './src/components/Main/RequestBus';
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

export default class App extends Component{  
  render() {
    var x = "Easy Transport";
    return (
        <Router navigationBarStyle={{ backgroundColor:'#0e83a9'}} titleStyle={styles.navTitle}>
          <Scene key="root">
            <Scene key="tabbar" tabs={true}  tabBarStyle={{backgroundColor: '#fff',top:0}} title={x}>
              <Scene key="BusIco" title="Bus Stations">
                <Scene key="stations" component={BusStations} initial={true} />
              </Scene>
              <Scene key="RequestIco" title="Request Bus">
                <Scene key="buses" component={RequestBus} direction="vertical" title={x}/>
              </Scene>
            </Scene>
          </Scene>   
        </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navTitle: {
    color: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});
