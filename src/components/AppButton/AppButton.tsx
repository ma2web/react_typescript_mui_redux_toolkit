import { LoadingButton } from '@mui/lab';
import { Button } from '@mui/material';
import { ReactNode } from 'react';

export interface Props {
  children: ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'secondary' | 'success' | 'error' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const AppButton = ({ ...props }: Props) => {
  if (props?.loading) {
    return <LoadingButton {...props}>{props?.children}</LoadingButton>;
  }
  return (
    <Button variant={props?.variant ?? 'contained'} {...props}>
      {props?.children}
    </Button>
  );
};

export default AppButton;
