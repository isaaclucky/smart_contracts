import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// colors import
import { Colors } from "../components/styles";
const { primary, tertiary } = Colors;

// pages
import Login from "./../screens/Login";
import Welcome from "./../screens/Welcome";

const Stack = createStackNavigator();

const RootStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyled: {
						backgroundColor: "transparent",
					},
					headerTintColor: tertiary,
					headerTransparent: true,
					headerTitle: "",
					headerLeftContainerStyle: {
						paddingLeft: 20,
					},
				}}
				initialRouteName="Login"
			>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen options={{ headerTintColor: primary }} name="Welcome" component={Welcome} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootStack;
