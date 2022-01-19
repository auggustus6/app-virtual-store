import { render, waitFor, fireEvent } from "@shared/tests/helpers"
import { ControlCount } from "@components/Controls";
jest.mock('@expo/vector-icons', () => {
    return {
      Feather: ""
    };
  });
const props = {
    handleIncrement: jest.fn(),
    handleDecrement: jest.fn()
}

describe('Test suits for card cart', () => {

    it('should render counter', () => {
        const { getByText } = render(<ControlCount count={5} {...props} />)
        const count = getByText(/5/gi);
        expect(count).toBeDefined();
    });

    it('should called handleIncrement with success', () => {
        const { getByTestId } = render(<ControlCount count={5} {...props} />)
        const button = getByTestId("button-increment");

        fireEvent.press(button)
        expect(props.handleIncrement).toHaveBeenCalledTimes(1);
    });

    it('should called handleDecrement with success', () => {
        const { getByTestId } = render(<ControlCount count={5} {...props} />)
        const button = getByTestId("button-decrement");

        fireEvent.press(button);
        expect(props.handleDecrement).toHaveBeenCalledTimes(1);
    });

    it('should disabled button decrement if count equal an one', () => {
        const { getByTestId } = render(<ControlCount count={1} {...props} />)
        const button = getByTestId("button-decrement");
        expect(button.props.style.backgroundColor).toBe("#969cb2");
    });

    it('should not disabled button decrement if count moreThan one', () => {
        const { getByTestId } = render(<ControlCount count={2} {...props} />)
        const button = getByTestId("button-decrement");
        expect(button.props.style.backgroundColor).toBe("#6ab04c");
    });

})