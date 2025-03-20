import React, {useState} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';
import AddMoreButton from './AddMoreButton';
import Dialog from 'react-native-dialog';

const ContentSection = ({data, onAddMore, isChildLoading, childKey}) => {
	const [visible, setVisible] = useState(false);
	const [text, setDialogText] = useState('');
	console.log(childKey);
	console.log(data.key);
	return (
		<View style={styles.contentContainer}>
			{data?.values?.map((items, index) => (
				<TouchableOpacity
					key={index}
					onPress={() => {
						setDialogText(items);
						setVisible(true);
					}}>
					<View style={styles.contentSection} key={index}>
						<Text style={styles.contentText}>{items}</Text>
					</View>
				</TouchableOpacity>
			)) ?? <></>}
			{data.values.length < 4 ? (
				isChildLoading && childKey === data.key ? (
					<ActivityIndicator size="large" />
				) : (
					<AddMoreButton onAddMore={() => onAddMore(data.key)} />
				)
			) : (
				<></>
			)}

			<Dialog.Container visible={visible} contentStyle={styles.dialogContainer}>
				<Dialog.Title style={styles.dialogTitle}>Joke</Dialog.Title>
				<Dialog.Description style={styles.dialogDesc}>
					{text}
				</Dialog.Description>
				<Dialog.Button label="OK" onPress={() => setVisible(false)} />
			</Dialog.Container>
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
	dialogContainer: {
		backgroundColor: '#fff', // Dark background color
		borderRadius: 10,
	},
	dialogTitle: {
		color: 'black',
		fontSize: 18,
		fontWeight: 'bold',
	},
	dialogDesc: {
		fontSize: 18,
		color: 'black',
	},
});

export default ContentSection;
