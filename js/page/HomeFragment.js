import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import Hometab from './homepage/hometab'

import ScrollableTabView from 'react-native-scrollable-tab-view';

var content = [];

var HomeFragment = React.createClass({
    getInitialState: function () {
        return { get: false }
    },
    fetchDate: function () {
        fetch('http://api.douban.com/v2/movie/top250', {
            method: 'GET'
        })
            .then((response) => { return response.json() })
            .then((responseJSON) => {
                content = responseJSON.subjects;
                this.setState({ get: true })
            })

    },
    componentDidMount: function () {
        this.fetchDate();
    },

    render: function () {
        return (
            <ScrollableTabView
                tabBarTextStyle={{ fontSize: 15 }}
                tabBarActiveTextColor='#1E90FF'
            >
                <Hometab data={content} tabLabel='全部' refresh={this.fetchDate}></Hometab>
                <Text tabLabel='教师'></Text>
                <Text tabLabel='程序员'></Text>
            </ScrollableTabView>
        );
    }
});


const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    text: {
        color: '#000',
        fontSize: 32
    },
    linecolor: {
        color:'#1E90FF'
    }
});

module.exports = HomeFragment