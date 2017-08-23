import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'

var TextButtom = React.createClass({
    render: function () { 
        return (
            <TouchableOpacity>
                <View>
                    <Text style={{ fontSize: this.props.fontSize,color:this.props.color }}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
});

const styles = StyleSheet.create({
  tabbar: {
    height: 49,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  tabStyle: {
    padding: 8
  },
  tab: {
    width: 18,
    height: 18
  }
});

module.exports = TextButtom