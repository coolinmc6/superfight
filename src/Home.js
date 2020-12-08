import React, { useState, useEffect } from 'react';


// Helpers
import { getItems, titleCase } from './helpers';
import { warriors, traits, modifications, settings } from './superfight';
import CryptoJS from 'crypto-js'
for(let i = 0; i < 10; i++) {
  var hash = CryptoJS.SHA256(JSON.stringify([1,10,50]));
  console.log(hash.toString(CryptoJS.enc.Base64))
}

console.log(warriors.length, traits.length)

// Components
import Player from './Player';
import Versus from './Versus';
import Settings from './Settings';

// Images
import bcg from './assets/images/background.png';
import './assets/css/style.scss'

// Material UI
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';

const homeStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: `url(${bcg})`,
    height: window.innerHeight,
    width: '100vw',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'relative',
    fontFamily: 'Roboto',
    overflow: 'hidden',
  },
  vs: {
    margin: 20,
    fontSize: 35,
    textAlign: 'center',
  },
  buttonBar: {
    position: 'fixed',
    top: `${window.innerHeight - 45}px`,
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
  const [mod, setMod] = useState(null);
  const [setting, setSetting] = useState(null);

  const classes = homeStyles();

  const shuffle = () => {
    setWarrior1(getItems({ array: warriors, count: 1 }))
    setWarrior2(getItems({ array: warriors, count: 1 }))
    setTraits1(getItems({ array: traits, count: 3 }))
    setTraits2(getItems({ array: traits, count: 3 }))
    

    let m1 = getItems({ array: modifications, count: 1})[0].value
    let s1 = getItems({ array: settings, count: 1 })[0].value
    setMod(m1)
    setSetting(s1);
  }

  useEffect(() => {
    shuffle();
  }, [])

  return (
    <div className={classes.main}>
      <Player warrior={warrior1} traits={traits1} left/>
      <Versus />
      <Player warrior={warrior2} traits={traits2} />
      <Settings mod={titleCase(mod)} setting={titleCase(setting)} />
      <div className={classes.buttonBar}>
        <Button variant="contained" color="primary" onClick={() => shuffle()}>Shuffle</Button>
      </div>
      
    </div>
  )
}

export default Home;