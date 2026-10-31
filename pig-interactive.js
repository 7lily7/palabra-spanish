(()=>{'use strict';
const el=document.getElementById('palabraPigModel');if(!el)return;
const status=document.getElementById('pigSpeech'), loading=document.getElementById('pigLoading');
const hero=document.getElementById('heroArt'),talk=document.getElementById('pigTalk');
const spin=document.getElementById('pigSpin'),reset=document.getElementById('pigReset');
const greetings=[
 {text:'¡Hola! 🐷 你好呀！',url:'./audio/hola.ogg'},
 {text:'¡Gracias! 💖 谢谢你！',url:'./audio/gracias.ogg'},
 {text:'¡Buenos días! ☀️ 早上好！',url:'./audio/buenos-dias.ogg'},
 {text:'¡Mucho gusto! 🌷 很高兴认识你！',url:'./audio/mucho-gusto.ogg'},
 {text:'¡Adiós! 👋 再见！',url:'./audio/adios.ogg'}
];
let index=-1,voice=null,pressed=null,rotating=false;
async function speak(){
 index=(index+1)%greetings.length;const item=greetings[index];status.textContent=item.text;
 hero.classList.remove('is-talking');void hero.offsetWidth;hero.classList.add('is-talking');
 if(voice){voice.pause();voice.currentTime=0}voice=new Audio(item.url);voice.preload='auto';
 try{await voice.play()}catch(e){status.textContent=item.text+' · 音频需在 GitHub 仓库中与现有 audio/ 文件一起发布';}
}
talk.addEventListener('click',speak);
spin.addEventListener('click',()=>{rotating=!rotating;el.toggleAttribute('auto-rotate',rotating);spin.textContent=rotating?'⏸ 暂停旋转':'↻ 自动旋转'});
reset.addEventListener('click',()=>{el.cameraOrbit='25deg 72deg 8.2m';el.jumpCameraToGoal?.();status.textContent='🐷 ¡Vamos! 回到正面啦！'});
el.addEventListener('pointerdown',e=>{pressed={x:e.clientX,y:e.clientY,time:Date.now()}});
el.addEventListener('pointerup',e=>{
 if(!pressed)return;const dist=Math.hypot(e.clientX-pressed.x,e.clientY-pressed.y),elapsed=Date.now()-pressed.time;
 pressed=null;if(dist<9&&elapsed<700)speak();
});
el.addEventListener('pointercancel',()=>pressed=null);
el.addEventListener('load',()=>{if(loading)loading.textContent='已加载真正的 3D 模型 · 拖动旋转，点击小猪听西语！'});
el.addEventListener('error',()=>{if(loading)loading.textContent='3D 加载失败。请确认模型文件在仓库根目录，且浏览器可访问 model-viewer。'});
// Allow keyboard-only visitors to speak without relying on pointer hit testing.
})();