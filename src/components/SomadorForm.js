import React from 'react';
import { View, StyleSheet, Button, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';


import Input from './Input';
import { addValue, setValue } from '../actions';

class SomadorForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        }
    }

    onChangeValue(value) {
        this.props.dispatchSetValue(value);
    }

    onPress() {
        if(this.props.value.value != 0) {
            ToastAndroid.show('Valor adcionado', ToastAndroid.SHORT);
            this.props.dispatchAddValue(this.props.value.value);
        } else {
            ToastAndroid.show('Valor não pode ser igual a 0', ToastAndroid.SHORT);
        }
    }

    render() {
        const { value } = this.props.value;
        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input 
                        onChangeValue={value => this.onChangeValue(value)}
                        value={value}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => this.onPress()}
                        title={'Add'}></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row'
    },
    inputContainer: {
        flex: 5
    },
    buttonContainer: {
        flex: 2
    }
});

const mapStateToProps = state => {
    return {
        value: state.editingValue,
        values: state.values
    }
}

export default connect(mapStateToProps,{
    dispatchAddValue: addValue,
    dispatchSetValue: setValue
})(SomadorForm);