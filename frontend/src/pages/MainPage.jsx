import ProgramCard from '../components/ProgramCard';
import PROGRAMS from '../constants/TEMPDATA';
import styled from 'styled-components';

export default function MainPage() {
  return (
    <MainPageContainer>
      <h1>Main Page</h1>
      <ProgramCardsContainer>
        {PROGRAMS.map((program, idx) => (
          <ProgramCard key={idx} program={program} />
        ))}
      </ProgramCardsContainer>
    </MainPageContainer>
  );
}

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90vh;
`;

const ProgramCardsContainer = styled.div`
  overflow: scroll;
`;
