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
 let scrollValue = this.scrollY;
window.onscroll = () => {
    scrollValue = this.scrollY;
    console.log(scrollValue)
    backToTop();
};
// start after load
window.addEventListener('DOMContentLoaded',()=>{

    backToTop(); // to show or disappear scroll icon

    addNavElements();// Main nav bar
    addStepsToDirection();// direction part
    addRecipes();// recipes part
    addLogo();// recipes part

    navActive(); // change state according to nav choose item

    // Scroll to section on link click
        // $('.back-to-top').click(()=>{
        //     $('html,body').animate({scrollTop:0},700);
        // });

// to make scroll slow
// $(document).on('click', 'a[href$="t"]', function (event) {
//     event.preventDefault();
//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top,
//     }, 500);
// });
});
function backToTop(){
//      // back to top 
     if(scrollValue >300){
        document.querySelector('.back-to-top').style.display='block';
    }else{
        document.querySelector('.back-to-top').style.display='none';

    }
}

function navActive(){
    let navItem = document.querySelectorAll('li');
    for(let i=0;i<5;i++){
        navItem[i].addEventListener('mouseover',function(e){
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
    }
}   

function addNavElements(){
    let items = [{name:'Home',to:'#'},{name:'Direction',to:'#directiontt'},{name:'About',to:'#about'}
    ,{name:'Events',to:'#event'},{name:'Contact',to:'#contact'}];

    let mainNav = document.querySelectorAll(".navbar__list");
    items.forEach((item)=>{
        mainNav.forEach((nav)=>{
            let list  = document.createElement('li');
            list.innerHTML = '<a class="menu__link" href="'+item.to+'">'+item.name+'<span class="nav__span"></span></a>';
            nav.appendChild(list);
        });
        if(item.name=='Home'){document.querySelector('.nav__span').classList+=' active'}
    });
}

function addStepsToDirection(){
    let steps =[{img:'1',title:'Harmony With the Body',para:'Sit vocibus antiopam complectitur eu, an ullum civibus. Homero verear tincidunt.'},
    {img:'2',title:'Proper Nutrition',para:'Cu erat minimum eum, consul accusamus nec eu. Possim graecis ei pri, audiam.'},
    {img:'3',title:'Sports',para:'Ea ignota aperiri ceteros. Ludus dolor efficiendi his, porro antiopam pericula pri ne.'}];
    let stepPart = document.querySelector('.steps');
    steps.forEach((step)=>{
        let div = document.createElement('div');
        div.innerHTML='<img src="../images/direction/Steps'+step.img+'.jpg"/><h5>'+step.title+'</h5><p>'+step.para+'</p>';
        div.classList +='col-12 col-md-4 mb-5';
        stepPart.appendChild(div);
    })
}

function addRecipes(){
    let recipes = []
}

function addLogo(){
    let logos =['1','2','3','4'];
    let logoSection= document.querySelector('.logo');
    logos.forEach((logo)=>{
        let eachLogo = document.createElement('div');
        eachLogo.innerHTML = '<a href="#"><img src="../images/partners/partners_0'+logo+'.png" alt="'+logo+'"/></a>';
        eachLogo.classList+='col-12 col-md-6 col-lg-3';
        logoSection.appendChild(eachLogo);
    }) ;
}


