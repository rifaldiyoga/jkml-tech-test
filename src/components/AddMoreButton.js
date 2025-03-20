import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import GradientView from './GradientView';

const AddMoreButton = ({onAddMore}) => {
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			style={styles.addMoreButton}
			onPress={onAddMore}>
			<GradientView
				colors={['#89f7fe', '#66a6ff']}
				style={styles.addMoreGradient}>
				<Text style={styles.addMoreButtonText}>Load More</Text>
			</GradientView>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	addMoreButton: {
		overflow: 'hidden',
	},
	addMoreGradient: {
		padding: 14,
		alignItems: 'center',
	},
	addMoreButtonText: {
		color: '#333',
		fontSize: 14,
		fontWeight: '600',
	},
});

export default AddMoreButton;
