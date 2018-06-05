import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import * as reactEasyState from 'react-easy-state/dist/cjs.es6.js';

configure({ adapter: new Adapter() });

jest.setMock('react-easy-state', reactEasyState);