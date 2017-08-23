import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    Button,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import TextDivider from '../component/TextDivider'


class Logpage extends React.Component {
    static navigationOptions = ({
        header: []//头部设置为空，即不要navigation默认的头部
    });
    _handleBack() { };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView keyboardShouldPersistTaps='handled' style={styles.background}>
                <TouchableOpacity
                 onPress={()=>navigate('Home')}>
                    <Icon name='long-arrow-left' size={40} color='white'></Icon>
                </TouchableOpacity>
                <View style={[{ flex: 1,marginTop:70 }]}>
                    <View style={{ alignItems: 'center'}}>
                        <Image
                            source={require('../image/ic_login_logo.png')}
                            style={{ width: 55, height: 45 }}>
                        </Image>
                    </View>
                    <View style={{ margin: 15,backgroundColor:'rgb(22,131,251)' }}>
                        <View>
                            <TextInput
                                placeholder='手机号/邮箱'
                                placeholderTextColor="#c4c4c4"
                                style={{ backgroundColor: '#fff',borderRadius:5,}}
                                underlineColorAndroid='transparent'
                            >
                            </TextInput>
                        </View>
                        <View>
                            <TextInput
                                placeholder='密码'
                                placeholderTextColor="#c4c4c4"
                                style={{ backgroundColor: '#fff', borderRadius:5,marginTop:2 }}
                                underlineColorAndroid='transparent'
                            >
                            </TextInput>
                        </View>
                        <View style={{marginTop:10}}>
                            <Button
                                title='登录'
                                onPress={this._handleBack}
                            >
                            </Button>

                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 7 }}>
                            <Text style={{color:'white'}}>忘记密码?</Text>
                            <Text style={{color:'white'}}>注册账号</Text>
                        </View>
                    </View>
                    <View style={{marginTop:80}}>
                        <View>
                            <TextDivider text='其它账号登录'></TextDivider>
                            <View style={styles.row}>
                                <TouchableOpacity>
                                    <Image source={require('../image/weibo_login.png')}
                                        style={{width:40,height:40}}
                                    >
                                    </Image>
                                    <Text>微博</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={require('../image/wechat_login.png')}
                                        color="rgba(255,255,255,0.7)"
                                        style={{width:40,height:40}}
                                    >
                                    </Image>
                                    <Text>微信</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgb(22,131,251)'
    },
    row: {
        flexDirection: 'row',
        justifyContent:'space-around',
    },
    center: {
        justifyContent: 'center',
    },
});


module.exports = Logpage