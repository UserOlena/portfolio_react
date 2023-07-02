import React, { useState } from 'react';
import { Grid, } from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../portfolio.css'

export function Portfolio() {
  const [hover, setHover] = useState(false);

  function onHover(event, id) {
    event.preventDefault();
    setHover(id);
  };

  function onHoverOver(event) {
    event.preventDefault();
    setHover(false);
  }

  return (
    <Grid
      container spacing={2}
      alignItems='center'
      justifyContent='center'
      margin='1% auto'
      style={{
        width: '100%',
        padding: '2rem',
        backgroundColor: '#e8e8e8',
      }}
    >
      <Grid item
        xs={6}
        className={`gridItem ${hover === 1 && 'zIndex1'}`}
      >
        <img
          onMouseEnter={(e) => onHover(e, 1)}
          onMouseLeave={(e) => onHoverOver(e)}
          src='./wander_list.png'
          alt='Wander List'
          className='img'
          style={{
            marginLeft: '5rem',
          }}
        />
        {
          hover === 1 &&
          <h3
            onMouseEnter={(e) => onHover(e, 1)}
            className='hoverLinkH3ElLg hoverLinkH3El'
            style={{
              left: '9rem',
            }}
          >
            <a
              href='https://wanderlist.herokuapp.com/'
              target='_blank'
              className='hoverLinkAEl hoverLinkAEl'
            >
              Deployed App
            </a>
            <a
              href='https://github.com/UserOlena/WanderList'
              target='_blank'
              className='gitHubAEl'
            >
              <GitHubIcon fontSize='large' />
            </a>
          </h3>
        }
      </Grid>
      <Grid item
        xs={5}
        className='gridItem'
      >
        <img
          onMouseEnter={(e) => onHover(e, 2)}
          onMouseLeave={(e) => onHoverOver(e)}
          src='./global_weather_forecast.png'
          alt='Global Weather Forecast'
          className='img'
        />
        {
          hover === 2 &&
          <h3
            onMouseEnter={(e) => onHover(e, 2)}
            className='hoverLinkH3El hoverLinkH3ElMd'
          >
            <a
              href='https://userolena.github.io/global-weather-forecast/'
              target='_blank'
              className='hoverLinkAEl hoverLinkAEl'
            >
              Deployed App
            </a>
            <a
              href='https://github.com/UserOlena/global-weather-forecast'
              target='_blank'
              className='gitHubAEl'
            >
              <GitHubIcon fontSize='large' />
            </a>
          </h3>
        }
      </Grid>
      <Grid item
        xs={5}
        className='gridItem'
      >
        <img
          onMouseEnter={(e) => onHover(e, 3)}
          onMouseLeave={(e) => onHoverOver(e)}
          src='./portfolio.png'
          alt='Portfolio'
          className='img'
        />
        {
          hover === 3 &&
          <h3
            onMouseEnter={(e) => onHover(e, 3)}
            className='hoverLinkH3El hoverLinkH3ElMd'
          >
            <a
              href='https://userolena.github.io/portfolio/'
              target='_blank'
              className='hoverLinkAEl hoverLinkAEl'
            >
              Deployed App
            </a>
            <a
              href='https://github.com/UserOlena/portfolio'
              target='_blank'
              className='gitHubAEl'
            >
              <GitHubIcon fontSize='large' />
            </a>
          </h3>
        }
      </Grid>
      <Grid item
        xs={5}
        className='gridItem'
        style={{
          marginRight: '4rem',
        }}
      >
        <img
          onMouseEnter={(e) => onHover(e, 4)}
          onMouseLeave={(e) => onHoverOver(e)}
          src='./coding_quiz.png'
          alt='Coding quiz'
          className='img'
        />
        {
          hover === 4 &&
          <h3
            onMouseEnter={(e) => onHover(e, 4)}
            className='hoverLinkH3El hoverLinkH3ElMd'
          >
            <a
              href='https://userolena.github.io/coding_quiz/'
              target='_blank'
              className='hoverLinkAEl hoverLinkAEl'
            >
              Deployed App
            </a>
            <a
              href='https://github.com/UserOlena/coding_quiz'
              target='_blank'
              className='gitHubAEl'
            >
              <GitHubIcon fontSize='large' />
            </a>
          </h3>
        }
      </Grid>
      <Grid item
        xs={4}
        className='gridItem'
        style={{
          marginLeft: '4rem',
        }}
      >
        <img
          onMouseEnter={(e) => onHover(e, 5)}
          onMouseLeave={(e) => onHoverOver(e)}
          src='./password_generator.png'
          alt='Wander List'
          className='img'
        />
        {
          hover === 5 &&
          <h3
            onMouseEnter={(e) => onHover(e, 5)}
            className='hoverLinkH3El hoverLinkH3ElSm'
          >
            <a
              href='https://userolena.github.io/password-generator/'
              target='_blank'
              className='hoverLinkAEl hoverLinkAEl'
            >
              Deployed App
            </a>
            <a
              href='https://github.com/UserOlena/password-generator'
              target='_blank'
              className='gitHubAEl'
            >
              <GitHubIcon fontSize='medium' />
            </a>
          </h3>
        }
      </Grid>
      <Grid item
        xs={6}
        className='gridItem'
      >
        <img
          onMouseEnter={(e) => onHover(e, 6)}
          onMouseLeave={(e) => onHoverOver(e)}
          src='./portfolio_react.png'
          alt='Portfolio React.js'
          className='img'
        />
        {
          hover === 6 &&
          <h3
            onMouseEnter={(e) => onHover(e, 6)}
            className='hoverLinkH3ElLg hoverLinkH3El'
          >
            <a
              href=''
              target='_blank'
              className='hoverLinkAEl hoverLinkAEl'
            >
              Deployed App
            </a>
            <a
              href='https://github.com/UserOlena/portfolio_react'
              target='_blank'
              className='gitHubAEl'
            >
              <GitHubIcon fontSize='large' />
            </a>
          </h3>
        }
      </Grid>
    </Grid>
  );
}

export default Portfolio;