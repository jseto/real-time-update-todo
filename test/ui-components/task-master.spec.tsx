import * as React from "react";
import { mount, ReactWrapper } from 'enzyme';
import { TaskMaster } from "../../src/ui-components/task-master";
import { Task } from "../../src/models/task";

describe( 'Task Master', ()=> {
	let wrapper: ReactWrapper;

	beforeEach(()=>{
		const list: Task[] = [
			{ id:'1', description: 'Task 1' },
			{ id:'2', description: 'Task 2' },
			{ id:'3', description: 'Task 3' },
			{ id:'4', description: 'Task 4' },
			{ id:'5', description: 'Task 5' }
		]
		wrapper = mount(
			<TaskMaster list={list}>
			</TaskMaster>
		)
	})

	it( 'should show all tasks', ()=> {
		const listItems = wrapper.find( 'li' );
		console.log( wrapper.debug() );

		expect( listItems ).toHaveLength( 5 );
		expect ( listItems.at(0) ).toIncludeText( 'Task 1' );
		expect ( listItems.at(4) ).toIncludeText( 'Task 5' );
	});

	it( 'should add a tasks', ()=> {

	});

	it( 'should delete a task', ()=> {

	});

});
