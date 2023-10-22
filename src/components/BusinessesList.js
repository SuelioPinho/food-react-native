import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import BusinessItem from "./BusinessItem";
import Colors from "../utilites/Color";
import Fonts from "../utilites/Font";

const BusinessesList = ({ title, businesses }) => {
    return (
        <View>
            <Text style={styles.titleText}>{title}</Text>
            <FlatList
                horizontal
                data={businesses}
                keyExtractor={(result) => result.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <BusinessItem item={item}/>
                }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontFamily: Fonts.Bold,
        fontSize: 18,
        color: Colors.Black,
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 15
    }
});

export default BusinessesList;