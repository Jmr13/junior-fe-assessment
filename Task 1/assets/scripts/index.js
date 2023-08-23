/* For Navigation bar */
function toggleNav() {
    const navbar = document.querySelector(`.navlinks`);
    navbar.classList.toggle("hide");
}
/* For About text see more toggle */
let isAboutTextMax = false;
const aboutTextMin = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna 
    aliqua. 

    Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur...`;
const aboutTextMax = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna 
    aliqua. 

    Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur. 
    
    Excepteur sint 
    occaecat cupidatat non proident, sunt in culpa qui officia 
    deserunt mollit anim id est laborum.

    Excepteur sint 
    occaecat cupidatat non proident, sunt in culpa qui officia 
    deserunt mollit anim id est laborum.`;

function aboutTextToggle() {
    isAboutTextMax = !isAboutTextMax;
    if(isAboutTextMax == false) {
        document.querySelector(`.about_text`).textContent = aboutTextMax;
        document.querySelector(`.about_section button`).textContent = `Read Less`;
    }
    else {
        document.querySelector(`.about_text`).textContent = aboutTextMin;
        document.querySelector(`.about_section button`).textContent = `Read More`;
    }
}
aboutTextToggle();