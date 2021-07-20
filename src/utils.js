import axios from 'axios';

const getStarWarsCharacter = (url, onFetchedData, setIsLoading) => { 
  setIsLoading(true)
  axios.get(url) 
    .then(response => {
      onFetchedData(response.data);
      setIsLoading(false);
    })
    .catch(error => console.error(`Error: ${error}`))
}

export { getStarWarsCharacter }