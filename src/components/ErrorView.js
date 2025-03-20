import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import GradientView from './GradientView';

const ErrorView = ({message, onRetry}) => {
	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<Text style={styles.errorIcon}>!</Text>
			</View>

			<Text style={styles.errorTitle}>Something went wrong</Text>

			<Text style={styles.errorMessage}>
				{message || "We couldn't load the data. Please try again."}
			</Text>

			<TouchableOpacity
				style={styles.retryButton}
				onPress={onRetry}
				activeOpacity={0.8}>
				<GradientView
					colors={['#ff7e5f', '#feb47b']}
					style={styles.retryButtonGradient}>
					<Text style={styles.retryButtonText}>Try Again</Text>
				</GradientView>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(255, 255, 255, 0.9)',
		borderRadius: 12,
		padding: 20,
		alignItems: 'center',
		marginVertical: 20,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	iconContainer: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: '#ff5252',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
	},
	errorIcon: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	},
	errorTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#333',
		marginBottom: 10,
	},
	errorMessage: {
		fontSize: 14,
		color: '#666',
		textAlign: 'center',
		marginBottom: 20,
		lineHeight: 20,
	},
	retryButton: {
		borderRadius: 20,
		overflow: 'hidden',
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 1},
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 2,
	},
	retryButtonGradient: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 20,
	},
	retryButtonText: {
		color: '#fff',
		fontSize: 14,
		fontWeight: '600',
	},
});

export default ErrorView;
