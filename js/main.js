/*
(function() {
    const square = document.querySelectorAll('.square');
    const containers = document.querySelectorAll('.containers');

    let dataBtns = 0;
    let dataContainers = 0;
    let isActive = 0;

    square.forEach(element => {
        element.dataset.data = dataBtns++;
        element.onclick = changeContainer;
    });

    containers.forEach(element => {
        element.dataset.data = dataContainers++;
        element.style.visibility = 'hidden';
        element.style.opacity = 0;
    });

    containers[isActive].style.visibility = 'visible';
    containers[isActive].style.opacity = 1;

    function changeContainer() {
        const data = this.dataset.data;

        if (data === isActive) {
            return 0;
        }

        containers[isActive].classList.remove('showContainer');
        containers[isActive].classList.add('hideContainer');

        containers[data].classList.remove('hideContainer');
        containers[data].classList.add('showContainer');

        containers[isActive].style.visibility = 'hidden';
        containers[data].style.visibility = 'visible';

        containers[isActive].style.opacity = 0;
        containers[data].style.opacity = 1;

        isActive = containers[data].dataset.data; 
    }
})();
*/