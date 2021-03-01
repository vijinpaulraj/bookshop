import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { SearchBox } from './SearchBox';

const setUp = (props = {}) => {
    configure({ adapter: new Adapter() });
    const component = shallow(<SearchBox {...props} />);
    return component;
};

describe('SearchBox Component', () => {
    let component;

    beforeEach(() => {
        component = setUp();
    });

    describe('should render', () => {
        it('Form element', () => {
            const elem = component.find('Form');
            expect(elem.length).toBe(1);
        });

        it('FormControl element', () => {
            const elem = component.find('FormControl');
            expect(elem.length).toBe(1);
        });

        it(' Button element', () => {
            const elem = component.find('Button');
            expect(elem.length).toBe(1);
        });
    });

    describe('Should use the state from component', () => {
        it('And disable the Button by default', () => {
            const buttonComponent = setUp({ nextDisabled: true });
            const elem = buttonComponent.find('Button');
            const isDisabled = elem.props().disabled;
            expect(isDisabled).toBe(true);
        });
    });
});