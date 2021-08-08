import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { IconButton, makeStyles } from '@material-ui/core'
import MainTheme from '../MainTheme/MainTheme'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Navbar.scss'


const useStyles = makeStyles(MainTheme => ({
    offset: MainTheme.mixins.toolbar
}))

const Navbar = () => {
    const classes = useStyles()
    return (
        <header>
            <AppBar position="fixed" color="primary">
                <Toolbar className="toolbar">
                    <nav className="nav">
                        <Typography variant="h4">
                            Book Bucket
                        </Typography>
                        <a href="#">Home</a>
                        <a href="#">Content</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </nav>
                    <IconButton aria-label="" color="inherit" /* onClick={} */>
                        <ShoppingCartIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </header>
    )
}

export default Navbar