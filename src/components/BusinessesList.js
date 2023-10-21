import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import BusinessItem from "./BusinessItem";

const BusinessesList = ({ title, businesses }) => {
    return (
        <View>
            <Text style={styles.titleText}>{title}</Text>
            <FlatList
                horizontal
                data={businesses}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <BusinessItem item={item}/>
                }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontFamily: 'Roboto-Medium',
        fontSize: 18,
    }
});

export default BusinessesList;