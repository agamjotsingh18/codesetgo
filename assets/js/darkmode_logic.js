const darkmodeBtn = document.querySelector(".darkmode")

const quote_Left = document.querySelectorAll(".quote-sign-left")
const quote_Right = document.querySelectorAll(".quote-sign-right")

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

window.onload = function(e){
  
    if(prefersDarkScheme.matches){
        darkmodeBtn.innerHTML = '<ion-icon name="sunny"></ion-icon>'
        document.body.classList.add("dark")

       quote_Left.forEach(el=>{
           el.src = "./assets/img/quote-sign-left - light.png"
       })
       quote_Right.forEach(el=>{
           el.src = "./assets/img/quote-sign-right - light.png"
       })
       
    
    }
    else{
        darkmodeBtn.innerHTML = '<ion-icon name="moon"></ion-icon>'
        document.body.classList.add("light")
        quote_Left.forEach(el=>{
            el.src = "./assets/img/quote-sign-left.png"
        })
        quote_Right.forEach(el=>{
            el.src = "./assets/img/quote-sign-right.png"
        })
    }
}



