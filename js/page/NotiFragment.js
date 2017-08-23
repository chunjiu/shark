import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import { TabNavigator, StackNavigator } from 'react-navigation'

import Logpage from './Logpage'

class Noti extends React.Component {
    render() {
        return (
            <View>
            </View>
        );
    }

};
var Mes = React.createClass({
    render: function () {
        const { navigate } = this.props.navigation;
        return (
            <View style={[styles.flex]}>
                <Text>暂时没有消息</Text>
                <TouchableOpacity
                   onPress={()=>navigate('Log')}
                >
                    <Text style={{ color: 'rgb(22,131,251)' }}>登录/sign-in</Text>
                </TouchableOpacity>    
            </View>
        );
    }
});

var Lodynamicg = React.createClass({
    render: function () {
        return (
            <View style={[styles.flex]}>
                <Text>还没有最新的动态</Text>
            </View>
        );
    }
});

const MainScreenNavigator = TabNavigator({
    消息: { screen: Mes },
    动态: { screen: Lodynamicg},
});
MainScreenNavigator.navigationOptions = {
    header: []//头部设置为空，即不要navigation默认的头部
};
const NotiFragment = StackNavigator({
    Home: { screen: MainScreenNavigator },
    Log: {screen:Logpage}
});

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
});


module.exports = NotiFragment