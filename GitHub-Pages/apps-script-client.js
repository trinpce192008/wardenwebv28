/* Apps Script HTML-service bridge. No backend or API key in this website. */
(()=>{
 const pending=new Map();let peer=null,peerOrigin='',frame=null,ready=null,nonce='';
 const validGoogle=origin=>/^https:\/\/([a-z0-9-]+-)?script\.googleusercontent\.com$/.test(origin)||origin==='https://script.google.com';
 function connect(){
  if(ready)return ready;
  ready=new Promise((resolve,reject)=>{
   const url=window.WARDEN_CONFIG?.appsScriptUrl||'';
   if(!/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(url)){reject(new Error('Chưa cấu hình Apps Script. Mở config.js và dán URL /exec.'));return}
   nonce=crypto.randomUUID();
   const timer=setTimeout(()=>{window.removeEventListener('message',onReady);frame?.remove();ready=null;reject(new Error('Không kết nối được Apps Script. Kiểm tra quyền Anyone, ALLOWED_ORIGIN và URL /exec.'))},35000);
   function onReady(e){if(!validGoogle(e.origin)||e.data?.type!=='warden-ready'||e.data.nonce!==nonce)return;peer=e.source;peerOrigin=e.origin;clearTimeout(timer);window.removeEventListener('message',onReady);resolve()}
   window.addEventListener('message',onReady);
   frame=document.createElement('iframe');frame.title='Warden Apps Script connection';frame.hidden=true;frame.src=url+'?nonce='+encodeURIComponent(nonce)+'&origin='+encodeURIComponent(location.origin);document.body.append(frame);
  });return ready;
 }
 window.addEventListener('message',e=>{
  if(e.source!==peer||e.origin!==peerOrigin||e.data?.type!=='warden-response'||e.data.nonce!==nonce)return;
  const task=pending.get(e.data.id);if(!task)return;task.finish(e.data.result);
 });
 window.wardenRequest=async(path,options={})=>{
  const config=window.WARDEN_CONFIG||{};
  if(config.surveyUrl && (path==='/api/survey'||path==='/api/survey/status')) {
   const response=await fetch(config.surveyUrl,{method:path==='/api/survey'?'POST':'GET',...(path==='/api/survey'?{headers:{'Content-Type':'text/plain;charset=utf-8'},body:options.body}:{}),redirect:'follow',credentials:'omit',signal:options.signal});
   const result=await response.json();
   if(path==='/api/survey/status')return {ok:response.ok,json:async()=>({ready:response.ok&&result.ok===true&&result.service==='Warden survey'})};
   return {ok:response.ok,json:async()=>result};
  }
  if(config.useSiteAI===true && location.hostname==='warden-interactive-demo.nuttycow5.chatgpt.site' && (path==='/api/chat'||path==='/api/health'))return fetch(path,options);
  await connect();if(options.signal?.aborted)throw new DOMException('Aborted','AbortError');
  const action={'/api/chat':'chat','/api/health':'health','/api/survey':'survey','/api/survey/status':'survey-status'}[path];
  if(!action)throw new Error('Unsupported request');
  const payload=options.body?JSON.parse(options.body):{};const id=crypto.randomUUID();
  return new Promise((resolve,reject)=>{
   let timer;const clean=()=>{clearTimeout(timer);pending.delete(id);options.signal?.removeEventListener('abort',abort)};
   const abort=()=>{clean();reject(new DOMException('Aborted','AbortError'))};
   timer=setTimeout(()=>{clean();reject(new Error('Apps Script quá thời gian phản hồi. Hãy thử lại.'))},60000);
   pending.set(id,{finish:result=>{clean();resolve({ok:!!result&&!result.error,json:async()=>result||{error:'Không có phản hồi'}})}});
   options.signal?.addEventListener('abort',abort,{once:true});
   peer.postMessage({type:'warden-request',nonce,id,action,payload},peerOrigin);
  });
 };
})();
