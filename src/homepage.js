function homepage () {
    const content = document.querySelector('#content');

    const headingSection = document.createElement('div');
    headingSection.classList.add('headingSection');

    const headingTitle = document.createElement('h1');
    headingTitle.classList.add('headingTitle');
    headingTitle.textContent = 'jelani\'s at delhi';
    headingSection.appendChild(headingTitle);

    content.appendChild(headingSection);

    const homepageContent = document.createElement('div');
    homepageContent.classList.add('homepageContent');

    const homepageBlurb = document.createElement('div');
    homepageBlurb.classList.add('homepageBlurb');
    homepageBlurb.textContent = 'jelani\'s at delhi is an upscale bbq restaurant running \r\njust off south street since 2022. \r\n\r\njelani asim is a chef and artist with over a decade of experience. \r\n\r\nwe are so pleased to welcome you at our table.';
    homepageContent.appendChild(homepageBlurb);

    const hours = document.createElement('div');
    hours.classList.add('hours');
    hours.textContent = 'Monday: Closed \r\nTuesday: Closed \r\nWednesday: 12-7 \r\nThursday: 12-9 \r\nFriday: 12-10 \r\nSaturday: 12-10 \r\nSunday: Closed';
    homepageContent.appendChild(hours);

    content.appendChild(homepageContent);
}

export default homepage