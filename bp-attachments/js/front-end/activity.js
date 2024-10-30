!function(){const{template:t}=lodash;const{i18n:{__:e}}=wp,{filter:i}=lodash;var n=t=>{const i=[e("Bytes","bp-attachments"),e("KB","bp-attachments"),e("MB","bp-attachments"),e("GB","bp-attachments"),e("TB","bp-attachments")];if(0===t)return"0 "+i[0];const n=parseInt(Math.floor(Math.log(t)/Math.log(1024)),10);return 0===n?`${t} ${i[n]}`:`${(t/1024**n).toFixed(1)} ${i[n]}`};const{domReady:a}=wp;window.bp=window.bp||{},window.bp.Attachments=window.bp.Attachments||{};const s=window.bpAttachmentsActivitySettings||{};window.bp.Attachments.Activity=new class{renderItemPreview(e){var i;return(i="bp-media-preview",t(document.querySelector("#tmpl-"+i).innerHTML,{evaluate:/<#([\s\S]+?)#>/g,interpolate:/\{\{\{([\s\S]+?)\}\}\}/g,escape:/\{\{([^\}]+?)\}\}(?!\})/g,variable:"data"}))(e)}upload(t){const{collection:{models:e},model:{attributes:{user_id:i}}}=t,a=document.createElement("input");a.type="file",a.id="bp-attachments-activity-medium",a.name="_bp_attachments_activity_medium",a.style="display: none;",a.accept=this.allowedTypes,this.container.querySelector("#bp-attachments-activity-medium")||(this.container.append(a),a.click()),a.addEventListener("change",(a=>{a.preventDefault();const s=a.target.files[0];if(s&&-1===this.uploadedFiles.indexOf(s.name)){this.uploadedFiles.push(s.name);const a=new FormData;a.append("file",s),a.append("action","bp_attachments_media_upload"),a.append("object","members"),a.append("object_item",i),a.append("visibility","public"),a.append("total_bytes",s.size);const o=t.model.get("errors");o&&o.origin&&"bpAttachments"===o.origin&&t.model.unset("errors"),fetch(this.endpoint,{method:"POST",body:a,headers:{"X-WP-Nonce":this.nonce}}).then((t=>t.json())).then((e=>{e.code&&e.message?t.model.set("errors",{type:"error",value:e.message,origin:"bpAttachments"}):(e.size&&(e.size=n(e.size)),document.querySelector("#bp-attachments-activity-medium-preview").innerHTML=this.renderItemPreview(e))})).finally((()=>{this.container.querySelector("#bp-attachments-activity-medium").remove(),e.forEach((t=>{"bpAttachments"===t.get("id")&&t.set("active",!1)}))}))}}))}reset(){document.querySelector("#bp-attachments-activity-medium-preview").innerHTML=""}start(){const t=document.createElement("div");t.id="bp-attachments-activity-medium-preview",this.container.append(t),this.ActivityButtons.on("display:bpAttachments",(t=>this.upload(t))),this.ActivityButtons.on("resetForm:bpAttachments",(()=>this.reset())),this.container.addEventListener("click",(t=>{if("bp-attachments-medium-preview-exit"===t.target.getAttribute("id"))return t.preventDefault(),this.reset()})),document.querySelector("#whats-new").addEventListener("focus",(()=>{document.querySelectorAll('[data-button="bpAttachments"]').forEach((t=>{t.classList.contains("bp-tooltip")||(t.classList.add("bp-tooltip"),t.setAttribute("data-bp-tooltip",t.querySelector(".bp-screen-reader-text").innerHTML))}))}))}constructor({path:t,root:e,nonce:i,allowedExtTypes:n}){const{bp:{Nouveau:{Activity:{postForm:{buttons:a}}}}}=window;this.ActivityButtons=a,this.container=document.querySelector("#whats-new-textarea"),this.endpoint=e+t,this.nonce=i,this.allowedTypes=n,this.uploadedFiles=[]}}(s),a((()=>window.bp.Attachments.Activity.start()))}();
//# sourceMappingURL=activity.js.map
