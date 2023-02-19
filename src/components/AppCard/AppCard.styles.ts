import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles<{ padding?: number }>()(
  (theme, { padding }) => ({
    root: {
      backgroundColor: theme.palette.success.light,
      padding,
    },
  })
);
