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

    //- Get Services Gallory.
    const servicesGallory = document.querySelector('.main-services-gallory');
        //-- Get back picture after click
        const picturesBack = document.querySelector('.main-services-gallory .back-picture');
        //-- Get head pictures 
        const headPictures = document.querySelector('.main-services-gallory .gird');
            let pictures = Array.from(headPictures.children); // Get all pictures
            let picturesNumber = [...Array(pictures.length).keys()]; // Get number pictures
            //--- Get Close Icone.
            // let closePicture = document.querySelector('.main-services-gallory .gird div .close');

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
        // For Close Services Page.
    servicesCloseIcon.addEventListener('click', () => { // close use close Button.
        servicesMain.classList.remove('active-services');
    })
    outCardServices.addEventListener('click', () => { // close click out card services.
        servicesMain.classList.remove('active-services');
    })



    /* samtying not work */
    //- event listener in click open pictures from gallory.
   
    // creat open and close picture
    pictures.forEach( picture => {
        
        // creat open picture by ues forEach.
        picture.children[0].children[0].addEventListener('click', () => {
            picture.classList.remove('picture');
            picture.classList.add('active');
            headPictures.classList.add('active');
            picturesBack.classList.add('active');
        });

        picture.children[0].children[3].addEventListener('click', () => {
            console.log('0');
            picture.classList.remove('picture');
            picture.classList.add('active');
            headPictures.classList.add('active');
            picturesBack.classList.add('active');
        });
        
        // creat close picture by ues forEach.
            // ues backpicture for close picture
        picturesBack.addEventListener('click', () => {
            console.log('1');
            picture.classList.add('picture');
            picture.classList.remove('active');
            headPictures.classList.remove('active');
            picturesBack.classList.remove('active');
        });

            // ues close icone for close picture
        picture.children[0].children[2].addEventListener('click', () => {
            console.log('2');
            picture.classList.add('picture');
            picture.classList.remove('active');
            headPictures.classList.remove('active');
            picturesBack.classList.remove('active');
        });

    });
    

console.log(closePicture);