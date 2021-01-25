import React from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Background, Container, Content } from './styles';

const SigIn: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data); // eslint-disable-line no-console
  }
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo da GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            type="password"
            name="password"
            icon={FiLock}
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="#forgot">Esqueci minha conta</a>
        </Form>

        <Link to="/signup">
          <FiLogIn />
          Criar conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default SigIn;