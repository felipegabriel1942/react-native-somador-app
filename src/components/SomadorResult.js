import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const SomadorResult = () => {
    return (
        <View>
            <Text>SomadorResult funcionando!</Text>
        </View>
    );
}

export default connect()(SomadorResult);