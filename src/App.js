import { Button } from 'rsuite';
import { AutoComplete } from 'rsuite';

import './index.css';

import { useState } from 'react'; 
import GetCharactersButton from './GetCharactersButton.jsx';
import { getSearchedCharacterData } from './utils';
import Dossier from './Dossier';
import FetchMessage from './FetchMessage';

const App = () => {

  const [characters, setCharacters] = useState(null);
  const [searchedCharacterName, setSearchedCharacterName] = useState("");
  const [searchedCharacter, setSearchedCharacter] = useState(null);

  return (
    <div className="App">
      <h1>Star Wars Characters</h1> 
        <GetCharactersButton
          className="fetch-button"
          value={characters}
          onChange={setCharacters}
        />

        <FetchMessage data={characters}/>
        
        <div className="search-container">
          <AutoComplete
            className="search-bar" 
            data={characters ? characters.map(el => (el.name)) : characters} 
            value={searchedCharacterName}
            onChange={setSearchedCharacterName}
          />
          <Button onClick={() => setSearchedCharacter(...getSearchedCharacterData(characters, searchedCharacterName))} 
                  className="create-dossier-button" 
                  appearance="ghost" 
                  color="blue"> 
                  Create character dossier 
          </Button>
        </div>

          <Dossier data={searchedCharacter}/>        

    </div>
  );
}

export default App;
