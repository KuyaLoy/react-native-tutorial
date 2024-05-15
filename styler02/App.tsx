import React from 'react';

import {ScrollView, Text, SafeAreaView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
