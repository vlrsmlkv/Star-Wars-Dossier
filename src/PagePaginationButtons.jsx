import { Pagination } from 'rsuite';
import { FlexboxGrid } from 'rsuite';
import FlexboxGridItem from 'rsuite/lib/FlexboxGrid/FlexboxGridItem';
import { fetchStarWarsCharacter } from './utils';

const PagePaginationButtons = ({fetchedData, setFetchedData, pageNumber, setPageNumber, isLoading, setIsLoading}) => {

  return (
    <FlexboxGrid className="page-pagination" align="middle">
      <FlexboxGridItem> 
        <Pagination  
          prev
          size="lg" 
          pages={0}
          onClick={() => {
            fetchStarWarsCharacter(fetchedData.previous, (data) => {
              setFetchedData(data)
            }, setIsLoading)
            setPageNumber(fetchedData.previous ? pageNumber-1 : pageNumber)
          }}
          disabled={!fetchedData.previous || isLoading}
        />
      </FlexboxGridItem>

      <FlexboxGridItem> <div className="page-number">{pageNumber}</div> </FlexboxGridItem>

      <FlexboxGridItem> 
        <Pagination 
          next
          size="lg" 
          pages={0}
          onClick={() => {
            fetchStarWarsCharacter(fetchedData.next, (data) => {
              setFetchedData(data)
            }, setIsLoading)
            setPageNumber(fetchedData.next ? pageNumber+1 : pageNumber)
          }}
          disabled={!fetchedData.next || isLoading}
        />
      </FlexboxGridItem>
    </FlexboxGrid>

  )

}

export default PagePaginationButtons;
