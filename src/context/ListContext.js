import createDataContext from './createDataContext';
import {defaultApi} from '../api/api';

const listReducer = (state, action) => {
	switch (action.type) {
		case 'isloading':
			return {...state, isLoading: action.payload};
		case 'fetch':
			return {...state, list: action.payload, isLoading: false};
		case 'add_child_data':
			return {
				...state,
				list: state.list.map(item =>
					item.key === action.payload.key
						? {...item, values: [...item.values, ...action.payload.values]}
						: item,
				),
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

const setIsLoading = (dispatch, value) => {
	dispatch({type: 'isloading', payload: value});
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
	const response = await defaultApi.get('/categories');
	console.log(response);
	const map = response.data.categories.map((item, index) => ({
		id: index + 1,
		key: item,
		values: [],
		isExpanded: false,
	}));
	dispatch({type: 'fetch', payload: map});
};

const addMoreChildData = dispatch => async key => {
	const response = await defaultApi.get(
		'/joke/' + key + '?type=single&amount=2',
	);
	const data = response.data.jokes.map(item => item.joke);
	return dispatch({type: 'add_child_data', payload: {key: key, values: data}});
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
	{list: [], isLoading: true},
);
