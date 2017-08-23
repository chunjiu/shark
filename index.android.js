/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { StackNavigator } from 'react-navigation'

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeFragment from './js/page/HomeFragment';
import MeFragment from './js/page/MeFragment';
import NotiFragment from './js/page/NotiFragment'

var SharkJob = React.createClass({
  getDefaultProps: function () {
    return {
      selectedColor: 'rgb(22,131,251)',
      normalColor: '#a9a9a9'
    }
  },
  getInitialState: function () {
    return {
      selectedTab: 'HOME',
      tabName: ['首页', '发现', '消息', '我']
    }
  },

  render: function () {
    const tabName = this.state.tabName
    const { selectedColor, normalColor } = this.props
    return (
      <TabNavigator
        hidesTabTouch={true}
      >
        <TabNavigator.Item
          tabStyle={styles.tabbar}
          title={tabName[0]}
          selected={this.state.selectedTab === 'HOME'}
          selectedTitleStyle={{ color: selectedColor }}
          renderIcon={() => <Icon name='home' size={30} color={normalColor} />}
          renderSelectedIcon={() => <Icon name='home' size={30} color={selectedColor} />}
          onPress={() => this.setState({ selectedTab: 'HOME' })}

        >
          <HomeFragment></HomeFragment>
        </TabNavigator.Item>
        <TabNavigator.Item
          tabStyle={styles.tabbar}
          title={tabName[1]}
          selected={this.state.selectedTab === 'tow'}
          selectedTitleStyle={{ color: selectedColor }}
          renderIcon={() => <Icon name='compass' size={30} color={normalColor} />}
          renderSelectedIcon={() => <Icon name='compass' size={30} color={selectedColor} />}
          onPress={() => this.setState({ selectedTab: 'tow' })}
        >
          {<View><Text>这个页面用于开发最新的团购优惠信息</Text></View>}
        </TabNavigator.Item>
        <TabNavigator.Item
          tabStyle={styles.tabbar}
          title={tabName[2]}
          selected={this.state.selectedTab === 'three'}
          selectedTitleStyle={{ color: selectedColor }}
          renderIcon={() => <Icon name='envelope-o' size={30} color={normalColor} />}
          renderSelectedIcon={() => <Icon name='envelope-o' size={30} color={selectedColor} />}
          onPress={() => this.setState({ selectedTab: 'three' })}
        >
          <NotiFragment></NotiFragment>
        </TabNavigator.Item>
        <TabNavigator.Item
          tabStyle={styles.tabbar}
          title={tabName[3]}
          selected={this.state.selectedTab === 'frou'}
          selectedTitleStyle={{ color: selectedColor }}
          renderIcon={() => <Icon name='user' size={30} color={normalColor} />}
          renderSelectedIcon={() => <Icon name='user' size={30} color={selectedColor} />}
          onPress={() => this.setState({ selectedTab: 'frou' })}
        >
        <MeFragment></MeFragment>
        
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
})

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

AppRegistry.registerComponent('SharkJob', () => SharkJob);
