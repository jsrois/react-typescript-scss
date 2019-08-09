import { render, fireEvent, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as React from "react";
import { App as ClipCounter } from '../src/components/app'

describe("Clip counting game", () => {
    afterEach(cleanup);
    it("starts with 0 clips", () => {
        const { getByText } = render(<ClipCounter />);
        expect(getByText(/You have no clips yet. Push the button to start generating clips/)).toBeInTheDocument();
    });
    
    it("allows to create clips by pressing the button", () => {
        const { getByText } = render(<ClipCounter />);

        fireEvent.click(getByText(/New clip/));
        expect(getByText(/Number of clips is 1/)).toBeInTheDocument();
    });
        
    it("keeps the count of created clips", () => {
        const { getByText } = render(<ClipCounter />);
        
        const button = getByText(/New clip/);
        
        fireEvent.click(button);
        fireEvent.click(button);
        fireEvent.click(button);

        expect(getByText(/Number of clips is 3/)).toBeInTheDocument();
    });

    it("finishes the game when you reach 10 clips", ()=> {
        const { getByText } = render(<ClipCounter />);
        
        const button = getByText(/New clip/);
        
        for (let i = 0; i < 10; i++) {
            fireEvent.click(button);            
        }

        expect(() => getByText(/New clip/)).toThrow();
        expect(() => getByText(/Number of clips/)).toThrow();
        expect(getByText("Congratulations! You have finished.")).toBeInTheDocument();
    });
});