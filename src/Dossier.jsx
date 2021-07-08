import { Grid, Row, Col } from 'rsuite';

const Dossier = ({data}) => {

  if (!data) return null;

  return (
    <Grid className="dossier-container">
      <Row className="dossier-title">{data.name}</Row>
      <Row>
          <Col md={12}>Gender</Col>
          <Col md={12} >{data.gender}</Col>
      </Row> 
      <Row>
          <Col md={12}>Date of birth</Col>
          <Col md={12} >{data.birth_year}</Col>
      </Row>
      <Row>
          <Col md={12}>Height</Col>
          <Col md={12} >{data.height}</Col>
      </Row>
      <Row>
          <Col md={12}>Mass</Col>
          <Col md={12} >{data.mass}</Col>
      </Row>
      <Row>
          <Col md={12}>Hair color</Col>
          <Col md={12} >{data.hair_color}</Col>
      </Row>
      <Row>
          <Col md={12}>Scin color</Col>
          <Col md={12} >{data.skin_color}</Col>
      </Row>
      <Row>
          <Col md={12}>Eye color</Col>
          <Col md={12} >{data.eye_color}</Col>
      </Row>
      {/* <Row>
          <Col md={12}>Homeworld</Col>
          <Col md={12} >{data.homeworld}</Col>
      </Row>   */}
      
    </Grid>
  )

}

export default Dossier; 

