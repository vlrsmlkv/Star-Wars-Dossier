import { FlexboxGrid, Col } from 'rsuite';

const Dossier = ({data}) => {

  if (!data) return null;

  return (
    <FlexboxGrid justify="space-around" className="dossier-container">
      <FlexboxGrid.Item colspan={24} className="dossier-title">{data.name}</FlexboxGrid.Item>

      <FlexboxGrid.Item colspan={24}>
          <FlexboxGrid.Item componentClass={Col} md={12}>Gender</FlexboxGrid.Item>
          <FlexboxGrid.Item componentClass={Col} md={12}>{data.gender}</FlexboxGrid.Item>
      </FlexboxGrid.Item> 
      <FlexboxGrid.Item colspan={24}>
          <FlexboxGrid.Item componentClass={Col} md={12}>Date of birth</FlexboxGrid.Item>
          <FlexboxGrid.Item componentClass={Col} md={12}>{data.birth_year}</FlexboxGrid.Item>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={24}>
          <FlexboxGrid.Item componentClass={Col} md={12}>Height</FlexboxGrid.Item>
          <FlexboxGrid.Item componentClass={Col} md={12}>{data.height}</FlexboxGrid.Item>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={24}>
          <FlexboxGrid.Item componentClass={Col} md={12}>Mass</FlexboxGrid.Item>
          <FlexboxGrid.Item componentClass={Col} md={12}>{data.mass}</FlexboxGrid.Item>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={24}>
          <FlexboxGrid.Item componentClass={Col} md={12}>Hair color</FlexboxGrid.Item>
          <FlexboxGrid.Item componentClass={Col} md={12}>{data.hair_color}</FlexboxGrid.Item>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={24}>
          <FlexboxGrid.Item componentClass={Col} md={12}>Scin color</FlexboxGrid.Item>
          <FlexboxGrid.Item componentClass={Col} md={12}>{data.skin_color}</FlexboxGrid.Item>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={24}>
          <FlexboxGrid.Item componentClass={Col} md={12}>Eye color</FlexboxGrid.Item>
          <FlexboxGrid.Item componentClass={Col} md={12}>{data.eye_color}</FlexboxGrid.Item>
      </FlexboxGrid.Item>
      {/* <FlexboxGrid.Item>
          <FlexboxGrid.Item componentClass={Col} md={12}>Homeworld</FlexboxGrid.Item>
          <FlexboxGrid.Item componentClass={Col} md={12}>{data.homeworld}</FlexboxGrid.Item>
      </FlexboxGrid.Item>   */}
      
    </FlexboxGrid>
  )

}

export default Dossier; 

