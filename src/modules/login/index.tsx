import {
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {  useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { signin } from '../../config/actions/user-actions';
import { useAppDispatch } from '../../config/store';
import Button from '../../shared-components/ui/button';
import Input from '../../shared-components/ui/input';
import MiniBox from '../../shared-components/ui/mini-box';
import {
  Buttons,
  Content,
  LogoContainer,
  TextDescription,
  Wrapper,
} from './styles';
const Login: React.FC = () => {
  const [login,setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const dispatch = useAppDispatch()
  
  const userSignin = useSelector<any>(state => state.userSignin);
  const { userInfo, error, loading }: any = userSignin;

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault()
    dispatch(signin(login,password))
  }

  useEffect(() => {
    if(userInfo) {
      window.location.href = 'http://localhost:3000/'    }
  },[userInfo])
  return (
    <Wrapper>
      <LogoContainer>
      </LogoContainer>
      <MiniBox title="Identifique-se">
        <Content>
          <TextDescription>
            Insira seu e-mail e senha para entrar no sistema.
          </TextDescription>
          <Input
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Usuário*"
            size="sm"
            value={login}
            isInvalid={error}
            isValid={userInfo}
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha*"
            type='password'
            size="sm"
            value={password}
            isInvalid={error}
            isValid={userInfo}
          />
            <TextDescription>{error && error}</TextDescription>
          <Buttons>
            <Button
              color="#00864c"
              icon={<FontAwesomeIcon icon={faArrowRight} />}
              isLoading={loading}
              size="sm"
              text="Entrar"
              onClick={e => handleSubmit(e)}
            />
          </Buttons>
        </Content>
      </MiniBox>
    </Wrapper>
  );
};

export default Login;
