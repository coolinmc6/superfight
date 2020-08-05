import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles'

import { titleCase } from './helpers'

const playerStyles = makeStyles((theme) => ({
  root: {

  },
  warrior: {
    fontSize: 26,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90%',
      display: 'inline-block',
    }
  },
  trait: {
    fontSize: 19,
  },
  right: {
    textAlign: 'right',
  }
}))

const Player = ({ warrior, traits, left }) => {
  const classes = playerStyles();
  return (warrior.length > 0 && traits.length > 0) ? (
    <div className={`${classes.root} ${left ? '' : classes.right}`}>
      <div className={classes.warrior}>{titleCase(warrior[0].value)}</div>
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
