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

  const [fetchedData, setFetchedData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisibleButton, setIsVisibleButton] = useState(false);
  
  useEffect(() => {
    fetchStarWarsCharacter(starWarsUrl, setFetchedData, setIsLoading)
  }, []);
  fetchedData && console.log(fetchedData.results)
  
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

      {fetchedData 
        && <PagePaginationButtons
          fetchedData={fetchedData}
          setFetchedData={setFetchedData}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      }  
      
      <FlexboxGrid className="dossiers-container" justify="start">
        { fetchedData && fetchedData.results && fetchedData.results.map((el,index) => <Dossier key={`character+${index+1}`} data={el}/>)}
      </FlexboxGrid>

      {fetchedData 
        && isVisibleButton 
          && <PagePaginationButtons
            fetchedData={fetchedData}
            setFetchedData={setFetchedData}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
      } 
      
      {fetchedData 
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
