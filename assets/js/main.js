//ai bot


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

var alanBtnInstance = alanBtn({
    key: "c226c81396723ecd64a5a62bdae65be32e956eca572e1d8b807a3e2338fdd0dc/stage",

    onCommand: function (commandData) {
        if (commandData && commandData.command === 'openURL') {
            if (commandData.target === '_blank') {
                window.open(commandData.url, '_newtab' + Math.floor(Math.random() * 999999));
            } else {
                window.location.href = commandData.url;
            }
        }

    },

    rootEl: document.getElementById("alan-btn"),
});
//

var loader = document.getElementById("preloader");

function myFunction() {
    preloader.style.display = "none";
}

(function () {
    "use strict";

    // Selector Function

    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            if (el !== '')
                return document.querySelector(el)
        }
    }

    // Listener Function
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    // Scroll Event Listener
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    // Navbar Links
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    // Scroll To
    const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight

        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        })
    }

    // Header Fixed to top
    let selectHeader = select('#header')
    if (selectHeader) {
        let headerOffset = selectHeader.offsetTop
        let nextElement = selectHeader.nextElementSibling
        const headerFixed = () => {
            if ((headerOffset - window.scrollY) <= 0) {
                selectHeader.classList.add('fixed-top')
                nextElement.classList.add('scrolled-offset')
            } else {
                selectHeader.classList.remove('fixed-top')
                nextElement.classList.remove('scrolled-offset')
            }
        }
        window.addEventListener('load', headerFixed)
        onscroll(document, headerFixed)
    }

    //  Back to Top
    let backtotop = select('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }

    // Mobile Nav
    on('click', '.mobile-nav-toggle', function (e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })

    on('click', '.navbar .dropdown > a', function (e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault()
            this.nextElementSibling.classList.toggle('dropdown-active')
        }
    }, true)

    // Scroll with offset
    on('click', '.scrollto', function (e) {
        if (select(this.hash)) {
            e.preventDefault()

            let navbar = select('#navbar')
            if (navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile')
                let navbarToggle = select('.mobile-nav-toggle')
                navbarToggle.classList.toggle('bi-list')
                navbarToggle.classList.toggle('bi-x')
            }
            scrollto(this.hash)
        }
    }, true)

    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash)
            }
        }
    });

    // Swiper

    new Swiper('.hero-slider', {
        speed: 1000,
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        }
    });

    new Swiper('.testimonials-slider', {
        speed: 600,
        loop: false,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });

    // Emailjs
    emailjs.init("YOUR_USER_ID");

    // AOS

    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    });

})()

// Responsive Testimonial Height

const setTestimonialSize = () => {
    var maxHeight = 0;
    document.querySelectorAll(".testimonial-item").forEach(el => {
        el.style.height = 'fit-content';
        maxHeight = Math.max(maxHeight, el.offsetHeight);
    })
    document.querySelectorAll(".testimonial-item").forEach(el => {
        el.style.height = maxHeight + 'px';
    });
}
setTestimonialSize();
window.addEventListener('resize', () => {
    setTestimonialSize()
});

//send the content of enquiry form to the email
// function sendMail() {
//     if (checkInputs()) {
//         var tempParams = {
//             name: document.getElementById('name').value,
//             email: document.getElementById('email').value,
//             phone: document.getElementById('phone').value,
//             message: document.getElementById('message').value,
//         };
//         emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', tempParams)
//             .then(function (responce) {
//                 console.log('SUCCESS!', response.status);
//                 alert('Form Submitted Successfully');
//             },
//                 function (error) {
//                     console.log('FAILED!', response.status, response.text);
//                     alert('Form Submission Faild! Try Again');
//                 })
//     }
//     else
//         return false;
// };

