import React, { useState }  from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export function Footer() {
    const [value, setValue] = useState(0);

    return (
        <Box>
            <BottomNavigation
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    //background: 'linear-gradient(90deg, hsla(154, 100%, 76%, 1) 0%, hsla(234, 100%, 83%, 1) 50%, hsla(288, 100%, 81%, 1) 100%)',
                    //background: 'linear-gradient(90deg, hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%)',
                    background: 'linear-gradient(90deg, hsla(211, 96%, 62%, 1) 0%, hsla(295, 94%, 76%, 1) 100%)',
                }}
                //showLabels
            >
                <BottomNavigationAction icon={<GitHubIcon fontSize='large' />} />
                <BottomNavigationAction icon={<LinkedInIcon fontSize='large' />} />
                <BottomNavigationAction icon={<TwitterIcon fontSize='large' />} />
            </BottomNavigation>
        </Box>
    );
}

export default Footer;