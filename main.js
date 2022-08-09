const projectBtn = document.querySelector('#projects-btn');
const aboutBtn = document.querySelector('#about-btn');
const contactBtn = document.querySelector('contact-btn');

const project = document.querySelector('#project-card');
const about = document.querySelector('#about-card');
const contact = document.querySelector('about-card');

function goTo(location) {
    if (location === project) {
        project.scrollIntoView(true);
    };
    if (location === about) {
        about.scrollIntoView(true);
    };
    if (location === contact) {
        contact.scrollIntoView(true);
    };
    return;
}

projectBtn.addEventListener('click', scrollTo(project));



