import s from "./ContactsList.module.css";
import PropTypes from "prop-types";

const ContactsList = ({contacts, deleteContact}) => {
  return (
    <div>
    <ul className={s.list}>
    {contacts.map(
      contact => (
        <li className={s.item}
          key={contact.id}>
          {contact.name}{' '}
          {contact.number}{' '}
          <button className={s.button} onClick={() => deleteContact(contact.id)}>Delete</button>
        </li>
       ))}
    </ul>
    </div>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
}

export default ContactsList;