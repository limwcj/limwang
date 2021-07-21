import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {}

interface IState {
  title: string;
}

export class TopBar extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = { title: '密码本' };
  }

  render() {
    return (
      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>{this.state.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
