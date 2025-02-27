import { ImPhone, ImUser } from 'react-icons/im';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.contact}>
      <p className={s.text}>
        <ImUser className={s.icon} />
        {name}
      </p>
      <p className={s.text}>
        <ImPhone className={s.icon} />
        {number}
      </p>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </div>
  );
};

export default Contact;
