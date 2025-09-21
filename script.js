// Controles de acessibilidade
(function(){
  const inc = document.getElementById('inc-font');
  const dec = document.getElementById('dec-font');
  const contrast = document.getElementById('toggle-contrast');
  const announcer = document.getElementById('access-announcer');
  const min = 16, max = 22;
  const getSize = () => parseFloat(getComputedStyle(document.documentElement).fontSize);
  const setSize = (px) => document.documentElement.style.fontSize = px + 'px';
  const say = (t) => { announcer.textContent = ''; setTimeout(()=> announcer.textContent = t, 0); };

  inc.addEventListener('click', ()=>{
    const s = Math.min(max, getSize()+1);
    setSize(s); say('Fonte aumentada para ' + s + ' pixels.');
  });
  dec.addEventListener('click', ()=>{
    const s = Math.max(min, getSize()-1);
    setSize(s); say('Fonte reduzida para ' + s + ' pixels.');
  });
  contrast.addEventListener('click', ()=>{
    const pressed = contrast.getAttribute('aria-pressed') === 'true';
    contrast.setAttribute('aria-pressed', String(!pressed));
    document.body.classList.toggle('high-contrast');
    say('Modo de alto contraste ' + (!pressed ? 'ativado' : 'desativado') + '.');
  });
})();