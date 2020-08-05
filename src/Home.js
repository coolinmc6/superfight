import React, { useState, useEffect } from 'react';


// Helpers
import { getItems } from './helpers';
import { warriors, traits, modifications, settings } from './superfight';

// Components
import Player from './Player';

// Material UI
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';

const homeStyles = makeStyles((theme) => ({
  vs: {
    margin: 20,
    fontSize: 35,
    textAlign: 'center',
  },
  buttonBar: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    textAlign: 'center',
  }
}))

const Home = () => {
  const [warrior1, setWarrior1] = useState([])
  const [warrior2, setWarrior2] = useState([])
  const [traits1, setTraits1] = useState([])
  const [traits2, setTraits2] = useState([])

  const classes = homeStyles();

  const shuffle = () => {
    setWarrior1(getItems({ array: warriors, count: 1 }))
    setWarrior2(getItems({ array: warriors, count: 1 }))
    setTraits1(getItems({ array: traits, count: 2 }))
    setTraits2(getItems({ array: traits, count: 2 }))
  }

  useEffect(() => {
    shuffle();
  }, [])

  return (
    <div>
      <Player warrior={warrior1} traits={traits1} left/>
      <div className={classes.vs}>VS</div>
      <Player warrior={warrior2} traits={traits2} />
      <div className={classes.buttonBar}>
        <Button variant="contained" color="primary" onClick={() => shuffle()}>Shuffle</Button>
      </div>
      
    </div>
  )
}

export default Home;