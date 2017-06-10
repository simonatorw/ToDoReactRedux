import ACTIONS from '../actions/action-types';

export default function toDoReducer(state = { list: [] }, action) {

	let newList;

	switch(action.type) {

		case ACTIONS.ADD_TODO:
			newList = state.list.concat(action.item);
			return { ...state, list: newList };
		
		case ACTIONS.REMOVE_TODO:
			newList = state.list.slice();
			newList.splice(action.idx, 1);
			return { ...state, list: newList };
		
		default:
			return state;
	}
}
