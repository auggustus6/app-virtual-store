import Cart from "@components/Cart";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CartScreen from "@screens/CartScreen";
import ProductScreen from "@screens/ProductScreen";

const Stack = createNativeStackNavigator();

const MainRoutes =() => {
    return (
        <Stack.Navigator
            screenOptions={({ navigation }) => ({
                headerRight: () => <Cart showBadge onPress={() => navigation.navigate('Cart')} />,
            })}
        >
            <Stack.Screen
                options={{
                    title: "Virtual Store",
                }}
                name="Products"
                component={ProductScreen} />
            <Stack.Screen
            name="Cart" 
            options={{
                title: "Meu Carrinho",
            }}
            component={CartScreen} />
        </Stack.Navigator>
    )
}

export default MainRoutes;