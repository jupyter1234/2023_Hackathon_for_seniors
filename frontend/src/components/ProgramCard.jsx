import { useSetRecoilState } from "recoil";
import { ProgramInfo } from "../store/Info";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import styled from 'styled-components';

ProgramCard.propTypes = {
  program: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default function ProgramCard({ program }) {
  const setProgramInfo = useSetRecoilState(ProgramInfo);
  const navigate = useNavigate();

  return (
    <CardContainer  
      onClick={() => {
        setProgramInfo(program);
        navigate("/register");
      }}
    >
      <ImageContainer>
        <img src={program.image} alt={program.name} />
      </ImageContainer>
      <InfoContainer>
        <ProgramName>{program.name}</ProgramName>
        <ProgramDescription>{program.description}</ProgramDescription>
      </InfoContainer>
    </CardContainer>
  );
}


const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
  width: 160px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageContainer = styled.div`
  img {
    object-fit: cover;
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #ddd;
  }
`;

const InfoContainer = styled.div`
  position: relative;
  padding: 12px;
`;

const ProgramName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 3px;
`;

const ProgramDescription = styled.div`
  font-size: 14px;
  color: #666;
`;
