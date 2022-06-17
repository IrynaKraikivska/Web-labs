import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from "react-router-dom";
import UserEdit from '../pages/user-edit';
import fetchMock from 'jest-fetch-mock';
import { act } from 'react-dom/test-utils';
import { Container } from "react-bootstrap";

fetchMock.enableMocks();
const successResponse = 'logged_in';
describe('User Edit page', () => {

    it('renders user-edit with form', () => {
        render(<Router><UserEdit /> </Router>);
        expect(screen.getAllByRole('textbox'));
    });

    it('tests user edit', async () => {
        await act(async () => {
            fetch.mockReturnValue(Promise.resolve(new Response(successResponse)));
            render(<Router><UserEdit /></Router>);
            
        });
        
        const buttonText = screen.getByText('Submit');
        const button = buttonText.closest('button');
        fireEvent.click(button);

        expect(fetch)
            .toHaveBeenCalledWith('http://127.0.0.1:5000/api1/user', {
                "body": "{\"UserName\":\"\",\"PhoneNumber\":\"\",\"Email\":\"\",\"Password\":null}",
                "headers": { "Authorization": "Bearer null", "Content-Type": "application/json" },
                'method': 'PUT'
            });

        await expect(fetch)
            .toHaveBeenCalledTimes(1);
    });
});