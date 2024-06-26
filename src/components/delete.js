// Delete.js

import React from 'react';
import {persistor} from '../redux/store';
import {TouchableOpacity, Text} from 'react-native';

const Delete = () => {
  const handleClearStorage = () => {
    console.log('Clearing storage');
    persistor.purge();
    console.log('storage cleared');
  };

  return (
    <TouchableOpacity onPress={handleClearStorage}>
      <Text>Clear Storage</Text>
    </TouchableOpacity>
  );
};

export default Delete;
