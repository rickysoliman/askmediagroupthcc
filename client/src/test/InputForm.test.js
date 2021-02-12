import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputForm from '../components/InputForm.jsx';

it('renders the correct placeholder names', () => {
    const { queryByPlaceholderText } = render(<InputForm/>);

    expect(queryByPlaceholderText('user name')).toBeTruthy();
    expect(queryByPlaceholderText('repository name')).toBeTruthy();
});