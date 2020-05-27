import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const SomadorList = () => {
    return (
        <View>
            <Text>SomadorList funcionando!</Text>
        </View>
    );
}

export default connect()(SomadorList);