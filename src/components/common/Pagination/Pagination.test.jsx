import React from 'react';
import { create } from 'react-test-renderer';
import Paginator from './Pagination';

describe('Paginator component tests', () => {
    const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />)
    const root = component.root;
    test('should be showed 10 pages with total count is 11', () => {
        const spans = root.findAllByType('span');
        expect(spans.length).toBe(10);
    });
    test('NEXT button should be view if pages count more then 10', () => {
        const button = root.findByType('button');
        expect(button).toBeTruthy();
    })
})