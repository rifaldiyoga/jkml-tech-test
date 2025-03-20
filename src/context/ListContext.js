import createDataContext from './createDataContext';
import {defaultApi} from '../api/api';

const listReducer = (state, action) => {
	switch (action.type) {
		case 'isloading':
			return {...state, isLoading: action.payload};
		case 'fetch':
			return {...state, list: action.payload, isLoading: false, error: ''};
		case 'fetch_error':
			return {...state, error: action.payload, isLoading: false};
		case 'start_add_child_data':
			return {
				...state,
				isChildLoading: true,
				key: action.payload,
			};
		case 'success_add_child_data':
			return {
				...state,
				list: state.list.map(item =>
					item.key === action.payload.key
						? {...item, values: [...item.values, ...action.payload.values]}
						: item,
				),
				isChildLoading: false,
				key: null,
			};
		case 'error_add_child_data':
			alert(action.payload);
			return {
				...state,
				isChildLoading: false,
				key: null,
			};

		case 'move_first':
			return {...state, list: moveItemToFirst(state.list, action.payload)};

		case 'set_expand':
			const a = state.list.map(item => {
				return item.key === action.payload
					? {...item, isExpanded: !item.isExpanded}
					: item;
			});
			console.log(a);
			return {
				...state,
				list: a,
			};
		default:
			return state;
	}
};

const moveItemToFirst = (list, key) => {
	const index = list.findIndex(item => item.key === key);

	console.log(key);
	if (index === -1) {
		return list;
	}

	const [movedItem] = list.splice(index, 1);
	return [movedItem, ...list];
};

const fetchData = dispatch => async () => {
	try {
		const response = await defaultApi.get('/categories');
		const map = response.data.categories.map((item, index) => ({
			id: index + 1,
			key: item,
			values: [],
			isExpanded: false,
		}));
		dispatch({type: 'fetch', payload: map});
	} catch (error) {
		dispatch({
			type: 'fetch_error',
			payload: 'Failed to fetch categories',
		});
	}
};

const addMoreChildData = dispatch => async key => {
	dispatch({type: 'start_add_child_data', payload: key});
	try {
		const response = await defaultApi.get(`/joke/${key}?type=single&amount=2`);
		const data = response.data.jokes.map(item => item.joke);

		dispatch({
			type: 'success_add_child_data',
			payload: {key: key, values: data},
		});
	} catch (error) {
		dispatch({
			type: 'error_add_child_data',
			payload: 'Failed to load data ' + key,
		});
	}
};

const moveToTop = dispatch => async key => {
	return dispatch({type: 'move_first', payload: key});
};

const setExpand = dispatch => async key => {
	return dispatch({type: 'set_expand', payload: key});
};

export const {Context, Provider} = createDataContext(
	listReducer,
	{
		fetchData,
		addMoreChildData,
		moveToTop,
		setExpand,
	},
	{list: [], isLoading: true, error: '', isChildLoading: false, key: ''},
);
