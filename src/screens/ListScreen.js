import React, {useContext, useEffect} from 'react';
import {
	RefreshControl,
	SafeAreaView,
	ScrollView,
	StyleSheet,
} from 'react-native';
import AccordionSection from '../components/AccordionSection';
import GradientView from '../components/GradientView';
import {Context as ListContext} from '../context/ListContext';

const ListScreen = () => {
	const {state, fetchData, addMoreChildData, moveToTop, setExpand} =
		useContext(ListContext);
	const {list, isLoading} = state;

	useEffect(() => {
		console.log('useEffect triggered');
		fetchData();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<GradientView colors={['#f5f7fa', '#c3cfe2']} style={styles.background} />
			<ScrollView
				contentContainerStyle={styles.scrollContainer}
				showsVerticalScrollIndicator={false}
				refreshControl={
					<RefreshControl
						refreshing={isLoading}
						onRefresh={() => fetchData()}
						colors={['#ff7e5f']}
						tintColor={'#ff7e5f'}
						title={'Pull to refresh...'}
						titleColor={'#555'}
					/>
				}>
				{list.map((data, index) => (
					<AccordionSection
						key={data.key}
						index={index + 1}
						data={data}
						onToggle={() => setExpand(data.key)}
						moveToTop={() => moveToTop(data.key)}
						onAddMore={addMoreChildData}
					/>
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	},
	scrollContainer: {
		padding: 20,
		paddingTop: 60,
	},
	appTitle: {
		fontSize: 28,
		fontWeight: 'bold',
		marginBottom: 30,
		textAlign: 'center',
		color: '#333',
		textShadowColor: 'rgba(0, 0, 0, 0.1)',
		textShadowOffset: {width: 1, height: 1},
		textShadowRadius: 2,
	},
	loadingContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20,
		padding: 10,
	},
	refreshButton: {
		borderRadius: 20,
		overflow: 'hidden',
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 1},
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 3,
	},
	refreshButtonGradient: {
		width: 40,
		height: 40,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default ListScreen;
