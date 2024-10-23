import{a as H}from"./chunk-TVMSW2JO.js";import{a as B}from"./chunk-AY56TXUB.js";import{a as L}from"./chunk-XOQFDSMO.js";import{b as D}from"./chunk-JLIX64RS.js";import{c as U,g as N}from"./chunk-VORQTW3B.js";import"./chunk-FVBRAVME.js";import"./chunk-L2D7AHNW.js";import"./chunk-POHCU53O.js";import{a as R}from"./chunk-6QI4QBU5.js";import"./chunk-DXFFT4B6.js";import{a as $}from"./chunk-UJ255QIO.js";import"./chunk-MXV4M2BO.js";import"./chunk-4N6BO7AP.js";import{a as F}from"./chunk-EMZRNCIP.js";import{c as z}from"./chunk-DKHW3YWA.js";import"./chunk-2T5SWUVG.js";import{$b as g,Ab as k,Bb as E,Cb as n,Db as t,Eb as c,Ib as j,Nb as h,Pb as C,T as d,Wa as a,Xa as u,Z as y,Zb as i,_b as w,ac as I,ca as b,f as x,gc as A,ha as S,mb as M,qa as P,ra as _,rb as O,sa as m,sb as p,ta as v,xb as f,zc as T}from"./chunk-NSU275EB.js";import"./chunk-ODN5LVDJ.js";var V=(()=>{class r{http;baseUrl=F.apiUrl;constructor(e){this.http=e}getOverviewDetails(){return this.http.get(`${this.baseUrl}/overview-details`)}sendEmails(){let e=`${this.baseUrl}/faculties/send-emails`;return this.http.post(e,{})}togglePreferencesSettings(e){return this.http.post(`${this.baseUrl}/toggle-preferences-all`,{status:e})}toggleAllSchedules(e){return this.http.post(`${this.baseUrl}/toggle-all-schedule`,{is_published:e})}static \u0275fac=function(o){return new(o||r)(b(z))};static \u0275prov=y({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var W=(r,l)=>l.curriculum_year;function K(r,l){r&1&&(n(0,"div",0),c(1,"app-loading"),t())}function J(r,l){r&1&&i(0,", ")}function Q(r,l){if(r&1&&(i(0),M(1,J,1,0)),r&2){let e=l.$implicit,o=l.$index,s=l.$count;g(" ",e.curriculum_year,""),a(),f(o!==s-1?1:-1)}}function X(r,l){if(r&1){let e=j();n(0,"div",1)(1,"header",2)(2,"div",3)(3,"h1",4),i(4,"Hello, Admin Marissa!"),t(),n(5,"p",5),i(6," Here's the key overview of the loading and scheduling this semester. "),t()(),n(7,"div",6)(8,"p",7),i(9),t(),n(10,"p",8),i(11,"Active Year & Semester"),t()()(),n(12,"main",9)(13,"div",10)(14,"div",11)(15,"div",12),c(16,"img",13),n(17,"div",14)(18,"h2",15),i(19,"Active Faculty"),t(),n(20,"div",16),i(21),t()()(),n(22,"div",17),c(23,"img",18),n(24,"div",14)(25,"h2",15),i(26,"Active Programs"),t(),n(27,"div",16),i(28),t()()(),n(29,"div",19),c(30,"img",20),n(31,"div",14)(32,"h2",15),i(33,"Active Curricula"),t(),n(34,"div",16),k(35,Q,2,2,null,null,W),t()()()(),n(37,"div",21)(38,"div",22),m(),n(39,"svg",23)(40,"defs")(41,"linearGradient",24),c(42,"stop",25)(43,"stop",26),t()()(),v(),n(44,"div",27)(45,"div",28)(46,"h3",29),i(47,"Preferences Submitted"),t(),n(48,"div",30),m(),n(49,"svg",31),c(50,"circle",32)(51,"circle",33),n(52,"g",34)(53,"text",35),i(54),t()()()()(),v(),n(55,"div",36)(56,"h3",29),i(57,"Scheduling Progress"),t(),n(58,"div",30),m(),n(59,"svg",31),c(60,"circle",32)(61,"circle",33),n(62,"g",34)(63,"text",35),i(64),t()()()()()(),v(),n(65,"div",37)(66,"div",38)(67,"h3",29),i(68,"Rooms Utilization"),t(),n(69,"div",30),m(),n(70,"svg",31),c(71,"circle",32)(72,"circle",33),n(73,"g",34)(74,"text",39),i(75),t()()()()(),v(),n(76,"div",40)(77,"h3",29),i(78,"Published Schedules"),t(),n(79,"div",30),m(),n(80,"svg",31),c(81,"circle",32)(82,"circle",33),n(83,"g",34)(84,"text",39),i(85),t()()()()()()(),v(),n(86,"div",41)(87,"h2",15),c(88,"span",42),i(89,"Action Center "),t(),n(90,"div",43)(91,"div",44)(92,"div",45),h("click",function(){P(e);let s=C();return _(s.togglePreferencesSubmission())}),c(93,"span",46),n(94,"span",47),i(95),t()(),n(96,"div",48),h("click",function(){P(e);let s=C();return _(s.togglePublishSchedules())}),c(97,"span",49),n(98,"span",47),i(99),t()()(),n(100,"div",50)(101,"div",51),c(102,"span",52),n(103,"span",47),i(104,"Generate the Schedule Reports"),t()()()()()()(),n(105,"div",53)(106,"div",54)(107,"h2",15),c(108,"span",55),i(109,"Notifications "),t(),n(110,"div",56)(111,"span"),i(112,"No notifications yet."),t()()()()()()}if(r&2){let e=C();a(),O("@fadeAnimation",void 0),a(8),I("A.Y. ",e.activeYear,", ",e.activeSemester,""),a(3),O("@fadeAnimation",void 0),a(9),w(e.activeFacultyCount),a(7),w(e.activeProgramsCount),a(7),E(e.activeCurricula),a(16),p("stroke-dashoffset",e.getCircleOffset(e.preferencesProgress))("opacity",e.preferencesProgress>0?1:0),a(3),g(" ",e.preferencesProgress,"% "),a(7),p("stroke-dashoffset",e.getCircleOffset(e.schedulingProgress))("opacity",e.schedulingProgress>0?1:0),a(3),g(" ",e.schedulingProgress,"% "),a(8),p("stroke-dashoffset",e.getCircleOffset(e.roomUtilization))("opacity",e.roomUtilization>0?1:0),a(3),g(" ",e.roomUtilization,"% "),a(7),p("stroke-dashoffset",e.getCircleOffset(e.publishProgress))("opacity",e.publishProgress>0?1:0),a(3),g(" ",e.publishProgress,"% "),a(10),g(" ",e.preferencesEnabled?"Enable Faculty Preferences Submission":"Disable Faculty Preferences Submission"," "),a(4),g(" ",e.schedulesPublished?"Unpublish Faculty Load and Schedule":"Publish Faculty Load and Schedule"," ")}}var ge=(()=>{class r{cdr;dialog;snackBar;overviewService;destroy$=new x;ANIMATION_DELAY=100;SNACKBAR_DURATION=3e3;activeYear="N/A";activeSemester="N/A";activeFacultyCount=0;activeProgramsCount=0;activeCurricula=[{curriculum_id:0,curriculum_year:"0"}];preferencesProgress=0;schedulingProgress=0;roomUtilization=0;publishProgress=0;isLoading=!0;preferencesEnabled=!0;schedulesPublished=!1;facultyWithSchedulesCount=0;constructor(e,o,s,G){this.cdr=e,this.dialog=o,this.snackBar=s,this.overviewService=G}ngOnInit(){this.fetchOverviewDetails(!0)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}fetchOverviewDetails(e=!1){this.overviewService.getOverviewDetails().pipe(d(this.destroy$)).subscribe({next:o=>this.handleOverviewData(o,e),error:this.handleError("Failed to load overview details. Please try again later.")})}handleOverviewData(e,o){this.updateBasicInfo(e),o?(this.resetProgressMetrics(),this.isLoading=!1,this.cdr.detectChanges(),setTimeout(()=>{this.updateProgressMetrics(e),this.cdr.detectChanges()},this.ANIMATION_DELAY)):(this.updateProgressMetrics(e),this.cdr.detectChanges())}updateBasicInfo(e){this.activeYear=e.activeAcademicYear,this.activeSemester=e.activeSemester,this.activeFacultyCount=e.activeFacultyCount,this.activeProgramsCount=e.activeProgramsCount,this.activeCurricula=e.activeCurricula,this.facultyWithSchedulesCount=e.facultyWithSchedulesCount,this.preferencesEnabled=e.preferencesSubmissionEnabled,this.schedulesPublished=e.publishProgress>0}resetProgressMetrics(){this.preferencesProgress=0,this.schedulingProgress=0,this.roomUtilization=0,this.publishProgress=0}updateProgressMetrics(e){this.preferencesProgress=e.preferencesProgress,this.schedulingProgress=e.schedulingProgress,this.roomUtilization=e.roomUtilization,this.publishProgress=e.publishProgress}getCircleOffset(e){let o=2*Math.PI*45;return o-e/100*o}openSendEmailDialog(){this.dialog.open(L,{data:{title:"Send Email to All Faculty",content:'Send an email to all the faculty members to submit their load and schedule preference for the current semester. Click "Send Email" below to proceed.',actionText:"Send Email",cancelText:"Cancel",action:"send-email"},disableClose:!0}).afterClosed().pipe(d(this.destroy$)).subscribe(o=>{o==="send-email"&&this.sendEmailToFaculty()})}sendEmailToFaculty(){let e=this.snackBar.open("Sending emails. Please wait...","Close",{duration:void 0});this.overviewService.sendEmails().pipe(d(this.destroy$)).subscribe({next:()=>{e.dismiss(),this.showSuccessMessage("Emails sent successfully!")},error:this.handleError("Failed to send emails. Please try again.")})}togglePreferencesSubmission(){let e=!this.preferencesEnabled;this.overviewService.togglePreferencesSettings(e).pipe(d(this.destroy$)).subscribe({next:()=>{this.showSuccessMessage(`Faculty Preferences Submission ${e?"enabled":"disabled"} successfully.`),this.fetchOverviewDetails()},error:this.handleError(`Failed to ${e?"enable":"disable"} Faculty Preferences Submission. Please try again.`)})}togglePublishSchedules(){if(this.facultyWithSchedulesCount===0){this.showErrorMessage("No faculty has been scheduled yet.");return}let e=!this.schedulesPublished;this.overviewService.toggleAllSchedules(e).pipe(d(this.destroy$)).subscribe({next:()=>{this.showSuccessMessage(`Faculty Load and Schedule ${e?"published":"unpublished"} successfully.`),this.fetchOverviewDetails()},error:this.handleError(`Failed to ${e?"publish":"unpublish"} Faculty Load and Schedule. Please try again.`)})}showSuccessMessage(e){this.snackBar.open(e,"Close",{duration:this.SNACKBAR_DURATION})}showErrorMessage(e){this.snackBar.open(e,"Close",{duration:this.SNACKBAR_DURATION})}handleError(e){return o=>{console.error("Operation failed:",o),this.showErrorMessage(e),this.isLoading=!1}}static \u0275fac=function(o){return new(o||r)(u(T),u(U),u(H),u(V))};static \u0275cmp=S({type:r,selectors:[["app-overview"]],standalone:!0,features:[A],decls:2,vars:1,consts:[[1,"loading-wrapper"],[1,"overview-container"],[1,"overview-header-container"],[1,"overview-greetings"],["id","admin_name"],["id","description"],[1,"active-year-sem-container"],[1,"text"],[1,"label"],[1,"overview-main-container"],[1,"main-cluster-one"],[1,"quick-stats"],[1,"stats","active-faculty","card"],["src","../../../../../assets/images/faculty.svg","alt","Faculty Icon",1,"stats-icon"],[1,"stats-info"],[1,"card-title"],[1,"card-content"],[1,"stats","programs","card"],["src","../../../../../assets/images/schedule.svg","alt","Programs Icon",1,"stats-icon"],[1,"stats","active-curricula","card"],["src","../../../../../assets/images/curriculum.svg","alt","Curriculum Icon",1,"stats-icon"],[1,"academic-and-action"],[1,"academic-overview","card"],["aria-hidden","true","focusable","false",2,"width","0","height","0","position","absolute"],["id","gradient","gradientTransform","rotate(90)"],["offset","0%","stop-color","var(--gradient-light-start)"],["offset","100%","stop-color","var(--gradient-light-end)"],[1,"overview-group-one"],[1,"overview-item","preferences-submitted"],[1,"item-title"],[1,"progress-container"],["viewBox","0 0 100 100",1,"circular-progress"],["cx","50","cy","50","r","45",1,"progress-bg"],["cx","50","cy","50","r","45",1,"progress-bar"],["transform","rotate(90 50 50)"],["x","50","y","50",1,"progress-text"],[1,"overview-item","scheduling-progress"],[1,"overview-group-two"],[1,"overview-item","rooms-utilized"],["x","50","y","55",1,"progress-text"],[1,"overview-item","publish-progress"],[1,"action-center","card"],["mat-symbol","page_info"],[1,"action-items"],[1,"item-group","one"],[1,"item","faculty-pref",3,"click"],["mat-symbol","groups"],[1,"desc"],[1,"item","publish-sched",3,"click"],["mat-symbol","schedule_send"],[1,"item-group","two"],[1,"item","generate-report"],["mat-symbol","assessment"],[1,"main-cluster-two"],[1,"notifications","card"],["mat-symbol","notifications"],[1,"notifications-content"]],template:function(o,s){o&1&&M(0,K,2,0,"div",0)(1,X,113,28,"div",1),o&2&&f(s.isLoading?0:1)},dependencies:[$,N,D,B],styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;border:0;box-sizing:border-box}.overview-container[_ngcontent-%COMP%]{height:auto;display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:var(--spacing-md)}.overview-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{transition:background-color .3s ease;background-color:var(--admin-bg);border-radius:var(--border-radius-sm);padding:var(--spacing-md);box-shadow:var(--shadow-level-1)}.overview-container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:var(--spacing-xs);font-size:var(--font-size-md);font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.overview-header-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:stretch;justify-content:space-between;gap:0}.overview-header-container[_ngcontent-%COMP%]   .overview-greetings[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:var(--spacing-xxs)}.overview-header-container[_ngcontent-%COMP%]   .overview-greetings[_ngcontent-%COMP%]   #admin_name[_ngcontent-%COMP%]{background:linear-gradient(315deg,var(--gradient-light-start) 0%,var(--gradient-light-end) 100%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-family:Inter Tight,Helvetica Neue,sans-serif;font-weight:600}.overview-header-container[_ngcontent-%COMP%]   .overview-greetings[_ngcontent-%COMP%]   #description[_ngcontent-%COMP%]{font-size:var(--font-size-md)}.overview-header-container[_ngcontent-%COMP%]   .active-year-sem-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:var(--spacing-xxs);background:linear-gradient(315deg,var(--gradient-light-start) 0%,var(--gradient-light-end) 100%);padding:var(--spacing-xs) var(--spacing-md);border-radius:var(--border-radius-md);color:#fff}.overview-header-container[_ngcontent-%COMP%]   .active-year-sem-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .overview-header-container[_ngcontent-%COMP%]   .active-year-sem-container[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{margin:0;padding:0;border:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.overview-header-container[_ngcontent-%COMP%]   .active-year-sem-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-weight:500}.overview-header-container[_ngcontent-%COMP%]   .active-year-sem-container[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{opacity:var(--opacity-semi-opaque)}.overview-main-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:stretch;justify-content:flex-start;gap:var(--spacing-md);height:inherit}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;justify-content:center;gap:var(--spacing-md);flex:6;height:inherit}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .overview-greetings[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:var(--spacing-xxs)}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .overview-greetings[_ngcontent-%COMP%]   #admin_name[_ngcontent-%COMP%]{background:linear-gradient(315deg,var(--gradient-light-start) 0%,var(--gradient-light-end) 100%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-family:Inter Tight,Helvetica Neue,sans-serif;font-weight:600}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .overview-greetings[_ngcontent-%COMP%]   #description[_ngcontent-%COMP%]{font-size:var(--font-size-md)}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .quick-stats[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:var(--spacing-md);flex:0}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .quick-stats[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:stretch;justify-content:center;gap:0;flex:1;padding:0}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .quick-stats[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stats-icon[_ngcontent-%COMP%]{margin:0;padding:0;border:0;box-sizing:border-box;width:var(--font-size-4xl);height:auto;-webkit-user-select:none;user-select:none}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .quick-stats[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stats-info[_ngcontent-%COMP%]{flex:1;padding:var(--spacing-sm)}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:row;align-items:stretch;justify-content:center;gap:var(--spacing-md)}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .academic-overview[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:stretch;justify-content:center;gap:var(--spacing-sm)}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .academic-overview[_ngcontent-%COMP%]   .overview-group-one[_ngcontent-%COMP%], .overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .academic-overview[_ngcontent-%COMP%]   .overview-group-two[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:stretch;justify-content:center;gap:var(--spacing-sm);flex:1}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .academic-overview[_ngcontent-%COMP%]   .overview-group-one[_ngcontent-%COMP%]   .overview-item[_ngcontent-%COMP%], .overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .academic-overview[_ngcontent-%COMP%]   .overview-group-two[_ngcontent-%COMP%]   .overview-item[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0;background-color:var(--main-bg);border-radius:var(--border-radius-sm);box-shadow:var(--shadow-level-0);padding:var(--spacing-sm);gap:var(--spacing-md)}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .academic-overview[_ngcontent-%COMP%]   .overview-group-one[_ngcontent-%COMP%]   .overview-item[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%], .overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .academic-overview[_ngcontent-%COMP%]   .overview-group-two[_ngcontent-%COMP%]   .overview-item[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%]{font-size:var(--font-size-sm);font-weight:400;color:var(--text-primary);text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .academic-overview[_ngcontent-%COMP%]   .overview-group-one[_ngcontent-%COMP%]   .overview-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%], .overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .academic-overview[_ngcontent-%COMP%]   .overview-group-two[_ngcontent-%COMP%]   .overview-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]{width:15vh;height:15vh}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .academic-overview[_ngcontent-%COMP%]   .overview-group-one[_ngcontent-%COMP%]   .overview-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%], .overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .academic-overview[_ngcontent-%COMP%]   .overview-group-two[_ngcontent-%COMP%]   .overview-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]{width:100%;height:100%;transform:rotate(-90deg)}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .academic-overview[_ngcontent-%COMP%]   .overview-group-one[_ngcontent-%COMP%]   .overview-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .academic-overview[_ngcontent-%COMP%]   .overview-group-two[_ngcontent-%COMP%]   .overview-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{fill:none;stroke-width:10;stroke-linecap:round;transition:stroke-dashoffset 1s ease-in-out,opacity .5s ease-in-out}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .academic-overview[_ngcontent-%COMP%]   .overview-group-one[_ngcontent-%COMP%]   .overview-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]   .progress-bg[_ngcontent-%COMP%], .overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .academic-overview[_ngcontent-%COMP%]   .overview-group-two[_ngcontent-%COMP%]   .overview-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]   .progress-bg[_ngcontent-%COMP%]{stroke:var(--neutral-option)}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .academic-overview[_ngcontent-%COMP%]   .overview-group-one[_ngcontent-%COMP%]   .overview-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%], .overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .academic-overview[_ngcontent-%COMP%]   .overview-group-two[_ngcontent-%COMP%]   .overview-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{stroke:url(#gradient);stroke-dasharray:283;stroke-dashoffset:283;opacity:0}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .academic-overview[_ngcontent-%COMP%]   .overview-group-one[_ngcontent-%COMP%]   .overview-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%], .overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .academic-overview[_ngcontent-%COMP%]   .overview-group-two[_ngcontent-%COMP%]   .overview-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%]{fill:var(--neutral-base);font-size:var(--font-size-lg);font-weight:500;text-anchor:middle;dominant-baseline:middle}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .action-center[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;justify-content:center;gap:var(--spacing-sm);flex:1}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .action-center[_ngcontent-%COMP%]   .action-items[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;justify-content:center;gap:var(--spacing-md);flex:1;-webkit-user-select:none;user-select:none}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .action-center[_ngcontent-%COMP%]   .action-items[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:stretch;justify-content:center;gap:0;flex:1}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .action-center[_ngcontent-%COMP%]   .action-items[_ngcontent-%COMP%]   .item-group.one[_ngcontent-%COMP%], .overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .action-center[_ngcontent-%COMP%]   .action-items[_ngcontent-%COMP%]   .item-group.two[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:stretch;justify-content:center;gap:var(--spacing-sm)}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .action-center[_ngcontent-%COMP%]   .action-items[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--spacing-xs);flex:1;padding:var(--spacing-sm);border-radius:var(--border-radius-sm);background-color:var(--main-bg);text-align:center;cursor:pointer;box-shadow:var(--shadow-level-0);transition:transform .2s ease,box-shadow .2s ease}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .action-center[_ngcontent-%COMP%]   .action-items[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   span[mat-symbol][_ngcontent-%COMP%]{background:linear-gradient(90deg,var(--gradient-light-start) 0%,var(--gradient-light-end) 100%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-family:Inter Tight,Helvetica Neue,sans-serif;font-family:Material Symbols Rounded;font-size:var(--font-size-3xl)}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .action-center[_ngcontent-%COMP%]   .action-items[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{font-size:var(--font-size-sm)}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .action-center[_ngcontent-%COMP%]   .action-items[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{background:linear-gradient(90deg,var(--gradient-light-start) 0%,var(--gradient-light-end) 100%)}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .action-center[_ngcontent-%COMP%]   .action-items[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   span[mat-symbol][_ngcontent-%COMP%]{background:none;-webkit-text-fill-color:white}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .action-center[_ngcontent-%COMP%]   .action-items[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .desc[_ngcontent-%COMP%]{color:#fff}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]   .action-center[_ngcontent-%COMP%]   .action-items[_ngcontent-%COMP%]   .item-group[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:active{transform:scale(.96)}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-two[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;justify-content:center;gap:var(--spacing-md);flex:2;height:inherit}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-two[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:stretch;justify-content:center;gap:var(--spacing-sm)}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-two[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .notifications-content[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:row;align-items:center;justify-content:center;gap:0}@media screen and (max-width: 1230px){.overview-main-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:var(--spacing-md)}}@media screen and (max-width: 1110px){.overview-header-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;justify-content:space-between;gap:var(--spacing-md)}}@media screen and (max-width: 800px){.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:var(--spacing-md);height:auto}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one.main-cluster-one[_ngcontent-%COMP%]   .quick-stats[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:var(--spacing-md)}.overview-main-container[_ngcontent-%COMP%]   .main-cluster-one.main-cluster-one[_ngcontent-%COMP%]   .academic-and-action[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;justify-content:center;gap:var(--spacing-md)}}"],data:{animation:[R]}})}return r})();export{ge as OverviewComponent};