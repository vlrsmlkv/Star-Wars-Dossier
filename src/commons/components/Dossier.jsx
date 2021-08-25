import { FlexboxGrid, Col } from 'rsuite';
import DossierItem from './DossierItem';

const Dossier = ({data}) => {

  if (!data) return null;

  return (
    <FlexboxGrid.Item componentClass={Col} md={8} sm={12} xs={24}>
      <FlexboxGrid className="dossier-container">
        <FlexboxGrid.Item colspan={24} className="dossier-title">{data.name}</FlexboxGrid.Item>
        <DossierItem
          name="Gender"
          value={data.gender}
        />
        <DossierItem
          name="Date of birth"
          value={data.birth_year}
        />
        <DossierItem
          name="Height"
          value={data.height}
        />
        <DossierItem
          name="Mass"
          value={data.mass}
        />
        <DossierItem
          name="Hair color"
          value={data.hair_color}
        />
        <DossierItem
          name="Skin color"
          value={data.skin_color}
        />
        <DossierItem
          name="Eye color"
          value={data.eye_color}
        />
      </FlexboxGrid>
    </FlexboxGrid.Item>  
  )

}

export default Dossier; 

