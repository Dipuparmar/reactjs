import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";


describe('Greeting component', () => {

    test('renderes hello world as a text ', () => {
        //arrange
        render(<Greeting />)

        //Act
        //...nothing

        //Assert
        const helloWorldElement = screen.getByText('hello world');
        expect(helloWorldElement).toBeInTheDocument();

    })

});
