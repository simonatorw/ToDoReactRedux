import { connect } from 'react-redux';

import { addToDo, removeToDo } from '../../actions/action-creators';
import ToDoTpl from './ToDoTpl';

function mapStateToProps(store) {
	return {
		list: store.toDoReducer[store.appReducer.bgColor].list,
		bgColor: store.appReducer.bgColor
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	let listType = ownProps.match.path.split('/')[1];
	if (!listType) {
		listType = 'green';
	}	
	return {
		add: function(e) {
			e.preventDefault();
		
			if (e.target.value && e.keyCode === 13) {
				dispatch(addToDo(e.target.value, listType));
				e.target.value = '';
			}
		},
		remove: function(i) {
			dispatch(removeToDo(i, listType));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoTpl);