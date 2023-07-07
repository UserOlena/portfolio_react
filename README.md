[![License: MIT license](https://img.shields.io/badge/License-MIT_license-success)](https://opensource.org/licenses/MIT)    
![Project status](https://img.shields.io/badge/Status-Complete-seccess)

# Portfolio

--- 
The `Portfolio` was created as part of Berkeley Coding Bootcamp Challenge 20 to fulfill the requirements of a React templating engine.
- Deployed application can be accessed by following this [link](https://userolena.github.io/portfolio_react/).
- The walk-through video showcasing the operation of the Portfolio application can be located in the [Walk-through Video](#walk-through-video) section. Alternatively, you can access the video through cloud storage by following this  [link]().

---
## Table of Contents
* [General Information](#general-information)
* [Walk-through Video](#walk-through-video)
* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [Features](#features)
* [Credits](#credits)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Contact](#contact)
* [Project Status](#project-status)
* [License](#license)

---
## General Information 
The purpose of the Portfolio web app is to provide individuals with a platform to effectively showcase their skills, experience, and projects to potential employers. It aims to create a professional online presence that highlights their strengths and capabilities, helping them stand out in the competitive job market. By organizing and presenting relevant information in an attractive and user-friendly manner, the portfolio web app empowers individuals to make a compelling case for their suitability and expertise to prospective employers. The development of the application was done accordingly to [user story](#user-story) and [acceptance criteria](#acceptance-criteria). 

---
## Walk-through Video 


---
## Technologies Used
-  [javaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript) - A programming language for web development and scripting.
-  [react v18.2.0](https://react.dev/) -  JavaScript library for building user interfaces with component-based architecture.
-  [Material UI](https://mui.com/) -  Reusable UI components for building visually appealing and responsive web applications.

---
## Installation
Deployed application can be accessed by following this [link](https://userolena.github.io/portfolio_react/).

### To perform a local installation, please follow these steps:

**Local Installation**

To use the `Portfolio`, the user needs to complete the following steps: 

1. Clone the repository:
  - Go to the [Git-Hub](https://github.com/UserOlena/portfolio_react)
  - Clone the repository to your local computer.
2. Navigate to the Portfolio directory:
  - Open a command line interface (e.g., Terminal).
  - Change directory to the Portfolio repository location. Use the command `cd ~/...` and replace `...` with the path to the Portfolio directory.
3. Install the required dependencies for proper functioning:
  - In the command line, while in the Portfolio root directory, run the command `npm i`.
  - This command will install the required dependencies for the application to function.
4. Start the application:
  - In the command line, type `npm start` to bundle the static files and start the server.
5. Open application in the browser:
  - Open browser to use the applicatin. 
  - Include the `localhost:3000` URL in a dedicated section of the browser.
  - The application should now be up and running.

These steps should guide you through the process of setting up and running the Portfolio successfully.

---
## Usage
- The Portfolio provides a seamless user experience with intuitive navigation. Users can easily move between pages by clicking on the desired title in the navigation bar located on the page header.
- The navigation bar includes titles such as "About Me," "Portfolio," "Contact," and "Resume." Clicking on any of these titles triggers the rendering of the associated page, while also highlighting the selected title. This feature enhances the user experience by providing clear visual cues about the current active page and facilitating efficient navigation.
- The "About Me" section showcases an avatar and provides a brief biography of the portfolio owner. This section offers users an introduction to the person behind the portfolio, giving insights into their background, skills, and interests.
- The portfolio section displays project information, including project images. When hovering over a project, a clickable title appears. Clicking on the title redirects the user to the deployed application associated with that project. Additionally, each project is accompanied by a clickable GitHub icon located at the bottom. Clicking on the GitHub icon takes the user to the corresponding GitHub repository for that project.
- The contact page features a contact form that includes required fields for name, email, and message. Users must fill out these fields in order to submit the form successfully. Currently, the application does not include server-side functionality to handle the contact form. However, users have the option to connect the UI to their own server in order to handle the handling of the contact form data.
- The resume section presents a comprehensive overview of the portfolio owner's professional work experience. It includes details such as position titles, years of employment, company names, descriptions of responsibilities and achievements, and a list of skills. The information is structured in a clear and organized format, making it easy for users to understand the portfolio owner's background and expertise.
- The portfolio app includes a convenient "Download Resume" button that enables users to easily download a file. By clicking on this button, users can quickly obtain a copy of the resume document, making it accessible for offline viewing or printing as needed.
- The footer of the portfolio includes three clickable social media icons, namely GitHub, LinkedIn, and Twitter. These icons provide convenient ways for users to connect and engage with the person behind the portfolio on respective platforms.

---
## Features
- The navigation bar highlights the title associated with the currently viewed page, offering clear visual cues about the active page and facilitating seamless navigation. This feature enhances user experience by providing a visual indicator of the user's current location within the portfolio and making it easier to navigate between different sections.
- The portfolio app is designed to be mobile responsive, ensuring that it adapts and displays properly on various mobile devices. This responsiveness allows users to access and navigate the app seamlessly, regardless of the screen size or orientation of their mobile device.
- The navbar is consistently positioned at the top of the screen, ensuring that it is always accessible to users. This fixed placement allows users to easily access the navigation menu from any section of the app without the need for scrolling.
- The portfolio app includes a "Download Resume" button that provides a convenient way for users to download a file of the portfolio owner's resume. This button enables users to easily access and save the resume document for offline viewing or printing purposes.

---
## Credits
- [Material UI](https://mui.com/) -  JavaScript library for building user interfaces with component-based architecture.
- [kindpng](www.kindpng.com) - Image for the "Contact" section.

---
## User Story
```md
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```  

---
## Acceptance Criteria
```md
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 
```

---
## Contact
-  [Olena P](https://github.com/UserOlena)
    
---
## Project Status 
- Project is: Complete 

---
## License
- This project is open source and available under the [MIT](./LICENSE)