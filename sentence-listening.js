/* Palabra V4 optional sentence listening panel: locally hosted, no external JS. */
(()=>{'use strict';
  const clean=s=>String(s||'').normalize('NFC').trim().toLocaleLowerCase('es').replace(/^[¡¿\s]+|[!?.,;:\s]+$/g,'');
  const panel=document.getElementById('learn'), card=document.getElementById('es');
  if(!panel||!card||document.getElementById('palabraSentencePanel'))return;
  const section=document.createElement('section');section.id='palabraSentencePanel';section.setAttribute('aria-label','西语例句听力');
  section.style.cssText='margin:18px 0 6px;padding:16px;border:1px solid #dce6dc;border-radius:16px;background:#f6faf6;line-height:1.65';
  const heading=document.createElement('strong');heading.textContent='🎧 真人例句听力 · Tatoeba';
  const sentence=document.createElement('p');sentence.id='palabraSentenceText';sentence.style.cssText='font-size:16px;min-height:26px;overflow-wrap:anywhere;margin:10px 0';
  const controls=document.createElement('div');controls.style.cssText='display:flex;gap:10px;flex-wrap:wrap;align-items:center';
  const play=document.createElement('button');play.type='button';play.textContent='▶ 播放整句';play.disabled=true;
  const link=document.createElement('a');link.target='_blank';link.rel='noopener noreferrer';link.textContent='查看来源与许可';link.hidden=true;link.style.cssText='font-size:13px;color:#287657';
  const status=document.createElement('p');status.setAttribute('role','status');status.style.cssText='font-size:12px;color:#64776d;margin:8px 0 0';
  controls.append(play,link);section.append(heading,sentence,controls,status);panel.append(section);
  let data={},audio=null,current='';
  function show(){
    const key=clean(card.textContent), v=data[key];current=key;
    if(audio){audio.pause();audio=null;}
    sentence.textContent=v?.text||'这个单词暂时没有授权的真人例句录音。';
    play.disabled=!(v?.audio&&/^sentence-audio\/[a-zA-Z0-9_-]+\.mp3$/.test(v.audio));
    link.hidden=!(v?.source&&/^https:\/\/tatoeba\.org\//.test(v.source));
    if(!link.hidden)link.href=v.source;
    status.textContent=v?`音频：${v.speaker||'Tatoeba 贡献者'} · ${v.audio_license||'许可待核验'}；例句文本：CC BY 2.0 FR`:'单词发音请使用卡片上方的「西语发音」按钮。';
  }
  play.addEventListener('click',async()=>{
    const v=data[current];if(!v||!v.audio||play.disabled)return;
    try{if(audio)audio.pause();audio=new Audio('./'+v.audio);await audio.play();status.textContent='正在播放整句真人录音。';
    }catch{status.textContent='音频加载失败，请检查 GitHub Pages 的音频文件。';}
  });
  const observer=new MutationObserver(show);observer.observe(card,{childList:true,characterData:true,subtree:true});
  fetch('./sentence-manifest.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('not found');return r.json()}).then(j=>{if(j&&typeof j==='object'&&!Array.isArray(j))data=j;show();}).catch(()=>show());
  show();
})();
