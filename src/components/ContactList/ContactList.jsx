import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts.items || []);
  const filter = useSelector(state => state.filter.filters.name);

  const filteredData = contacts.filter(item => {
    // console.log(item);
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
