let menu = document.querySelector('#menu-btn');
let navbar =document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
};

window.onscroll = () =>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
};

var swiper = new Swiper(".home-slider",{
  loop:true,
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },
});

var swiper = new Swiper(".reviews-slider",{
  loop:true,
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },
});


let loremorebtn = document.getElementsByClassName("load-more");
let currentItem = 3;

loremorebtn.onclick = () =>{
  let boxes =[... document.querySelectorAll(".packges .box-container .box")];
  for(var i = currentItem; i < currentItem+3;i++){ 
    boxes[i].style.display = "inline-block";
  };   
    currentItem +=3;
    if(currentItem > boxes.length){
      loremorebtn.style.display ="none";
    }

}