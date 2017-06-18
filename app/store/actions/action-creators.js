import ACTIONS from '../actions/action-types';

export function addToDo(item, listType) {
	return {
		type: ACTIONS.ADD_TODO,
		item,
		listType
	};
}

export function removeToDo(idx, listType) {
	return {
		type: ACTIONS.REMOVE_TODO,
		idx,
		listType
	};
}

export function setContentBgColor(color) {
	return {
		type: ACTIONS.SET_CONTENT_BG_COLOR,
		color
	};
}