import React from "react";
import Header from "./src/components/Header";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "./constants";
import Categories from "./src/components/Categories";
import Popular from "./src/components/Popular";

export default function App() {
    return (
        <View
            style={{
                paddingTop: 40,
                paddingLeft: 20,
                backgroundColor: COLORS.black,
            }}
        >
            <StatusBar style="dark" />
            <Header />
            <Categories />
            <Popular />
        </View>
    );
}
