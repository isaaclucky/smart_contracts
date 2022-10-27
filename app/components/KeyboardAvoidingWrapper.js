import react from "react";

// Keyboard avoiding view
import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";

const KeyboardAvoidingWrapper = () => {
	return (
		<KeyboardAvoidingView style={{ flex: 1 }}>
			<ScrollView>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>{this.props.children}</TouchableWithoutFeedback>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default KeyboardAvoidingWrapper;
