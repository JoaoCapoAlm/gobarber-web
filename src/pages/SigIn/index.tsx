import React from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Background, Container, Content } from './styles';

const SigIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Logo da GoBarber" />

      <form>
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
      </form>

      <a href="#newPage">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SigIn;
