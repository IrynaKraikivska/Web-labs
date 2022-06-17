import React from "react";
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from "react-router-dom";
import DayView from "../pages/day";
import fetchMock from 'jest-fetch-mock';
import { act } from 'react-dom/test-utils';

fetchMock.enableMocks();
const successResponse = 'smth created';
describe('Day View page', () => {
    it('renders Day View', () => {
        render(<Router><DayView /> </Router>);
        expect(screen.getAllByRole('textbox'));
    });
    
    it('tests event creation', async () => {
        await act(async () => {
            fetch.mockReturnValue(Promise.resolve(new Response(successResponse)));
            render(<Router><DayView /></Router>);
        });
        const login = screen.getByText("Create Event");
        const button = login.closest('button');
        fireEvent.click(button);

        expect(fetch)
            .toHaveBeenCalledWith('http://127.0.0.1:5000/api1/event', {
                "body": "{\"Name\":\"\",\"Calendar\":\"\",\"Datetime\":null,\"Description\":\"\"}",
                "headers": { "Authorization": "Bearer null", "Content-Type": "application/json" },
                'method': 'POST'
            });
        await expect(fetch)
            .toHaveBeenCalledTimes(1);
    });
    it('tests category creation', async () => {
        await act(async () => {
            fetch.mockReturnValue(Promise.resolve(new Response(successResponse)));
            render(<Router><DayView /></Router>);
        });
        const btn=screen.getByText("+");
        fireEvent.click(btn);
        const login = screen.getByText("Create Category");
        const button = login.closest('button');
        fireEvent.click(button);

        expect(fetch)
            .toHaveBeenCalledWith('http://127.0.0.1:5000/api1/calendar', {
                "body": "{\"Name\":\"\",\"Description\":\"\"}",
                "headers": { "Authorization": "Bearer null", "Content-Type": "application/json" },
                'method': 'POST'
            });
        await expect(fetch)
            .toHaveBeenCalledTimes(1);
    });    
})