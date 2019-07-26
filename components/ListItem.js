import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';



class Music extends Component {

    state = {
        favorite: false
    }

    toggleFav = () => {
        this.setState({ favorite: !this.state.favorite });
        console.log("It works!")
    }

    render() {
        const { item, avatarKey, titleKey, subtitleKey, lengthKey } = this.props;

        return <ListItem onPress={() => console.log("Works!")}
            leftAvatar={{
                source: { uri: item[avatarKey] },
                size: 'large',
                rounded: false,
            }}
            title={
                <Text numberOfLines={1} style={styles.artistName}>{item[titleKey]}</Text>
            }
            subtitle={
                <View>
                    <Text numberOfLines={1} style={styles.songName}>{item[subtitleKey]}</Text>
                    <Text style={styles.songLength}>{item[lengthKey]}</Text>
                </View>
            }
            rightTitle={
                <Ionicons
                    color={this.state.favorite ? '#008dff' : 'grey'}
                    name={this.state.favorite ? 'ios-heart' : 'ios-heart-empty'}
                    size={24}
                    onPress={() => this.toggleFav()}
                />
            }
            bottomDivider={true}
        />
    }
}


export default class SongList extends React.Component {

    renderData() {
        const { data, avatarKey, titleKey, subtitleKey, lengthKey } = this.props;

        return (
            <View>
                {
                    data.map((item, index) => (
                        <Music
                            item={item}
                            key={index}
                            avatarKey={avatarKey}
                            titleKey={titleKey}
                            subtitleKey={subtitleKey} l
                            lengthKey={lengthKey} />
                    ))
                }
            </View>
        )
    }
    render() {
        return this.renderData();
    }
}



styles = StyleSheet.create({
    artistName: {
        fontSize: 14,
        marginBottom: 3,
        color: 'grey'
    },
    songName: {
        fontSize: 22,
        marginBottom: 4,
        fontWeight: '300',
        flexDirection: 'row',
        flex: 1
    },
    songLength: {
        color: 'grey'
    }
})