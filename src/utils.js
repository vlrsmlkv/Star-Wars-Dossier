const getStarWarsCharacter = (url, onFetchedData) => { 
    
    if (url) {
    fetch(url) 
    .then(response => 
      response.ok 
      ? (response.json().then(data => onFetchedData(data)))
      : console.log('Network request for characters failed with response ' + response.status + ': ' + response.statusText))
    }  
}

export { getStarWarsCharacter }