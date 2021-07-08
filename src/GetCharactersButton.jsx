import { Button } from 'rsuite';

const GetCharactersButton = ({value, onChange}) => {

// const getStarWarsCharacter = async () => {

  // const response = await fetch('https://swapi.dev/api/people/'); // first version
  // const data = await response.json()
  // onChange(data.results)

  // }

  const getStarWarsCharacter = () => {
    fetch('https://swapi.dev/api/people/') // second version
    .then(response => 
      response.ok 
      ? response.json().then(data => {
          onChange(data.results)
        })
      : console.log('Network request for characters failed with response ' + response.status + ': ' + response.statusText))
  }

  return (
      <Button value={value} onClick={getStarWarsCharacter} appearance="ghost" color="blue">Click me to fetch</Button>
  )

}


export default GetCharactersButton;