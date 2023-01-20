import styled from 'styled-components';
import media from 'styled-media-query';

const Animations = `
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}`;

export const Wrapper = styled.div`
  ${Animations}
  width: 97.5%;
  max-height: 100%;
  justify-self: center;
  margin-top: 1rem;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  z-index: 1;
  background-color: #f5f5f5;
  border-radius: 0.8rem;
  box-shadow: rgb(0 0 0 / 15%) 0px 8px 32px 0px;
  animation: fadeIn 0.5s;
  color: #151515;
  ${media.lessThan('huge')`
  padding: 1rem 0 0.5rem 0;
  `}
  ${media.lessThan('medium')`
  width: 100%;
  `}
`;
export const WrapperBig = styled.div`
  width: 100%;
  max-height: 100%;
  justify-self: center;
  grid-column: 1/4;
  margin-top: 1rem;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  z-index: 1;
  background-color: #f5f5f5;
  border-radius: 0.8rem;
  box-shadow: rgb(0 0 0 / 15%) 0px 8px 32px 0px;
  color: #151515;
  ${media.lessThan('medium')`
  grid-column: auto;
  padding: 1rem 0 0.5rem 0;
  `}
`;
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 1rem;
  gap: 1rem;
  & > button {
    font-size: 1rem;
  }
`;
export const Title = styled.div`
  max-height: 100%;
  display: flex;
  align-items: flex-start;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 23px;
`;
export const LeftRetangle = styled.div`
  width: 0.32rem;
  height: 1.3rem;
  margin-right: 0.35rem;
  background-color: #004e75;
`;
export const ButtonContainer = styled.div``;
export const Container = styled.div`
  position: relative;
`;
export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  z-index: 3;
  background-color: #f5f5f5;
  border-radius: 0.8rem;
  box-shadow: rgb(0 0 0 / 37%) 0px 8px 32px 0px;
  font-size: 0.9rem;
  color: #151515;
`;
export const MenuOption = styled.span``;
