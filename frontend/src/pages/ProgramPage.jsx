import { useRecoilValue } from "recoil";
import { ProgramLocation } from "../store/Info";
import ProgramCard from "../components/ProgramCard";
import PROGRAMS from "../constants/LECTURE";
import styled from "styled-components";

export default function ProgramPage() { 
  const location = useRecoilValue(ProgramLocation);

  return (
    <ProgramList>
      <ProgramListTitle> {location}에서 <br />모집중인 프로그램 </ProgramListTitle>
      <ProgramCardsContainer>
        {PROGRAMS.map((program, idx) => (
          <ProgramCard key={idx} program={program} />
        ))}
      </ProgramCardsContainer>
  </ProgramList>
  );
}

const ProgramList = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  width: 95%;
`;

const ProgramListTitle = styled.div`
  position: relative;
  font-size: 25px;
  font-weight: bold;
  margin: 5px;
  border-bottom: 1px solid #000;
`;

const ProgramCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 80vh;
  overflow: scroll;
`;
