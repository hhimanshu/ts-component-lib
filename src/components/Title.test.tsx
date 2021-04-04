import {render, screen} from "@testing-library/react";
import Welcome from "./Title";
import React from "react";

describe('Welcome Component', () => {
    it('should display h1', () => {
        render(<Welcome person={"BonsaiiLabs"}/>);
        const h1 = screen.getByRole('heading');
        expect(h1.innerHTML).toEqual(
            'Hello BonsaiiLabs'
        );
    });
});
