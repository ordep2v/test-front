
import {
  Input as InputChakra,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { styles } from './styles';

const Input: React.FC<IInputProps> = ({
  defaultValue,
  isInvalid,
  isValid,
  padding,
  placeholder,
  type,
  value,
  width,
  onChange,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (isInvalid) {
      setError(true);
    }
    if (isValid) {
      setError(false);
    }
  }, [isInvalid]);
  return (
          <InputChakra
            background={styles.backgroundInput}
            borderRadius={styles.borderRadius}
            color={styles.primaryColor}
            defaultValue={defaultValue}
            data-testid="InputContainer"
            isInvalid={error}
            placeholder={placeholder}
            _placeholder={{ color: styles.primaryColor }}
            _focus={{
              color: styles.focusColor,
              background: styles.background,
              borderColor: styles.borderColor,
            }}
            onChange={onChange}
            padding={padding}
            paddingLeft={type === 'time' ? '65%' : ''}
            size={'sm'}
            type={type || 'text'}
            variant="filled"
            value={value}
            width={width}
          />    
  );
};

export default Input;
