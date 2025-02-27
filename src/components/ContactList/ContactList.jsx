import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts || []);
  console.log(contacts);
  const filter = useSelector(selectNameFilter);

  const filteredData = contacts.filter(item => {
    return item.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul className={s.list}>
      {filteredData.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
