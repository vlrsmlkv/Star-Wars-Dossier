import { Icon, IconButton } from 'rsuite';
import { Loader } from 'rsuite';

import './index.css';

import { useState } from 'react'; 
import CharactersButton from './CharactersButton.jsx';
import { getStarWarsCharacter } from './utils';

import Dossier from './Dossier';

const App = () => {

  const [characters, setCharacters] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <h1>Star Wars Characters</h1> 
        {!fetchedData && <CharactersButton
          className="fetch-button"
          characters={setCharacters}
          fetchedData={setFetchedData}
          setIsLoading={setIsLoading}/>
        }

        {isLoading && <Loader size="lg" inverse center content="Fetching characters..." vertical />}

        {fetchedData && <div className="page-pagination-top">
          <IconButton 
            onClick={() => {
              getStarWarsCharacter(fetchedData.previous, (data) => {
                setFetchedData(data)
                setCharacters(data.results)
              }, setIsLoading)
              setPageNumber(fetchedData.previous ? pageNumber-1 : pageNumber)
            }} 
            icon={<Icon icon="arrow-left" />} 
            placement="right"
            disabled={!fetchedData.previous || isLoading}>
          </IconButton> 

          <div className="page-number">{pageNumber}</div>

          <IconButton
            onClick={() => {
              getStarWarsCharacter(fetchedData.next, (data) => {
                setFetchedData(data)
                setCharacters(data.results)
              }, setIsLoading)
              setPageNumber(fetchedData.next ? pageNumber+1 : pageNumber)
            }} 
            icon={<Icon icon="arrow-right"/>} 
            placement="right"
            disabled={!fetchedData.next || isLoading}>
          </IconButton>
        </div>}  

        <div className="dossiers-container"> 
          {!isLoading && characters && characters.map((el,index) => <Dossier key={`character+${index+1}`} data={el}/>)}
        </div>

        {fetchedData && <div className="page-pagination-bottom">
          <IconButton 
            onClick={() => {
              getStarWarsCharacter(fetchedData.previous, (data) => {
                setFetchedData(data)
                setCharacters(data.results)
              }, setIsLoading)
              setPageNumber(fetchedData.previous ? pageNumber-1 : pageNumber)
            }} 
            icon={<Icon icon="arrow-left" />} 
            placement="right"
            disabled={!fetchedData.previous || isLoading}>
          </IconButton> 

          <div className="page-number">{pageNumber}</div>
          
          <IconButton
            onClick={() => {
              getStarWarsCharacter(fetchedData.next, (data) => {
                setFetchedData(data)
                setCharacters(data.results)
              }, setIsLoading)
              setPageNumber(fetchedData.next ? pageNumber+1 : pageNumber)
            }} 
            icon={<Icon icon="arrow-right"/>} 
            placement="right"
            disabled={!fetchedData.next || isLoading}>
          </IconButton>
        </div>} 
        
        {fetchedData && <div className="page-up-button">
          <IconButton
            icon={<Icon icon="angle-double-up"/>}
            size="lg"
            onClick={() => window.scrollTo({
              top: 0,
              behavior: "smooth"
            })}>
          </IconButton>
        </div>}

    </div>
  );
}

export default App;
