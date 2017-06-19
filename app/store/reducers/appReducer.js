import ACTIONS from '../actions/action-types';
import stateTree from '../stateTree';

export default function appReducer(state = stateTree, action) {

	switch(action.type) {

		case ACTIONS.SET_CONTENT_BG_COLOR:
			return { ...state, bgColor: action.color };
		
		default:
			return state;
	}
}
