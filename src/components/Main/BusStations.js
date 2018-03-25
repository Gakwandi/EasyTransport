import React, { Component } from 'react';
import { Text, View,TouchableOpacity, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';

class BusStations extends Component{
	render(){
		return(
			<View>
			<TouchableOpacity onPress={ () => Actions.buses()}>
				<Text style={{marginTop:50}}>
					<Image source={require('./kgl.jpg')} style={{width:591, height:690, top: 100}}/>
				</Text>
			</TouchableOpacity>

			</View>
		);
	}
}
export default BusStations;