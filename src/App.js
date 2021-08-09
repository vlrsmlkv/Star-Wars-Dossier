import { Icon, IconButton } from 'rsuite';
import { Loader } from 'rsuite';
import { FlexboxGrid } from 'rsuite';

import './index.css';

import { useState } from 'react'; 
import { useEffect } from 'react';
import { fetchStarWarsCharacter } from './utils';

import Dossier from './Dossier';

const App = () => {

  const [characters, setCharacters] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisibleButton, setIsVisibleButton] = useState(false);

  const starWarsUrl = 'https://swapi.py4e.com/api/people/';
  
  useEffect(() => {
    fetchStarWarsCharacter(starWarsUrl, (data) => {
      setFetchedData(data)
      setCharacters(data.results)
    }, setIsLoading)
  }, []);
  
  const handlePageScroll = () => {
    setIsVisibleButton((window.pageYOffset > 140) ? true : false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handlePageScroll)
    return () => window.removeEventListener('scroll', handlePageScroll)
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Characters</h1> 

      {isLoading 
        && <Loader 
          className="loader" 
          backdrop 
          size="lg" 
          inverse 
          content="Fetching characters..." 
          vertical
        />
      }

      {fetchedData && <div className="page-pagination-top">
        <IconButton 
          onClick={() => {
            fetchStarWarsCharacter(fetchedData.previous, (data) => {
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
            fetchStarWarsCharacter(fetchedData.next, (data) => {
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
      
      <FlexboxGrid className="dossiers-container" justify="start">
        {characters && characters.map((el,index) => <Dossier key={`character+${index+1}`} data={el}/>)}
      </FlexboxGrid>

      {fetchedData && isVisibleButton && <div className="page-pagination-bottom">
        <IconButton 
          onClick={() => {
            fetchStarWarsCharacter(fetchedData.previous, (data) => {
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
            fetchStarWarsCharacter(fetchedData.next, (data) => {
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
          style={{display: isVisibleButton ? "inline" : "none"}}
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
