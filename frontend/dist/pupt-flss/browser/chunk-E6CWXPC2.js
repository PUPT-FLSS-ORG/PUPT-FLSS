import{a as ee,b as te,c as ne}from"./chunk-NME5OWLW.js";import{l as Q}from"./chunk-OJYR24EB.js";import{a as q}from"./chunk-AY56TXUB.js";import{g as Y,k as J,u as K}from"./chunk-VMH4ILIM.js";import{a as X,b as Z}from"./chunk-6AWQUBPH.js";import{a as N,b as z}from"./chunk-VORQTW3B.js";import{a as R,c as H}from"./chunk-L2D7AHNW.js";import{a as W}from"./chunk-6QI4QBU5.js";import{d as G}from"./chunk-KXJUWRJT.js";import{k as L,p as j,t as B}from"./chunk-2T5SWUVG.js";import{$b as C,Ab as x,Bb as b,Cb as l,Db as a,Eb as h,Ib as T,Nb as k,Pb as c,Ta as V,Wa as o,Xa as w,Zb as s,_b as _,bc as E,cc as $,dc as A,ec as I,gc as D,ha as S,ic as U,mb as p,qa as P,ra as O,rb as g,sb as F,xb as m,zb as f}from"./chunk-NSU275EB.js";import{a as v,b as M}from"./chunk-ODN5LVDJ.js";var ae=i=>({"schedule-block-start":i});function re(i,d){if(i&1&&(l(0,"th"),s(1),a()),i&2){let e=d.$implicit;o(),_(e)}}function le(i,d){if(i&1&&(l(0,"div"),s(1),a()),i&2){let e=c(2).$implicit,t=c().$index,n=c();o(),E(" (",n.getBlockProperty(e,t,"program")," ",n.getBlockProperty(e,t,"yearLevel"),"-",n.getBlockProperty(e,t,"section"),") ")}}function ce(i,d){if(i&1&&(l(0,"div"),s(1),a()),i&2){let e=c(2).$implicit,t=c().$index,n=c();o(),C(" ",n.getBlockProperty(e,t,"facultyName")," ")}}function de(i,d){if(i&1&&(l(0,"div"),s(1),a()),i&2){let e=c(2).$implicit,t=c().$index,n=c();o(),C(" ",n.getBlockProperty(e,t,"roomCode")," ")}}function se(i,d){if(i&1&&(l(0,"div",7)(1,"div",8)(2,"span",9),s(3),h(4,"br"),s(5),a()(),p(6,le,2,3,"div")(7,ce,2,1,"div")(8,de,2,1,"div"),l(9,"div",10),s(10),a()()),i&2){let e=c().$implicit,t=c().$index,n=c();F("height",n.getScheduleBlockHeight(e,t),"px"),g("ngClass",n.getDayClass(e)),o(3),C(" ",n.getBlockProperty(e,t,"courseCode"),""),o(2),C(" ",n.getBlockProperty(e,t,"courseTitle")," "),o(),m(n.entity==="faculty"||n.entity==="room"?6:-1),o(),m(n.entity==="program"||n.entity==="room"?7:-1),o(),m(n.entity==="faculty"||n.entity==="program"?8:-1),o(2),_(n.getFormattedTime(e,t))}}function ue(i,d){if(i&1&&(l(0,"td",5),p(1,se,11,9,"div",6),a()),i&2){let e=d.$implicit,t=c().$index,n=c();g("ngClass",U(3,ae,n.isScheduleBlockStart(e,t)))("ngStyle",n.getScheduleBlockStyle(e,t)),o(),m(n.isScheduleBlockStart(e,t)?1:-1)}}function me(i,d){if(i&1&&(l(0,"tr")(1,"td",4),s(2),a(),x(3,ue,2,5,"td",5,f),a()),i&2){let e=d.$implicit,t=c();o(2),_(e.time),o(),b(t.days)}}var ie=(()=>{class i{scheduleData;entity;days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];timeSlots=[];scheduleBlocks=[];ngOnInit(){this.generateTimeSlots(),this.processScheduleData()}generateTimeSlots(){for(let r=420;r<=1260;r+=30){let u=this.formatMinutesTo12Hour(r);this.timeSlots.push({time:u,minutes:r})}}processScheduleData(){Array.isArray(this.scheduleData)&&this.scheduleData.length>0?this.scheduleData.forEach(e=>{let t=this.convertTimeToMinutes(e.start_time),n=this.convertTimeToMinutes(e.end_time),r=this.findTimeSlotIndex(t),u=Math.ceil((n-t)/30),y=(n-t)%30===0?u+1:u;this.scheduleBlocks.push({day:e.day,startSlot:r,duration:y,courseCode:e.course_details.course_code,courseTitle:e.course_details.course_title,roomCode:e.room_code,facultyName:e.faculty_name,program:e.program_code,yearLevel:e.year_level,section:e.section_name})}):console.warn("No schedules found or invalid data structure:",this.scheduleData)}convertTimeToMinutes(e){let[t,n]=e.split(":").map(Number);return t*60+n}findTimeSlotIndex(e){return this.timeSlots.findIndex(t=>t.minutes>=e)}isScheduleBlockStart(e,t){return this.scheduleBlocks.some(n=>n.day===e&&t===n.startSlot)}getScheduleBlockHeight(e,t){let n=this.getScheduleBlock(e,t);return n?n.duration*26-2:0}getScheduleBlockStyle(e,t){let n=this.getScheduleBlock(e,t);if(n){let{backgroundColor:r,borderColor:u}=this.getBlockColors(e),y={"background-color":r,"border-left":`1px solid ${u}`,"border-right":`1px solid ${u}`};return t===n.startSlot?M(v({},y),{"border-top":`1px solid ${u}`}):t===n.startSlot+n.duration-1?M(v({},y),{"border-bottom":`1px solid ${u}`}):y}return{}}getDayClass(e){return`schedule-${e.toLowerCase()}`}getBlockProperty(e,t,n){let r=this.getScheduleBlock(e,t);return r?r[n]:null}getFormattedTime(e,t){if(this.getScheduleBlock(e,t)){let r=this.scheduleData.find(u=>u.day===e&&this.convertTimeToMinutes(u.start_time)===this.timeSlots[t].minutes);if(r)return`${this.formatTimeTo12Hour(r.start_time)} - ${this.formatTimeTo12Hour(r.end_time)}`}return""}getBlockColors(e){return{Monday:{backgroundColor:"var(--primary-fade)",borderColor:"var(--primary-text)"},Tuesday:{backgroundColor:"var(--secondary-fade)",borderColor:"var(--secondary-text)"},Wednesday:{backgroundColor:"var(--blue-fade)",borderColor:"var(--blue-primary)"},Thursday:{backgroundColor:"var(--aqua-fade)",borderColor:"var(--aqua-primary)"},Friday:{backgroundColor:"var(--purple-fade)",borderColor:"var(--purple-primary)"},Saturday:{backgroundColor:"var(--green-fade)",borderColor:"var(--green-primary)"},Sunday:{backgroundColor:"var(--primary-fade)",borderColor:"var(--primary-text)"}}[e]}formatMinutesTo12Hour(e){let t=Math.floor(e/60),n=e%60,r=t>=12?"PM":"AM";return`${t%12||12}:${n.toString().padStart(2,"0")} ${r}`}formatTimeTo12Hour(e){let[t,n]=e.split(":").map(Number),r=t>=12?"PM":"AM";return t=t%12||12,`${t}:${n.toString().padStart(2,"0")} ${r}`}getScheduleBlock(e,t){return this.scheduleBlocks.find(n=>n.day===e&&t>=n.startSlot&&t<n.startSlot+n.duration)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["app-schedule-timeline"]],inputs:{scheduleData:"scheduleData",entity:"entity"},standalone:!0,features:[D],decls:10,vars:0,consts:[[1,"schedule-timeline-container"],[1,"schedule-timeline-table"],[1,"schedule-timeline-table-header"],[1,"schedule-timeline-table-body"],[1,"time-slot"],[1,"schedule-cell",3,"ngClass","ngStyle"],[1,"schedule-content",3,"height","ngClass"],[1,"schedule-content",3,"ngClass"],[1,"course"],[1,"course-text"],[1,"time"]],template:function(t,n){t&1&&(l(0,"div",0)(1,"table",1)(2,"thead",2)(3,"tr"),h(4,"th"),x(5,re,2,1,"th",null,f),a()(),l(7,"tbody",3),x(8,me,5,1,"tr",null,f),a()()()),t&2&&(o(5),b(n.days),o(3),b(n.timeSlots))},dependencies:[B,L,j],styles:[".schedule-content.schedule-monday[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]{color:var(--primary-text)}.schedule-content.schedule-monday[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{background-color:var(--primary-text);color:var(--primary-text-two);padding:var(--spacing-xxs) var(--spacing-xs);border-radius:var(--border-radius-xl)}.schedule-content.schedule-tuesday[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]{color:var(--secondary-text)}.schedule-content.schedule-tuesday[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{background-color:var(--secondary-text);color:var(--secondary-text-two);padding:var(--spacing-xxs) var(--spacing-xs);border-radius:var(--border-radius-xl)}.schedule-content.schedule-wednesday[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]{color:var(--blue-primary)}.schedule-content.schedule-wednesday[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{background-color:var(--blue-primary);color:var(--blue-text);padding:var(--spacing-xxs) var(--spacing-xs);border-radius:var(--border-radius-xl)}.schedule-content.schedule-thursday[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]{color:var(--aqua-primary)}.schedule-content.schedule-thursday[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{background-color:var(--aqua-primary);color:var(--aqua-text);padding:var(--spacing-xxs) var(--spacing-xs);border-radius:var(--border-radius-xl)}.schedule-content.schedule-friday[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]{color:var(--purple-primary)}.schedule-content.schedule-friday[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{background-color:var(--purple-primary);color:var(--purple-text);padding:var(--spacing-xxs) var(--spacing-xs);border-radius:var(--border-radius-xl)}.schedule-content.schedule-saturday[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]{color:var(--green-primary)}.schedule-content.schedule-saturday[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{background-color:var(--green-primary);color:var(--green-text);padding:var(--spacing-xxs) var(--spacing-xs);border-radius:var(--border-radius-xl)}.schedule-content.schedule-sunday[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]{color:var(--primary-text)}.schedule-content.schedule-sunday[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{background-color:var(--primary-text);color:var(--primary-text);padding:var(--spacing-xxs) var(--spacing-xs);border-radius:var(--border-radius-xl)}.schedule-timeline-container[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none;height:100%;width:100%;overflow-y:auto;max-height:60vh;border-radius:var(--border-radius-md)}.schedule-timeline-container[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.schedule-timeline-container[_ngcontent-%COMP%]   .schedule-timeline-table[_ngcontent-%COMP%]{transition:background-color .3s ease;width:100%;border-collapse:separate;border-spacing:0;background-color:var(--neutral-space);position:relative}.schedule-timeline-container[_ngcontent-%COMP%]   .schedule-timeline-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .schedule-timeline-container[_ngcontent-%COMP%]   .schedule-timeline-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;font-weight:500}.schedule-timeline-container[_ngcontent-%COMP%]   .schedule-timeline-table[_ngcontent-%COMP%]   .schedule-timeline-table-header[_ngcontent-%COMP%]{position:sticky;top:0;bottom:0;background-color:var(--primary-one);z-index:2}.schedule-timeline-container[_ngcontent-%COMP%]   .schedule-timeline-table[_ngcontent-%COMP%]   .schedule-timeline-table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#fff;padding:var(--spacing-xs);border-right:1px solid var(--neutral-fade);border-bottom:1px solid var(--neutral-fade)}.schedule-timeline-container[_ngcontent-%COMP%]   .schedule-timeline-table[_ngcontent-%COMP%]   .schedule-timeline-table-body[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0;border-bottom:1px solid var(--neutral-fade);border-right:1px solid var(--neutral-fade);min-width:5rem;max-width:5rem;height:1.5rem;position:relative}.schedule-timeline-container[_ngcontent-%COMP%]   .schedule-timeline-table[_ngcontent-%COMP%]   .schedule-timeline-table-body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-right:none}.schedule-timeline-container[_ngcontent-%COMP%]   .schedule-timeline-table[_ngcontent-%COMP%]   .schedule-timeline-table-body[_ngcontent-%COMP%]   .time-slot[_ngcontent-%COMP%]{transition:background-color .3s ease;font-weight:500;border-right:1px solid var(--neutral-fade);background-color:var(--neutral-space);z-index:1;padding:var(--spacing-xxxs)}.schedule-timeline-container[_ngcontent-%COMP%]   .schedule-timeline-table[_ngcontent-%COMP%]   .schedule-timeline-table-body[_ngcontent-%COMP%]   .schedule-cell[_ngcontent-%COMP%]{max-width:6rem;min-width:6rem;position:relative}.schedule-timeline-container[_ngcontent-%COMP%]   .schedule-timeline-table[_ngcontent-%COMP%]   .schedule-timeline-table-body[_ngcontent-%COMP%]   .schedule-cell.schedule-block-start[_ngcontent-%COMP%]{border-bottom:none}.schedule-timeline-container[_ngcontent-%COMP%]   .schedule-timeline-table[_ngcontent-%COMP%]   .schedule-timeline-table-body[_ngcontent-%COMP%]   .schedule-cell.schedule-block-start[_ngcontent-%COMP%] + .schedule-cell[_ngcontent-%COMP%]{border-top:none}.schedule-timeline-container[_ngcontent-%COMP%]   .schedule-timeline-table[_ngcontent-%COMP%]   .schedule-timeline-table-body[_ngcontent-%COMP%]   .schedule-cell.schedule-block-start[_ngcontent-%COMP%]   .schedule-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;z-index:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--spacing-md);white-space:pre-wrap;word-break:break-word;font-size:var(--font-size-sm);padding:0 var(--spacing-xs)}.schedule-timeline-container[_ngcontent-%COMP%]   .schedule-timeline-table[_ngcontent-%COMP%]   .schedule-timeline-table-body[_ngcontent-%COMP%]   .schedule-cell.schedule-block-start[_ngcontent-%COMP%]   .schedule-content[_ngcontent-%COMP%]   .course-text[_ngcontent-%COMP%]{font-weight:600}.schedule-timeline-container[_ngcontent-%COMP%]   .schedule-timeline-table[_ngcontent-%COMP%]   .schedule-timeline-table-body[_ngcontent-%COMP%]   .schedule-cell[style*=background-color][_ngcontent-%COMP%]{border-bottom:none;border-top:none}.schedule-timeline-container[_ngcontent-%COMP%]   .schedule-timeline-table[_ngcontent-%COMP%]   .schedule-timeline-table-body[_ngcontent-%COMP%]   .schedule-cell[style*=background-color][_ngcontent-%COMP%] + .schedule-cell[style*=background-color][_ngcontent-%COMP%]{border-left:none}"]})}return i})();function pe(i,d){i&1&&(l(0,"div",1),h(1,"app-loading"),a())}function ge(i,d){if(i&1){let e=T();l(0,"div",6)(1,"mat-button-toggle-group",11),I("ngModelChange",function(n){P(e);let r=c(2);return A(r.selectedView,n)||(r.selectedView=n),O(n)}),k("ngModelChange",function(n){P(e);let r=c(2);return O(r.onViewChange(n))}),l(2,"mat-button-toggle",12)(3,"mat-icon",13),s(4,"table_chart"),a(),l(5,"span"),s(6,"Table view"),a()(),l(7,"mat-button-toggle",14)(8,"mat-icon",13),s(9,"picture_as_pdf"),a(),l(10,"span"),s(11,"PDF view"),a()()()()}if(i&2){let e=c(2);o(),$("ngModel",e.selectedView)}}function he(i,d){if(i&1&&(l(0,"div",17)(1,"h3",18),s(2),a(),h(3,"app-schedule-timeline",19),a()),i&2){let e=d.$implicit,t=c(4);o(2),_(e.title),o(),g("scheduleData",e.scheduleData)("entity",t.data.entity)("@fadeAnimation",void 0)}}function _e(i,d){if(i&1&&(l(0,"div",15),x(1,he,4,4,"div",17,f),a()),i&2){let e=c(3);o(),b(e.scheduleGroups)}}function Ce(i,d){if(i&1&&(l(0,"div",16),h(1,"app-schedule-timeline",19),a()),i&2){let e=c(3);o(),g("scheduleData",e.scheduleData)("entity",e.data.entity)("@fadeAnimation",void 0)}}function fe(i,d){if(i&1&&p(0,_e,3,0,"div",15)(1,Ce,2,3,"div",16),i&2){let e=c(2);m(e.scheduleGroups&&e.scheduleGroups.length>0?0:-1),o(),m(e.scheduleGroups?-1:1)}}function xe(i,d){if(i&1&&(l(0,"div",20),h(1,"iframe",21),a()),i&2){let e=c(3);o(),g("src",e.pdfBlobUrl,V)}}function be(i,d){i&1&&(l(0,"div",20)(1,"span"),s(2,"No PDF available."),a()())}function ye(i,d){if(i&1&&(l(0,"div",7),p(1,xe,2,1,"div",20)(2,be,3,0,"div",20),a()),i&2){let e=c(2);o(),m(e.pdfBlobUrl?1:2)}}function ve(i,d){if(i&1){let e=T();l(0,"button",22),k("click",function(){P(e);let n=c(2);return O(n.downloadPdf())}),l(1,"mat-icon"),s(2,"print"),a(),s(3," Download PDF "),a()}}function Me(i,d){if(i&1){let e=T();l(0,"div",2)(1,"div",3)(2,"h2",4),s(3),a(),l(4,"span",5),s(5),a()(),p(6,ge,12,1,"div",6),a(),p(7,fe,2,2)(8,ye,3,1,"div",7),l(9,"div",8)(10,"button",9),k("click",function(){P(e);let n=c();return O(n.closeDialog())}),s(11,"Close"),a(),p(12,ve,4,0,"button",10),a()}if(i&2){let e=c();g("@fadeAnimation",void 0),o(3),_(e.title),o(2),C("Official Schedule ",e.subtitle,""),o(),m(e.data.exportType!=="all"?6:-1),o(),m(e.selectedView==="table-view"&&e.data.exportType!=="all"?7:-1),o(),m(e.selectedView==="pdf-view"||e.data.exportType==="all"?8:-1),o(),g("@fadeAnimation",void 0),o(3),m(e.selectedView==="pdf-view"||e.data.exportType==="all"?12:-1)}}var qe=(()=>{class i{dialogRef;data;sanitizer;title="";subtitle="";isLoading=!0;scheduleData;scheduleGroups;selectedView="table-view";pdfBlobUrl=null;showViewToggle=!0;constructor(e,t,n){this.dialogRef=e,this.data=t,this.sanitizer=n}ngOnInit(){this.initializeScheduleTitle(),this.data.entity==="program"?this.data.scheduleGroups&&this.data.scheduleGroups.length>0?(this.scheduleGroups=this.data.scheduleGroups,this.scheduleData=this.flattenScheduleGroups(this.data.scheduleGroups),this.generateAndDisplayPdf()):(console.warn("No schedule groups available for programs."),this.scheduleData=[]):(this.data.entity==="faculty"||this.data.entity==="room")&&(this.data.exportType==="all"?(this.scheduleData=this.data.entityData,this.generateAndDisplayPdf()):Array.isArray(this.data.entityData)&&this.data.entityData.length>0?this.scheduleData=this.data.entityData:(console.warn("No schedules found or invalid data structure:",this.data.entityData),this.scheduleData=this.data.entityData||[])),this.isLoading=!1}flattenScheduleGroups(e){let t=[];return e.forEach(n=>{Array.isArray(n.scheduleData)&&n.scheduleData.forEach(r=>{t.push(M(v({},r),{groupTitle:n.title}))})}),t}initializeScheduleTitle(){this.setTitleAndSubtitle()}setTitleAndSubtitle(){let{customTitle:e,entityData:t,academicYear:n,semester:r}=this.data;this.title=e??t?.name??t?.title??"Schedule",this.subtitle=n&&r?`For Academic Year ${n}, ${r}`:"",this.isLoading=!1}closeDialog(){this.dialogRef.close()}onViewChange(e){this.selectedView=e,e==="pdf-view"?this.generateAndDisplayPdf():this.pdfBlobUrl=null}generateAndDisplayPdf(){if(this.data.generatePdfFunction){let e=this.data.generatePdfFunction(!0);if(e instanceof Blob){let t=URL.createObjectURL(e);this.pdfBlobUrl=this.sanitizer.bypassSecurityTrustResourceUrl(t)}else console.error("generatePdfFunction did not return a Blob."),this.pdfBlobUrl=null}else console.error("No generatePdfFunction provided."),this.pdfBlobUrl=null}downloadPdf(){if(this.data.generatePdfFunction){let e=this.data.generatePdfFunction(!1);if(e instanceof Blob){let t=URL.createObjectURL(e),n=document.createElement("a");n.href=t;let r=this.data.academicYear?this.data.academicYear.replace(/\s+/g,"_"):"",u=`${(this.data.customTitle??"schedule").replace(/\s+/g,"_")}_${r}_report.pdf`;n.download=u,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(t)}else console.error("Failed to generate a valid Blob for the PDF.")}else console.error("No generatePdfFunction provided.")}trackGroup(e,t){return t?t.title:void 0}static \u0275fac=function(t){return new(t||i)(w(N),w(z),w(G))};static \u0275cmp=S({type:i,selectors:[["app-dialog-view-schedule"]],standalone:!0,features:[D],decls:3,vars:1,consts:[[1,"dialog-view-schedule-container"],[1,"loading-wrapper"],[1,"entity-info"],[1,"schedule-title"],[1,"dialog-title"],[1,"dialog-subtitle"],[1,"view-option"],[1,"dialog-pref-pdf-container"],[1,"dialog-actions"],["mat-button","",1,"close-button",3,"click"],["mat-flat-button",""],["name","viewOption","aria-label","Select view option",3,"ngModelChange","ngModel"],["value","table-view"],[1,"icon-spacing"],["value","pdf-view"],[1,"multiple-schedules-container"],[1,"single-schedule-container"],[1,"schedule-group"],[1,"group-title"],[3,"scheduleData","entity"],[1,"pdf-container"],[1,"pdf-iframe",3,"src"],["mat-flat-button","",3,"click"]],template:function(t,n){t&1&&(l(0,"div",0),p(1,pe,2,0,"div",1)(2,Me,13,8),a()),t&2&&(o(),m(n.isLoading?1:2))},dependencies:[B,K,Y,J,q,ie,Q,H,R,ne,ee,te,Z,X],styles:[".dialog-view-schedule-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:var(--spacing-md);padding:var(--spacing-lg);height:100%}.entity-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:stretch;justify-content:space-between;gap:var(--spacing-xxs)}.entity-info[_ngcontent-%COMP%]   .schedule-title[_ngcontent-%COMP%]   .dialog-title[_ngcontent-%COMP%]{margin:0;padding:0;border:0;box-sizing:border-box;font-weight:600;color:var(--primary-text)}.entity-info[_ngcontent-%COMP%]   .schedule-title[_ngcontent-%COMP%]   .dialog-subtitle[_ngcontent-%COMP%]{color:var(--primary-text)}.multiple-schedules-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:var(--spacing-xl);max-height:var(--dialog-base-height);overflow:auto;padding-right:var(--spacing-md)}.multiple-schedules-container[_ngcontent-%COMP%]   .schedule-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:var(--spacing-xs);border-radius:var(--border-radius-md)}.multiple-schedules-container[_ngcontent-%COMP%]   .schedule-group[_ngcontent-%COMP%]   .group-title[_ngcontent-%COMP%]{margin:0;padding:0;border:0;box-sizing:border-box;font-weight:600}.single-schedule-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:0;min-height:var(--dialog-base-height)}iframe[_ngcontent-%COMP%]{width:100%;max-height:var(--dialog-base-height);border:none;border-radius:var(--border-radius-md);box-shadow:var(--shadow-level-1)}.dialog-actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;gap:0}.dialog-actions[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{color:var(--primary-text)}"],data:{animation:[W]}})}return i})();export{qe as a};