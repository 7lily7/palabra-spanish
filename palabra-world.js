(()=>{'use strict';
const body=document.body;
const themeBtns=[...document.querySelectorAll('[data-world-theme]')].filter(x=>x.tagName==='BUTTON');
const motion=document.getElementById('worldDepthBtn');
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let theme='sunlit';try{theme=localStorage.getItem('palabra-ui-scene-v1')||theme}catch{}
function setTheme(t){
 if(t!=='sunlit'&&t!=='mosaic')return;
 body.dataset.worldTheme=t;
 themeBtns.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.worldTheme===t)));
 try{localStorage.setItem('palabra-ui-scene-v1',t)}catch{}
}
setTheme(theme);
themeBtns.forEach(btn=>btn.addEventListener('click',()=>setTheme(btn.dataset.worldTheme)));
let depth=!reduce;
function updateDepth(){
 motion.textContent=depth?'✦ 立体动效：开启':'✦ 立体动效：关闭';
 motion.setAttribute('aria-pressed',String(depth));
 document.querySelectorAll('.world-tilt').forEach(el=>{if(!depth)el.style.transform='';});
}
motion.addEventListener('click',()=>{depth=!depth;updateDepth()});updateDepth();
// Real 3D model remains fully interactive: do not intercept its pointer events.
const hero=document.querySelector('.barcelona-hero');
if(hero){
 hero.addEventListener('pointermove',e=>{
  if(!depth||e.pointerType!=='mouse'||e.target.closest('model-viewer,button,select,input,a'))return;
  const r=hero.getBoundingClientRect(),dx=(e.clientX-r.left)/r.width-.5,dy=(e.clientY-r.top)/r.height-.5;
  hero.style.transform=`perspective(1300px) rotateY(${dx*2.3}deg) rotateX(${-dy*1.5}deg)`;
 });
 hero.addEventListener('pointerleave',()=>hero.style.transform='');
}
// Respect tablet performance: parallax only on mouse/trackpad, not touch.
document.querySelectorAll('main>.panel, main>.stats>.stat').forEach(el=>{
 el.classList.add('world-tilt');
 el.addEventListener('pointermove',e=>{
  if(!depth||e.pointerType!=='mouse'||e.target.closest('input,button,select,textarea,a,model-viewer'))return;
  const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  el.style.transform=`perspective(950px) rotateX(${-y*2}deg) rotateY(${x*2}deg) translateY(-2px)`;
 });
 el.addEventListener('pointerleave',()=>el.style.transform='');
});
})();