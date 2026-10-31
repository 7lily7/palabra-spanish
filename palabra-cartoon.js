(()=>{'use strict';
const $=id=>document.getElementById(id);
const btns=[...document.querySelectorAll('[data-ui-theme]')];
let theme='sunlit';try{const saved=localStorage.getItem('palabra-cartoon-theme');if(['sunlit','mosaic'].includes(saved))theme=saved;}catch{}
function setTheme(t){if(!['sunlit','mosaic'].includes(t))return;document.body.dataset.palabraTheme=t;btns.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.uiTheme===t)));try{localStorage.setItem('palabra-cartoon-theme',t)}catch{}}
btns.forEach(b=>b.addEventListener('click',()=>setTheme(b.dataset.uiTheme)));setTheme(theme);
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
function jump(tab){if(tab==='home'){scrollTo({top:0,behavior:reduced?'instant':'smooth'});return}const original=document.querySelector('#nav [data-tab="'+tab+'"]');if(!original)return;original.click();document.querySelectorAll('[data-ui-go]').forEach(b=>b.classList.toggle('selected',b.dataset.uiGo===tab));$(tab)?.scrollIntoView({block:'start',behavior:reduced?'instant':'smooth'});}
document.querySelectorAll('[data-ui-go]').forEach(b=>b.addEventListener('click',()=>jump(b.dataset.uiGo)));
$('uiStart')?.addEventListener('click',()=>jump('learn'));
$('uiBooks')?.addEventListener('click',()=>{$('bookSelect')?.scrollIntoView({block:'center',behavior:reduced?'instant':'smooth'});$('bookSelect')?.focus({preventScroll:true})});
$('uiHeroNext')?.addEventListener('click',()=>{jump('learn');$('next')?.click();refreshCard()});
$('uiHeroSpeak')?.addEventListener('click',()=>{$('speak')?.click()});
function refreshCard(){const value=$('es')?.textContent?.trim();if(value)$('uiHeroWord').textContent=value;const zh=$('zh')?.textContent?.trim();$('uiHeroMeaning').textContent=zh&&(!$('meaning')?.classList.contains('hidden'))?zh:'点击「开始学习」查看释义';const select=$('bookSelect');$('uiHeroBook').textContent=select?.selectedOptions?.[0]?.textContent?.split('·')[0]?.trim()||'PALABRA';}
const original=$('es');if(original)new MutationObserver(refreshCard).observe(original,{childList:true,characterData:true,subtree:true});
$('bookSelect')?.addEventListener('change',refreshCard);$('reveal')?.addEventListener('click',()=>requestAnimationFrame(refreshCard));refreshCard();
document.addEventListener('click',e=>{const button=e.target.closest('button');if(!button||reduced)return;button.classList.remove('ui-bounce');void button.offsetWidth;button.classList.add('ui-bounce');},{capture:true});
document.addEventListener('animationend',e=>{if(e.target.matches('button.ui-bounce'))e.target.classList.remove('ui-bounce')});
})();