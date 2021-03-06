import * as React from "react";
import { mount, ReactWrapper } from 'enzyme';
import { Task } from "../../src/models/task";
import { TaskDetail } from '../../src/ui-components/task-detail';

describe( 'Task component', ()=> {
	let wrapper: ReactWrapper;
	const deleteItem = jest.fn();

	beforeEach(()=>{
		const task: Task = { user: 'testUser', id:'1', description: 'test task' }
		wrapper = mount(
			<TaskDetail
				task={task}
				onDelete={ ()=>deleteItem() }
			/>
		)
	})

	it( 'should show task text', ()=> {
		expect( wrapper ).toIncludeText( 'test task' );
	});

});
