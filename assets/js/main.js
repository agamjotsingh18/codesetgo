//This code implies the feature of changing navbar color when user scrolls

const navbar = document.querySelector('#header');

window.onscroll = () => {
    if (window.scrollY > 420) {
        navbar.classList.add('nav-active');

    } else {
        navbar.classList.remove('nav-active');
    }
};


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
        loop: true,
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
function sendMail() {
    var tempParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
    };
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', tempParams)
        .then(function (responce) {
            console.log('SUCCESS!', response.status);
            alert('Form Submitted Successfully');
        },
            function (error) {
                console.log('FAILED!', response.status, response.text);
                alert('Form Submission Faild! Try Again');
            })
}

// ONCLICK FLIP CARD FOR SERVICE SECTION
const boxes = document.querySelectorAll('#services .col-lg-6 .box');

[...boxes].forEach((box)=>{
    box.addEventListener('click',function(){
        box.classList.toggle('is-flipped');
    })
})