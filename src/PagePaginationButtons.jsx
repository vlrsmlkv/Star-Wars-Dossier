import { Pagination } from 'rsuite';
import { FlexboxGrid } from 'rsuite';

const PagePaginationButtons = ({fetchStarWarsCharacter, nextPageUrl, setNextPageUrl, previousPageUrl, setPreviousPageUrl, pageNumber, setPageNumber, isLoading, setIsLoading, setCharacters}) => (
    <FlexboxGrid className="page-pagination" align="middle">
      <FlexboxGrid.Item> 
        <Pagination  
          prev
          size="lg" 
          pages={0}
          onClick={() => {
            fetchStarWarsCharacter(previousPageUrl, (data) => {
              setCharacters(data.results)
              setNextPageUrl(data.next)
              setPreviousPageUrl(data.previous)
            }, setIsLoading)
            setPageNumber(previousPageUrl ? pageNumber-1 : pageNumber)
          }}
          disabled={!previousPageUrl || isLoading}
        />
      </FlexboxGrid.Item>

      <FlexboxGrid.Item> <div className="page-number">{pageNumber}</div> </FlexboxGrid.Item>

      <FlexboxGrid.Item> 
        <Pagination 
          next
          size="lg" 
          pages={0}
          onClick={() => {
            fetchStarWarsCharacter(nextPageUrl, (data) => {
              setCharacters(data.results)
              setNextPageUrl(data.next)
              setPreviousPageUrl(data.previous)
            }, setIsLoading)
            setPageNumber(nextPageUrl ? pageNumber+1 : pageNumber)
          }}
          disabled={!nextPageUrl || isLoading}
        />
      </FlexboxGrid.Item>
    </FlexboxGrid>

  )

export default PagePaginationButtons;
