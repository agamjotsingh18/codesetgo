const darkmodeBtn = document.querySelector(".darkmode")
console.log(darkmodeBtn);
const quote_Left = document.querySelector(".quote-sign-left")
const quote_Right = document.querySelector(".quote-sign-right")

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");


document.addEventListener("load",(e)=>{
    console.log("loaded");
})






if(prefersDarkScheme.matches){
    darkmodeBtn.innerHTML = '<ion-icon name="sunny"></ion-icon>'
    document.body.classList.add("dark")
    // quote_Left.src = "assets\img\quote-sign-left - light.png"
    quote_Right.src = "assets\img\quote-sign-right - light.png"

    // document.body.style.setProperty("--darkback","#243447")
    // document.body.style.setProperty("--textcolor","white")
    // document.body.style.setProperty("--textcolor2","#2796FF")
    // document.body.style.setProperty("--postborder","#657786")
    // document.body.style.setProperty("--box-anchor","#F5F8FA")
    // document.body.style.setProperty("--section-header","white")
}
else{
    darkmodeBtn.innerHTML = '<ion-icon name="moon"></ion-icon>'
    document.body.classList.add("light")
}