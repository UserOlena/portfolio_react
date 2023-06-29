import React, { useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  portfolioImgStyle: {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#ffff',
    boxShadow: '10px 8px 5px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
  },
}));

export function Portfolio() {
  console.log('portfolio renders')

  const classes = useStyle();
  
  return (
    <Grid
      container spacing = {2}
      alignItems = 'center'
      justifyContent= 'center'
      margin = '1% auto'
      style={{
        width: '100%',
        padding: '2rem',
        backgroundColor: '#e8e8e8',
      }}
    >
      <Grid item
        xs={6}
      >
        <img
          src='./wander_list.png'
          alt='Wander List'
          className={classes.portfolioImgStyle}
          style={{
            marginLeft: '5rem',
          }}
        />
      </Grid>
      <Grid item
        xs={5}
      >
        <img
          src='./global_weather_forecast.png'
          alt='Portfolio'
          className={classes.portfolioImgStyle}
        />
      </Grid>
      <Grid item
        xs={5}
      >
        <img
          src='./portfolio.png'
          alt='Portfolio'
          className={classes.portfolioImgStyle}
        />
      </Grid>
      <Grid item
        xs={5}
        style={{
          marginRight: '4rem',
        }}
      >
        <img
          src='./coding_quiz.png'
          alt='Coding quiz'
          className={classes.portfolioImgStyle}
        />
      </Grid>
      <Grid item
        xs={4}
        style={{
          marginLeft: '4rem',
        }}
      >
        <img
          src='./password_generator.png'
          alt='Wander List'
          className={classes.portfolioImgStyle}
        />
      </Grid>
      <Grid item
        xs={6}
      >
        <img
          src='./portfolio_react.png'
          alt='Portfolio React.js'
          className={classes.portfolioImgStyle}
        />
      </Grid>
    </Grid>
  );
}

export default Portfolio;