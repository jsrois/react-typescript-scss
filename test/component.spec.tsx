import { render, fireEvent, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as React from "react";
import { App as ClipCounter } from '../src/components/app'

const timerMock =  {
    start: jest.fn(),
    elapsed: () => 1000
};

describe("Clip counting game", () => {
    afterEach(cleanup);
    it("starts with 0 clips", () => {
        const { getByText } = render(<ClipCounter timer={timerMock} />);
        expect(getByText(/You have no clips yet. Push the button to start generating clips/)).toBeInTheDocument();
    });
    
    it("allows to create clips by pressing the button", () => {
        const { getByText } = render(<ClipCounter timer={timerMock}/>);

        fireEvent.click(getByText(/New clip/));
        expect(getByText(/Number of clips is 1/)).toBeInTheDocument();
    });
        
    it("keeps the count of created clips", () => {
        const { getByText } = render(<ClipCounter timer={timerMock}/>);
        
        const button = getByText(/New clip/);
        
        fireEvent.click(button);
        fireEvent.click(button);
        fireEvent.click(button);

        expect(getByText(/Number of clips is 3/)).toBeInTheDocument();
    });

    it("finishes the game when you reach 10 clips", ()=> {
        const { getByText } = render(<ClipCounter timer={timerMock}/>);
        
        const button = getByText(/New clip/);
        
        for (let i = 0; i < 10; i++) {
            fireEvent.click(button);            
        }

        expect(() => getByText(/New clip/)).toThrow();
        expect(() => getByText(/Number of clips/)).toThrow();
        expect(getByText("Congratulations! You have finished.")).toBeInTheDocument();
    });

    it("records how long you took to finish the game", ()=> {

        const timerStub = {
            start: jest.fn(),
            elapsed: () => {return 4389}
        };

        const { getByText } = render(<ClipCounter timer={timerStub}/>); 
        
        const button = getByText(/New clip/);
        
        expect(timerStub.start).not.toHaveBeenCalled();
    
        fireEvent.click(button);            

        expect(timerStub.start).toHaveBeenCalled();
        
        for (let i = 0; i < 9; i++) {
            fireEvent.click(button);            
        }

        expect(getByText("Your time is 4.389 sec")).toBeInTheDocument();
    });
});