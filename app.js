const home=document.querySelector('#home'),notes=document.querySelector('#notes');
function route(){const showNotes=location.hash==='#notes';home.hidden=showNotes;notes.hidden=!showNotes;document.title=showNotes?'Writings — Rohan Shukla':'Rohan Shukla — Quiet pages';window.scrollTo(0,0)}
addEventListener('hashchange',route);route();
const theme=document.querySelector('.theme-toggle');function applyTheme(dark){document.body.classList.toggle('dark',dark);theme.textContent=dark?'☀':'☾';theme.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode')}
try{applyTheme(localStorage.getItem('rohan-theme')==='dark')}catch{}
theme.addEventListener('click',()=>{const dark=!document.body.classList.contains('dark');applyTheme(dark);try{localStorage.setItem('rohan-theme',dark?'dark':'light')}catch{}});
document.querySelector('#collapse').addEventListener('click',()=>{document.querySelectorAll('details').forEach(d=>d.open=false)});
