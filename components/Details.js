import React from 'react';
import { View, Text, Image, TouchableOpacity, Share } from 'react-native';
import {  Wrapper } from './Wrapper';
import { PokemonTypeColors, PokemonBackgroundColors } from './Colors';
import { PokemonCardContainer, PokemonCardName, ImageContainer, PokemonCardInfo,  PokemonCardInfoBlock, PokemonCardStats, 
  PokemonCardStat, PokemonProgressBar,  PokemonBadge, ShareButton, DivisionBar, PageStructure, TypeContainerText, TypeContainer,
  PokemonCardInfoValue, PokemonCardInfoText, BaseStatsText,  ShareButtonText, StatProgressBar, PokemonCardStatText, StatProgressBarNumber,} from './Styles';

export default function Details({ route }) {
  const { name, imageUrl, stats, height, weight, types } = route.params;

  const backgroundColor = PokemonBackgroundColors[types[0].type.name];

  const typeColor = PokemonTypeColors[types[0].type.name];

  async function createPokemonMessage() {
    try {
      let message = `Conheça o Pokémon ${name}!\n`;

      let typeNames = types.map(type => type.type.name);
      message += `Tipos: ${typeNames.join(", ")}\n`;

      message += `Stats:\n`;
      stats.forEach(statObj => {
        message += `  ${statObj.name}: ${statObj.baseStat}\n`;
      });

      message += `Altura: ${height/10} metros\n`;
      message += `Peso: ${weight/10} kg`;
      
      const result = await Share.share({message: message})
    } catch (error) {
      console.log("Operacao cancelada")
    }
  }

  return (
  <Wrapper>
    <PageStructure style= {{ backgroundColor: backgroundColor }}>
      <TypeContainer>
        {types && types.map((type) => (
          <PokemonBadge type = {type.type.name}>
            <TypeContainerText>
              {type.type.name}
            </TypeContainerText>
          </PokemonBadge>
        ))}
      </TypeContainer>
      <PokemonCardContainer>
        <ImageContainer>
          <Image style={{ width: 300, height: 300 }} source={{ uri: imageUrl }} />
        </ImageContainer>
        <View style={{ padding: 20, gap: 24}}> 
          <PokemonCardInfo>
            <PokemonCardInfoBlock>
              <PokemonCardInfoValue>{height/10} m</PokemonCardInfoValue>
              <PokemonCardInfoText>Height</PokemonCardInfoText>
            </PokemonCardInfoBlock>

            <DivisionBar></DivisionBar>

            <PokemonCardInfoBlock>
              <PokemonCardInfoValue>{weight/10} kg</PokemonCardInfoValue>
              <PokemonCardInfoText>Weight</PokemonCardInfoText>
            </PokemonCardInfoBlock>
          </PokemonCardInfo> 

          <PokemonCardStats>
            <BaseStatsText>Base stats: </BaseStatsText>
              {stats && stats.map((stat, index) => (
                <PokemonCardStat>
                  <PokemonCardStatText key={index}>{`${stat.name}`}</PokemonCardStatText>
                  <PokemonProgressBar>
                      <StatProgressBar color={typeColor} width={stat.baseStat} />
                  </PokemonProgressBar>
                  <StatProgressBarNumber key={index}>{`${stat.baseStat}`}</StatProgressBarNumber>
                </PokemonCardStat>
              ))}
          </PokemonCardStats>
          <ShareButton onPress={() => createPokemonMessage() } color={typeColor}> 
            <ShareButtonText>Compartilhar</ShareButtonText>
          </ShareButton>
        </View>
      </PokemonCardContainer>
    </PageStructure>
  </Wrapper>
  );
}
