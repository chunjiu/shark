import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Switch,
    ScrollView,

} from 'react-native';

class Settingpage extends React.Component {
    static navigationOptions = {
        title: '设置',
    };
    render() {
        return (
            <ScrollView>
                <View>
                    <View style={{ marginTop: 15 }}>
                        <Item text='邮箱' subtext='未设置'></Item>
                        <Item text='手机号' subtext='未设置'></Item>
                        <Item text='修改账号密码'></Item>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Item text='绑定微信' subtext='未设置' isHasSwitcher={true}></Item>
                        <Item text='绑定QQ' subtext='未设置' isHasSwitcher={true}></Item>
                        <Item text='绑定新浪微博' subtext='未设置' isHasSwitcher={true}></Item>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Item text='清除缓存' subtext='未设置' isHasSwitcher={true}></Item>
                        <Item text='推送最新sharkJob' subtext='未设置' isHasSwitcher={true}></Item>
                        <Item text='移动网络下不显示视频' subtext='未设置' isHasSwitcher={true}></Item>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Item text='意见反馈'></Item>
                        <Item text='关于'></Item>
                    </View>
                    <View style={[styles.rct, {marginTop: 15, justifyContent: 'center'}]}>
                        <Text style={{ color: 'red', fontWeight:'bold'}}>退出登录</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

var Item = React.createClass({
    getInitialState: function () {
        return { switchIson: false };
    },
    render: function () {
        const { text, subtext, isHasSwitcher,color } = this.props;
        return (
            <View style={[styles.rct]}>
                <Text style={{ color:'black', fontSize: 15, marginLeft: 20 }}>{text}</Text>
                <View style={styles.right}>
                    <Text>{subtext}</Text>
                    {isHasSwitcher ?
                        <Switch
                            value={this.state.switchIson}
                            onValueChange={(value) => this.setState({ switchIson: value })}
                        >
                        </Switch>
                        : null
                    }
                </View>
            </View>
        );

    }
});


const styles = StyleSheet.create({
    rct: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomColor: '#c4c4c4',
        borderTopColor: '#e4e4e4',
        marginBottom: 2,
    },
    right: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 8,
    },

});



module.exports = Settingpage