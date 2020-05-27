import React from 'react';
import { View} from 'react-native';
import { connect } from 'react-redux';

import SomadorListItem from './SomadorListItem';

import { removeValue } from '../actions';

const SomadorList = ({values, dispatchRemoveValue}) => {
    return (
        <View>
            {
                values.map(value => {
                    return <SomadorListItem
                                key={value.id}
                                value={value.value}
                                onPressValue={() => dispatchRemoveValue(value)}/>
                })
            }
        </View>
    );
}

const mapStateToProps = state => {
    const { values } = state;
    return { values };
}

export default connect(mapStateToProps, {
    dispatchRemoveValue: removeValue
})(SomadorList);