import MealSchedule from '../../components/MealSchedule';
import styled from 'styled-components';

export default function MealPage() {
  return (
    <MealContainer>
      <MealSchedule />
    </MealContainer>
  );
}

const MealContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90vh;
  overflow: scroll;
`;