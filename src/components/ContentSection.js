import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddMoreButton from './AddMoreButton';

const ContentSection = ({data, onAddMore}) => {
	return (
		<View style={styles.contentContainer}>
			{data?.values?.map((items, index) => (
				<View style={styles.contentSection} key={index}>
					<Text style={styles.contentText}>{items}</Text>
				</View>
			)) ?? <></>}
			{data.values.length < 4 ? (
				<AddMoreButton onAddMore={() => onAddMore(data.key)} />
			) : (
				<></>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	contentContainer: {
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#e0e0e0',
		borderTopWidth: 0,
	},
	contentSection: {
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#e0e0e0',
	},
	contentText: {
		color: '#666',
		fontSize: 14,
		lineHeight: 20,
	},
});

export default ContentSection;
