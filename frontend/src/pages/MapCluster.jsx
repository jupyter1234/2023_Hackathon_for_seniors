import Cluster from "../components/Cluster";
import BackButton from "../components/BackButton";
import styled from "styled-components";

export default function MapCluster() {
  return (
    <MapClusterContainer>
      <h2>친구들이 많은 곳을 찾아가보세요!</h2>
      <ClusterContainer>
        <Cluster />
      </ClusterContainer>
      <BackButton />
    </MapClusterContainer>
  );
}

const MapClusterContainer = styled.div`
  width: 100%;
  height: 89vh;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 10px;
  }
`;

const ClusterContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 5px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 25px;
`;