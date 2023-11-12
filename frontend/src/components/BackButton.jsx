import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function BackButton(){
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    return(
        <Card onClick={handleGoBack}>
            <h2 style={{color:'white'}}>뒤로가기</h2>
        </Card>
    );
}


const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:#37426e;
  border: 2px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
  width: 365px;
  height: 60px;
  box-shadow: 0 0px 8px rgba(0, 0, 0, 0.1);

  margin-top: auto;
  margin-bottom: 10px;
`;