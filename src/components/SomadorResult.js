import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const SomadorResult = ({ values }) => {
    let total = 0;
    values.map(v => total += +v.value);
    return (
        <View>
            <Text>{total}</Text>
        </View>
    );
}

const mapStateToProps = state => {
    const { values } = state;
    return {values};
}

export default connect(mapStateToProps, {})(SomadorResult);