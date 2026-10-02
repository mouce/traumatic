// Pure viewing: close only, no recording or questionnaire navigation.
(() => {
 function install(){
  const end=document.querySelector('#finding .review-complete');
  if(!end || document.getElementById('closeViewingTab')) return;
  const area=document.createElement('section');
  area.style.cssText='padding:28px 0;text-align:center;border-top:1px solid var(--line-dark);margin-top:28px';
  area.innerHTML='<h3>Review complete</h3><p style="font-size:16px;line-height:1.7;margin:12px auto;max-width:640px">Close this tab, then continue in your original questionnaire tab.</p><button id="closeViewingTab" type="button" style="font:inherit;font-size:16px;padding:14px 24px;background:var(--deep);color:#fff;border:1px solid var(--deep);cursor:pointer;max-width:100%">Close this tab / 關閉此分頁</button><p id="closeFallback" role="status" aria-live="polite" hidden style="font-size:16px;line-height:1.7;margin:14px auto;max-width:640px">If this tab stays open, close it manually and switch to the original questionnaire tab. 若此分頁沒有關閉，請手動關閉，再切回原問卷分頁。</p>';
  end.insertAdjacentElement('afterend',area);
  document.getElementById('closeViewingTab').addEventListener('click',()=>{
   document.getElementById('closeFallback').hidden=false;
   window.close();
  });
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install);else install();
})();
