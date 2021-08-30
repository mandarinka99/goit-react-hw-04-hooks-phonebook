import s from "./FilterContactForm.module.css";
import PropTypes from "prop-types";

const FilterContacts = ({onHandleChange}) => {
  return (
    <div>
      <form className={s.form} onSubmit={e => e.preventDefault()}>
        <label className={s.label}>
          Find contacts by name
          <input
          className={s.input}
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={onHandleChange}
          />
        </label>
      </form>
    </div>
  );
}

FilterContacts.propTypes = {
  onHandleChange: PropTypes.func,
}

export default FilterContacts;