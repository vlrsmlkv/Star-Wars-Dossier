import { Icon, IconButton } from 'rsuite';
import { Loader } from 'rsuite';

import './index.css';

import { useState } from 'react'; 
import GetCharactersButton from './GetCharactersButton.jsx';
import { getStarWarsCharacter } from './utils';

import Dossier from './Dossier';

const App = () => {

  const [characters, setCharacters] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="App">
      <h1>Star Wars Characters</h1> 
        <GetCharactersButton
          className="fetch-button"
          characters={setCharacters}
          fetchedData={setFetchedData}
        />
        {/* <Loader backdrop content="loading..." vertical speed="slow"/> */}

        <div className="page-navigation">
          <IconButton onClick={() => getStarWarsCharacter(fetchedData.previous, (data) => {
            setFetchedData(data)
            setCharacters(data.results)
            setPageNumber(pageNumber-1)
          })} icon={<Icon icon="arrow-left" />} placement="right"></IconButton>
          <div className="page-number">{pageNumber}</div>

          <IconButton onClick={() => getStarWarsCharacter(fetchedData.next,(data) => {
            setFetchedData(data)
            setCharacters(data.results)
            setPageNumber(pageNumber+1)
          })} icon={<Icon icon="arrow-right" />} placement="right"></IconButton>
        </div>  

        <div className="dossiers-container"> 
          {characters ? characters.map((el,index) => <Dossier key={`character+${index+1}`} data={el}/>) : characters }
        </div>

    </div>
  );
}

export default App;
