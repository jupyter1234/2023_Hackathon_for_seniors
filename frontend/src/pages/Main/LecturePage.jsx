import LectureSchedule from '../../components/LectureSchedule';
import styled from 'styled-components';

export default function LecturePage() {
  return (
    <LectureContainer>
      <LectureSchedule />
    </LectureContainer>
  );
}

const LectureContainer = styled.div`
  width: 100%;
  height: 90vh;
  overflow: scroll;
`;