import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export class Search extends React.Component {
  render() {
    return (
      <View style={styles.searchContainer}>
        <FontAwesome name={'search'} style={styles.searchIcon}></FontAwesome>
        <TextInput
          style={styles.searchInput}
          maxLength={100}
          placeholder="搜索"
          returnKeyType="search"
          onSubmitEditing={this.a.bind(this)}
        />
      </View>
    );
  }

  a() {
    console.log(123);
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    width: '96%',
    height: 38,
    paddingLeft: 28,
    paddingRight: 15,
    borderRadius: 5,
    color: '#666',
    fontSize: 17,
    backgroundColor: '#fff',
  },
  searchIcon: {
    position: 'absolute',
    left: '4%',
    color: '#e0e0e0',
    fontSize: 16,
    zIndex: 1,
  },
});
