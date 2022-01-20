import { ListView } from "@components/Listing/ListView";
import { render } from "@shared/tests/helpers"
import { Text } from "react-native";


describe('Test suits for card', () => {
    it('should render empty component with no data', () => {
        const { getByTestId } = render(<ListView data={[]} renderItem={() => <Text>Olá Mundo</Text>}   />)

        const emptyComponent = getByTestId('empty-view');

        expect(emptyComponent).toBeTruthy();
    });
})