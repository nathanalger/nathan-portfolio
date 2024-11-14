import Home from './Pages/home.jsx';
import Contact from './Pages/contact.jsx';
import Portfolio from './Pages/More/portfolio.jsx';
import More from './Pages/more.jsx';
import Resume from './Pages/More/resume.jsx';
import View from './Pages/Account/view.jsx';

// The pages listed in navigation bar, recommended limit of 4
export const navPages = [
    { // Home Page
        "displayName": "Home",
        "link": "/home"
    },
    { // Contact Page
        "displayName": "Contact",
        "link": "/contact"
    },
    { // More Page
        "displayName": "See More",
        "link": "/more"
    }
];

export default {
    "Home": Home,
    "Contact": Contact,
    "Portfolio": Portfolio,
    "More": More,
    "Resume": Resume,
    "Account": View
};