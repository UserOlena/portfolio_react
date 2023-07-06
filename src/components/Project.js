import React, { useState } from 'react';
import { Grid, makeStyles} from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/css/portfolio.css';

const useStyles = makeStyles((theme) => ({
    mr: {
      marginRight: '4rem',
    },
    ml: {
      marginLeft: '4rem',
    },
}));

export function Project(props) {
    const classes = useStyles();

    const [hover, setHover] = useState(-1);

    function onHover(event) {
        event.preventDefault();
        console.log(event.target)
        const value = event.target.getAttribute('value')
        console.log('onHover :: setting hover to ' + value)
        setHover(value);
        console.log('onHover :: hover is ' + hover)
    };

    function onHoverOver(event) {
        event.preventDefault();
        setHover(-1);
        console.log('onHoverOver :: hover is ' + hover)
    }
    console.log(':: main hover is ' + hover)

    return (
        <Grid 
            item
            xs={
                props.imgSize === 'lg' && 6 ||
                props.imgSize === 'md' && 5 ||
                props.imgSize === 'sm' && 4
            }
            className={`
                gridItem 
                ${hover == props.value && props.isOverlap && 'zIndex1'} 
                ${props.isPushLeft ? classes.mr : ''}
                ${props.imgSize === 'sm' ? classes.ml : ''}
            `}
        >
            <img
                onMouseEnter={(e) => onHover(e)}
                src={props.imgSrc}
                alt={props.imgAlt}
                className={`img ${props.isOverlap ? 'overlap' : ''}`}
                value={props.value}
            />
            {
                hover == props.value &&
                <div
                    onMouseEnter={(e) => onHover(e)}
                    onMouseLeave={(e) => onHoverOver(e)}
                    className={`coverUpDiv ${props.isOverlap ? 'overlap' : ''}`}
                    value={props.value}
                >
                    <h3
                        className={`
                            hoverTitle 
                            ${
                                props.imgSize === 'lg' && 'hoverTitleLg' ||
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
                                ${
                                    props.imgSize === 'lg' && 'hoverLinkLg linkIconLg' ||
                                    props.imgSize === 'md' && 'hoverLinkMd linkIconMd' ||
                                    props.imgSize === 'sm' && 'hoverLinkSm linkIconSm'
                                }
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
                        <GitHubIcon
                            fontSize={props.isGitHubIconSizeLarge ? 'large' : 'medium'}
                        />
                    </a>
                </div>
            }
        </Grid>
    )
}

export default Project;