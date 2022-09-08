import { View, Linking, Image, TouchableHighlight } from "react-native";

const Header = () => {
    return (
        <View
            style={{
                height: 100,
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            <TouchableHighlight
                onPress={() => Linking.openURL("https://google.com")}
            >
                <Image
                    source={{
                        uri: "https://www.pngall.com/wp-content/uploads/4/Mcdonalds-Logo-PNG-Free-Download.png",
                    }}
                    style={{
                        width: 50,
                        height: 50,
                    }}
                />
            </TouchableHighlight>
            <View style={{ marginRight: 30 }}>
                <Image
                    source={{
                        uri: "https://www.pngall.com/wp-content/uploads/5/Shopping-Cart-PNG-Image-HD.png",
                    }}
                    style={{ width: 50, height: 50 }}
                />
            </View>
        </View>
    );
};

export default Header;
