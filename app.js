const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav_links = document.querySelector('.left-side');

    burger.addEventListener('click', () => {
        console.log('HELLO')
        nav_links.classList.toggle('nav-active')
    })
}

navSlide();


// * EXPERIENCE *
// shows only one experience div
function toggleExperience(id_name) {
    /*
    var buttons_list = document.getElementById('experience-div-list')
    console.log(buttons_list)
    */
   hideAllExperience();

    var x = document.getElementById(id_name);
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
}

// hides all the divs
function hideAllExperience() {
    divs = document.getElementsByClassName('experience-div')
    for (i = 0; i < divs.length; i++) {
      console.log(divs.item(i).style);
      divs.item(i).style.display = 'None';
    }
}