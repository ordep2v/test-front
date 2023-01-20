import Container from './styles';

interface ILabelProps {
  text: string;
}
const Label: React.FC<ILabelProps> = ({ text }) => {
  return <Container data-testid="LabelContainer">{text}</Container>;
};

export default Label;
