
const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-item>button').forEach(btn=>{
  btn.addEventListener('click',(e)=>{
    if(window.innerWidth<=800){e.preventDefault();btn.parentElement.classList.toggle('open');}
  });
});


// v4 project year filter
document.querySelectorAll('.year-filter').forEach(function(btn){
  btn.addEventListener('click', function(){
    document.querySelectorAll('.year-filter').forEach(function(b){ b.classList.remove('active'); });
    btn.classList.add('active');
    var year = btn.dataset.year;
    var visible = 0;
    document.querySelectorAll('.project-table tbody tr').forEach(function(row){
      var show = year === '전체' || row.dataset.year === year;
      row.classList.toggle('is-hidden', !show);
      if(show) visible++;
    });
    var count = document.getElementById('projectCount');
    if(count) count.textContent = '총 ' + visible + '건';
  });
});
