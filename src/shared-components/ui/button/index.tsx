import { Button as ButtonChakra } from '@chakra-ui/react';

const Button: React.FC<IButtonProps> = ({
  color,
  disabled,
  icon,
  isLoading,
  text,
  size,
  onClick,
}) => {
  return (
    <ButtonChakra
      color={color}
      colorScheme="blackAlpha"
      _hover={{ backgroundColor: `${color}10` }}
      data-testid="ButtonContainer"
      isLoading={isLoading}
      loadingText={text}
      leftIcon={icon}
      variant="outline"
      size={size}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </ButtonChakra>
  );
};

export default Button;
