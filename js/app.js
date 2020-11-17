/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
// to get value of scroll to show 'back to top' icon or not
 let scrollValue = this.scrollY;
window.onscroll = () => {
    scrollValue = this.scrollY;
    activeAsScroll();//to change active state according scroll
    backToTop();
};
// start after load
window.addEventListener('DOMContentLoaded',()=>{
    backToTop(); // to show or disappear scroll icon

    addNavElements();// Main nav bar
    addStepsToDirection();// direction part
    addLogo();// recipes part

    navActive(); // change state according to nav choose item
    // to smooth return to top
    let backToTopIcon = document.querySelector('.back-to-top');
    backToTopIcon.addEventListener('click',function(e){
        e.preventDefault();//prevent default to make smooth scroll
        let startOfPage = document.querySelector('body');
        // to return to the start of page
        startOfPage.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

    })

});
function backToTop(){
//      // back to top 
     if(scrollValue >300){
        document.querySelector('.back-to-top').style.display='block';
    }else{
        document.querySelector('.back-to-top').style.display='none';

    }
}
// to add value to active point to item of nav bar which user select 
function navActive(){
    let navItem = document.querySelectorAll('li');
    for(let i=0;i<5;i++){
        navItem[i].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        navItem[i].addEventListener('mouseover',function(e){//to appear or disappear active point
            setTimeout(()=>{
                //to remove active from other
                for(let j=0;j<navItem.length/2;j++){
                        if(navItem[j].querySelector('span').className.indexOf('active')!=-1){
                            navItem[j].querySelector('span').classList.remove('active');
                        }
                }
                if(e.target.querySelector('span')!=null){
                e.target.querySelector('span').classList+=' active';}//to add active point}
            },200);
            
        });
        // to smooth return to top
        navItem[i].addEventListener('click',function(e){
             e.preventDefault();//prevent default to make smooth scroll
             // to go to the specific part which user want to go
             let partName = '#'+e.target.innerHTML.split('<')[0].toLowerCase();//get name of section we want to go 
             let sectionName = document.querySelector(''+partName+'');//to go to specific part
             sectionName.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        });
    }
}   
// to add nav bar items using JS code
function addNavElements(){
    let items = [{name:'Home',to:'#'},{name:'Direction',to:'#direction'},{name:'About',to:'#about'}
    ,{name:'Event',to:'#event'},{name:'Contact',to:'#contact'}];//array of nave bar items

    let mainNav = document.querySelectorAll(".navbar__list");
    items.forEach((item)=>{//add items
        mainNav.forEach((nav)=>{
            let list  = document.createElement('li');
            list.innerHTML = '<a class="menu__link" href="'+item.to+'">'+item.name+'<span class="nav__span"></span></a>';
            nav.appendChild(list);
        });
        if(item.name=='Home'){document.querySelector('.nav__span').classList+=' active'}
    });
}
// remove Active Class
function removeActiveClass(){
    let navItem = document.querySelectorAll('li');
    for(let j=0;j<navItem.length/2;j++){
        if(navItem[j].querySelector('span').className.indexOf('active')!=-1){
            navItem[j].querySelector('span').classList.remove('active');
        }
}
}
//to know at which y each section start
function activeAsScroll(){
    let navStart =[document.querySelector('#direction').getBoundingClientRect().y,document.querySelector('#about').getBoundingClientRect().y,document.querySelector('#event').getBoundingClientRect().y
         ,document.querySelector('#contact').getBoundingClientRect().y];//to know at which y each section start
    let navItem = document.querySelectorAll('li');
    if(scrollValue <navStart[0]+50){
        removeActiveClass();//home part
        navItem[0].querySelector('span').classList+=' active';
    }else if(scrollValue >navStart[0]+50 && scrollValue<navStart[1]+50){
        removeActiveClass();//description part
        navItem[1].querySelector('span').classList+=' active';
    }else if(scrollValue >navStart[1] && scrollValue<navStart[2]+100){
        removeActiveClass();
        navItem[2].querySelector('span').classList+=' active';
    }else if(scrollValue >navStart[2]+50 && scrollValue<navStart[3]){
        removeActiveClass();// about part 
        navItem[2].querySelector('span').classList+=' active';
    }else if(scrollValue >navStart[3]+50){
        removeActiveClass();
        navItem[3].querySelector('span').classList+=' active';
    }else{
        removeActiveClass();// contact part
        navItem[4].querySelector('span').classList+=' active';
    }
}
// add steps to direction part using java script code
function addStepsToDirection(){
    let steps =[{img:'1',title:'Harmony With the Body',para:'Sit vocibus antiopam complectitur eu, an ullum civibus. Homero verear tincidunt.'},
    {img:'2',title:'Proper Nutrition',para:'Cu erat minimum eum, consul accusamus nec eu. Possim graecis ei pri, audiam.'},
    {img:'3',title:'Sports',para:'Ea ignota aperiri ceteros. Ludus dolor efficiendi his, porro antiopam pericula pri ne.'}];
    let stepPart = document.querySelector('.steps');
    steps.forEach((step)=>{// add items
        let div = document.createElement('div');
        div.innerHTML='<img src="../images/direction/Steps'+step.img+'.jpg"/><h5>'+step.title+'</h5><p>'+step.para+'</p>';
        div.classList +='col-12 col-md-4 mb-5';
        stepPart.appendChild(div);
    })
}

// add photo to logo part using JS code 
function addLogo(){
    let logos =['1','2','3','4'];// array of name of logo image
    let logoSection= document.querySelector('.logo');
    logos.forEach((logo)=>{//add image to logo part 
        let eachLogo = document.createElement('div');
        eachLogo.innerHTML = '<a href="#"><img src="../images/partners/partners_0'+logo+'.png" alt="'+logo+'"/></a>';
        eachLogo.classList+='col-12 col-md-6 col-lg-3';
        logoSection.appendChild(eachLogo);
    }) ;
}


