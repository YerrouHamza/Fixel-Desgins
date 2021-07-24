/** Git Elements **/

    //- Get Header Elements.
    const header = document.querySelector('.header');
        //-- Get Button mune.
        const headerLogo = document.querySelector('.header .nav-menu .header-logo img');
        //-- Get View Work Button mune.
        const menuViewWorkBT = document.querySelector('.header .nav-menu .nav-list .list-work');
        //-- Get Button mune.
        const menuButton = document.querySelector('.header .nav-button-menu');

    //- Get menu Elements.
    const menuSection = document.querySelector('.menu-section');

    //- Get home elements.
    const homeMain = document.querySelector('.home');

    //- Get about elements.
    const aboutMain = document.querySelector('.main-about');
        //-- Get Button View Work
        const aboutButton = document.querySelector('.main-about .about-section .about .button-about');


    //- Get services elements.
    const servicesMain = document.querySelector('.main-services');
        //-- Get Close Services Page Icon
        const servicesCloseIcon = document.querySelector('.main-services .close-page-services .icon');
        //-- Get Services Out Card
        const outCardServices = document.querySelector('.main-services .out-card');
        //-- Get Services Section
        const servicesSection = document.querySelector('.main-services .services-section');
            //--- Get services 1 card.
            const services1Card = document.querySelector('.main-services .services-section .services-card1');
                //---- Get services page
                const services1Page = document.querySelector('.main-services .service-1');
                    //----- Get close icon from srevices page.
                    const ServicesCloseIcon = document.querySelector('#close-icon');


/** Add eventlistener **/
    /*
    //- event listener open & close for menu section.
    menuButton.addEventListener('click', () => {
        menuSection.classList.toggle('active');
    });


    //- Creat Event Listener for open and close services 1 page.
    services1Card.addEventListener('click', () => {
        services1Page.classList.add('on-click');
    });


    ServicesCloseIcon.addEventListener('click', () => {
        services1Page.classList.remove('on-click');
    });
*/

    //- event listener To open all Services page
        // For Open Services Page.
    menuViewWorkBT.addEventListener('click', () => { // from Header.
        servicesMain.classList.add('active-services');
    });
    aboutButton.addEventListener('click', () => { // From About Page.
        servicesMain.classList.add('active-services');
    });
        // For Close Services Page.
    servicesCloseIcon.addEventListener('click', () => { // close use close Button.
        servicesMain.classList.remove('active-services');
    })
    outCardServices.addEventListener('click', () => { // close click out card services.
        servicesMain.classList.remove('active-services');
    })


/** Add Function **/

    //- creat onScroll for scroll bitwen home page and services page
onscroll = () => {

    if (scrollY > 80){
        homeMain.classList.add('scroll-1');
    } else {
        homeMain.classList.remove('scroll-1');
    }

    if (scrollY > 600){
        header.classList.add('on-about-page');
        headerLogo.setAttribute('src', "/photos/Bilal Logo - 2.png");
    } else {
        header.classList.remove('on-about-page');
        headerLogo.setAttribute('src', "/photos/Bilal Logo.png");
    }
    
}

