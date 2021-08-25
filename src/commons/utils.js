import axios from 'axios';

const fetchStarWarsCharacter = async (url, setIsLoading) => { 
  setIsLoading(true)
  return await axios.get(url) 
    .then(response => {
      setIsLoading(false);

      return {
        characters: response.data.results,
        nextPageUrl: response.data.next,
        previousPageUrl: response.data.previous
      }
      
    })
    .catch(error => console.error(`Error: ${error}`))
}

export { fetchStarWarsCharacter }