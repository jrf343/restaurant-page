function menupage () {
    const content = document.querySelector('#content');

    const headingSection = document.createElement('div');
    headingSection.classList.add('headingSection');

    const headingTitle = document.createElement('h1');
    headingTitle.classList.add('headingTitle');
    headingTitle.textContent = 'jelani\'s at delhi';
    headingSection.appendChild(headingTitle);

    const menuTitle = document.createElement('h2');
    menuTitle.classList.add('menuTitle');
    menuTitle.textContent = 'menu';
    headingSection.appendChild(menuTitle);

    content.appendChild(headingSection);
}

export default menupage