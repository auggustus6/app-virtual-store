import { TextView } from "@components/Labels";
import { render } from "@shared/tests/helpers";
import { RFValue } from "react-native-responsive-fontsize";

describe('Test suits for TextView', () => {
    it('should render correctly', () => {
        const { getByText } = render(<TextView>Olá Mundo</TextView>);

        const element = getByText(/olá mundo/gi);
        expect(element).toBeDefined();
    });

    it('should render styles default', () => {
        const { getByText } = render(<TextView>Olá Mundo</TextView>);

        const element = getByText(/olá mundo/gi);
        expect(element.props.style[0].color).toBe("#000");
        expect(element.props.style[0].fontSize).toBe(RFValue(14));
    });

})