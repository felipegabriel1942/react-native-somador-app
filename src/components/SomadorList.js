import React from 'react';
import { View} from 'react-native';
import { connect } from 'react-redux';

import SomadorListItem from './SomadorListItem';

const SomadorList = ({values}) => {
    return (
        <View>
            {values.map(value => {
                return <SomadorListItem
                        key={value.id}
                        value={value.value}/>
            })}
        </View>
    );
}

const mapStateToProps = state => {
    const { values } = state;
    return { values };
}

export default connect(mapStateToProps, {})(SomadorList);