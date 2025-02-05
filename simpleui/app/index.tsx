import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Button, Linking, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
	const github_url = "https://github.com/KING-REX/HNG-Mobile-Stage-0";
	const hng_backlink = "http://hng.tech/hire/react-native-developers";

	const handleGitPress = async () => {
		const supported = await Linking.canOpenURL(github_url);

		if (supported) {
			Linking.openURL(github_url);
		} else {
			alert("An error occurred somewhere.");
		}
	};

	const handleBacklinkPress = async () => {
		const supported = await Linking.canOpenURL(hng_backlink);

		if (supported) {
			Linking.openURL(hng_backlink);
		} else {
			alert("An error occurred somewhere.");
		}
	};

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "white",
			}}
		>
			<View
				style={{
					gap: 12,
				}}
			>
				<TouchableOpacity
					style={{
						flexDirection: "row",
						alignItems: "center",
						gap: 8,
						backgroundColor: "#00A8FF",
						paddingHorizontal: 30,
						paddingVertical: 20,
						borderRadius: 10,
					}}
					activeOpacity={0.4}
					onPress={handleGitPress}
				>
					<Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Go to Github directory</Text>
					<AntDesign name="arrowright" color="white" size={16} />
				</TouchableOpacity>
				<TouchableOpacity style={{ alignSelf: "flex-end" }} activeOpacity={0.4} onPress={handleBacklinkPress}>
					<Text style={{ color: "#0000FF", fontSize: 12, fontStyle: "italic", textDecorationColor: "black", textDecorationLine: "underline" }}>
						Hire React-Native Developers?
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
