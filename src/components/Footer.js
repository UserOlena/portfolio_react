import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const useStyle = makeStyles((theme) => ({
    changeIconColorOnHover: {
        '&:hover': {
            color: 'black',
        }
    },
}));

export function Footer() {
    const [value, setValue] = useState(0)

    const classes = useStyle();

    return (
        <footer>
            <BottomNavigation
                sx={{
                    //background: 'linear-gradient(90deg, hsla(154, 100%, 76%, 1) 0%, hsla(234, 100%, 83%, 1) 50%, hsla(288, 100%, 81%, 1) 100%)',
                    //background: 'linear-gradient(90deg, hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%)',
                    //background: 'linear-gradient(90deg, hsla(211, 96%, 62%, 1) 0%, hsla(295, 94%, 76%, 1) 100%)',
                    background: 'linear-gradient(90deg, hsla(226, 100%, 63%, 1) 0%, hsla(292, 100%, 68%, 1) 30%, hsla(292, 100%, 68%, 1) 100%)',
                    // backgroundColor: '#ffffff',
                    // backgroundImage: 'url(./navbar_bg_1.svg)',
                }}
                //showLabels
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