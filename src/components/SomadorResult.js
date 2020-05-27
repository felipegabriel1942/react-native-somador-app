import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const SomadorResult = ({ values }) => {
    let total = 0;
    values.map(v => total += +v.value);
    return (
        <View style={styles.container}>
            <Text style={styles.result}>{total}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginVertical: 30,
        alignItems: 'center',
        backgroundColor: '#E5E9A3',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#E5E9A3'
    },
    result: {
        fontSize: 30
    }
});

const mapStateToProps = state => {
    const { values } = state;
    return {values};
}

export default connect(mapStateToProps, {})(SomadorResult);