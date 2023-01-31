import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import { useState, useEffect } from 'react';


const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, [])

  
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])
  

  
    const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
    }




  return (
      <div className="App">
        <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters' className='monsters-search-box'/>
        <CardList monsters={filteredMonsters}/>
      </div>
  );


}


// class App extends Component{

//   constructor(){
//     // console.log('constructor');

//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     }
//   }

//   componentDidMount(){
//     // console.log('Component Did Mount');

//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => this.setState(() => {
//       return {monsters: users};
//     }
//     ))
//   }

//   searchMonster = (event) => {
//     this.setState(() => {
//       return {searchField: event.target.value.toLocaleLowerCase()}
//     })
//   }


//   render(){
//     // console.log('render');
//     const {monsters, searchField} = this.state;
//     const {searchMonster} = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     })


//     return (
//       <div className="App">
//         <SearchBox onChangeHandler={searchMonster} placeholder='Search Monsters' className='monsters-search-box'/>
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   };
    
  
// }

export default App;
