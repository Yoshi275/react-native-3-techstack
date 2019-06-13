// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles; 

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{ props.headerText }</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F9F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        elevation: 9,
        position: 'relative',
    },
    textStyle: {
        fontSize: 20
    }
};

// Make components available to other parts of the app
export { Header };
