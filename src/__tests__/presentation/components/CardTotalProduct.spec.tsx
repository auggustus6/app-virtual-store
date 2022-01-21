import CardTotalProduct from "@components/Card/CardTotalProduct";
import { render } from "@shared/tests/helpers";

describe('Test suits for CardTotalProduct', () => {
    it('should render correctly', () => {
        const { getByText } = render(<CardTotalProduct total={120} />);

        const element = getByText("R$ 120");
        expect(element).toBeTruthy();
    });

    it('should render fontsize and fontweight price text', () => {
        const { getByText } = render(<CardTotalProduct />);

        const element = getByText("R$ 0");
        expect(element.props.style[1].fontWeight).toBe('bold');
        expect(element.props.style[1].fontSize).toBe(43);
    });
});