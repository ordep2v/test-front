import Container from './styles';

interface IPageBoxProps {
  children: React.ReactNode;
}

const PageBox: React.FC<IPageBoxProps> = ({ children }) => {
  return <Container data-testid="PageBoxContainer">{children}</Container>;
};

export default PageBox;
