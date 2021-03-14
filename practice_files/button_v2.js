const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav_links = document.querySelector('.left-side');

    burger.addEventListener('click', () => {
        //console.log('HELLO')
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
    divs = document.getElementsByClassName('experience-div');
    for (i = 0; i < divs.length; i++) {
      // console.log(divs.item(i).style);
      divs.item(i).style.display = 'None';
    }
}

// changes the color of the button selected
function toggleButton(button_id) {
    unselectAllButtons();
    selectedButton = document.getElementById(button_id);
    //console.log(selectedButton.style);
    selectedButton.classList.add('selected-button');
}

// unselects the other buttons
function unselectAllButtons() {
    buttons = document.getElementsByClassName('experience-button');
    //console.log(buttons)
    for (i = 0; i < divs.length; i++) {
      //console.log(buttons.item(i).classList);
      buttons.item(i).classList.remove('selected-button');
    }
}

/* jquery scrolling */
$('.navbar a').on('click', function(e) {
    // console.log(this.hash)
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;
        //console.log($(hash));
        //console.log($(hash).offset());
        //console.log($(hash).offset().top);
        //console.log($('html').scrollTop() + 60);
        var currentPos = $('html').scrollTop() + 60;
        var sectionPos = $(hash).offset().top;
        // checking if its already at the correct position
        // if it is, dont run the function. Otherwise it will make the scroll get stuck on the section depending on how many times you have clicked on the button
        if (Math.round(currentPos) == Math.round(sectionPos)) {
            console.log('breaking')
            return
        }

        $('html, body').animate({
            scrollTop: $(hash).offset().top -60
        }, 800);
    }
})

