import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Logo} from '../../components';
import Styles from './Navbar.module.css'

export default function ButtonAppBar() {


  return (
    <div>
      <AppBar position="absolute" color="primary" className={Styles.bar}>
        <Toolbar className={Styles.bar}>
          <IconButton className={Styles.home} edge="start" color="inherit" aria-label="menu">
          Home
          </IconButton>

          <Button  className={Styles.login} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
