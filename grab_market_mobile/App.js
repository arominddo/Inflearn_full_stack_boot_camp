import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import MainScreen from "./screens/main";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { API_URL } from "./config/constants";

const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <MainScreen />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
    safeAreaView: {
      flex: 1,
      backgroundColor: "#fff"

    }
});
