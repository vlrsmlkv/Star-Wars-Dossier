import axios from 'axios';

const fetchStarWarsCharacter = (url, onSuccess, setIsLoading) => { 
  setIsLoading(true)
  axios.get(url) 
    .then(response => {
      onSuccess(response.data);
      setIsLoading(false);
    })
    .catch(error => console.error(`Error: ${error}`))
}

export { fetchStarWarsCharacter }