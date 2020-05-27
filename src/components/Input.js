import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = ({ onChangeValue, value }) => (
    <TextInput
        keyboardType={'numeric'}
        onChangeText={onChangeValue}
        style={styles.input}
        value={`${value}`} 
        underlineColorAndroid='green'/>
);

const styles = StyleSheet.create({
    input: {
        paddingLeft: 15,
        paddingBottom: 15,
        fontSize: 20
    }
});

export default Input;