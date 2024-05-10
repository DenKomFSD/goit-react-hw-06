import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.container}>
      {contacts.map((contact) => (
        <Contact key={contact.id} {...contact} onDelete={onDelete} />
      ))}
    </ul>
  );
}
