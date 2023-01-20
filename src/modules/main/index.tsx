import { CircularProgress } from '@chakra-ui/react';
import React, {  useEffect, } from 'react';
import { useSelector } from 'react-redux';
import { get } from '../../config/actions/friend-actions';
import { useAppDispatch } from '../../config/store';
import Card from '../../shared-components/ui/card';
import MiniBox from '../../shared-components/ui/mini-box';
import {
  Content,
  Wrapper,
} from './styles';

const Main: React.FC = () => {
  const friendList = useSelector<any>(state => state.friendList);
  const { success, error, loading }: any = friendList;
  
  const dispatch = useAppDispatch()
  
  useEffect(() => {
  dispatch(get())
  },[])
  return (
    <Wrapper>
      {loading && <CircularProgress value={30} size='120px' />}
      {success && 
      <MiniBox title="Listagem de amigos" size='big'>
        <Content>
        {success && success.map((x: IFriendProps, i: number) => (
          <React.Fragment key={i}>
            <Card body={x} />
          </React.Fragment>
        ))}
        </Content>
      </MiniBox>}
      
    </Wrapper>
  );
};

export default Main;
