(() => {
    const DOM = {
        navLabel: 'navigation__item',
        sectionLabel: 'section',
        navLabelActive: 'navigation__item--active',
        hideClass: 'hideContainer',
        showClass: 'showContainer',
        age: 'age'
    };

    if (document.documentElement.clientWidth > 900) {
        const btns = document.querySelectorAll(`.${DOM.navLabel}`);
        const sections = document.querySelectorAll(`.${DOM.sectionLabel}`);

        let dataBtns = 0;
        let dataContainers = 0;
        let isActive = 0;

        btns.forEach(element => {
            element.dataset.goto = dataBtns++;
            element.onclick = nextContainer;
        });

        sections.forEach(element => {
            element.dataset.goto = dataContainers++;
            element.style.opacity = 0;
            element.style.display = 'none';
        });

        sections[isActive].style.opacity = 1;
        sections[isActive].style.display = 'block';

        function nextContainer() {
            const data = parseInt(this.dataset.goto);

            if (data !== isActive) {
                btns[isActive].classList.toggle(DOM.navLabelActive);
                btns[data].classList.toggle(DOM.navLabelActive);

                sections[isActive].classList.toggle(DOM.hideClass);
                sections[data].classList.toggle(DOM.showClass);

                sections[isActive].style.opacity = 0;

                setTimeout(() => {
                    sections[isActive].style.display = 'none';
                    setTimeout(() => {
                        isActive = data;
                        sections[data].style.display = 'block'
                        setTimeout(() => sections[data].style.opacity = 1, 100);
                    }, 100);
                }, 500);
            }
        }
    }

    // Out age on display UI
    const yearOfBirth = 1996;
    const age = new Date().getFullYear() - yearOfBirth;

    document.querySelector(`#${DOM.age}`).textContent = age;
})();