import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import api from '../../services/api';

import Input from '../../components/Input';
import GradientButton from '../../components/GradientButton';
import Title from '../../components/Title';

import { Container } from './styles';

type User = {
  name: string;
  email: string;
  password: string;
};

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const schema = Yup.object().shape({
    name: Yup.string()
      .required('Campo obrigatório')
      .min(3, 'Mínimo 3 caracteres'),
    email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
  });

  const handleSubmit = async (data: User) => {
    try {
      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});
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
      <Container>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input label="Qual o seu nome?" name="name" />
          <Input label="E seu e-mail?" name="email" />
          <Input label="Crie uma senha" name="password" type="password" />
          <GradientButton label="Avançar" onClick={() => {}} />
        </Form>
        <hr />
        <span>Já possui conta?</span>
        <Link to="/login">Entrar</Link>
      </Container>
    </>
  );
};

export default Register;
