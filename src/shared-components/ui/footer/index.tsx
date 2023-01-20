import { Container, Nav, ShortcutContainer } from './styles';

const Footer: React.FC = () => {
  return (
    <Container data-testid="FooterContainer">
      <Nav data-testid="Nav">
        2023, developed by Pedro Cunha™
      </Nav>
    </Container>
  );
};

export default Footer;
