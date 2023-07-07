import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import { avatar } from '../../assets/img'; 

export function AboutMe() {
  
  return (
    <section
      style={{
        position: 'relative',
        padding: '3% 9%',
        // backgroundImage: 'url(./bg.svg)',
        // backgroundAttachment: 'fixed',
        // backgroundSize: 'cover',
      }}
    >
      <Avatar
        alt="Olena Pashchenko avatar"
        src={avatar}
        sx={{
          width: '10rem',
          height: '10rem',
          float: 'left',
          margin: '0 2rem 2rem 0',
        }}
      />
      <Typography>
        Greetings!
        <br /><br />I am Olena, a highly motivated and detail-oriented professional with a background in Quality Assurance Engineering within the banking industry. Recently completed a rigorous software development boot camp at UC Berkeley with an outstanding A+ total grade, equipping me with comprehensive skills in full-stack software development.
        <br /><br />Throughout my tenure as a QA Engineer, I consistently demonstrated a keen eye for identifying and resolving intricate software defects, ensuring the delivery of robust and error-free applications. Collaborating closely with cross-functional teams, I gained valuable experience in the software development lifecycle, refining my ability to create efficient test plans and execute rigorous test cases.
        <br /><br />The immersive boot camp experience at UC Berkeley further strengthened my technical prowess, enabling me to proficiently design and develop innovative solutions across the full stack. I am well-versed in JavaScript and SQL, and proficient in utilizing modern frameworks like React and Node.js.
        <br /><br />I thoroughly enjoy coding and have a genuine passion for learning new technologies and staying updated with industry trends. I am constantly seeking opportunities to expand my knowledge and skill set, as I believe that continuous learning is essential in the ever-evolving field of software development.
        <br /><br />With my solid foundation in QA Engineering and recent training in software development, I am eager to embark on a new challenge as a full-stack software developer. Combining my attention to detail, problem-solving mindset, and strong collaborative skills, I am ready to contribute to dynamic teams in creating cutting-edge software solutions.
      </Typography>
    </section>
  );
}

export default AboutMe