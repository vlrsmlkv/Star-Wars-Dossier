import { Icon, IconButton } from 'rsuite';

import './index.css';

import { useState } from 'react'; 
import GetCharactersButton from './GetCharactersButton.jsx';
import Dossier from './Dossier';
import FetchMessage from './FetchMessage';

const App = () => {

  const [characters, setCharacters] = useState(null);
  const [url, setUrl] = useState(null);

  return (
    <div className="App">
      <h1>Star Wars Characters</h1> 
        <GetCharactersButton
          className="fetch-button"
          onChange={setCharacters}
        />

        <FetchMessage data={characters}/>
        
        <div className="search-container">

        </div>
        <div className="dossiers-container">
        {characters ? characters.map((el,index) => <Dossier key={`character+${index}`}data={el}/>) : characters }
        </div>

    </div>
  );
}

export default App;
