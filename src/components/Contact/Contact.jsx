import css from "./Contact.module.css"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Contact({ data: { name, number, id }, deleteContacts }) {
    const handleDelete = () => {
        deleteContacts(id);
    };
    return <div className={css.contact}>
        <div className={css.contact__text_content}>
            <p className={css.contact__text}><PersonIcon/> {name}</p>
            <p className={css.contact__text}><PhoneIcon/>{number}</p>
        </div>
        <IconButton aria-label="delete" className={css.delete} onClick={handleDelete}> 
        <DeleteIcon  color="primary" />
      </IconButton>
    </div>
}