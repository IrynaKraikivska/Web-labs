import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Login from '../pages/login';
import fetchMock from 'jest-fetch-mock';
import { act } from 'react-dom/test-utils';

fetchMock.enableMocks();
const successResponse = 'logged_in';
describe('Login page', () => {

    it('renders login with form', () => {
        render(<Router><Login /> </Router>);
    });

    it('tests user login', async () => {
        await act(async () => {
            fetch.mockReturnValue(Promise.resolve(new Response(successResponse)));
            render(<Router><Login /></Router>);
        });
        const login = screen.getByText("Log in");
        const button = login.closest('button');
        fireEvent.click(button);

        expect(fetch)
            .toHaveBeenCalledWith('http://127.0.0.1:5000/login', {
                "body": "{\"UserName\":\"\",\"Password\":\"\"}",
                "headers": { "Content-Type": "application/json" },
                'method': 'POST'
            });
        await expect(fetch)
            .toHaveBeenCalledTimes(1);
    });
});