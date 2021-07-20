import { Button } from 'rsuite';
import { getStarWarsCharacter } from './utils';

const starWarsurl = 'https://swapi.dev/api/people/';

const CharactersButton = ({characters, fetchedData, setIsLoading}) => {

  return (
      <Button 
        onClick={() => {
          getStarWarsCharacter(starWarsurl, (data) => {
            fetchedData(data)
            characters(data.results)
          }, setIsLoading)
        }}   
        appearance="ghost" 
        color="blue">
        Click me to fetch
      </Button>
  )
}


export default CharactersButton;