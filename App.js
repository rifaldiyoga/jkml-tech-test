import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {Provider as ListProvider} from './src/context/ListContext';
import ListScreen from './src/screens/ListScreen';

const App = () => {
	return (
		<>
			<StatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent
			/>
			<ListScreen />
		</>
	);
};

export default props => {
	return (
		<ListProvider>
			<App />
		</ListProvider>
	);
};
