import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  max-width: 320px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid grey;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 15px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 13px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 0;
  background-image: url('https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const ButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
