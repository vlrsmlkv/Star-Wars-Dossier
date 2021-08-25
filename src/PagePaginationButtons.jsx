import { Pagination } from 'rsuite';
import { FlexboxGrid } from 'rsuite';

const PagePaginationButtons = ({
  onPreviousButtonClick, onNextButtonClick,
  isNextButtonDisabled, isPreviousButtonDisabled,
  currentPageNumber,
  isLoading
}) => (
  <FlexboxGrid className="page-pagination" align="middle">
    <FlexboxGrid.Item> 
      <Pagination  
        prev
        size="lg" 
        pages={0}
        onClick={onPreviousButtonClick}
        disabled={isPreviousButtonDisabled || isLoading}
      />
    </FlexboxGrid.Item>

    <FlexboxGrid.Item> 
      <div className="page-number">
          {currentPageNumber}
      </div> 
    </FlexboxGrid.Item>

    <FlexboxGrid.Item> 
      <Pagination 
        next
        size="lg" 
        pages={0}
        onClick={onNextButtonClick}
        disabled={isNextButtonDisabled || isLoading}
      />
    </FlexboxGrid.Item>
  </FlexboxGrid>

)

export default PagePaginationButtons;
