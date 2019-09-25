import * as React from "react";
import { mount, ReactWrapper } from 'enzyme';
import { Task } from "../../src/models/task";
import { TaskDetail } from '../../src/ui-components/task-detail';

describe( 'Task component', ()=> {
	let wrapper: ReactWrapper;

	beforeEach(()=>{
		const task: Task = { id:'1', description: 'test task' }
		wrapper = mount(
			<TaskDetail task={task}>
			</TaskDetail>
		)
	})

	it( 'should show task text', ()=> {
		expect( wrapper ).toIncludeText( 'test task' );
	});

});
