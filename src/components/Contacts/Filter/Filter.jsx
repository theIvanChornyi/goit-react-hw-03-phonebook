import PropTypes from 'prop-types';
import { FormLabel } from 'components/PhonebookForm/FormInput';
import { Input } from './Filter.styled';
export const Filter = ({ onFilterContacts }) => {
  return (
    <label>
      <FormLabel>Find contacts by name</FormLabel>
      <Input
        type="text"
        name="filter"
        onInput={e => {
          onFilterContacts(e.target.value);
        }}
      ></Input>
    </label>
  );
};
Filter.propTypes = {
  onFilterContacts: PropTypes.func.isRequired,
};
