import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Actions} from 'react-native-router-flux';


class RequestBus extends Component{
	render(){
		return(
			<View>
				<Text onPress={ () => Actions.stations() }>
					Request a Bus
				</Text>
			</View>
		);
	}
}
export default RequestBus;