function contactpage () {
    const content = document.querySelector('#content');

    const headingSection = document.createElement('div');
    headingSection.classList.add('headingSection');

    const headingTitle = document.createElement('h1');
    headingTitle.classList.add('headingTitle');
    headingTitle.textContent = 'jelani\'s at delhi';
    headingSection.appendChild(headingTitle);

    const contactTitle = document.createElement('h2');
    contactTitle.classList.add('contactTitle');
    contactTitle.textContent = 'contact';
    headingSection.appendChild(contactTitle);

    content.appendChild(headingSection);

    const contactContent = document.createElement('div');
    contactContent.classList.add('contactContent');

    const juliaContact = document.createElement('div');
    juliaContact.classList.add('contact');

    const juliaHeading = document.createElement('h3');
    juliaHeading.textContent = 'julia'
    juliaContact.appendChild(juliaHeading);

    const juliaContent = document.createElement('div');
    juliaContent.textContent = '2154567890 \r\njulia@jelanisatdelhi.com';
    juliaContact.appendChild(juliaContent);

    contactContent.appendChild(juliaContact);

    const jelaniContact = document.createElement('div');
    jelaniContact.classList.add('contact');

    const jelaniHeading = document.createElement('h3');
    jelaniHeading.textContent = 'jelani'
    jelaniContact.appendChild(jelaniHeading);

    const jelaniContent = document.createElement('div');
    jelaniContent.textContent = '2150987654 \r\njelani@jelanisatdelhi.com';
    jelaniContact.appendChild(jelaniContent);

    contactContent.appendChild(jelaniContact);

    content.appendChild(contactContent);
}

export default contactpage