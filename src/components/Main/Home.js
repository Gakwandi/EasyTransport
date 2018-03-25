import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import BusStations from './BusStations';
import RequestBus from './RequestBus';

class Home extends Component {
	render(){
		return(
			<Router>
					<Scene key="root">
					<Scene key="stations" component={BusStations} title="Bus stations" initial={true}/>
					<Scene key="buses" component={RequestBus} title="Request Bus" />
					</Scene>
				
			</Router>
		);
	}
}
export default Home;