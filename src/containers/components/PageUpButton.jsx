import { Icon, IconButton } from 'rsuite';
import { FlexboxGrid } from 'rsuite';

const PageUpButton = ({isVisibleButton}) => {

  const scrollToTop = () => 
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  
  return (
    <FlexboxGrid className={`page-up-button ${!isVisibleButton && "is-hidden"}`}>
      <IconButton
        icon={<Icon icon="angle-double-up"/>}
        size="lg"
        onClick={scrollToTop}>
      </IconButton>
    </FlexboxGrid>
  )

}

export default PageUpButton;