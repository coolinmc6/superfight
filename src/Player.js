import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles'

import { titleCase } from './helpers'

const playerStyles = makeStyles((theme) => ({
  playerRoot: {
    color: '#000',
    position: 'absolute',
    top: '40%',
    transform: 'translateY(-50%)',
    width: 'calc(100vw/2 - 100px)',
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      transform: 'unset',
      top: '2%',
      width: '100%',
    }
  },
  leftRoot: {
    '& > div': {
      paddingLeft: 20,
      [theme.breakpoints.down("sm")]: {
        // backgroundColor: '#0984e3',
      }
    }
  },
  rightRoot: {
    textAlign: 'right',
    right: 0,
    paddingRight: 20,
    [theme.breakpoints.down('sm')]: {
      transform: 'unset',
      top: '47%',
    }
  },
  warrior: {
    fontSize: 46,
    padding: 5,
    position: 'relative',
    marginBottom: 30,
    '&::before': {
      content: '""',
      position: 'absolute',
      height: 10,
      borderRadius: 5,
      width: 60,
      backgroundColor: '#333',
      bottom: -17,
      left: 20,
    },
    [theme.breakpoints.down('sm')]: {
      padding: 2,
      fontSize: 34,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 26,
      marginBottom: 24,
      '&::before': {
        height: 7,
        borderRadius: 5,
        bottom: -10,
      }
    },
  },
  warriorRight: {
    
    '&::before': {
      left: 'unset',
      right: 0,
    },
  },
  traitParent: {

  },
  trait: {
    fontSize: 19,
    padding: 2,
    [theme.breakpoints.down('sm')]: {
      fontSize: 17,
      display: 'block',
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 15,
    }
  },
}))

const Player = ({ warrior, traits, left }) => {
  const classes = playerStyles();
  return (warrior.length > 0 && traits.length > 0) ? (
    <div className={`${classes.playerRoot} ${left ? classes.leftRoot : classes.rightRoot}`}>
      <div className={`${classes.warrior} ${left ? '' : classes.warriorRight}`}>
        {titleCase(warrior[0].value)}
      </div>
      
      {traits && traits.map((t, i) => {
        return <div className={classes.trait} key={i}>{t.value}</div>
      })}
    </div>
  ) : (
    <div>Loading...</div>
  )
}

Player.propTypes = {
  warrior: PropTypes.array.isRequired,
  traits: PropTypes.array.isRequired,
}

Player.defaultProps = {
  warrior: [],
  traits: []
}


export default Player;
