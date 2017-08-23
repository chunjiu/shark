import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    PixelRatio,
} from 'react-native';

var TextDivider = React.createClass({
    render: function () {
        return (
            <View style={styles.view}>
                <View style={styles.divider}></View>
                <Text>{this.props.text}</Text>
                <View style={styles.divider}></View>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    view:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    divider: {
        flex: 1,
        backgroundColor: '#3d3d3d',
        height:1.2,
    },
});

module.exports = TextDivider