//SHOW MENU 

const showMenu = (toggleId,navId) => {
    const toggle = document.getElementById(toggleId),
     nav = document.getElementById(navId)
     
     if(toggle && nav){
        toggle.addEventListener('click',() =>
        {
            nav.classList.toggle('show')
        });
     }
}
showMenu('nav_toggle','nav_menu')

// active & remove active
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
} 

navLink.forEach(n => n.addEventListener('click',linkAction))

// slide show

currentSlidId = 1;

sliderElement = document.getElementById('slider');
totalSlides = sliderElement.childElementCount;

function next(){
         if(currentSlidId < totalSlides ){
            currentSlidId++;
            showSlide();
         }
         
}

function prev(){ 
    
    if(currentSlidId > 1){
    currentSlidId--; 
    showSlide();
     }
}

function showSlide(){
     slides = document.getElementById('slider').getElementsByTagName('li')
     for(let index = 0; index < totalSlides; index++) {
        const element = slides[index];
        if(currentSlidId===index+1){
            element.classList.remove('hidden')
        }else{
            element.classList.add('hidden')
        }
     } 
     
}

function autoPlay(){
    next()
    if(currentSlidId >= totalSlides ){
        currentSlidId = 0;
    }
            setTimeout( () => {
                autoPlay();
            },2000);
            }
    

  

setTimeout( () => {
    autoPlay();
},2000);