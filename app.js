const intro=document.querySelector(".intro");
const foam=document.querySelector(".foam");
const dashIcon=document.querySelector('.dash-icon');
const container=document.querySelector('.container');
const body=document.querySelector('.body');
const about=document.querySelector('.about');
const project=document.querySelector('project');
const home=document.querySelector('.home');

dashIcon.addEventListener('click',e=>{
  console.log("hello");
  if(dashIcon.getAttribute('class').includes('dash-icon')==true)
  {
  
   dashIcon.classList.remove('dash-icon');
   dashIcon.classList.add('cross-icon');
  intro.classList.remove('intro')
  intro.classList.add("intro-hide");

  foam.classList.add("foam-display");
  body.classList.add('body-background');
  container.classList.remove('container');
  container.classList.add('container-change');


  }
  else{
      console.log('hi');
      dashIcon.classList.remove('cross-icon');
      dashIcon.classList.add('dash-icon');
    intro.classList.remove("intro-hide");
    container.classList.remove('full-change');
    foam.classList.remove("foam-display");
  body.classList.remove('body-background');
    intro.classList.add('intro');
    container.classList.add('container');
  }
 

})


about.addEventListener('click',e=>{
  URL("")
})