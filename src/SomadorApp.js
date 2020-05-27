import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer  from './reducers';

import SomadorForm from './components/SomadorForm';
import SomadorList from './components/SomadorList';
import SomadorResult from './components/SomadorResult';

const store = createStore(rootReducer);

export default class SomadorApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <SomadorResult />
                    <SomadorForm />
                    <SomadorList />
                </View>
            </Provider>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 30
    }
});