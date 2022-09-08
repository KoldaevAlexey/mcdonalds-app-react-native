import React from "react";
import { View, Linking, Image, TouchableHighlight, Text } from "react-native";

import { COLORS, SIZES } from "../../constants";
import { categories } from "../categories";

function Categories() {
    const [active, setActive] = React.useState(null);
    return (
        <View>
            <Text
                style={{
                    fontSize: SIZES.h1,
                    fontWeight: "bold",
                    color: COLORS.white,
                }}
            >
                Hey,
            </Text>
            <Text style={{ fontSize: SIZES.h2, color: COLORS.white }}>
                what's up?
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    width: "90%",
                    height: "100%",
                    paddingTop: 30,
                }}
            >
                {categories.map((item, index) => (
                    <TouchableHighlight
                        onPress={() => setActive(index)}
                        key={index}
                    >
                        <View
                            style={{
                                alignItems: "center",
                                height: 100,
                                backgroundColor:
                                    active === index
                                        ? COLORS.secondary
                                        : COLORS.gray,
                                borderRadius: SIZES.radius,
                                paddingLeft: 5,
                                paddingRight: 5,
                                marginBottom: 40,
                            }}
                        >
                            <Image
                                style={{
                                    width: 80,
                                    height: 80,
                                    paddingBottom: 10,
                                }}
                                source={{ uri: item.image }}
                            />
                            <Text
                                style={{
                                    color: COLORS.white,
                                    width: 100,
                                    marginTop: 20,
                                }}
                            >
                                {item.name}
                            </Text>
                        </View>
                    </TouchableHighlight>
                ))}
            </View>
        </View>
    );
}

export default Categories;
