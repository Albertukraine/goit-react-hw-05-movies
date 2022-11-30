import PropTypes from 'prop-types';
import { SearchForm, Input, Button, ButtonInfo } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  return (
    <SearchForm onSubmit={onSubmit}>
      <Input
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
      <Button type="submit">
        <ButtonInfo>Search</ButtonInfo>
      </Button>
    </SearchForm>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
