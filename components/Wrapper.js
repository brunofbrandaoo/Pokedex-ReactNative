import * as React from 'react';
import styled from 'styled-components'
import Constants from 'expo-constants';
import { SafeAreaView, View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';



const Wrapper = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  padding-top: ${Constants.statusBarHeight};
  background-color: #ecf0f1;
  padding: 8px;
`;


export { Wrapper };
