import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const useStyle = makeStyles((theme) => ({
    container: {
        background: 'linear-gradient(90deg, hsla(226, 100%, 63%, 1) 0%, hsla(292, 100%, 68%, 1) 30%, hsla(292, 100%, 68%, 1) 100%)',
        boxShadow: '-5px -15px 5px -10px rgba(0, 0, 0, 0.2)',
    },

    changeIconColorOnHover: {
        '&:hover': {
            color: 'black',
        }
    },
}));

export function Footer() {
    const classes = useStyle();

    return (
        <footer>
            <BottomNavigation
                className={classes.container}
            >
                <BottomNavigationAction 
                    icon={<GitHubIcon fontSize='large' />}
                    className={classes.changeIconColorOnHover}
                    target='_blank'
                    href='https://github.com/UserOlena'
                />
                <BottomNavigationAction 
                    icon={<LinkedInIcon fontSize='large' />} 
                    className={classes.changeIconColorOnHover}
                    target='_blank'
                    href='https://www.linkedin.com/in/olena-pashchenko-224b8027b/'
                />
                <BottomNavigationAction 
                    icon={<TwitterIcon fontSize='large' />}
                    className={classes.changeIconColorOnHover}
                    target='_blank'
                    href='https://twitter.com/i/flow/login'
                />
            </BottomNavigation>
        </footer>
    );
}

export default Footer;