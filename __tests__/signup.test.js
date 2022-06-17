import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Signup from '../pages/user-create';
import fetchMock from 'jest-fetch-mock';
import { act } from 'react-dom/test-utils';
import { Container } from "react-bootstrap";

fetchMock.enableMocks();
const successResponse = 'logged_in';
describe('Login page', () => {

    it('renders login with form', () => {
        render(<Router><Signup /> </Router>);
    });

    it('tests user login', async () => {
        await act(async () => {
            fetch.mockReturnValue(Promise.resolve(new Response(successResponse)));
            render(<Router><Signup /></Router>);
        });
        const buttonText = screen.getByText('Sign Up');
        const button = buttonText.closest('button');
        fireEvent.click(button);

        expect(fetch)
            .toHaveBeenCalledWith('http://127.0.0.1:5000/api1/user', {
                "body": "{\"UserName\":\"\",\"Email\":\"\",\"Password\":\"\",\"PhoneNumber\":\"\"}",
                "headers": { "Content-Type": "application/json" },
                'method': 'POST'
            });

        await expect(fetch)
            .toHaveBeenCalledTimes(1);
    });
});