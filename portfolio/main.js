const button = document.getElementById('offcanvas-button')
const offCanvas = document.getElementById('off-canvas')
const patternSection = document.getElementById('pattern-section')
const imgHover = document.querySelector('.hover-img')
let toggleButton = false;
const toggleFn = () =>{
    if(toggleButton){
        offCanvas.style.display="flex"
        
        
    }else{
        offCanvas.style.display="none"
    }
}

toggleFn()
button.addEventListener('click',()=>{
      toggleButton=!toggleButton
    toggleFn()
  
   


})






const burger = document.getElementById("burger");
const navUl = document.getElementById("nav-ul-two");
const mainPage = document.getElementById("main-page");
const closeBtn = document.getElementById("close-btn");
const nav = document.getElementById("nav-ul");
let z=false;
const displayChecker =() =>{
    if(window.innerWidth<=992){
        burger.style.display="flex";
        nav.style.display="none";
        
    }else{
        burger.style.display="none"
        nav.style.display="flex";
    }

}

const appear = () =>{
    navUl.style.display="flex"; 
    mainPage.style.display="none"
    burger.setAttribute("style", "display:none !important")
    nav.setAttribute("style", "display:none !important")
    z=true;
}
const disappear = () =>{
    navUl.style.display="none";
    mainPage.style.display="flex";
    displayChecker()
    z=false;
}
const closeFn = () =>{
    if(z===true){
        closeBtn.addEventListener("click", ()=>{
            disappear();
            displayChecker()
        })
    }
}
const burgerFn = () =>{
    if(z===false){
        burger.addEventListener("click", ()=>{
            appear()
            closeFn();
            
        })

    }
}

burgerFn();



// Modal Setup
var modal = document.getElementById('modal');

var modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', function() { 
  modal.style.display = "none";
});

// global handler
document.addEventListener('click', function (e) { 
  if (e.target.className.indexOf('modal-target') !== -1) {
      var img = e.target;
      var modalImg = document.getElementById("modal-content");
      var captionText = document.getElementById("modal-caption");
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
   }
});
