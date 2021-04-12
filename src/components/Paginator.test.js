import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Paginator from './Paginator';

const setUp = (props = {}) => {
    configure({ adapter: new Adapter() });
    const component = shallow(<Paginator {...props} />);
    return component;
};

describe('Paginator Component', () => {
    let component;

    beforeEach(() => {
        component = setUp();
    });

    describe('Should render', () => {
        it('Back button', () => {
            const buttonText = component.text()
            expect(buttonText).to.equal('Back');
        });

        it('Next button', () => {
            const buttonText = component.text()
            expect(buttonText).toBe('Next');
        });

    });

    describe('Should use the state from component', () => {
        it('And disable the Back Button by default', () => {
            const buttonComponent = setUp({ next: true });
            const elem = buttonComponent.find('Button');
            const isDisabled = elem.props().disabled;
            expect(isDisabled).toBe(true);
        });
    });
});