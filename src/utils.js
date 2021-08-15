import axios from 'axios';

const fetchStarWarsCharacter = (url, setFetchedData, setIsLoading) => { 
  setIsLoading(true)
  axios.get(url) 
    .then(response => {
      setFetchedData(response.data);
      setIsLoading(false);
    })
    .catch(error => console.error(`Error: ${error}`))
}

export { fetchStarWarsCharacter }