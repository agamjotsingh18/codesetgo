(function() {
    // Selector Function
    const select = (element, all = false) => {
        el = element.trim();
        if (all) {
            return [...document.querySelectorAll(element)];
        } else {
            if (element !== '') {
                return document.querySelector(element);
            }    
        }
    };

    // Listener Function
    const on = (type, element, listener, all = false) => {
        let selectElement = select(element, all);
        if (selectElement) {
            if (all) {
                selectElement.forEach(item => item.addEventListener(type, listener));
            } else {
                selectElement.addEventListener(type, listener);
            }
        }
    };

    // Scroll To
    const scrollTo = (element) => {
        let nav = select('#nav');
        let offset = nav.offsetHeight;

        let position = select(element).offsetTop;
        window.scrollTo({
            top: position - offset,
            behavior: 'smooth'
        });
    };

    // Smooth scroll
    on('click', '.scroll', function(e) {
        if (select(this.hash)) {
            e.preventDefault();
            scrollTo(this.hash);
        }
    }, true);

    // Back to Top
    const button = document.getElementById('scrollBtn');
    window.onscroll = () => scrollTop();

    function scrollTop() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }

    button.onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    // Mobile Nav
    const nav = document.getElementById('mobile');
    const hamburgerBtn = document.getElementById('hamburger');
    hamburgerBtn.addEventListener('click', () => nav.classList.toggle('hidden'));
    
    document.getElementsByTagName('main')[0].addEventListener('click', () => {
        if(!nav.classList.contains('hidden')) {
            nav.classList.add('hidden');
        }
    });

    // Email JS
    emailjs.init('');
    
    function sendMail() {
        var tempParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value,
        };

        emailjs.send('','',tempParams)
               .then((responce) => alert('Form Submitted Successfully'), (error) => alert('Form Submission Faild! Try Again'));
    }

    // AOS 
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    });
})();