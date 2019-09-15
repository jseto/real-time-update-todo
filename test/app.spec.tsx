import * as React from "react";
import { mount } from 'enzyme';

import { App } from '../src/app';

describe( 'App unit tests', ()=>{
	it( 'should retrieve a string to write', ()=>{
		let app = new App({name:'pep'});
		expect( app.stringToWrite() ).toEqual( 'Hello world' );
	});
});

describe( 'App e2e tests', ()=>{
		const wrapper = mount( <App name='pep'/> );

	it( 'should show a string', ()=>{
		expect( wrapper.find( App ) ).toHaveLength(1);
		expect( wrapper.find( App ) ).toHaveText( 'Hello props: pep state: pep' );
	});
});
