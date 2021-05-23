import React from 'react';
import {render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Getaways from './Getaways';

describe('Testing Getaways page', () => { 
    it('should render a list of randomized getaways on mount', async () => { 
        render(<MemoryRouter> <Getaways/> </MemoryRouter>);

        screen.getByText('Loading...')

        const ul = await screen.findByRole('list', { name: 'getaways' })
        expect(ul).toMatchSnapshot();

    })
})