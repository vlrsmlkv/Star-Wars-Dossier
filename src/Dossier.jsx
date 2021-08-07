import { FlexboxGrid } from 'rsuite';

const Dossier = ({data}) => {

  if (!data) return null;

  return (
    <FlexboxGrid.Item>
      <FlexboxGrid className="dossier-container">
        <FlexboxGrid.Item colspan={24} className="dossier-title">{data.name}</FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={24}>
            <FlexboxGrid justify="space-around">
              <FlexboxGrid.Item md={12}>Gender</FlexboxGrid.Item>
              <FlexboxGrid.Item md={12}>{data.gender}</FlexboxGrid.Item>
            </FlexboxGrid>
        </FlexboxGrid.Item> 
        <FlexboxGrid.Item colspan={24}>
          <FlexboxGrid justify="space-around">
            <FlexboxGrid.Item md={12}>Date of birth</FlexboxGrid.Item>
            <FlexboxGrid.Item md={12}>{data.birth_year}</FlexboxGrid.Item>
          </FlexboxGrid>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={24}>
          <FlexboxGrid justify="space-around">
            <FlexboxGrid.Item md={12}>Height</FlexboxGrid.Item>
            <FlexboxGrid.Item md={12}>{data.height}</FlexboxGrid.Item>
          </FlexboxGrid>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={24}>
          <FlexboxGrid justify="space-around">
            <FlexboxGrid.Item md={12}>Mass</FlexboxGrid.Item>
            <FlexboxGrid.Item md={12}>{data.mass}</FlexboxGrid.Item>
          </FlexboxGrid>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={24}>
          <FlexboxGrid justify="space-around">
            <FlexboxGrid.Item md={12}>Hair color</FlexboxGrid.Item>
            <FlexboxGrid.Item md={12}>{data.hair_color}</FlexboxGrid.Item>
          </FlexboxGrid>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={24}>
          <FlexboxGrid justify="space-around">
            <FlexboxGrid.Item md={12}>Scin color</FlexboxGrid.Item>
            <FlexboxGrid.Item md={12}>{data.skin_color}</FlexboxGrid.Item>
          </FlexboxGrid>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={24}>
          <FlexboxGrid justify="space-around">
            <FlexboxGrid.Item md={12}>Eye color</FlexboxGrid.Item>
            <FlexboxGrid.Item md={12}>{data.eye_color}</FlexboxGrid.Item>
          </FlexboxGrid>
        </FlexboxGrid.Item>
        {/* <FlexboxGrid.Item>
            <FlexboxGrid.Item md={12}>Homeworld</FlexboxGrid.Item>
            <FlexboxGrid.Item md={12}>{data.homeworld}</FlexboxGrid.Item>
        </FlexboxGrid.Item>   */}
      </FlexboxGrid>
    </FlexboxGrid.Item>  
  )

}

export default Dossier; 

