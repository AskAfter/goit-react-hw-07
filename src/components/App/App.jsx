import './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import s from './App.module.css';
import { ImShocked } from 'react-icons/im';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';

function App() {
  const contacts = useSelector(state => state.contacts.contacts.items || []);
  const loading = useSelector(state => state.contacts.contacts.loading);
  console.log(loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchContacts({ signal: abortController.signal }));
    return () => abortController.abort();
  }, [dispatch]);

  return (
    <div className={s.container}>
      <h1 className={s.header}>PhoneBook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 && <ContactList />}

      {contacts.length < 1 && !loading && (
        <h2 className={s.nothingFound}>
          Nothing found <ImShocked className={s.icon} />
        </h2>
      )}
      {loading && <h2>Loading...</h2>}
    </div>
  );
}

export default App;
