import styled from 'styled-components';
import media from 'styled-media-query';

export default styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
  ${media.lessThan('medium')`
  padding: 0rem;`}
`;
