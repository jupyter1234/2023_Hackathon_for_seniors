import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Title(props) {
  return (
    <div style={{ margin: '0 0 20px 0', width: '90%', fontSize: '5vw', fontWeight: 'bold' }}>
      <h2>{props.children}</h2>
    </div>
  );
}

function Content(props) {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  );
}

CommunityItem.propTypes = {
  to: PropTypes.object.isRequired, // adjust the type accordingly
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};


function CommunityItem({ to, imgSrc, altText, content }) {
  return (
    <Card>
      <Link to={to} style={{ textDecoration: 'none' }}>
        <img className="imgSize" src={imgSrc} alt={altText} />
        <Content>{content}</Content>
      </Link>
    </Card>
  );
}

export default function CommunityPage() {
  return (
    <CommunityContainer>
      <Title>주변 사람들과 함께 <br /> 하고 싶은 취미 생활을 <br />골라보세요</Title>
      <CardContainer>
        <CommunityItem to={{ pathname: '/community/badook', state: { paramName: '바둑' } }} imgSrc="/img/go.png" altText="바둑" content="바둑" />
        <CommunityItem to={{ pathname: '/community/walking', state: '산책' }} imgSrc="/img/iris.png" altText="산책" content="산책" />
        <CommunityItem to={{ pathname: '/community/gateball', state: '게이트볼' }} imgSrc="/img/gateball.png" altText="게이트볼" content="게이트볼" />
        <CommunityItem to={{ pathname: '/community/etc', state: '기타활동' }} imgSrc="/img/people.png" altText="기타활동" content="기타활동" />
      </CardContainer>
    </CommunityContainer>
  );
}

const CommunityContainer = styled.div`
  overflow: scroll;
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 60%;
  overflow: scroll;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
  width: 160px;
  height: 200px;
  box-shadow: 0 0px 8px rgba(0, 0, 0, 0.1);

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100px;
  }

  h1 {
    font-size: 25px;
    font-weight: bold;
  }
`;
