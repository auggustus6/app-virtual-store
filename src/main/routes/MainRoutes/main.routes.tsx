import Cart from "@components/Cart";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CartScreen from "@screens/CartScreen";
import ProductScreen from "@screens/ProductScreen";

const Stack = createNativeStackNavigator();

const MainRoutes =() => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    title: "Virtual Store",
                    headerRight: () => <Cart showBadge />,
                }}
                name="Products"
                component={ProductScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
    )
}

export default MainRoutes;