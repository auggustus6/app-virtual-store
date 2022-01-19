import { render } from "@shared/tests/helpers"
import { CardCart, CardCartProps } from "@components/Card";
jest.mock('@expo/vector-icons', () => {
    return {
      Feather: ""
    };
  });

describe('Test suits for card cart', () => {

    it('should render correctly', () => {
        const cardProps: CardCartProps = {
            id: "1",
            title:"Produto 1",
            price: "280",
            quantity: 1,

        }
        const { getByText, getByRole } = render(<CardCart  {...cardProps} />)

        const title = getByText(/produto 1/gi);
        const image = getByRole("image");

        expect(title).toBeDefined();
        expect(image.props.source.uri).toBe("https://via.placeholder.com/150x150");
    });


})