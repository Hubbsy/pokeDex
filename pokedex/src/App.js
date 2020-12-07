import './App.css';
import Header from './components/header.jsx';
import Search from './components/searchCategory.jsx';
import Habitats from './components/habitats.jsx';



function App() {
  return (
    <div className="App">
      <Header />
      <Habitats />
        <Search /> 
    </div>
  );
}

export default App;
