import { Typography } from '@mui/material';
import { ReactNode } from 'react';

export interface Props {
  children: ReactNode;
  variant?:
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'overline'
    | 'inherit'
    | undefined;
}

const AppTypography = ({ ...props }: Props) => {
  return <Typography {...props}>{props?.children}</Typography>;
};

export default AppTypography;
