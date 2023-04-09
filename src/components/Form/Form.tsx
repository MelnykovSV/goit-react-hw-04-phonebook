import React from 'react';
import { Container } from './Form.styled';
import {
  Formik,
  Form as FormikForm,
  Field,
  ErrorMessage,
  FormikHelpers,
} from 'formik';
import * as yup from 'yup';
import { IFormProps } from '../../interfaces';
import shortid from 'shortid';

export const Form = ({ formSubmit }: IFormProps) => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(6, 'Minimum input length 6 symbols')
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Invalid format'
      )
      .required('This field is required')
      .trim(),
    number: yup
      .string()
      .min(3, 'Minimum input length 3 symbols')
      .matches(
        /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        'Invalid format'
      )
      .required('This field is required'),
  });

  async function submitHandler(
    values: {
      name: string;
      number: string;
    },
    {
      resetForm,
    }: FormikHelpers<{
      name: string;
      number: string;
    }>
  ): Promise<void> {
    const isValid = await schema.isValid(values);

    if (isValid) {
      const result = { ...values, id: shortid.generate() };

      const isContactAdded = formSubmit(result);

      if (isContactAdded) {
        resetForm();
      }
    }
  }

  return (
    <Container>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={submitHandler}
        validationSchema={schema}
      >
        <FormikForm>
          <label>
            Name
            <Field type="text" name="name" placeholder="Name your contact" />
            <span>
              <ErrorMessage name="name" />
            </span>
          </label>

          <label>
            Number
            <Field
              type="tel"
              name="number"
              placeholder="Paste or type the number"
            />
            <span>
              <ErrorMessage name="number" />
            </span>
          </label>

          <button type="submit">Add contact</button>
        </FormikForm>
      </Formik>
    </Container>
  );
};
