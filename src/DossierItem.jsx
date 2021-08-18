import { FlexboxGrid } from 'rsuite';

const DossierItem = ({name, value}) => (
    <FlexboxGrid.Item colspan={24}>
      <FlexboxGrid justify="space-around">
        <FlexboxGrid.Item colspan={12}>{name}</FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={12}>{value}</FlexboxGrid.Item>
      </FlexboxGrid>
    </FlexboxGrid.Item>
  )

export default DossierItem;