import ACTIONS from '../actions/action-types';

export default function appReducer(state = { bgColor: '' }, action) {

	switch(action.type) {

		case ACTIONS.SET_CONTENT_BG_COLOR:
			return { ...state, bgColor: action.color };
		
		default:
			return state;
	}
}
