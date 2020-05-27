import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

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
                <ScrollView style={styles.container}>
                    <SomadorResult />
                    <SomadorForm />
                    <SomadorList />
                </ScrollView>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: '#EBEBE8'
        
    }
});