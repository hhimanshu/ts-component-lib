import { render, screen } from '@testing-library/react';
import React from 'react';
import Welcome from "./index"

describe('A test', () => {
    it('2 + 2 = 4', () => {
        expect(2 + 2).toEqual(4);
    });
});

describe('Welcome Component', () => {
    it('should display h1', () => {
        render(<Welcome person={"BonsaiiLabs"}/>);
        const h1 = screen.getByRole('heading');
        expect(h1.innerHTML).toEqual(
            'Hello BonsaiiLabs'
        );
    });
});
