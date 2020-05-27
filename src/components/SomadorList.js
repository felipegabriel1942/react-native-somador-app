import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const SomadorList = ({values}) => {
    return (
        <View>
            {values.map(value => {
                return <Text 
                    key={value.id}
                    value={value.value}>{value.value}</Text>
            })}
        </View>
    );
}

const mapStateToProps = state => {
    const { values } = state;
    return { values };
}

export default connect(mapStateToProps, {})(SomadorList);