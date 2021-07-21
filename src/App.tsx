import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Search } from './components/search';
import { TopBar } from './components/topBar';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar></TopBar>
      <Search></Search>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
});

export default App;
