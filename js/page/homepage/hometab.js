import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    FlatList
} from 'react-native';

var HomeTab = React.createClass({

    _key: function (item, index) {
        return (item.id);
    },
    header: function () {
        return (
            <View style={styles.headerboder}>
                <Text>电影列表</Text>
            </View>
        )
    },

    _renderItem: function ({ item }) {
        return (
            <View key={this._key} style={styles.movieShowView1}>
                <View>
                    <Image
                        source={{ uri: item.images.small }}
                        style={{ width: 50, height: 50 }}
                    >
                    </Image>
                </View>
                <View style={styles.movieShowView2}>
                    <Text>{item.title}</Text>
                    <Text>{item.year}</Text>
                </View>
            </View>
        );
    },
    render: function () {
        return (
            <FlatList
                data={this.props.data}
                renderItem={this._renderItem}
                keyExtractor={this._key}
                //ListHeaderComponent={this.header}
                refreshing={false}
                onRefresh={this.props.refresh}//通过props将fetchData涵数传过来运行
            />
        );
    }
});
const styles = StyleSheet.create({
    movieShowView1: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5
    },
    movieShowView2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
        width: 50,
        height: 50
    },
});

module.exports = HomeTab