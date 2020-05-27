import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SomadorListItem = ({ value , onPressValue}) => {
    return <TouchableOpacity>
                <View style={styles.line}>
                    <Text style={styles.lineText}>{value}</Text>
                    <Icon 
                        name="trash-o" 
                        size={30}
                        color={'red'}
                        style={styles.icon}
                        onPress={onPressValue}/>
                </View>
            </TouchableOpacity>
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        backgroundColor: 'white',
        alignItems: 'center',
        marginVertical: 5,
        borderRadius: 5,
        flexDirection: 'row',
        elevation: 1
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    icon: {
        flex: 1
    }
});

export default SomadorListItem;