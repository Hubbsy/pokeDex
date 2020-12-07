import React from 'react';
import PokeList from './pokeList';
import {trackPromise} from 'react-promise-tracker';


 class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      habitat: '',
      list: []
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }



  handleSearch(e) {
    let query = this.state.habitat; 
    
    e.preventDefault();
    trackPromise(
    fetch(`https://pokeapi.co/api/v2/pokemon-habitat/${query}/` )
    .then(response => {
      return response.json()
    })
    .then(data => {
      // console.log(data.names)
      return data.pokemon_species
    })
    .then(array => {
      this.setState({
        list: array
      })
    }));
  };

  handleChange(e) {
    
    const value = e.target.value; 
    this.setState({
      habitat: value
    });
  };


  render() {
    console.log(this.state)
    return (
      <>
        <form onSubmit={this.handleSearch}>
          <label>Search Pokemon by habitat: </label>
          <input type="search" 
                className="searchBar" 
                name="search" 
                onChange={this.handleChange} 
                value={this.state.habitat}/>
          <button className="searchButton" type="submit">Lookup</button>
        </form>
        <PokeList pokemon={this.state.list} />
      </>
    )
  };
  
};




export default Search; 