const list = document.querySelectorAll('.lis');
const bg = document.querySelector('body');
list[0].onmouseover=()=>{bg.style.background = "#a1cca5";}
list[1].onmouseover=()=>{bg.style.background = "#9db4c0";} 
list[2].onmouseover=()=>{bg.style.background = "#ffd670";} 
list[3].onmouseover=()=>{bg.style.background = "#fcb9b2";}  
list.forEach(ls => {ls.onmouseleave=()=>{bg.style.background = "black";}});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const play = document.querySelectorAll('.lis');
for (let i=0; i<play.length; i++){
    if (i==1){
        play[i].onclick=()=>{
            OpenProjectPage();
        }
    }
    else if (i==0){
        play[i].onclick=()=>{
            const temp = document.querySelector('.About-page');
            temp.style.top = "0%";
            temp.style.opacity = "1";
            temp.style.zIndex = "1000";
            temp.style.transform = "scale(1)";
            document.body.style.overflowY = "scroll";
        }
    }
    else if (i==2){
        play[i].onclick=()=>{
            const temp = document.querySelector('.contact-page');
            temp.style.left = "0%";
            temp.style.transform = "scale(1)";
            temp.style.borderRadius = "0%";
            document.querySelector('.ul-menu').style.opacity = "0";
        }
    }
    else if (i==3){
        play[i].onclick=()=>{
            const temp = document.querySelector('.Visual-page');
            temp.style.right = "0%";
            temp.style.opacity = "1";
            temp.style.transform = "scale(1)";
            temp.style.borderRadius = "0%";
        }
    }
}

jarallax(document.querySelectorAll('.jarallax'), {speed: 0.5});
function smoothscroll(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo (0,currentScroll - (currentScroll/40));
    }
};

document.querySelector('#back-content').onclick=()=>{
    const temp = document.querySelector('.About-page');
    temp.style.top = "100%";
    temp.style.opacity = "0";
    temp.style.zIndex = "-1";
    temp.style.transform = "scale(0.01)";
    smoothscroll();
    document.body.style.overflowY = "hidden";
}


const link = [
    "https://www.facebook.com/ng.duy.thinh.0201/",
    "mailto:ndthinh0201@gmail.com",
    "https://www.instagram.com/dythinhng/?hl=vi",
    "https://github.com/thinhsuy",
    "tel:0916044383",
];
const media = document.querySelectorAll(".list");
for (let i=0; i<media.length; i++){
    media[i].onclick=()=>{window.open(link[i],"_self");}
    if (i==5){
        media[i].onclick=()=>{
            const temp = document.querySelector('.contact-page');
            temp.style.left = "-100%";
            document.querySelector('.ul-menu').style.opacity = "1";
            temp.style.transform = "scale(0.1)";
            temp.style.borderRadius = "100%";
        }
    }
}


const black = document.querySelector('.black');
window.onmousemove = function(e){
    const x = e.clientX;
    black.style.left = x+'px';
    if (x>=window.innerWidth-10){
        const temp = document.querySelector('.Visual-page');
        temp.style.right = "-100%";
        temp.style.opacity = "0";
        temp.style.transform = "scale(0.1)";
        temp.style.borderRadius = "100%";
    }
}

const introSpan = document.querySelectorAll('.first-span');
const intorSection = document.querySelector('.first-text');
function SetUp(isAppear){
    if (isAppear) intorSection.classList.add("first-text-appear");
    else {
        for (let i=0; i<introSpan.length; i++)
            introSpan[i].classList.add("first-span-remove");
        sleep(3500).then(()=>{
            document.querySelector('.ul-menu').style.opacity = "1";
        });
        clearTimeout(appearTime);
        clearTimeout(removeTime);
    } 
}


function Rainy(){
    let amount = 20;
    let body = document.querySelector('.rain-bg');
    body.style.top = '0%';
    body.style.opacity = "1";
    for (let i=0; i<amount; i++){
        let drop = document.createElement('i');
        let size = Math.random()*5;
        let posX = Math.floor(Math.random()*window.innerWidth);
        let delay = Math.random()*-20;
        let duration = Math.random()*5;
        drop.style.width = 0.2+size+'px';
        drop.style.left = posX+'px';
        drop.style.animationDelay = delay+'s';
        drop.style.animationDuration = 2 + duration+'s';
        body.appendChild(drop);
    }
    clearTimeout(rainTime);
}

function OpenProjectPage(){
    let projectPage = document.querySelector('.Project-page');
    let projectContainer = document.querySelector('.navigation-container');
    document.querySelector('.ul-menu').style.opacity = "0";
    projectPage.style.zIndex = '100';
    projectContainer.style.transform = 'translateY(0%) scale(1)';
}

function CloseProjectPage(){
    let projectPage = document.querySelector('.Project-page');
    let projectContainer = document.querySelector('.navigation-container');
    document.querySelector('.ul-menu').style.opacity = "1";
    projectPage.style.zIndex = '-2';
    projectContainer.style.transform = 'translateY(-700%) scale(0.1)';
}

rainTime = setTimeout(Rainy, 3500)
appearTime = setTimeout(SetUp, 1000, true);
removeTime = setTimeout(SetUp, 3500, false);

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})