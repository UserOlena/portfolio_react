import React from 'react';
import { Grid, } from '@material-ui/core';
import { Button, List, ListItem, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import '../assets/resume/Olena_Pashchenko.docx';

export function Resume() {
    return (
        <Grid
            container
            spacing={4}
            alignItems='center'
            justifyContent='center'
        >
            <Grid
                item
                xs={12}
            >
                <Button
                    variant='contained'
                    color='secondary'
                    href='./Olena_Pashchenko.docx'
                    startIcon={<DownloadIcon />}
                    download
                >
                    resume
                </Button>
            </Grid>
            {
                experience.map(({ jobTitle, duration, organization, skills }, index) => {
                    return (
                        <Grid
                        key={index}
                            item
                            xs={10}
                        >
                            <div
                                 style={{
                                    padding: '2rem 0 0 2rem',
                                    boxShadow: '0px -15px 10px -10px rgba(66, 110, 255, 0.2)',
                                }}
                            >
                                <Typography
                                    variant='h4'
                                    sx={{
                                        textShadow: '2px 1px 2px rgba(66, 110, 255)'
                                    }}
                                >
                                    {jobTitle}
                                </Typography>
                                <Typography
                                    variant='h6'
                                >
                                    {duration}
                                </Typography>
                                <Typography
                                    variant='h5'
                                    margin={'1rem 0 0 1rem'}
                                    sx={{
                                        textShadow: '1px 1px 1px rgba(66, 110, 255)'
                                    }}
                                >
                                    {organization}
                                </Typography>
                                <List
                                    sx={{
                                        marginLeft: '3rem',
                                    }}
                                >
                                    {skills.map((element, index) => {
                                        return (
                                            <ListItem
                                            key={index}
                                                sx={{
                                                    listStyleType: 'disc',
                                                    display: 'list-item',
                                                }}
                                            >
                                                {element}
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </div>
                        </Grid>

                    )
                })
            }
        </Grid >
    )
};

const experience = [
    {
        jobTitle: 'Coding Bootcamp Student',
        duration: '01/2023 – 07/2023',
        organization: 'UC Berkeley',
        skills: [
            'Successfully completed an intensive and immersive software development bootcamp at UC Berkeley with an outstanding A+ total grade, specializing in full-stack development.',
            'Acquired in-depth knowledge and hands-on experience in a wide range of modern technologies, frameworks, and tools essential for full-stack software development.',
            'Collaborated with a diverse cohort of aspiring developers on numerous team projects, fostering effective communication, teamwork, and agile development methodologies.',
            'Developed proficiency in front-end development, utilizing HTML, CSS, and JavaScript to build dynamic and responsive user interfaces.',
            'Gained expertise in back-end development, leveraging frameworks such as Node.js and Express.js to create robust and scalable server-side applications.',
            'Acquired skills in working with databases, including designing and implementing efficient data models using SQL and NoSQL databases.',
            'Expanded knowledge of version control systems like Git, enabling effective collaboration and code management within development teams.',
        ],
    },
    {
        jobTitle: 'Senior QA Engineer',
        duration: '07/2015 – 11/2018',
        organization: 'Raiffeisenbank',
        skills: [
            'Served as a Senior QA Engineer in a prominent banking institution, overseeing the quality assurance activities for a mission-critical product written in Java EE and deployed on WebSphere Application Server (WAS) and AS/400 platforms.',
            'Developed and executed comprehensive test strategies, test plans, and test cases to validate the functionality, performance, and security of the banking product.',
            'Collaborated closely with cross-functional teams, including developers, business analysts, and project managers, to gather requirements, prioritize testing efforts, and address software defects in a timely manner.',
            'Conducted rigorous system integration testing (SIT) and end-to-end testing, meticulously identifying and reporting software defects while ensuring compliance with regulatory standards and security protocols.',
            'Leveraged automated testing tools, such as Selenium and JUnit, to streamline the testing process and increase efficiency.',
            'Proactively participated in release management activities, ensuring smooth deployment of software updates and coordinating with stakeholders to minimize production incidents.',
            'Demonstrated exceptional problem-solving skills, resolving complex issues related to system integration, data integrity, and performance bottlenecks.',
        ],
    },
];

export default Resume;