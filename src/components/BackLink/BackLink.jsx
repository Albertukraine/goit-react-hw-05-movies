import { HiChevronDoubleLeft } from 'react-icons/hi';
import { LinkStyled } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <LinkStyled to={to}>
      <HiChevronDoubleLeft size="16" />
      {children}
    </LinkStyled>
  );
};
