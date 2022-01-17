import { NavigationContainer } from "@react-navigation/native"
import MainRoutes from "./MainRoutes/main.routes";

const Routes:React.FC = () => {
    return (
        <NavigationContainer>
            <MainRoutes />
        </NavigationContainer>
    )
}

export default Routes;