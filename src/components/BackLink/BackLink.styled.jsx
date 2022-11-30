import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: grey;
  text-decoration: none;
  font-weight: 400;
  text-transform: uppercase;

  :hover {
    color: black;
  }
`;
