import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { User, UserCreators } from '../../../store/ducks/user';

import Input from '../../../components/Form/Input';
import Title from '../../../components/Title';

import * as S from './styles';

const Register: React.FC = () => {
  const history = useHistory();

  const dispatch = useDispatch();

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

      dispatch(UserCreators.registerFirstStep(data));

      history.push('/register/second-step');
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
      <Title>Criar conta</Title>
      <S.Container>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input label="Qual o seu nome?" name="name" />
          <Input label="E seu e-mail?" name="email" />
          <Input label="Crie uma senha" name="password" type="password" />
          <S.SubmitButton label="Avançar" type="submit" />
        </Form>
        <hr />
        <S.Footer>
          <div>Já possui uma conta?</div>
          <S.LoginButton
            label="Entrar"
            onClick={() => history.push('/login')}
          />
        </S.Footer>
      </S.Container>
    </>
  );
};

export default Register;
