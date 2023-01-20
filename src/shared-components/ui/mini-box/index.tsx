import {
  ButtonContainer,
  Container,
  LeftRetangle,
  Title,
  TopContainer,
  Wrapper,
  WrapperBig,
} from './styles';

const MiniBox: React.FC<IMiniBoxProps> = ({
  children,
  size,
  title,
  topComponent,
}) => {
  return (
    <>
      {size !== 'big' ? (
        <Wrapper data-testid="MiniboxContainer">
          <TopContainer>
            <Title>
              <LeftRetangle />
              {title}
            </Title>
            <ButtonContainer>{topComponent}</ButtonContainer>
          </TopContainer>
          <Container>{children}</Container>
        </Wrapper>
      ) : (
        <WrapperBig data-testid="MiniboxContainer">
          <TopContainer>
            <Title>
              <LeftRetangle />
              {title}
            </Title>
            <ButtonContainer>{topComponent}</ButtonContainer>
          </TopContainer>
          <Container>{children}</Container>
        </WrapperBig>
      )}
    </>
  );
};

export default MiniBox;
