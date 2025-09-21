// A+ A-
(function(){
  const inc = document.getElementById('aumentar');
  const dec = document.getElementById('diminuir');
  const live = document.getElementById('live');
  const get = ()=> parseFloat(getComputedStyle(document.documentElement).fontSize);
  const set = (px)=> document.documentElement.style.fontSize = px + 'px';
  inc.addEventListener('click', ()=>{ const s = Math.min(22, get()+1); set(s); live.textContent='Fonte '+s+'px'; });
  dec.addEventListener('click', ()=>{ const s = Math.max(16, get()-1); set(s); live.textContent='Fonte '+s+'px'; });
})();