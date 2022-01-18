import { CardProduct, CardProps } from "@components/Card/CardProduct"
import { render } from "@shared/tests/helpers"

jest.mock('@expo/vector-icons', () => {
    return {
      Feather: ""
    };
  });

describe('Test suits for card', () => {
    it('should render card with props', () => {
        const cardProps: CardProps = {
            title: "Camiseta Verde",
            price: "280"
        }
        const { getByText } = render(<CardProduct  {...cardProps} />)

        const price = getByText("R$ 280");
        const title = getByText(cardProps.title);
        expect(price).toBeDefined();
        expect(title).toBeDefined();
    });

    it('should render card image by default', () => {
        const cardProps: CardProps = {
            title: "Camiseta Verde",
            price: "280"
        }
        const { getByRole } = render(<CardProduct  {...cardProps} />)

        const image = getByRole("image");

        expect(image.props.source.uri).toBe('https://via.placeholder.com/150x150');
    });

    it('should render card with image props', () => {
        const cardProps: CardProps = {
            title: "Camiseta Verde",
            price: "280",
            uri: "https://via.placeholder.com/250x250"
        }
        const { getByRole } = render(<CardProduct  {...cardProps} />)

        const image = getByRole("image");

        expect(image.props.source.uri).toBe('https://via.placeholder.com/250x250');
    });
})