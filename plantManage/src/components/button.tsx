import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';


interface ButtonProps extends TouchableOpacityProps {
    title: string;
}
export function Button({title, ... rest} : ButtonProps){

    return(

        <TouchableOpacity 
            style = {styles.button} 
            activeOpacity = {.5}
            {... rest}>
            <Text> {title} </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 50,
        paddingHorizontal: 10
    }
});