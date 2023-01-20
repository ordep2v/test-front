interface IButtonProps {
  color: string;
  disabled?: boolean;
  isLoading?: boolean;
  text: string;
  icon: React.ReactElement;
  size: string;
  onClick: (e: any) => void;
}

interface IMiniBoxProps {
  size?: string;
  children: React.ReactNode;
  title: string;
  topComponent?: React.ReactNode;
}

interface IDialogProps {
  open: boolean;
  title: string;
  description: string;
  isLoading: boolean;
  onSubmit: (x: any) => void;
  onClose: (x?: any) => void;
}

interface IInputProps {
  defaultValue?: string | number;
  disabled?: boolean;
  value?: string | any;
  padding?: string;
  minusIcon?: boolean;
  isInvalid: boolean;
  isValid: boolean;
  password?: boolean;
  placeholder: string;
  size: string;
  type?: string;
  width?: string;
  rightButtonClick?: (e: any) => void;
  onBlur?: (x?: any) => void;
  onChange?: (x: any) => void;
}

interface ICardProps {
  body: IFriendProps
}

interface IUserProps {
  _id?: string;
  isAdmin: number;
  managementArea?: { id: string; name: string };
  name: string;
  password: string;
  confirmPassword: string;
  email?: string;
  registrationNumber: string;
  role: string;
  workspace?: { id: string; name: string };
  token?: string;
}

interface IFriendProps {

  id: 1,
    name: string
    username: string
    email: string,
    address: {
      street: string,
      suite:  string,
      city:  string,
      zipcode:  string,
      geo: {
        lat: number,
        lng: number,
      }
    },
    phone: number,
    website:  string,
    company: {
      name: string,
      catchPhrase:  string,
      bs:  string,
    }
}