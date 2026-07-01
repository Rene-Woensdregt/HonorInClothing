(function(){
  var els=document.querySelectorAll('[data-hi-reveal]');
  if(!els.length)return;
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('hi-visible');io.unobserve(e.target);}});
  },{threshold:0.15});
  els.forEach(function(el){io.observe(el);});
})();
