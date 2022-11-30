import PropTypes from 'prop-types';
import { SearchForm, Input, Button, ButtonLabel } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  return (
    <SearchForm onSubmit={onSubmit}>
      <Input
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <Button type="submit">
        <ButtonLabel>Search</ButtonLabel>
      </Button>
    </SearchForm>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
