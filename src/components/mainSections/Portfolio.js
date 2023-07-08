import React from 'react';
import { Grid } from '@material-ui/core';
import { Project } from '../../components';
import {
  wanderList,
  globalWeatherForecat,
  portfolio,
  codingQuiz,
  passwordGenerator,
  portfolioReact,
} from '../../assets/img';

export function Portfolio() {

  return (
    <Grid
      container
      spacing={3}
      alignItems='center'
      justifyContent='center'
      margin='1% auto'
      style={{
        width: '100%',
        padding: '2rem',
        backgroundColor: '#e8e8e8',
      }}
      className='portfolioGridContainer'
    >
      {
        projects.map(
          ({
            projectTitle,
            deployedAppUrl,
            gitHubUrl,
            imgSrc,
            imgAlt,
            isOverlap,
            imgSize,
            isPushLeft,
          },
            index
          ) => {
            return (
              <Project
                projectTitle={projectTitle}
                imgSrc={imgSrc}
                deployedAppUrl={deployedAppUrl}
                gitHubUrl={gitHubUrl}
                imgAlt={imgAlt}
                isOverlap={isOverlap}
                imgSize={imgSize}
                key={index}
                value={index}
                isPushLeft={isPushLeft}
              />
            )
          }
        )
      }
    </Grid>
  );
}

const projects = [
  {
    projectTitle: 'WanderList',
    deployedAppUrl: 'https://wanderlist.herokuapp.com/',
    gitHubUrl: 'https://github.com/UserOlena/WanderList',
    imgSrc: wanderList,
    imgAlt: 'Wander List',
    isOverlap: true,
    imgSize: 'lg',
  },
  {
    projectTitle: 'Weather Forecast',
    deployedAppUrl: 'https://userolena.github.io/global-weather-forecast/',
    gitHubUrl: 'https://github.com/UserOlena/global-weather-forecast',
    imgSrc: globalWeatherForecat,
    imgAlt: 'Global Weather Forecast',
    imgSize: 'md',
  },
  {
    projectTitle: 'Portfolio',
    deployedAppUrl: 'https://userolena.github.io/portfolio/',
    gitHubUrl: 'https://github.com/UserOlena/portfolio',
    imgSrc: portfolio,
    imgAlt: 'Portfolio',
    imgSize: 'md',
  },
  {
    projectTitle: 'Coding Quiz',
    deployedAppUrl: 'https://userolena.github.io/coding_quiz/',
    gitHubUrl: 'https://github.com/UserOlena/coding_quiz',
    imgSrc: codingQuiz,
    imgAlt: 'Coding quiz',
    imgSize: 'md',
    isPushLeft: true,
  },
  {
    projectTitle: 'Password Generator',
    deployedAppUrl: 'https://userolena.github.io/password-generator/',
    gitHubUrl: 'https://github.com/UserOlena/password-generator',
    imgSrc: passwordGenerator,
    imgAlt: 'image of Password Generator application',
    imgSize: 'sm',
  },
  {
    projectTitle: 'Portfolio React',
    deployedAppUrl: 'https://userolena.github.io/portfolio_react/',
    gitHubUrl: 'https://github.com/UserOlena/portfolio_react',
    imgSrc: portfolioReact,
    imgAlt: 'image of Portfolio application built with React.js',
    imgSize: 'lg',
  },
];

export default Portfolio;