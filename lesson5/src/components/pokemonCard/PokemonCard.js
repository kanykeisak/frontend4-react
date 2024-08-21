import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from "./PokemonCard.module.scss";
import Button from "../button/Button";

const PokemonCard = ({ pokemonUrl }) => {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        axios.get(pokemonUrl).then(response => {
            setDetails(response.data);
        });
    }, [pokemonUrl]);

    if (!details) return null;

    return (
        <div className={classes.pokemoncard}>
            <img src={details.sprites.other.dream_world.front_default} alt={details.name} />
            <h3>{details.name}</h3>
            <button>Подробнее</button>
        </div>
    );
};
export default PokemonCard;