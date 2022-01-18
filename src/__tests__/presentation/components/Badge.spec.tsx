import { Badge } from "@components/Badge";
import { render } from "@shared/tests/helpers";

describe('Test suits for Badge', () => {
    it('should render correctly', () => {
        const { getByText } = render(<Badge />);

        const element = getByText("0");
        expect(element).toBeDefined();
    });

    it('should render correctly counter', () => {
        const { getByText } = render(<Badge count={8} />);

        const element = getByText("8");
        expect(element).toBeDefined();
    });
})