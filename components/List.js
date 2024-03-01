import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchPokemons, fetchPokemonTypes, fetchPokemonDetails, fetchPokemonSize } from './Fetch'; 
import { Wrapper } from './Wrapper';
import { StyledList, PokemonContainer, PokemonName } from './Styles';

const PokemonShow = ({ item }) => {
    const navigation = useNavigation();
    const { name, url } = item;
    const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
    const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemonNumber + '.png';
    

    const [types, setTypes] = useState([]);
    const [stats, setStats] = useState([]);
    const [size, setSize] = useState({ height: null, weight: null });

    useEffect(() => {
        fetchPokemonTypes(pokemonNumber)
            .then(types => setTypes(types))
        fetchPokemonSize(pokemonNumber)
        .then(size => setSize(size));

        fetchPokemonDetails(pokemonNumber)
        .then(details => setStats(details.stats));

}, [pokemonNumber]);

    return (
       <TouchableOpacity onPress={() => navigation.navigate('Details', { name, imageUrl, stats, types, ...size })}>
            <PokemonContainer>
                <Image style={{ width: "30%", height: 60, objectFit: "contain" }} source={{ uri: imageUrl }} />
                <Image 
                source={require('./pokebola.png')} 
                style={{ width: "10%", height: 30, objectFit: "contain"}} 
                />
                <PokemonName>{name}</PokemonName>
            </PokemonContainer>
        </TouchableOpacity>
    );
};


export default function List() {
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetchPokemons()
            .then(results => {
                setPokemons(results);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <Wrapper>
            <StyledList
              data={pokemons}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => <PokemonShow item={item} />}
              contentContainerStyle={{ gap: 20 }}
            />
        </Wrapper>
    );
}