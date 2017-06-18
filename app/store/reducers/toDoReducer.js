import ACTIONS from '../actions/action-types';

export default function toDoReducer(
	state = {
		green: {
			list: []
		},
		orange: {
			list: []
		}
	}, 
	action
) {

	let newList;

	switch(action.type) {

		case ACTIONS.ADD_TODO:
			
			newList = state[action.listType].list.concat(action.item);
			//console.log(newList);
			return { ...state, [action.listType]: { list: newList } };
		
		case ACTIONS.REMOVE_TODO:
			newList = state[action.listType].list.slice();
			newList.splice(action.idx, 1);
			return { ...state, [action.listType]: { list: newList } };
		
		default:
			return state;
	}
}
