import React, { useState } from "react";
import s from "./CreateContactForm.module.css";
import PropTypes from "prop-types";

const initialState = {
  name: '',
  number: ''
};

const CreateContactForm = ({onChange}) => {
  const [contact, setContact] = useState({...initialState});

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setContact({...contact, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onChange(contact.number, contact.name);
    setContact({
      name: '',
      number: ''
    })
  }

  return (
    <div className={s.formWrapper}>
    <form onSubmit={onSubmit}
    className={s.form}>
      <label className={s.label}>
        Name
        <input
        className={s.input}
        type="text"
        name="name"
        value={contact.name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      onChange={onHandleChange}/>
      </label>
      <label className={s.label}>
        Phone
        <input
        className={s.input}
          type="tel"
          name="number"
          value={contact.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={onHandleChange}
        />

      </label>
      <button type="submit"
      className={s.button}>
        Add contact
      </button>
    </form>
    </div>
  );
}

CreateContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default CreateContactForm;