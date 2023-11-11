import ProgramCard from '../components/ProgramCard';
import HomeItemCard from '../components/HomeItemCard';
import PROGRAMS from '../constants/LECTURE';
import HOMEITEMS from '../constants/HOME';
import styled from 'styled-components';

export default function MainPage() {
  return (
    <MainPageContainer>
      <HomeCardsContainer>
        {HOMEITEMS.map((item, idx) => (
          <HomeItemCard key={idx} item={item} />
        ))}
      </HomeCardsContainer>
      <ProgramList>
        <ProgramListTitle> 모집중인 프로그램 </ProgramListTitle>
        <ProgramCardsContainer>
          {PROGRAMS.map((program, idx) => (
            <ProgramCard key={idx} program={program} />
          ))}
        </ProgramCardsContainer>
      </ProgramList>
    </MainPageContainer>
  );
}

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90vh;
  overflow: scroll;
`;

const HomeCardsContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProgramList = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

const ProgramListTitle = styled.div`
  position: relative;
  font-size: 25px;
  font-weight: bold;
  margin: 5px;
  border-bottom: 1px solid #000;
`;

const ProgramCardsContainer = styled.div`
  width: 100%;
  height: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  overflow: scroll;
`;
