import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  max-width: 680px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  padding: var(--chakra-space-4);
  row-gap: 1rem;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
  row-gap: 1rem;
  padding: 1rem 1rem 1rem 1rem;
`;

export const Buttons = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const FormHeader = styled.div`
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 0.8rem;
  gap: 5px;
  font-size: 0.95rem;
  color: #151515;
  ${media.lessThan('huge')`
  padding: 0;
  `}
`;

export const TextDescription = styled.span`
  width: 100%;
  font-size: 12px;
  text-align: left;
`;
