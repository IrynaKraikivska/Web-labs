import React from "react";
import UserPage from "../pages/user-page";
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from "react-router-dom";
import fetchMock from 'jest-fetch-mock';
import { act } from 'react-dom/test-utils';
//let logaut = require('../pages/user-page').logaut;

// name of the module, name of the function
//spy = jest.spyOn(logaut, 'logaut');

fetchMock.enableMocks();
const successResponse = 'logged_out';
describe('User page', () => {
    it('renders User page', () => {
        render(<Router><UserPage /> </Router>); 
    });
    
    it('tests logaut', async () => {
        await act(async () => {
            fetch.mockReturnValue(Promise.resolve(new Response(successResponse)));
            render(<Router><UserPage /></Router>);
        });
        const buttonText = screen.getByText('Log out');
        const button = buttonText.closest('button');
        fireEvent.click(button);      
        
    });
});