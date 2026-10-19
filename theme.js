/* Theme is presentation-only; leave simulation and AI state untouched. */
(()=>{
 const root=document.documentElement;
 let current='light';
 try { const saved=localStorage.getItem('warden-theme'); if(saved==='dark'||saved==='light')current=saved; } catch {}
 function apply(value){
  current=value;root.dataset.theme=value;
  document.querySelectorAll('[data-theme-toggle]').forEach(button=>button.setAttribute('aria-pressed',String(value==='dark')));
 }
 apply(current);
 document.addEventListener('DOMContentLoaded',()=>apply(current));
 document.addEventListener('click',event=>{
  if(!event.target.closest('[data-theme-toggle]'))return;
  apply(current==='dark'?'light':'dark');
  try{localStorage.setItem('warden-theme',current)}catch{}
 });
 window.addEventListener('storage',event=>{if(event.key==='warden-theme')apply(event.newValue==='dark'?'dark':'light')});
})();
