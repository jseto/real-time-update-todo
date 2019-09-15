import 'jest-enzyme';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global[ 'mount' ] = Enzyme.mount;
global[ 'shallow' ] = Enzyme.shallow;
global[ 'render' ] = Enzyme.render;
