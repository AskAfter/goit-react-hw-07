import './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import s from './App.module.css';
import { ImShocked } from 'react-icons/im';
import { useEffect } from 'react';
import { fetchData } from '../../redux/contactsOps';

function App() {
  const contacts = useSelector(state => state.contacts.contacts.items || []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className={s.container}>
      <h1 className={s.header}>PhoneBook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <h2 className={s.nothingFound}>
          Nothing found <ImShocked className={s.icon} />
        </h2>
      )}
    </div>
  );
}

export default App;
