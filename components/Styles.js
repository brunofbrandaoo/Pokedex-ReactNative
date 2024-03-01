import * as React from 'react';
import styled from 'styled-components'
import { SafeAreaView, View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { PokemonTypeColors, PokemonBackgroundColors } from './Colors';

const StyledList = styled(FlatList)`;
  flex: 1;
  padding: 20px;
  background-color: #ecf0f1;
`;

const PokemonContainer = styled(SafeAreaView)`
  border-radius: 8px; 
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  background-color: white;
`;

const PokemonName = styled(Text)`

  font-size: 20px;
  text-align: right; 
  font-weight: medium;
  line-height: 26px;
  flex-direction: row;
`;

const PokemonCardContainer = styled(View)`

  width: 100%;
  height: 65%;
  padding-top: 62px;
  background: #FFFFFF;
  border-radius: 24px 24px 0px 0px;
  top: 30px;
  
`;

const PokemonCardInfo = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 60%;
  margin: 0 auto;
`;

const PokemonCardInfoBlock = styled(View)`

  align-items: center;
  justify-content: center;

`;

const PokemonCardStats = styled(View)`

  gap: 16px;

`;
const PokemonCardStat = styled(View)`
  gap: 16px;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;

`;

const PokemonCardStatText = styled(Text)`

  font-size: 14px;
  text-transform: uppercase;
  font-style: normal;

`

const PokemonProgressBar = styled(View)`
  border-radius: 8px;
  width: 100%;
  background: #E5E5E5;
  height: 4px;
  flex-shrink: 1;
`;

const StatProgressBar = styled(View)`

  background-color: ${props => props.color};
  border-radius: 8px;
  height: 4px;
  width: ${props => (props.width / 160) * 100}%;

`;

const StatProgressBarNumber = styled(Text)`

  font-size: 14px;
  font-weight: 600;

`;

const PokemonCardName = styled(Text)`

  position: absolute;
  width: 90px;
  height: 31px;

  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  text-transform: lowercase;

  color: #222222;

`;

const ImageContainer = styled(View)`
  
  width: 80%;  
  height: auto; 
  align-self: center; 
  position: absolute;
  top: -220px;
  bottom: auto;
`;

const PokemonBadge = styled(View)`

  padding: 8px;
  border-radius: 8px;
  shadowColor: #171717;
  shadowOffset: {width: -2, height: 4};
  shadowOpacity: 0.2;
  shadowRadius: 3;
  background-color: ${props => PokemonTypeColors[props.type]};

`;

const ShareButton = styled(TouchableOpacity)`

  border-radius: 8px;
  padding: 10px 20px;
  background-color: ${props => props.color};

`;

const DivisionBar = styled(View)`

  background-color: #E5E5E5;
  height: 65;
  width: 1;

`;

const PageStructure = styled(View)`

  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  
`;

const TypeContainerText = styled(Text)`
  
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: white;
  text-transform: uppercase;

`;

const TypeContainer = styled(View)`

  padding: 20px;
  flex-direction: row;
  gap: 16px;
  position: absolute;
  top: 0;
  bottom: auto;
  right: auto;
  left: 0;

`;

const PokemonCardInfoValue = styled(Text)`

  font-size: 32;
  font-weight: semi-bold;

`;

const PokemonCardInfoText = styled(Text)`

  font-size: 16;
  letter-spacing: 0.05em;
  text-transform: uppercase

`;

const BaseStatsText = styled(Text)`

  font-weight: bold;
  margin-bottom: 10px; 

`;

const ShareButtonText = styled(Text)`

  font-size: 16;
  font-weight: bold;
  text-align: center;
  color: white;

`;

export {  StyledList, PokemonContainer, PokemonName, PokemonCardContainer, PokemonCardName, ImageContainer, PokemonCardInfo, PokemonCardInfoBlock, PokemonCardStats, PokemonCardStat, PokemonProgressBar, PokemonBadge, ShareButton, DivisionBar, PageStructure, TypeContainerText,
TypeContainer, PokemonCardInfoValue, PokemonCardInfoText, BaseStatsText, ShareButtonText, StatProgressBar, PokemonCardStatText, StatProgressBarNumber  };


