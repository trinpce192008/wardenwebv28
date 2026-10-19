function topDescription(){const top=$('.top');if(!top.querySelector('.description-button'))top.insertAdjacentHTML('afterbegin','<button class="description-button" data-action="page-description" type="button">ⓘ Mô tả</button>');return true}
/* Unified VIP workspace and non-modal, anchored onboarding. */
let sidebarCollapsed=false;
const workspaceRender=render;
function workspaceNavigation(){
 const items=nav.filter(n=>n[0]!=='chat');
 $('.nav').innerHTML=items.map(([id,i,label])=>{const selected=id===route||(id==='vip'&&route==='chat');return `<button data-route="${id}" class="u040-it ${selected?'active':''}" ${selected?'aria-current="page"':''} title="${id==='vip'?'App Beta':label}" aria-label="${id==='vip'?'App Beta':label}">${icon(i)}<span class="nav-text">${id==='vip'?'App Beta':label}</span></button>`}).join('');
}
function workspaceChrome(){
 if(route==='home')return;
 workspaceNavigation();
 document.querySelectorAll('.nav button').forEach((b,i)=>b.style?.setProperty('--i',i));
 if(!topDescription()){}
 const top=$('.top');
 if(!$('#sidebar-toggle'))$('.sidebar').insertAdjacentHTML('afterbegin','<button id="sidebar-toggle" class="icon-button sidebar-toggle" aria-controls="workspace-sidebar" aria-label="Thu gọn thanh bên" title="Thu gọn thanh bên" data-action="toggle-sidebar"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9 4v16 M13 9l3 3-3 3"/></svg></button>');
 const sidebar=$('.sidebar');if($('#sidebar-toggle').parentElement!==sidebar)sidebar.insertBefore($('#sidebar-toggle'),sidebar.firstChild);
 $('.shell').classList.toggle('sidebar-collapsed',sidebarCollapsed);$('.shell').classList.toggle('is-wide',!sidebarCollapsed);$('#sidebar-toggle').setAttribute('aria-expanded',String(!sidebarCollapsed));
 const old=top.querySelector('.guide-button');if(old)old.remove();
 const guide=$('#page .guide-button');if(guide)top.insertBefore(guide,top.firstChild);
 $('#page .page-heading')?.remove();
 if(route==='vip'||route==='chat')$('#page').insertAdjacentHTML('afterbegin',`<div class="vip-subtabs" role="tablist" aria-label="Tính năng VIP"><button role="tab" id="vip-browser-tab" aria-selected="${route==='vip'}" aria-controls="vip-panel" data-route="vip">${icon('shield')}<span>Trình duyệt bảo mật</span></button><button role="tab" id="vip-ai-tab" aria-selected="${route==='chat'}" aria-controls="vip-panel" data-route="chat">${icon('spark')}<span>Bảo vệ bằng AI</span></button><span class="pill">VIP</span></div>`);
 if(route==='vip'||route==='chat'){
 const panel=document.createElement('div');panel.id='vip-panel';panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby',route==='vip'?'vip-browser-tab':'vip-ai-tab');const tabs=$('.vip-subtabs');while(tabs.nextSibling)panel.append(tabs.nextSibling);$('#page').append(panel);
 }
}
render=function(r){workspaceRender(r);workspaceChrome()};
actions['toggle-sidebar']=()=>{sidebarCollapsed=!sidebarCollapsed;$('.shell').classList.toggle('sidebar-collapsed',sidebarCollapsed);$('.shell').classList.toggle('is-wide',!sidebarCollapsed);const btn=$('#sidebar-toggle');btn.setAttribute('aria-expanded',String(!sidebarCollapsed));btn.setAttribute('aria-label',sidebarCollapsed?'Mở thanh bên':'Thu gọn thanh bên');btn.setAttribute('title',sidebarCollapsed?'Mở thanh bên':'Thu gọn thanh bên');if(tour)requestAnimationFrame(positionTour)};
// Keep both VIP routes for old bookmarks; only one entry is shown in the side navigation.
document.addEventListener('keydown',e=>{const tab=e.target.closest('.vip-subtabs [role="tab"]');if(!tab||!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const r=e.key==='Home'?'vip':e.key==='End'?'chat':route==='vip'?'chat':'vip';go(r);setTimeout(()=>document.getElementById(r==='vip'?'vip-browser-tab':'vip-ai-tab')?.focus(),0)});
const originalTourSteps=tourSteps;
tourSteps=function(r){const steps=originalTourSteps(r);steps[0].selector=r==='vip'||r==='chat'?'.vip-subtabs':'.top';if(r==='recovery'&&steps[2])steps[2].selector='#recovery-steps';if(r==='vip'){
 steps[1]={selector:'.protection-controls',heading:'Bảo vệ màn hình',text:pageHelp.vip[2][0],labTab:'screen'};
 steps[2]={selector:'.auth-choice',heading:'Kho mật khẩu & OTP',text:pageHelp.vip[2][1],labTab:'vault'};
 steps[3]={selector:'.vault-row',heading:'Xác thực trước khi xem',text:pageHelp.vip[2][2],labTab:'vault'};
 }return steps};
let tourAnchor=null;
endTour=function(){clearTourHighlight();if(tour){tourSeen.add(tour.route);try{localStorage.setItem('warden-tour-v2-'+tour.route,'done')}catch{}tour=null}$('#tour-popover')?.remove();tourAnchor=null;tourReturn?.focus?.()};
function positionTour(){const p=$('#tour-popover');if(!p||!tourAnchor?.isConnected)return;const a=tourAnchor.getBoundingClientRect(),gap=16,pad=14,w=p.offsetWidth,h=p.offsetHeight,vw=window.innerWidth,vh=window.innerHeight;let side='bottom',x=a.left,y=a.bottom+gap;
 if(vw-a.right>w+gap+pad){side='right';x=a.right+gap;y=a.top}
 else if(a.left>w+gap+pad){side='left';x=a.left-w-gap;y=a.top}
 else if(vh-a.bottom<h+gap+pad&&a.top>h+gap+pad){side='top';y=a.top-h-gap}
 else if(vh-a.bottom<h+gap+pad){y=Math.max(pad,vh-h-pad)}
 x=Math.min(Math.max(pad,x),Math.max(pad,vw-w-pad));y=Math.min(Math.max(pad,y),Math.max(pad,vh-h-pad));p.style.left=x+'px';p.style.top=y+'px';p.dataset.side=side;
 const arrow=(side==='left'||side==='right')?Math.min(h-24,Math.max(24,a.top+a.height/2-y)):Math.min(w-24,Math.max(24,a.left+a.width/2-x));p.style.setProperty('--arrow-offset',arrow+'px');
}
showTourStep=function(){if(!tour)return;clearTourHighlight();const s=tour.steps[tour.index];if(s.labTab&&route==='vip'){lab.tab=s.labTab;renderLab()}tourAnchor=document.querySelector(s.selector)||$('#page');tourAnchor.classList.add('tour-highlight');tourAnchor.scrollIntoView({block:'nearest',behavior:'instant'});$('#tour-popover')?.remove();document.body.insertAdjacentHTML('beforeend',`<aside id="tour-popover" class="tour-popover" role="dialog" aria-modal="false" aria-labelledby="tour-title"><span class="tour-arrow" aria-hidden="true"></span><p class="tour-count">Hướng dẫn ${tour.index+1} / ${tour.steps.length}</p><h3 id="tour-title">${escapeHTML(s.heading)}</h3><p>${escapeHTML(s.text)}</p><div class="row"><button data-action="tour-skip">Bỏ qua tất cả</button><button class="primary" data-action="tour-next">${tour.index===tour.steps.length-1?'Hoàn tất':'Kế tiếp →'}</button></div></aside>`);positionTour();requestAnimationFrame(positionTour);$('#tour-popover [data-action="tour-next"]').focus({preventScroll:true})};
actions['tour-skip']=endTour;
actions['page-help']=()=>{if(tour)endTour();startTour()};
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&tour){e.preventDefault();endTour()}});
window.addEventListener('resize',positionTour);window.addEventListener('scroll',positionTour,true);
document.fonts?.ready.then(positionTour);
const tourResize=typeof ResizeObserver!=='undefined'?new ResizeObserver(positionTour):null;
const previousShowTourStep=showTourStep;showTourStep=function(){previousShowTourStep();tourResize?.disconnect();if($('#tour-popover'))tourResize?.observe($('#tour-popover'))};
render(route);

actions['page-description']=()=>{const entry=pageHelp[route]||[nav.find(n=>n[0]===route)?.[2]||'Warden',route==='survey'?'Gửi đánh giá trải nghiệm để nhóm cải thiện Warden.':'Trải nghiệm và tìm hiểu các tính năng bảo mật của Warden.'];modal(entry[0],'<p>'+escapeHTML(entry[1])+'</p><p class="muted">'+escapeHTML(entry[3]||'Bản demo tương tác, không quét thiết bị.')+'</p>')};
