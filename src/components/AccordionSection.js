import React from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ContentSection from './ContentSection';
import GoTopButton from './GoTopButton';

const AccordionSection = ({
	index,
	data,
	onToggle,
	moveToTop,
	onAddMore,
	isChildLoading,
	childKey,
}) => {
	const arrowRotation = !data.isExpanded ? '0deg' : '180deg';

	return (
		<View style={styles.sectionContainer}>
			<TouchableOpacity
				activeOpacity={0.8}
				style={[
					styles.sectionHeader,
					data.isExpanded && styles.sectionHeaderExpanded,
				]}
				onPress={onToggle}>
				<View style={styles.sectionTitleContainer}>
					<View style={styles.numberCircle}>
						<Text style={styles.sectionNumber}>{data.id}</Text>
					</View>
					<Text style={styles.sectionTitle}>{data.key}</Text>
				</View>

				{index === 1 ? <></> : <GoTopButton onPress={moveToTop} />}

				<Animated.Text
					style={[styles.arrow, {transform: [{rotate: arrowRotation}]}]}>
					▼
				</Animated.Text>
			</TouchableOpacity>
			{data.isExpanded ? (
				<Animated.View style={[styles.contentContainerWrapper]}>
					<ContentSection
						data={data}
						onAddMore={onAddMore}
						isChildLoading={isChildLoading}
						childKey={childKey}
						key={data.key}
					/>
				</Animated.View>
			) : (
				<></>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginBottom: 20,
		borderRadius: 12,
		overflow: 'hidden',
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.1,
	},
	sectionHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#f0f0f0',
		padding: 16,
		justifyContent: 'space-between',
		borderRadius: 12,
	},
	sectionHeaderExpanded: {
		backgroundColor: '#e8e8e8',
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
	},
	sectionTitleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
	},
	numberCircle: {
		width: 28,
		height: 28,
		borderRadius: 14,
		backgroundColor: '#555',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 12,
	},
	sectionNumber: {
		color: '#fff',
		fontSize: 14,
		fontWeight: 'bold',
	},
	sectionTitle: {
		fontSize: 16,
		fontWeight: '500',
		color: '#333',
	},
	arrow: {
		fontSize: 16,
		marginLeft: 8,
		color: '#555',
	},
	contentContainerWrapper: {
		overflow: 'hidden',
	},
});

export default AccordionSection;
