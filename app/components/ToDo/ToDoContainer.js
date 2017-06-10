import { connect } from 'react-redux';

import { addToDo, removeToDo } from '../../actions/action-creators';
import ToDoTpl from './ToDoTpl';

function mapStateToProps(store) {
	return {
		list: store.list
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		add: function(e) {
			e.preventDefault();
			
			if (e.target.value && e.keyCode === 13) {
				dispatch(addToDo(e.target.value));
				e.target.value = '';
			}
		},
		remove: function(i) {
			dispatch(removeToDo(i));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoTpl);