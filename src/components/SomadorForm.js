import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { connect } from 'react-redux';

class SomadorForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        }
    }

    render() {
        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Text>Input</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => console.log('apertou')}
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

export default connect()(SomadorForm);