import toDoReducer from '../app/store/reducers/toDoReducer';

describe('Test toDoReducer', function() {
	
	it('Adds item to green list array', function() {
		
		var state = { green: { list: [] } };
		var action = {
			type: 'ADD_TODO',
			listType: 'green',
			item: 'foo'
		};
		state = toDoReducer(state, action);
		expect(state.green.list.length).toEqual(1);
	});

	it('Adds item to purple list array', function() {
		
		var state = { purple: { list: [] } };
		var action = {
			type: 'ADD_TODO',
			listType: 'purple',
			item: 'foo'
		};
		state = toDoReducer(state, action);
		expect(state.purple.list.length).toEqual(1);
	});
	
	it('Removes item from green list array', function() {
		
		var state = { green: { list: ['foo'] } };
		var action = {
			type: 'REMOVE_TODO',
			listType: 'green',
			idx: 0
		};
		state = toDoReducer(state, action);
		expect(state.green.list.length).toEqual(0);
	});
	
	it('Removes item from purple list array', function() {
		
		var state = { purple: { list: ['foo', 'bar'] } };
		var action = {
			type: 'REMOVE_TODO',
			listType: 'purple',
			idx: 1
		};
		state = toDoReducer(state, action);
		expect(state.purple.list.length).toEqual(1);
	});

	it('State remains unchanged if invalid action', function() {
		var state = { purple: { list: ['foo', 'bar'] } };
		var action = {
			type: 'ADD',
			listType: 'purple',
			item: 'foo'
		};
		var state = toDoReducer(state, action);
		expect(state.purple.list.length).toEqual(2);
	});	

	it('By default, list is empty', function() {
		//var stateTree = { purple: { list: [] } };
		var action = {
			type: 'ADD',
			listType: 'purple',
			item: 'foo'
		};		
		var state = toDoReducer(undefined, action);
		expect(state.purple.list.length).toEqual(0);
	});	
});