import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SomadorListItem = ({value}) => {
    return <TouchableOpacity>
            <View style={styles.line}>
                <Text style={styles.lineText}>{value}</Text>
            </View>
        </TouchableOpacity>

}

const styles = StyleSheet.create({
    line: {
        height: 60,
        backgroundColor: 'white',
        alignItems: 'center',
        marginVertical: 5,
        borderRadius: 5,
        flexDirection: 'row',
        elevation: 1
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15
    }
});

export default SomadorListItem;