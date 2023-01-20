import { Container as ContainerBox } from './styles';

interface IContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<IContainerProps> = ({ children }) => {
  return <ContainerBox data-testid="ContainerBox">{children}</ContainerBox>;
};

export default Container;
