import React from 'react';
import logo from '../pokeball.png';


const EachPoke = (props) => {
  console.log(props)
  return (
    <li className="eachPoke">
      <h2>
        {props.poke.name}
        <div className="pokeBall" >
        <a  href={props.poke.url}>
          <img src={logo} alt="logo" />
        </a>
      </div>
      </h2> 
      
    </li>
  )
};


export default EachPoke; 