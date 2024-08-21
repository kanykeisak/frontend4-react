import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from "../pokemonCard/PokemonCard";
import classes from "./PokemonList.module.scss";

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response => {
                setPokemonList(response.data.results);
            });
    }, []);

    return (
        <div className={classes.pokemonlist}>
            {pokemonList.map((pokemon, index) => (
                <PokemonCard key={index} pokemonUrl={pokemon.url} />
            ))}
        </div>
    );
};

export default PokemonList;