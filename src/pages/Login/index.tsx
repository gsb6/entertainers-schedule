import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import api from '../../services/api';

import { Container } from './styles';

import GradientButton from '../../components/GradientButton';
import Input from '../../components/Input';
import Title from '../../components/Title';
import { FormHandles } from '@unform/core';

type Login = {
  email: string;
  password: string;
};

type FormOptions = {
  reset: () => void;
};

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const schema = Yup.object().shape({
    email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
  });

  const handleSubmit = async (data: Login, { reset }: FormOptions) => {
    try {
      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});

      const response = await api.get(`/users?email=${data.email}`);

      const user = response.data[0];

      if (data.password !== user.password) {
        formRef.current?.setFieldError('password', 'Senha incorreta');

        reset();
        return;
      }

      console.log('Autenticado');
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
      <Title>Entrar</Title>
      <Container>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input name="email" label="E-mail" />
          <Input name="password" label="Senha" type="password" />
          <GradientButton label="Entrar" onClick={() => {}} />
        </Form>
        <span>Esqueci minha senha</span>
        <hr />
        <span>Não possui uma conta?</span>
        <Link to="/register">Criar conta</Link>
      </Container>
    </>
  );
};

export default Login;
