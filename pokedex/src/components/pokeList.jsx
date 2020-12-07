import React from 'react';
import EachPoke from './eachPoke.jsx';



const PokeList = (props) => {
  // console.log(props)
  if (!props) {
    return null; 
  } else {
    return (
      <div className="pokeList">
        <ul>
        {props.pokemon.map(poke => {
          return (
            <EachPoke poke={poke} />
          )
        })}
        </ul>
      </div>
    )
  }
};



export default PokeList; 