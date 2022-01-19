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
            title:"Produto 1",
            price: "280",
            quantity: 1,
            description:"Meu primeiro produto",

        }
        const { getByText, getByRole } = render(<CardCart  {...cardProps} />)

        const title = getByText(/produto 1/gi);
        const description = getByText(/Meu primeiro produto/gi);
        const image = getByRole("image");

        expect(title).toBeDefined();
        expect(description).toBeDefined();
        expect(image.props.source.uri).toBe("https://via.placeholder.com/150x150");
    });


})