import dataContacts from '../../data/contactsData.json';
import 'modern-normalize';
import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useEffect, useState } from 'react';

export default function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : dataContacts;
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filtersName = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContacts = newContact => {
    setContacts(oldContacts => [...oldContacts, newContact]);
  };

  const deleteContacts = contactId => {
    setContacts(oldContacts => {
      return oldContacts.filter(contact => contact.id !== contactId);
    });
  };

  const filterContacts = value => {
    return setFilter(value);
  };

  return (
    <div className={css.wrapper}>
      <section className={css.section}>
        <section className={css.phonebook}>
          <div className={css.container}>
            <div className={css.content}>
              <ContactForm addContacts={addContacts} />
              <SearchBox filter={filter} filterContacts={filterContacts} />
            </div>
            <ContactList
              allContacts={filtersName}
              deleteContacts={deleteContacts}
            />
          </div>
        </section>
      </section>
    </div>
  );
}
