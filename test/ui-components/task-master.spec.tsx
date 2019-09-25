import * as React from "react";
import { mount, ReactWrapper } from 'enzyme';
import { TaskMaster } from "../../src/ui-components/task-master";
import { Task } from "../../src/models/task";

describe( 'Task Master', ()=> {
	let wrapper: ReactWrapper;
	let list: Task[] = [
		{ id:'1', description: 'Task 1' },
		{ id:'2', description: 'Task 2' },
		{ id:'3', description: 'Task 3' },
		{ id:'4', description: 'Task 4' },
		{ id:'5', description: 'Task 5' }
	]
	const deleteItem = jest.fn( item => list = list.filter( i => item !== i ) );
	const listItems = ()=>wrapper.find( 'li' );

	beforeEach(()=>{
		wrapper = mount(
			<TaskMaster
				list={list}
				onDelete={ ( item )=>deleteItem( item ) }
			>
			</TaskMaster>
		)
	})

	it( 'should show all tasks', ()=> {
		console.log( wrapper.debug() );

		expect( listItems() ).toHaveLength( 5 );
		expect ( listItems().at(0) ).toIncludeText( 'Task 1' );
		expect ( listItems().at(4) ).toIncludeText( 'Task 5' );
	});

	it( 'should add a tasks', ()=> {

	});

	describe( 'Deleting items', ()=>{
		const deleteButton = wrapper.find( 'button' );

		it( 'should delete a task at start of list', ()=> {
			deleteButton.at( 0 ).simulate('click');

			expect( deleteItem ).toHaveBeenCalled();
			expect( list ).toHaveLength( 4 );
			expect( listItems().at(0) ).not.toIncludeText( 'Task 1' );
		});

		it( 'should delete a task at end of list', ()=> {
			deleteButton.at( 4 ).simulate('click');

			expect( list ).toHaveLength( 4 );
			expect( listItems().at( 4 ) ).toBeUndefined();
		});
	})

});
