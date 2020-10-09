import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const settingStyles = makeStyles((theme) => ({
  modRoot: {
    position: 'absolute',
    top: '70%',
    transform: 'translateY(-30%)',
    width: '100%',
    left: 0,
    [theme.breakpoints.down('sm')]: {
      top: '75%',
      padding: '0 20px',
      boxSizing: 'border-box',
    }
  },
  setting: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: `'Luckiest Guy', cursive`,
    color: '#df2608',
    [theme.breakpoints.up('md')]: {
      fontSize: 35
    }
  },
  mod: {
    fontSize: 18,
    textAlign: 'center',
    color: '#444'
  },
}))

const Settings = ({ setting, mod }) => {
  const classes = settingStyles();
  return (
    <div className={classes.modRoot}>
      <div className={classes.setting}>{setting}</div>
      <div className={classes.mod}>{mod}</div>
    </div>
  )
}

export default Settings;