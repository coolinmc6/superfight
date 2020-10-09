import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import vs1 from './assets/images/VS.png'

const vsStyles = makeStyles((theme) => ({
  root: {
    padding: '15px 10px',
    position: 'absolute',
    boxSizing: 'border-box',
    textAlign: 'center',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '& img': {
      maxWidth: 200,
    },

    [theme.breakpoints.down('sm')]: {
      top: '35%',
      '& img': {
        maxWidth: 160,
      },
    },
  },
}));

const Versus = () => {
  const classes = vsStyles();

  return (
    <div className={classes.root}>
      <img src={vs1} />
    </div>
  )
}

export default Versus;