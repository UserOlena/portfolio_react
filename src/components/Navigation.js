import { React } from 'react';

import {
    AboutMe,
    Portfolio,
    ContactForm,
    Resume,
} from '../components';

export function Navigation(props) {

    function renderChosenSection(chosenTab) {
        switch (chosenTab) {
            case 'About Me': return <AboutMe />;
            case 'Portfolio': return <Portfolio />;
            case 'Contact': return <ContactForm />;
            case 'Resume': return <Resume />;
        }
    };

    return (
        renderChosenSection(props.chosenTab)
    );
}

export default Navigation;