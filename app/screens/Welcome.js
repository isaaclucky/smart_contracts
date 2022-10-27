import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import "react-native-get-random-values";
import * as Location from "expo-location";
// import { abi, contractAddress } from "../constants/constants";
// Pull in the shims (BEFORE importing ethers)
import "@ethersproject/shims";

// Import the ethers library
import { ethers } from "ethers";

// Background fetch
import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";

const BACKGROUND_FETCH_TASK = "background-fetch";

import { PRIVATE_KEY, RINKEBY_RPC_URL } from "@env";

import {
	InnerContainer,
	PageTitle,
	SubTitle,
	StyledFormArea,
	StyledButton,
	ButtonText,
	Line,
	WelcomeContainer,
	WelcomeImage,
	Avatar,
} from "../components/styles";

const Welcome = ({ route, navigation }) => {
	// Get params from route
	const { address } = route.params;
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);

	async function registerBackgroundFetchAsync() {
		return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
			minimumInterval: 60 * 5 * 60, // 5 hours
			// stopOnTerminate: false, // android only,
			// startOnBoot: true, // android only
		});
	}

	TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
		const now = Date.now();

		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== "granted") {
			setErrorMsg("Permission to access location was denied");
			return;
		}

		let location = await Location.getCurrentPositionAsync({});
		// setLocation(location);
		// alert(JSON.stringify(location));
		// console.log(JSON.stringify(location));
		// location = JSON.stringify(location);
		// console.log(JSON.stringify(location.coords.latitude));
		

		// Create a new provider

		await listenForTransactionMine(transactionRsponse, provider);
		console.log(transactionRsponse);

		// Be sure to return the successful result type!
		return BackgroundFetch.BackgroundFetchResult.NewData;
	});

	function listenForTransactionMine(transactionResponse, provider) {
		// to-be-implemented
	}
	useEffect(() => {
		(async () => {
			alert("you are all set!");
		})();
	}, []);

	const testNow = async () => {
		console.log("Touched");
		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== "granted") {
			setErrorMsg("Permission to access location was denied");
			return;
		}

		let location = await Location.getCurrentPositionAsync({});
		// setLocation(location);
		// alert(JSON.stringify(location));
		// console.log(JSON.stringify(location));
		// location = JSON.stringify(location);
		// console.log(JSON.stringify(location.coords.latitude));
		

		// smart contract interaction
	};

	return (
		<>
			<StatusBar style="light" />
			<InnerContainer>
				<WelcomeImage resizeMode="cover" source={require("../assets/img/images.jpeg")} />
				<WelcomeContainer>
					<PageTitle welcome={true}>Welcome there!</PageTitle>
					<SubTitle welcome={true}>Employee tracking system</SubTitle>
					<StyledFormArea>
						<Avatar resizeMode="cover" source={require("../assets/img/default.jpg")} />

						<Line />
						<StyledButton onPress={testNow}>
							<ButtonText>Test Now</ButtonText>
						</StyledButton>
					</StyledFormArea>
				</WelcomeContainer>
			</InnerContainer>
		</>
	);
};

export default Welcome;
