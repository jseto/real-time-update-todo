import * as React from "react";
import { mount, ReactWrapper } from 'enzyme';
import { TaskMaster } from "../../src/ui-components/task-master";
import { Task } from "../../src/models/task";

describe( 'Task Master', ()=> {
	let wrapper: ReactWrapper;
	let list: Task[];
	const deleteItem = jest.fn( item => list = list.filter( i => item !== i ) );
	const listItems = ()=>wrapper.find( 'li' );
	const deleteButton = ()=>wrapper.find( '.icon-button' );

	beforeEach(()=>{
		list = [
			{ user: 'testUser', id:'1', description: 'Task 1' },
			{ user: 'testUser', id:'2', description: 'Task 2' },
			{ user: 'testUser', id:'3', description: 'Task 3' },
			{ user: 'testUser', id:'4', description: 'Task 4' },
			{ user: 'testUser', id:'5', description: 'Task 5' }
		];

		wrapper = mount(
			<TaskMaster
				list={list}
				onDelete={ ( item )=>deleteItem( item ) }
			/>
		)
	})

	it( 'should show all tasks', ()=> {
		expect( listItems() ).toHaveLength( 5 );
		expect ( listItems().at(0) ).toIncludeText( 'Task 1' );
		expect ( listItems().at(4) ).toIncludeText( 'Task 5' );
	});
	describe( 'Deleting items', ()=>{

		it( 'should delete a task at start of list', ()=> {
			deleteButton().at(0).simulate('click');
			wrapper.update();

			expect( deleteItem ).toHaveBeenCalled();
			expect( list ).toHaveLength( 4 );
		});

		it( 'should delete a task at end of list', ()=> {
			deleteButton().at( 3 ).simulate('click');

			expect( list ).toHaveLength( 4 );
		});
	})

});
