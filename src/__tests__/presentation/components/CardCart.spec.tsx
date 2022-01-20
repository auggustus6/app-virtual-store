import { render, fireEvent, waitFor } from "@shared/tests/helpers"
import { CardCart, CardCartProps } from "@components/Card";
jest.mock('@expo/vector-icons', () => {
  return {
    Feather: ""
  };
});
const mockedHandleFn = jest.fn()

jest.mock('../../../application/hooks/useCart', () => ({
  useCart: () => ({
    handleIncrement: mockedHandleFn,
    handleDecrement: mockedHandleFn,
  })
}));

describe('Test suits for card cart', () => {

  it('should render correctly', () => {
    const cardProps: CardCartProps = {
      id: "1",
      title: "Produto 1",
      price: "280",
      quantity: 1,
    }
    const { getByText, getByRole } = render(<CardCart  {...cardProps} />)

    const title = getByText(/produto 1/gi);
    const image = getByRole("image");

    expect(title).toBeDefined();
    expect(image.props.source.uri).toBe("https://via.placeholder.com/150x150");
  });

  it('should render quantity correct when onpress increment button', () => {
    const cardProps: CardCartProps = {
      id: "1",
      title: "Produto 1",
      price: "280",
      quantity: 1,
    }
    const { getByTestId } = render(<CardCart  {...cardProps} />);

    const incrementButton = getByTestId("button-increment");
    const quantity = getByTestId("count-text");
    fireEvent.press(incrementButton);
    expect(mockedHandleFn).toHaveBeenCalledTimes(1);
    waitFor(() => expect(quantity.props.children).toBe(2));
  });

  it('should render quantity correct when onpress decrement button', () => {
    const cardProps: CardCartProps = {
      id: "1",
      title: "Produto 1",
      price: "280",
      quantity: 1,
    }
    const { getByTestId } = render(<CardCart  {...cardProps} />);

    const decrementButton = getByTestId("button-decrement");
    const quantity = getByTestId("count-text");
    fireEvent.press(decrementButton);
    expect(mockedHandleFn).toHaveBeenCalledTimes(1);
    waitFor(() => expect(quantity.props.children).toBe(0));
  });

});