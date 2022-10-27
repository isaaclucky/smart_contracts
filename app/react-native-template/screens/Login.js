import React, { useState } from "react";
import { Text, Image, View } from "react-native";

import { Formik } from "formik";

import {
	StyledContainer,
	InnerContainer,
	PageLogo,
	PageTitle,
	SubTitle,
	StyledFormArea,
	LeftIcon,
	StyledInputLabel,
	StyledTextInput,
	RightIcon,
	Colors,
	StyledButton,
	ButtonText,
	MsgBox,
	Line,
} from "../components/styles";
import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";

// Icons
import { Octicons, Ionicons } from "@expo/vector-icons";

// Colors
const { brand, darkLight } = Colors;

const Login = ({ navigation }) => {
	const [hidePassword, setHidePassword] = useState(true);
	const [address, setAddress] = useState("");
	return (
		<KeyboardAvoidingView
			style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
			behavior="padding"
			enabled
			keyboardVerticalOffset={100}
		>
			<ScrollView>
				<StyledContainer>
					<InnerContainer>
						<PageLogo resizeMode="cover" source={require("../assets/img/images.jpeg")} />
						<PageTitle>Refund By Location</PageTitle>
						<SubTitle>Account Setup</SubTitle>

						<Formik
							initialValues={{ public_address: "", private_key: "" }}
							onSubmit={(values) => {
								console.log(values);
							}}
						>
							{({ handleChange, handleBlur, handleSubmit, values }) => (
								<StyledFormArea>
									<MyTextInput
										label="Public Address"
										placeholder="0x843949034933232"
										placeholderTextColor={darkLight}
										onChangeText={handleChange("public_address")}
										onBlur={handleBlur("public_address")}
										values={values.public_address}
										required
									/>
									{/* <MyTextInput
										label="private Key"
										icon="lock"
										placeholder="* * * * * * * *"
										placeholderTextColor={darkLight}
										onChangeText={handleChange("private_key")}
										onBlur={handleBlur("private_key")}
										values={values.private_key}
										secureTextEntry={true}
										isPassword={true}
										hidePassword={hidePassword}
										setHidePassword={setHidePassword}
									/> */}
									{/* <MsgBox>...</MsgBox> */}
									<StyledButton
										onPress={() => {
											navigation.navigate("Welcome", {
												address: values.public_address,
											});
										}}
									>
										<ButtonText>Get Started</ButtonText>
									</StyledButton>
								</StyledFormArea>
							)}
						</Formik>
					</InnerContainer>
				</StyledContainer>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
	return (
		<View>
			<LeftIcon>
				<Octicons name={icon} size={20} color={brand} />
			</LeftIcon>
			<StyledInputLabel>{label}</StyledInputLabel>
			<StyledTextInput {...props} />
			{isPassword && (
				<RightIcon onPress={() => setHidePassword(!hidePassword)}>
					<Ionicons
						name={hidePassword ? "md-eye-off" : "md-eye"}
						size={30}
						color={darkLight}
						onPress={() => setHidePassword(!hidePassword)}
					/>
				</RightIcon>
			)}
		</View>
	);
};

export default Login;
