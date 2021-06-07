import Slider from "./js/slider";
import './styles/styles.css';
// window.addEventListener('DOMContentLoaded', function () {

    const options = {
        main: ".slider-list",
        field: ".slider-field",
        track: ".slider-track",
        next: ".next",
        prev: ".prev",
        showSlides: 4
    }

    const slider = new Slider(options);
    slider.init();

    const parents = document.querySelectorAll(".slider-item");

    const initCurtain = ({ title, date }) => {
        const curtainStile = `
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(51, 51, 51, 0.5);
    width: 100%;
    height: 100%;
`
        let cTitle = document.createElement("h3");
        cTitle.classList.add("h3-24b");
        cTitle.classList.add("c-title");

        cTitle.innerHTML = `${title}`;

        let cData = document.createElement("p");
        cData.classList.add("p-18b");
        cData.classList.add("c-data");
        cData.innerHTML = `${date}`;

        const curtain = document.createElement("div");
        curtain.classList.add('curtain');
        curtain.classList.add('h3-24b');
        curtain.style.cssText = curtainStile;

        return {
            curtain,
            cTitle,
            cData
        }
    }

    const curtainData = [
        {
            title: "oskar 2020",
            date: "september 2020"
        },
        {
            title: "venecia",
            date: "april 2020"
        },
        {
            title: "gold gramophone",
            date: "juli 2020"
        },
        {
            title: "nutcracker",
            date: "may 2020"
        }
    ]

    for (let i = 0; i < parents.length; i++) {
        parents[i].append(initCurtain(curtainData[i]).curtain);
        parents[i].append(initCurtain(curtainData[i]).cTitle);
        parents[i].append(initCurtain(curtainData[i]).cData);
    }


    // remove phone container into meacenas block & paste into end block
    const mdParent = document.querySelector('.meacenas-inner');
    const row = mdParent.firstElementChild;
    const mdContacts = document.querySelector('.meacenas-contacts');
    const newContact = document.querySelector('.new-contacts-container');

    const removeContacts = () => {
        mdContacts.remove();
        newContact.classList.remove('hidden');
    }

    const addContacts = () => {
        row.prepend(mdContacts);
        newContact.classList.add('hidden')
    }

    if (document.body.clientWidth <= 991) {
        removeContacts();
    }

    window.addEventListener("resize", () => {
        if (mdParent.offsetWidth <= 667) {
            removeContacts();
        } else {
            addContacts();
        }
    })



    const controller = document.querySelector('.controller');
    const burgerContainer = document.querySelector('.burger-container');
    const iconGroup = document.querySelector('.icon-group');
    const menuItems = document.querySelectorAll('.menu-item');
    const checkBox = document.getElementById('scales');
    let isActive = false;


    const controllerClick = () => {
        isActive = !isActive;
        let width = isActive ? 300 : 50;
        let bgColor = isActive ? 'rgba(34, 34, 34, 0.85)' : 'transparent';
        let height = isActive ? '100%' : '50px';
        let iconWidth = isActive ? '70%' : '';
        let top = isActive ? 0 : 50;
        let left = isActive ? 0 : 66;


        burgerContainer.style.cssText = `
            position: absolute;
            background-color: ${bgColor};
            width: ${width}px;
            height: ${height};
            top: ${top}px;
            left: ${left}px;
        `;

        iconGroup.style.cssText = `
            width: ${iconWidth};
            margin: 40px auto 0 auto;
        `;


    }

    controller.addEventListener('click', controllerClick);
    menuItems.forEach(elem => elem.addEventListener("click", () => {
        controllerClick();
        checkBox.checked = false;
    }));
// })