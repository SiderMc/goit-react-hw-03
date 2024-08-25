import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"

export default function ContactList ({allContacts,deleteContacts}){
    return <ul className={css.contacts__list}>
        {allContacts.map(contact=>(
            <li className={css.contacts__list_item} key={contact.id}>
                <Contact data={contact} deleteContacts={deleteContacts}/>
            </li>
        ))}
    </ul>
}