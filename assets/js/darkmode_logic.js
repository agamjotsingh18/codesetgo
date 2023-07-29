const darkmodeBtn = document.querySelector(".darkmode")
const backToTopBtn = document.querySelector(".back-to-top");

const quote_Left = document.querySelectorAll(".quote-sign-left")
const quote_Right = document.querySelectorAll(".quote-sign-right")

//* check for OS theme
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");





//* fire window load event

    if(localStorage.getItem("theme") == null){
        if(prefersDarkScheme){
            //* if OS has dark theme then set web page to dark theme also
            localStorage.setItem("theme", "dark");

        }
        else{
             //* if OS has light theme then set web page to light theme also
            localStorage.setItem("theme", "dark");
        }
    }
    
    if(localStorage.getItem("theme") == "dark"){

        // User prefers dark theme

        darkmodeBtn.innerHTML = '<ion-icon name="sunny"></ion-icon>'
        document.body.classList.contains("light")? document.body.classList.remove("light"):""
        document.body.classList.add("dark")

        if(backToTopBtn.classList.contains("back-to-top")){
        backToTopBtn.classList.remove("back-to-top");
        backToTopBtn.classList.contains("back-to-top-dark")? "": backToTopBtn.classList.add("back-to-top-dark")
        }

        //* change the testimonials comments Quotes color
        quote_Left.forEach(el=>{
            el.src = "./assets/img/quote-sign-left - light.webp"
        })
       quote_Right.forEach(el=>{
           el.src = "./assets/img/quote-sign-right - light.webp"
       })
       
       //* store the theme in local storage
       localStorage.setItem("theme","dark")

       
    }
    else{

       // User prefers light theme
        darkmodeBtn.innerHTML = '<ion-icon name="moon"></ion-icon>'
        
        document.body.classList.contains("dark")? document.body.classList.remove("dark"):""
        document.body.classList.add("light")
        quote_Left.forEach(el=>{
            el.src = "./assets/img/quote-sign-left.webp"
        })
        quote_Right.forEach(el=>{
            el.src = "./assets/img/quote-sign-right.webp"
        })
        localStorage.setItem("theme","light");

        if(!backToTopBtn.classList.contains("back-to-top")){
        backToTopBtn.classList.add("back-to-top");
        backToTopBtn.classList.remove("back-to-top-dark");
        }
    }


//* toggle theme using button

darkmodeBtn.addEventListener("click",(e)=>{
    if(localStorage.getItem("theme") == "dark"){

        e.currentTarget.innerHTML = '<ion-icon name="moon"></ion-icon>'

        document.body.classList.contains("dark")? document.body.classList.remove("dark"):""
        document.body.classList.add("light")

        quote_Left.forEach(el=>{
            el.src = "./assets/img/quote-sign-left.webp"
        })
        quote_Right.forEach(el=>{
            el.src = "./assets/img/quote-sign-right.webp"
        })
        localStorage.setItem("theme","light")

        //back-to-top button in light mode
        if(!backToTopBtn.classList.contains("back-to-top")){
        backToTopBtn.classList.add("back-to-top");
        backToTopBtn.classList.remove("back-to-top-dark");
        }
    }
    else{

        e.currentTarget.innerHTML = '<ion-icon name="sunny"></ion-icon>'

        document.body.classList.contains("light")? document.body.classList.remove("light"):""
        document.body.classList.add("dark")

        quote_Left.forEach(el=>{
            el.src = "./assets/img/quote-sign-left - light.webp"
        })
        quote_Right.forEach(el=>{
            el.src = "./assets/img/quote-sign-right - light.webp"
        })
        localStorage.setItem("theme","dark")

        //Back to Top Button in dark mode
        if(backToTopBtn.classList.contains("back-to-top")){
        backToTopBtn.classList.remove("back-to-top");
        backToTopBtn.classList.add("back-to-top-dark");
        }

    }
})
