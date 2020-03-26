import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { ApplicationState } from '../../store';
import { Login as TLogin, UserCreators } from '../../store/ducks/user';

import Input from '../../components/Form/Input';
import Title from '../../components/Title';

import * as S from './styles';

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

    if (user.signed) {
      history.push('/schedule');
    }
  }, [user]);

  const schema = Yup.object().shape({
    email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
  });

  const handleSubmit = async (data: TLogin) => {
    try {
      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});

      dispatch(UserCreators.loginRequest(data));
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
      <S.Container>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input name="email" label="E-mail" />
          <Input name="password" label="Senha" type="password" />
          <S.SubmitButton label="Entrar" type="submit" />
        </Form>
        <S.ForgotPassword>Esqueci minha senha</S.ForgotPassword>
        <hr />
        <S.Footer>
          <div>Não possui uma conta?</div>
          <S.RegisterButton
            label="Criar conta"
            onClick={() => history.push('/register/first-step')}
          />
        </S.Footer>
      </S.Container>
    </>
  );
};

export default Login;
