import React, { useState } from 'react';
import { Grid, } from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../../assets/css/portfolio.css';
import { 
  wanderList,
  globalWeatherForecat,
  portfolio,
  codingQuiz,
  passwordGenerator,
  portfolioReact,
} from '../../assets/img';

export function Portfolio() {
  const [hover, setHover] = useState(false);

  function onHover(event, id) {
    console.log(event.target)
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
          src={wanderList}
          alt='Wander List'
          className='img'
          style={{
            marginLeft: '5rem',
          }}
        />
        {
          hover === 1 &&
          <div
            onMouseEnter={(e) => onHover(e, 1)}
            onMouseLeave={(e) => onHoverOver(e)}
            className='coverUpDiv'
            style={{
              marginLeft: '5rem',
            }}
          >
            <h3
              onMouseEnter={(e) => onHover(e, 1)}
              className='hoverTitle hoverTitleLg'
            >
              <a
                href='https://wanderlist.herokuapp.com/'
                target='_blank'
                className='hoverLink hoverLinkLg linkIcon linkIconLg'
              >
                WanderList
              </a>
            </h3>
            <a
              href='https://github.com/UserOlena/WanderList'
              target='_blank'
              className='gitHubLink'
            >
              <GitHubIcon fontSize='large' />
            </a>
          </div>
        }
      </Grid>
      <Grid item
        xs={5}
        className='gridItem'
      >
        <img
          onMouseEnter={(e) => onHover(e, 2)}
          src={globalWeatherForecat}
          alt='Global Weather Forecast'
          className='img'
        />
        {
          hover === 2 &&
          <div
            onMouseEnter={(e) => onHover(e, 2)}
            onMouseLeave={(e) => onHoverOver(e)}
            className='coverUpDiv'
          >
            <h3
              onMouseEnter={(e) => onHover(e, 2)}
              className='hoverTitle hoverTitleMd'
            >
              <a
                href='https://userolena.github.io/global-weather-forecast/'
                target='_blank'
                className='hoverLink hoverLinkMd linkIcon linkIconMd'
              >
                Weather Forecast
              </a>
            </h3>
            <a
              href='https://github.com/UserOlena/global-weather-forecast'
              target='_blank'
              className='gitHubLink'
            >
              <GitHubIcon fontSize='large' />
            </a>
          </div>
        }
      </Grid>
      <Grid item
        xs={5}
        className='gridItem'
      >
        <img
          onMouseEnter={(e) => onHover(e, 3)}
          src={portfolio}
          alt='Portfolio'
          className='img'
        />
        {
          hover === 3 &&
          <div
            onMouseEnter={(e) => onHover(e, 3)}
            onMouseLeave={(e) => onHoverOver(e)}
            className='coverUpDiv'
          >
            <h3
              onMouseEnter={(e) => onHover(e, 3)}
              className='hoverTitle hoverTitleMd'
            >
              <a
                href='https://userolena.github.io/portfolio/'
                target='_blank'
                className='hoverLink hoverLinkMd linkIcon linkIconMd'
              >
                Portfolio
              </a>
            </h3>
            <a
              href='https://github.com/UserOlena/portfolio'
              target='_blank'
              className='gitHubLink'
            >
              <GitHubIcon fontSize='large' />
            </a>
          </div>
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
          src={codingQuiz}
          alt='Coding quiz'
          className='img'
        />
        {
          hover === 4 &&
          <div
            onMouseEnter={(e) => onHover(e, 4)}
            onMouseLeave={(e) => onHoverOver(e)}
            className='coverUpDiv'
          >
            <h3
              onMouseEnter={(e) => onHover(e, 4)}
              className='hoverTitle hoverTitleMd'
            >
              <a
                href='https://userolena.github.io/coding_quiz/'
                target='_blank'
                className='hoverLink hoverLinkMd linkIcon linkIconMd'
              >
                Coding Quiz
              </a>
            </h3>
            <a
              href='https://github.com/UserOlena/coding_quiz'
              target='_blank'
              className='gitHubLink'
            >
              <GitHubIcon fontSize='large' />
            </a>
          </div>
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
          src={passwordGenerator}
          alt='Wander List'
          className='img'
        />
        {
          hover === 5 &&
          <div
            onMouseEnter={(e) => onHover(e, 5)}
            onMouseLeave={(e) => onHoverOver(e)}
            className='coverUpDiv'
          >
            <h3
              onMouseEnter={(e) => onHover(e, 5)}
              className='hoverTitle hoverTitleSm'
            >
              <a
                href='https://userolena.github.io/password-generator/'
                target='_blank'
                className='hoverLink hoverLinkSm linkIcon linkIconSm'
              >
                Password Generator
              </a>
            </h3>
            <a
              href='https://github.com/UserOlena/password-generator'
              target='_blank'
              className='gitHubLink'
            >
              <GitHubIcon fontSize='medium' />
            </a>
          </div>
        }
      </Grid>
      <Grid item
        xs={6}
        className='gridItem'
      >
        <img
          onMouseEnter={(e) => onHover(e, 6)}
          src={portfolioReact}
          alt='Portfolio React.js'
          className='img'
        />
        {
          hover === 6 &&
          <div
            onMouseEnter={(e) => onHover(e, 6)}
            onMouseLeave={(e) => onHoverOver(e)}
            className='coverUpDiv'
          >
            <h3
              onMouseEnter={(e) => onHover(e, 6)}
              className='hoverTitleLg hoverTitle'
            >
              <a
                href=''
                target='_blank'
                className='hoverLink hoverLinkLg linkIcon linkIconLg'
              >
                Portfolio React
              </a>
            </h3>
            <a
              href='https://github.com/UserOlena/portfolio_react'
              target='_blank'
              className='gitHubLink'
            >
              <GitHubIcon fontSize='large' />
            </a>
          </div>
        }
      </Grid>
    </Grid>
  );
}

export default Portfolio;