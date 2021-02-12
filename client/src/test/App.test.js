import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';

it('renders the correct content', () => {
    let root = document.createElement('div');
    ReactDOM.render(<App/>, root);

    expect(root.querySelector('h1').textContent).toBe('Github Weekday Commit Averages');
});