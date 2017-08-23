import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import TextButton from '../component/TextButtom'
import Icon from 'react-native-vector-icons/FontAwesome'
import { StackNavigator } from 'react-navigation'

import Settingpage from './Settingpage'


class Me extends React.Component {
    static navigationOptions = ({
        header:[]//头部设置为空，即不要navigation默认的头部
    });
    show=()=> { 
        alert('aa');
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={[styles.flex]}>
                    <View style={[styles.me, styles.center]}>
                        <Text style={{ fontSize: 16, color: 'white' }}>我</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={[styles.rct]}>
                            <Image
                                source={require('../image/logo_og.png')}
                                style={{ width: 60, height: 60, borderRadius: 50 }}
                            >
                            </Image>
                            <View style={styles.textMargin}>
                                <Text style={{ fontSize: 20, color: 'black' }}>React-Native</Text>
                                <TextButton text='添加职位@添加公司' color='#949494' fontSize={20}></TextButton>
                            </View >
                            <View style={styles.right}><Icon name='chevron-right' size={30} color="#ccc"></Icon></View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.ite}>
                        <Item icon='heart' text='我的收藏' subText='15篇' iconColor='#32cd32'></Item>
                        <Item icon='eye' text='我看过的信息' subText='15篇'></Item>
                        <Item icon='tags' text='标签管理'></Item>
                    </View>
                    <View style={styles.ite} onPress={this.show}>
                        <Item icon='line-chart' text='积分排名' iconColor='#ff4500'></Item>
                        <TouchableOpacity onPress={()=>navigate('Two')}>
                            <Item icon='gear' text='设置' ></Item>
                        </TouchableOpacity>    
                    </View>
                </View>
            </ScrollView >
        );
    }
};

var Item = React.createClass({
    render: function () {
        const { icon, text, subText, iconColor} = this.props;
        return (
            <View style={[styles.rct, styles.iteHeigth]}>
                <Icon name={icon} size={20} color={iconColor} style={{marginLeft:15}}></Icon>
                <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>{text}</Text>
                <View style={styles.right}>
                    <Text style={{ marginRight: 15 }}>{subText}</Text>
                </View>
            </View>
        );
    }
});



const MeFragment = StackNavigator({
    Fisrt: { screen: Me },
      Two: { screen:Settingpage},
});

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'rgb(22,131,251)',
    },
    flex: {
        flex: 1
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    me: {
        height: 70,
        backgroundColor: 'rgb(22,131,251)',
    },
    rct: {
        flexDirection: 'row',
        height: 90,
        marginTop: 15,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomColor: '#c4c4c4',
        borderTopColor: '#e4e4e4',
        marginBottom:1,

    },
    textMargin: {
        marginLeft: 8,
    },
    right: {
        flex: 1,
        alignItems: 'flex-end'
    },
    ite: {
        margin: 2,
        marginTop:15,

    },
    iteHeigth: {
        height: 50,
        margin: 0,
        marginTop: 1,
    },



});

module.exports = MeFragment
