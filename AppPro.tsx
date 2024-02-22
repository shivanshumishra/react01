import React from "react";

import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro() : JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'
    
    return (
        <View style = {styles.container}>
            <Text style = {isDarkMode ? styles.whileText : styles.blackText}>
                Hello World
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center', // left to right
        justifyContent: 'center' //top to bottom
    },
    whileText : {
        color: '#FFFFFF'
    },
    blackText : {
        color : '#000000'
    }
})

export default AppPro;