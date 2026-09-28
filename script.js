
const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-item>button').forEach(btn=>{
  btn.addEventListener('click',(e)=>{
    if(window.innerWidth<=800){e.preventDefault();btn.parentElement.classList.toggle('open');}
  });
});
