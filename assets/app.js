(() => {
 const menu = document.getElementById('menuToggle');
 const nav = document.getElementById('navLinks');
 if (menu && nav) menu.addEventListener('click', () => {
   const open = nav.classList.toggle('open');
   menu.setAttribute('aria-expanded', String(open));
 });
 document.querySelectorAll('.directory-tabs .tab').forEach(tab => {
   tab.addEventListener('click', () => {
     document.querySelectorAll('.directory-tabs .tab').forEach(item => {
       const active = item === tab;
       item.classList.toggle('active', active);
       item.setAttribute('aria-selected', String(active));
     });
     document.querySelectorAll('.tab-panel').forEach(panel => {
       const active = panel.id === 'panel-' + tab.dataset.tab;
       panel.hidden = !active;
       panel.classList.toggle('active', active);
     });
   });
 });
})();