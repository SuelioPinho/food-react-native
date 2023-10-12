import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
    return (
        <View style={styles.background}>
            <SearchBar/>
            <Text>SearchScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1
    }
});

export default SearchScreen;