import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from '@testing-library/react';
import NetworkApp from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('should render without craching', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NetworkApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});