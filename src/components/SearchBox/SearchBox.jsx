import { useId } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox({ filter, filterContacts }) {
  const id = useId();
  const handleFilter = event => {
    filterContacts(event.target.value);
  };
  return (
    <div className={css.search}>
      <label htmlFor={`${id}-search`} className={css.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        className={css.input}
        id={`${id}-search`}
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
}
