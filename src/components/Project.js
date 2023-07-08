import { React, useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useMediaQuery } from '@mui/material';
import '../assets/css/portfolio.css';

const useStyles = makeStyles((theme) => ({
    pushLeft: {
        marginRight: '4rem',
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
        },
    },

    pushRight: {
        marginLeft: '4rem',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },

    overlap: {
        marginLeft: '16%',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },

    projTitle: {
        textShadow: '1px 1px 2px #88039c',
        [theme.breakpoints.down('sm')]: {
            textShadow: '1px 1px 1px black',
            fontSize: 'calc(15px + (80 - 15) * ((100vw - 300px) / (1600 - 300)))',
        },
    },

}));

export function Project(props) {
    const classes = useStyles();
    const matchesMax959 = useMediaQuery('(max-width:959px)');
    const matchesMin960 = useMediaQuery('(min-width:960px)');

    const [hover, setHover] = useState(-1);

    function onHover(event) {

        // prevents changing state on hover if window size is smaller then 960px
        if (matchesMin960) {
            const value = event.target.getAttribute('value')
            setHover(value);
        };
    };

    function onHoverOver() {
        setHover(-1);
    };

    return (
        <Grid
            item
            md={
                props.imgSize === 'lg' && 6 ||
                props.imgSize === 'md' && 5 ||
                props.imgSize === 'sm' && 4
            }
            className={`
                gridItem 
                ${hover == props.value && props.isOverlap && 'zIndex1'} 
                ${props.isPushLeft ? classes.pushLeft : ''}
                ${props.imgSize === 'sm' ? classes.pushRight : ''}
            `}
            style={{
                marginTop: matchesMax959 ? '3%' : ''
            }}
        >
            {
                matchesMax959 &&
                <>
                    <h3
                        className='hoverTitle hoverTitleLg'
                    >
                        <a
                            onMouseEnter={(e) => onHover(e)}
                            href={props.deployedAppUrl}
                            value={props.value}
                            target='_blank'
                            className={`
                                hoverLink 
                                linkIcon 
                                hoverLinkLg
                                linkIconLg 
                                ${classes.projTitle}`
                            }
                        >
                            {props.projectTitle}
                        </a>
                    </h3>
                    <a
                        href={props.gitHubUrl}
                        target='_blank'
                        className='gitHubLink'
                    >
                        <GitHubIcon fontSize='large' />
                    </a>
                </>
            }
            <img
                onMouseEnter={(e) => onHover(e)}
                onMouseLeave={(e) => onHoverOver(e)}
                src={props.imgSrc}
                alt={props.imgAlt}
                className={`img ${props.isOverlap ? classes.overlap : ''}`}
                value={props.value}
            />
            {
                matchesMin960 && hover == props.value &&
                <div
                    onMouseEnter={(e) => onHover(e)}
                    onMouseLeave={(e) => onHoverOver(e)}
                    className={`coverUpDiv ${props.isOverlap ? classes.overlap : ''}`}
                    value={props.value}
                >
                    <h3
                        className={`
                            hoverTitle 
                            ${props.imgSize === 'lg' && 'hoverTitleLg' ||
                            props.imgSize === 'md' && 'hoverTitleMd' ||
                            props.imgSize === 'sm' && 'hoverTitleSm'
                            }
                        `}
                    >
                        <a
                            onMouseEnter={(e) => onHover(e)}
                            href={props.deployedAppUrl}
                            value={props.value}
                            target='_blank'
                            className={`
                                hoverLink 
                                linkIcon 
                                ${props.imgSize === 'lg' && 'hoverLinkLg linkIconLg' ||
                                props.imgSize === 'md' && 'hoverLinkMd linkIconMd' ||
                                props.imgSize === 'sm' && 'hoverLinkSm linkIconSm'
                                }
                                ${classes.projTitle}
                            `}
                        >
                            {props.projectTitle}
                        </a>
                    </h3>
                    <a
                        href={props.gitHubUrl}
                        target='_blank'
                        className='gitHubLink'
                    >
                        <GitHubIcon fontSize='large' />
                    </a>
                </div>
            }
        </Grid>
    );
}

export default Project;