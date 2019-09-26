import * as React from "react";
import { mount, ReactWrapper } from 'enzyme';
import { Task } from "../../src/models/task";
import TaskManager from "../../src/ui-components/task-manager";

describe( 'Task Master', ()=> {
	let wrapper: ReactWrapper;
	let list: Task[];
	const listItems = ()=>wrapper.find( 'li' );
	const deleteButton = ()=>wrapper.find( 'li button' );

	beforeEach(()=>{
		list = [
			{ user: 'testUser', id:'1', description: 'Task 1' },
			{ user: 'testUser', id:'2', description: 'Task 2' },
			{ user: 'testUser', id:'3', description: 'Task 3' },
			{ user: 'testUser', id:'4', description: 'Task 4' },
			{ user: 'testUser', id:'5', description: 'Task 5' }
		];

		wrapper = mount(
			<TaskManager/>
		)
	})

	it( 'should show all tasks', ()=> {
		expect( listItems() ).toHaveLength( 5 );
		expect ( listItems().at(0) ).toIncludeText( 'Task 1' );
		expect ( listItems().at(4) ).toIncludeText( 'Task 5' );
	});

	it( 'should add new tasks', ()=>{
		wrapper.setState({taskName: 'new task'});
		wrapper.find( 'button' ).at(0).simulate('click');

		expect( listItems() ).toHaveLength( 6 );
		expect( listItems().at(5) ).toIncludeText( 'new task' );
	})

	describe( 'Deleting items', ()=>{

		it( 'should delete a task at start of list', ()=> {
			deleteButton().at(0).simulate('click');

			expect( listItems() ).toHaveLength( 4 );
			expect( listItems().at(0) ).not.toIncludeText( 'Task 1' );
		});

		it( 'should delete a task at end of list', ()=> {
			deleteButton().at( 4 ).simulate('click');

			expect( listItems() ).toHaveLength( 4 );
			expect( listItems().at(3) ).toIncludeText( 'Task 4' );
		});
	})

});
