import PropTypes from 'prop-types';
import { ContactItem, DeleteBtn } from './Contacts.styled';
export const Contacts = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id}>
        <div>
          <span>{name}: </span>
          <span>{number}</span>
        </div>
        <DeleteBtn
          type="button"
          onClick={() => {
            onDeleteContact(id);
          }}
        >
          Delete
        </DeleteBtn>
      </ContactItem>
    ))}
  </ul>
);

Contacts.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
