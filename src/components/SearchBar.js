import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import Colors from "../utilites/Color";
import Fonts from "../utilites/Font";

const SearchBar = ({ term, onTermChange, onTermSumit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search" 
                style={styles.inputStyle} 
                value={term} 
                onChangeText={onTermChange}
                onEndEditing={onTermSumit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: Colors.Background,
        height: 48,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        borderRadius: 8,
        marginTop: 10,
    },
    inputStyle: {
        marginLeft: 10,
        flex: 1,
        fontFamily: Fonts.Regular,
        fontSize: 16
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        color: Colors.Lable,
        marginLeft: 10,
    }
});

export default SearchBar;