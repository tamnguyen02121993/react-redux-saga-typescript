import { Box, makeStyles, Paper, Typography } from '@material-ui/core';
import * as React from 'react';

export interface StatisticItemProps {
  icon: React.ReactElement;
  label: string;
  value: string | number;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1, 2),
    border: `1px solid ${theme.palette.divider}`,
  },
  label: {
    textTransform: 'uppercase',
  },
}));

export function StatisticItem(props: StatisticItemProps) {
  const { icon, label, value } = props;
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Box>{icon}</Box>
      <Box>
        <Typography variant="h5" align="right">
          {value}
        </Typography>
        <Typography variant="caption" className={classes.label}>
          {label}
        </Typography>
      </Box>
    </Paper>
  );
}
