import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { FirstStep, RegisterCreators } from '../../../store/ducks/register';

import Input from '../../../components/Form/Input';
import Title from '../../../components/Title';

import * as S from './styles';

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const dispatch = useDispatch();

  const history = useHistory();

  const schema = Yup.object().shape({
    name: Yup.string()
      .required('Campo obrigatório')
      .min(3, 'Mínimo 3 caracteres'),
    email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
  });

  const handleSubmit = async (data: FirstStep) => {
    try {
      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});

      dispatch(RegisterCreators.setFirstStep(data));

      history.push('/register/workinfo');
    } catch (e) {
      if (e instanceof Yup.ValidationError) {
        const errorMessages: any = {};

        e.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current?.setErrors(errorMessages);
      }
    }
  };

  return (
    <>
      <Title>Criar conta</Title>
      <S.Container>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input label="Qual o seu nome?" name="name" />
          <Input label="E seu e-mail?" name="email" />
          <Input label="Crie uma senha" name="password" type="password" />
          <S.SubmitButton label="Avançar" type="submit" />
        </Form>
        <hr />
        <span>Já possui conta?</span>
        <Link to="/login">Entrar</Link>
      </S.Container>
    </>
  );
};

export default Register;
