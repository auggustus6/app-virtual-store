import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CartScreen from "@screens/CartScreen";
import ProductScreen from "@screens/ProductScreen";

const Stack = createNativeStackNavigator();

const MainRoutes =() => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Products" component={ProductScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
    )
}

export default MainRoutes;