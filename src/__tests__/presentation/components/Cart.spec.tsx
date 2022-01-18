import { render } from "@shared/tests/helpers";
import Cart from "@components/Cart";

jest.mock('@expo/vector-icons', () => {
    return {
      Feather: ""
    };
  });
describe('Test suits for cart', () => {
    it('should render correctly', () => {
        const {getByTestId} = render(<Cart />);

        const icon = getByTestId('cart-icon');

        expect(icon).toBeDefined();
    });

    it('should render badge component if showBadge it is true', () => {
        const {getByText} = render(<Cart showBadge />);

        const countBadge = getByText('0');
  
        expect(countBadge).toBeDefined();
        expect(countBadge.props.children).toEqual(0);
    });
})