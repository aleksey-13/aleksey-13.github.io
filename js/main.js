(function () {
    const DOM = {
        navLabel: '.navigation__item',
        sectionLabel: '.section',
        navLabelActive: 'navigation__item--active',
        hideClass: 'hideContainer',
        showClass: 'showContainer'
    }

    const btns = document.querySelectorAll(DOM.navLabel);
    const sections = document.querySelectorAll(DOM.sectionLabel);

    let dataBtns = 0;
    let dataContainers = 0;
    let isActive = 2;

    btns.forEach(element => {
        element.dataset.data = dataBtns++;
        element.onclick = nextContainer;
    });

    sections.forEach(element => {
        element.dataset.data = dataContainers++;
        element.style.visibility = 'hidden';
        element.style.opacity = 0;
        element.style.display = 'none';
    });

    sections[isActive].style.visibility = 'visible';
    sections[isActive].style.opacity = 1;
    sections[isActive].style.display = 'block';

    function nextContainer() {
        const data = this.dataset.data;

        if (data === isActive) {
            return 0;
        }

        btns[isActive].classList.toggle(DOM.navLabelActive);
        btns[data].classList.toggle(DOM.navLabelActive);

        sections[isActive].classList.toggle(DOM.hideClass);
        sections[data].classList.toggle(DOM.showClass);

        sections[isActive].style.visibility = 'hidden';
        sections[data].style.visibility = 'visible';

        sections[isActive].style.opacity = 0;
        sections[data].style.opacity = 1;

        sections[isActive].style.display = 'none';
        sections[data].style.display = 'block';

        isActive = btns[data].dataset.data;
    }
    
    // Out age on display UI
    const yearOfBirth = 1996;
    const age = new Date().getFullYear() - yearOfBirth;
    
    document.querySelector('#age').textContent = age;    
})();