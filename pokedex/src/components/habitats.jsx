import React from 'react'; 


class Habitats extends React.Component {
  constructor() {
    super()

    this.state = {
      habitats: []
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon-habitat/')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.results);
      this.setState({
        habitats: data.results
      })
    })
  };



  render() {
    return (
      <div className="habitats"> 
        <h2>Types of Pokemon habitats</h2>
        {this.state.habitats.map(hab => {
          return (
            <div className="eachHab">{hab.name}</div>
          )
        })}
      </div>
    )
  }
};




export default Habitats; 