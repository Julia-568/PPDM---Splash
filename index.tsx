import { router } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Text } from "react-native";

export default function Splash() {
    const opacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
        }).start(() => {
            router.replace("/(tabs)");
        });
    }, []);

    return (
        <Animated.View style={{ flex: 1, justifyContent: "center", alignItems: "center", opacity}}>
            <Text>Splash Screen</Text>
        </Animated.View>
    );
}