function checkInputs() {
    const username = document.getElementById('name');
    const useremail = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    //get values from input fields
    const emailval = useremail.value.trim();
    const usernameval = username.value.trim();
    const phoneval = phone.value.trim();
    const messageval = message.value.trim();

    if (usernameval === '') {
        document.getElementById('nameerr').innerText = 'Please enter your Name !';
        username.classList.remove('success');
        username.classList.add('error');
    }
    else {
        document.getElementById('nameerr').innerText = '';
        username.classList.remove('error');
        username.classList.add('success');
    }

    if (emailval === '') {
        document.getElementById('mailerr').innerText = 'Please enter your E-mail !';
        useremail.classList.remove('success');
        useremail.classList.add('error');
    }
    else if (!validateEmail(emailval)) {
        document.getElementById('mailerr').innerText = 'Please enter valid E-mail !';
        useremail.classList.remove('success');
        useremail.classList.add('error');
    }
    else {
        document.getElementById('mailerr').innerHTML = '';
        useremail.classList.remove('error');
        useremail.classList.add('success');
    }
    if (phoneval === '') {
        document.getElementById('phoneerr').innerText = 'Please enter Phone No !';
        phone.classList.remove('success');
        phone.classList.add('error');
    }
    else {
        document.getElementById('phoneerr').innerText = '';
        phone.classList.remove('error');
        phone.classList.add('success');
    }
    if (messageval === '') {
        document.getElementById('msgerr').innerText = 'Please enter any Message !';
        message.classList.remove('success');
        message.classList.add('error');
    }
    else {
        document.getElementById('msgerr').innerText = '';
        message.classList.remove('error');
        message.classList.add('success');
    }

    if (emailval !== '' && usernameval !== '' && phoneval !== '' && messageval !== '') {
        console.log("complete");
        return true;
    }

}

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
}

//join-us form validation start here
function validateJoinUs() {

    const username = document.getElementById('name');
    const useremail = document.getElementById('email');
    const college = document.getElementById('college');
    const year = document.getElementById('year');
    const phone = document.getElementById('phone');
    const country = document.getElementById('country');
    const whycaptain = document.getElementById('whycaptain');

    //get values from input fields
    const emailval = useremail.value.trim();
    const usernameval = username.value.trim();
    const collegeval = college.value.trim();
    const yearval = year.value.trim();
    const phoneval = phone.value.trim();
    const countryval = country.value.trim();
    const whycaptainval = whycaptain.value.trim();

    if (usernameval === '') {
        document.getElementById('nameerr').innerText = 'Please enter your Name !';
        username.classList.remove('success');
        username.classList.add('error');
        return false;
    }
    else if (emailval === '') {
        document.getElementById('nameerr').innerText = '';
        username.classList.remove('error');
        username.classList.add('success');
        document.getElementById('mailerr').innerText = 'Please enter your E-mail !';
        useremail.classList.remove('success');
        useremail.classList.add('error');
        return false;
    }
    else if (!validateEmail(emailval)) {
        document.getElementById('mailerr').innerText = 'Please enter valid E-mail !';
        useremail.classList.remove('success');
        useremail.classList.add('error');
        return false;
    }
    else if (collegeval === '') {
        document.getElementById('mailerr').innerHTML = '';
        useremail.classList.remove('error');
        useremail.classList.add('success');

        document.getElementById('collegeerr').innerText = 'Please enter College with City !';
        college.classList.remove('success');
        college.classList.add('error');
        return false;
    }
    else if (yearval === '') {
        document.getElementById('collegeerr').innerText = '';
        college.classList.remove('error');
        college.classList.add('success');
        document.getElementById('yearerr').innerText = 'Please enter graduation year!';
        year.classList.remove('success');
        year.classList.add('error');
        return false;
    }
    else if (phoneval === '') {
        document.getElementById('yearerr').innerText = '';
        year.classList.remove('error');
        year.classList.add('success');
        document.getElementById('phoneerr').innerText = 'Please enter Phone No !';
        phone.classList.remove('success');
        phone.classList.add('error');
        return false;
    }
    else if (countryval === '') {
        document.getElementById('phoneerr').innerText = '';
        phone.classList.remove('error');
        phone.classList.add('success');
        document.getElementById('countryerr').innerText = 'Please enter country !';
        country.classList.remove('success');
        country.classList.add('error');
        return false;
    }
    else if (whycaptainval === '') {
        document.getElementById('countryerr').innerText = '';
        country.classList.remove('error');
        country.classList.add('success');
        document.getElementById('whycaptainerr').innerText = 'Required field !';
        whycaptain.classList.remove('success');
        whycaptain.classList.add('error');
        return false;
    }
    else {
        console.log("complete");
        return true;
    }
}
