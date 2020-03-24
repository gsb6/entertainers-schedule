import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { ApplicationState } from '../../store';
import { Auth, LoginCreators } from '../../store/ducks/user';

import GradientButton from '../../components/GradientButton';
import Input from '../../components/Form/Input';
import Title from '../../components/Title';

import { Container } from './styles';

type FormOptions = {
  reset: () => void;
};

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const dispatch = useDispatch();

  const history = useHistory();

  const { user } = useSelector((state: ApplicationState) => state);

  useEffect(() => {
    if (user.error) {
      formRef.current?.setFieldError('email', user.error);
      return;
    }

    if (user.data) {
      history.push('/register');
    }
  }, [user]);

  const schema = Yup.object().shape({
    email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
  });

  const handleSubmit = async (data: Auth, { reset }: FormOptions) => {
    try {
      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});

      dispatch(LoginCreators.request(data));

      reset();
    } catch (e) {
      if (e instanceof Yup.ValidationError) {
        const errorMessages: { [key: string]: string } = {};

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
          <GradientButton label="Entrar" type="submit" />
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
