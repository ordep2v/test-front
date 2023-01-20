import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  padding: 0 1.3rem;
  top: 0;
  z-index: 97;
  border-bottom-left-radius: 0.7rem;
  border-bottom-right-radius: 0.7rem;
  box-shadow: 2px 1px 10px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  background: #f9f9f940;
  color: #f2f2f2;
`;

