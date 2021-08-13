import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import s from './ContactForm.module.css';
import FormButton from '../FormButton/FormButton';

export class ContactForm extends Component {
  state = {
    name: '',
    phoneNumber: '',
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={{ name: '', phoneNumber: '' }}
          validationSchema={Yup.object({
            name: Yup.string()
              .matches(
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                "Name can contain only letters, ', - and space. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc.",
              )
              .required(),
            phoneNumber: Yup.string()
              .matches(
                /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
                'Phone number should contain only numbers and it also could contain spaces, dash, parenthesis and startts with +',
              )
              .required(),
          })}
          onSubmit={(values, { resetForm }) => {
            this.props.onSubmit(values);
            resetForm();
          }}
        >
          <Form className={s.form}>
            <label className={s.label}>
              Name:
              <Field className={s.fieldInput} name="name" type="text" />
              <ErrorMessage
                name="name"
                component="span"
                className={s.validatorError}
              />
            </label>
            <label className={s.label}>
              Phone number:
              <Field className={s.fieldInput} name="phoneNumber" type="tel" />
              <ErrorMessage
                name="phoneNumber"
                component="span"
                className={s.validatorError}
              />
            </label>
            <FormButton type="submit" label="Add contact" />
          </Form>
        </Formik>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
