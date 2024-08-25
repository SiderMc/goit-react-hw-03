import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useId, useState } from 'react';

export default function ContactForm({ addContacts }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  const initialValues = {
    name: '',
    number: '',
  };

  const ValidateSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name is too short, minimum 3 letters.')
      .max(50, 'Name is too long, maximum 50 letters.')
      .required('Name field is required.')
      .trim(),
    number: Yup.string()
      .min(3, 'Number is too short, minimum 3 digits.')
      .max(50, 'Number is too long, maximum 50 digits.')
      .required('Number field is required.')
      .trim(),
  });

  const handleContacts = ({ name, number }, actions) => {
    addContacts({
      id: nanoid(),
      name,
      number,
    });
    actions.resetForm();
    setOpen(false);
  };

  return open ? (
    <Dialog open={open}>
      <div className={css.form__content}>
        <IconButton
          aria-label="close"
          className={css.close}
          onClick={() => setOpen(false)}>
          <CloseIcon color="primary" />
        </IconButton>
        <Formik
          initialValues={initialValues}
          onSubmit={handleContacts}
          validationSchema={ValidateSchema}>
          <Form className={css.form}>
            <div className={css.form__group}>
              <label htmlFor={`${id}-name`} className={css.form__label}>
                <span>*</span>Name
              </label>
              <Field
                type="text"
                className={css.form__input}
                name="name"
                id={`${id}-name`}
              />
              <ErrorMessage component="span" name="name" />
            </div>
            <div className={css.form__group}>
              <label htmlFor={`${id}-number`} className={css.form__label}>
                <span>*</span>Number
              </label>
              <Field
                type="text"
                className={css.form__input}
                id={`${id}-number`}
                name="number"
              />
              <ErrorMessage component="span" name="number" />
            </div>
            <Button variant="contained" size="medium" type="submit">
              Add contact
            </Button>
          </Form>
        </Formik>
      </div>
    </Dialog>
  ) : (
    <Button
      variant="contained"
      size="medium"
      onClick={() => {
        setOpen(true);
      }}>
      Add contact
    </Button>
  );
}
