import { Loader } from 'rsuite';
import { FlexboxGrid } from 'rsuite';

import './index.css';

import { starWarsUrl } from './starWarsUrl';

import { useState } from 'react';
import { useEffect } from 'react';
import { fetchStarWarsCharacter } from './utils';

import Dossier from './Dossier';
import PagePaginationButtons from './PagePaginationButtons';
import PageUpButton from './PageUpButton';

const App = () => {

  const [characters, setCharacters] = useState(null); 
  const [nextPageUrl, setNextPageUrl] = useState(null); 
  const [previousPageUrl, setPreviousPageUrl] = useState(null); 
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisibleButton, setIsVisibleButton] = useState(false);

  const fetchCharactersPage = async (pageUrl) => {

    const {
      characters,
      nextPageUrl,
      previousPageUrl
    } = await fetchStarWarsCharacter(pageUrl, setIsLoading);

    setCharacters(characters)
    setNextPageUrl(nextPageUrl)
    setPreviousPageUrl(previousPageUrl)
  }
  
  useEffect(() => fetchCharactersPage(starWarsUrl), []);
  
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

      {characters 
        && <PagePaginationButtons
          onPreviousButtonClick={() => {
            fetchCharactersPage(previousPageUrl);
            setPageNumber(pageNumber-1)
          }}
          onNextButtonClick={() => {
            fetchCharactersPage(nextPageUrl)
            setPageNumber(pageNumber+1)
          }}
          isNextButtonDisabled={!nextPageUrl}
          isPreviousButtonDisabled={!previousPageUrl}
          currentPageNumber={pageNumber}
          isLoading={isLoading}
        />
      }  
      
      <FlexboxGrid className="dossiers-container" justify="start">
        {characters && characters.map((el,index) => <Dossier key={`character+${index+1}`} data={el}/>)}
      </FlexboxGrid>

      {characters
        && <PagePaginationButtons
          onPreviousButtonClick={() => {
            fetchCharactersPage(previousPageUrl)
            setPageNumber(pageNumber-1)        
          }}
          onNextButtonClick={() => {
            fetchCharactersPage(nextPageUrl);
            setPageNumber(pageNumber+1)
          }}
          isNextButtonDisabled={!nextPageUrl}
          isPreviousButtonDisabled={!previousPageUrl}
          currentPageNumber={pageNumber}
          isLoading={isLoading}
        />
      } 
      
      {characters 
        && <FlexboxGrid justify="end"> 
          <PageUpButton
            isVisibleButton={isVisibleButton}
          />
        </FlexboxGrid>
      }

    </div>
  );
}

export default App;
