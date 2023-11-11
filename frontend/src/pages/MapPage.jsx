import KakaoMap from "../components/KakaoMap";
import styled from "styled-components";

export default function MapPage() {
  return (
    <Container>
      <MapHeader>나와 가장 가까운 <br/> 복지기관을 찾으세요!</MapHeader>
      <MapContainer>
        <KakaoMap/>
      </MapContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  overflow: scroll;
  padding: 10px;
`;

const MapHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;