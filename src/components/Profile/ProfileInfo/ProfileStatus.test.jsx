import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

/** npm i react-test-renderer@16.12.0 -- save-dev
 * Components tests without browser.
 * 
 * describe used for tests grouping. */

describe('ProfileStatus Component', () => {
    const text = 'TEST PROPFILE STATUS';
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status={text} updateStatus={mockCallback} />);
    const root = component.root;
    const span = root.findByType('span');
    const instance = component.getInstance();

    test('status should goes from props to state', () => {
        expect(instance.state.status).toBe(text);
    });
    test('ProfileStatus should contain span by default', () => {
        expect(span).not.toBeNull();
    });
    test('ProfileStatus should not contain inpit by default', () => {
        expect(() => {
            const input = root.findByType('input');
        }).toThrow();
    });
    test('span should contain correct status', () => {
        expect(span.children[0]).toBe(text);
    });
    test('input should be displayed in editMode', () => {
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input).not.toBeNull();
        expect(input.props.defaultValue).toBe(text);
    });
    test('callback should be called', () => {
        const mockCallback = jest.fn();
        instance.editModeDeactivate();
        expect(mockCallback.mock.calls).toBeTruthy();
    })
})