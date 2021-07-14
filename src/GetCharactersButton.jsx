import { Button } from 'rsuite';
import { getStarWarsCharacter } from './utils';

const starWarsurl = 'https://swapi.dev/api/people/';

const GetCharactersButton = ({characters, fetchedData}) => {

  return (
      <Button 
        onClick={() => {
          getStarWarsCharacter(starWarsurl, (data) => {
            fetchedData(data)
            characters(data.results)
          })
        }}   
        appearance="ghost" 
        color="blue">
        Click me to fetch
      </Button>
  )

}


export default GetCharactersButton;