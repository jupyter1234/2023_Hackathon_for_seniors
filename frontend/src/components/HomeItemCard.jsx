import styled from "styled-components";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

HomeItemCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default function HomeItemCard({ item }) {
  return (
    <HomeItemCardContainer>
      <StyledLink to={item.url_path}>
        <CardContent>
          <CardTitle>{item.title}</CardTitle>
        </CardContent>
      </StyledLink>
    </HomeItemCardContainer>
  );
}

const HomeItemCardContainer = styled.div`
  background-color: #5767aa;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 10px 10px 5px 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  width: 95%;
  height: 150px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const CardTitle = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  text-decoration: none;
`;

// You can add more styles based on your design preferences
