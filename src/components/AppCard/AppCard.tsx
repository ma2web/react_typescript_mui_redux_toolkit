import { Card } from '@mui/material';
import { ReactNode } from 'react';
import { useStyles } from './AppCard.styles';

export interface Props {
  children: ReactNode;
  padding?: number;
  variant?: 'elevation' | 'outlined' | undefined;
}
const AppCard = ({ children, variant, padding }: Props) => {
  const { classes } = useStyles({ padding });
  return (
    <Card variant={variant ?? 'outlined'}>
      <div className={classes.root}>{children}</div>
    </Card>
  );
};

export default AppCard;
