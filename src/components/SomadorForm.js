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
            <View>
                <Text>SomadorForm Funcionando!</Text>
            </View>
        );
    }
}

export default connect()(SomadorForm);