import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import GradientView from './GradientView';

const GoTopButton = ({onPress}) => {
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			style={styles.goTopButton}
			onPress={onPress}>
			<GradientView
				colors={['#ff7e5f', '#feb47b']}
				style={styles.goTopGradient}>
				<Text style={styles.goTopButtonText}>Move Top</Text>
			</GradientView>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	goTopButton: {
		borderRadius: 20,
		overflow: 'hidden',
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 1},
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 2,
	},
	goTopGradient: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 20,
	},
	goTopButtonText: {
		color: '#fff',
		fontSize: 14,
		fontWeight: '600',
		textShadowColor: 'rgba(0, 0, 0, 0.2)',
		textShadowOffset: {width: 0, height: 1},
		textShadowRadius: 1,
	},
});

export default GoTopButton;
