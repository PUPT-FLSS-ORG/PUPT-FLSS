import{a as z}from"./chunk-E6CWXPC2.js";import{b as Te}from"./chunk-PRIEC27T.js";import"./chunk-NME5OWLW.js";import{b as B,c as Fe,d as $e}from"./chunk-BM7DUPOK.js";import{a as V,b as De}from"./chunk-R7WH3GYF.js";import"./chunk-JCJIXIGU.js";import{a as Re}from"./chunk-H5AHOZFT.js";import{f as Ee}from"./chunk-2PMUV4MH.js";import{a as me,b as de,c as pe,d as _e,e as ue,f as fe,g as he,h as ge,i as Ce,j as Se,k as xe,l as ve,m as ye}from"./chunk-OJYR24EB.js";import"./chunk-A3A72ILT.js";import{a as Pe}from"./chunk-TVMSW2JO.js";import"./chunk-CUKNIT7M.js";import{a as ce}from"./chunk-OGNLWBT2.js";import{a as le}from"./chunk-AY56TXUB.js";import"./chunk-VMH4ILIM.js";import{a as we,b as be}from"./chunk-6AWQUBPH.js";import{b as ie}from"./chunk-JLIX64RS.js";import{c as ne}from"./chunk-VORQTW3B.js";import"./chunk-FVBRAVME.js";import{a as ae,c as re}from"./chunk-L2D7AHNW.js";import"./chunk-POHCU53O.js";import{a as se}from"./chunk-6QI4QBU5.js";import"./chunk-DXFFT4B6.js";import{a as oe}from"./chunk-UJ255QIO.js";import"./chunk-MXV4M2BO.js";import"./chunk-4N6BO7AP.js";import"./chunk-RU375CWH.js";import"./chunk-KXJUWRJT.js";import"./chunk-SB5MWYDA.js";import"./chunk-EMZRNCIP.js";import"./chunk-DKHW3YWA.js";import{t as te}from"./chunk-2T5SWUVG.js";import{$b as F,Cb as d,Db as p,Eb as M,Fb as T,Gb as D,Ib as A,Nb as R,Pb as S,Tb as X,Ub as W,Vb as J,Wa as h,Xa as H,Zb as u,_b as K,gc as Z,ha as G,hc as ee,mb as y,qa as b,qb as j,ra as P,rb as E,xb as Q}from"./chunk-NSU275EB.js";import{g as Ae}from"./chunk-ODN5LVDJ.js";Fe();var vt=Ae($e());var Ye=()=>[5,10,25,50,100];function He(n,_){n&1&&(d(0,"div",1),M(1,"app-loading"),p())}function Ve(n,_){n&1&&(d(0,"th",21),u(1," # "),p())}function Ie(n,_){if(n&1&&(d(0,"td",22)(1,"span"),u(2),p()()),n&2){let e=_.index,i=S(2);h(2),K(i.getRowIndex(e))}}function Ne(n,_){n&1&&(d(0,"th",23),u(1," Program Code "),p())}function ke(n,_){if(n&1&&(d(0,"td",24),u(1),p()),n&2){let e=_.$implicit;h(),F(" ",e.program_code," ")}}function Be(n,_){n&1&&(d(0,"th",23),u(1," Program Name "),p())}function ze(n,_){if(n&1&&(d(0,"td",24),u(1),p()),n&2){let e=_.$implicit;h(),F(" ",e.program_title," ")}}function Oe(n,_){n&1&&(d(0,"th",23),u(1," Year Levels "),p())}function Ue(n,_){if(n&1){let e=A();d(0,"td",24)(1,"button",25),R("click",function(){let t=b(e).$implicit,o=S(2);return P(o.onOpenDialog(t,"yearLevel"))}),d(2,"mat-icon"),u(3,"school"),p(),u(4),p()()}if(n&2){let e=_.$implicit;h(4),F(" ",e.year_levels_selected==="All"?"All Year Levels":"Year Level "+e.year_levels_selected," ")}}function qe(n,_){n&1&&(d(0,"th",23),u(1," Sections "),p())}function Ge(n,_){if(n&1){let e=A();d(0,"td",24)(1,"button",25),R("click",function(){let t=b(e).$implicit,o=S(2);return P(o.onOpenDialog(t,"section"))}),d(2,"mat-icon"),u(3,"view_list"),p(),u(4),p()()}if(n&2){let e=_.$implicit;h(4),F(" ",e.section_selected==="All"?"All Sections":"Section "+e.section_selected," ")}}function je(n,_){n&1&&(d(0,"th",23),u(1," Action "),p())}function Qe(n,_){if(n&1){let e=A();d(0,"td",24)(1,"button",26),R("click",function(){let t=b(e).$implicit,o=S(2);return P(o.onView(t))}),d(2,"mat-icon"),u(3,"visibility"),p(),d(4,"span"),u(5,"View Schedule"),p()(),d(6,"button",27),R("click",function(){let t=b(e).$implicit,o=S(2);return P(o.onExportSingle(t))}),d(7,"mat-icon"),u(8,"print"),p(),d(9,"span"),u(10,"Export"),p()()()}}function Xe(n,_){n&1&&M(0,"tr",28)}function We(n,_){n&1&&M(0,"tr",29)}function Je(n,_){if(n&1&&(d(0,"tr")(1,"td",30)(2,"div",31)(3,"div",32),M(4,"span",33),d(5,"span"),u(6," No programs found."),p()()()()()),n&2){let e=S(2);h(),j("colspan",e.displayedColumns.length)}}function Ke(n,_){if(n&1){let e=A();d(0,"div",2)(1,"app-table-header",3),R("export",function(){b(e);let t=S();return P(t.onExportAll())})("inputChange",function(t){b(e);let o=S();return P(o.onInputChange(t))}),p()(),d(2,"div",4)(3,"div",5)(4,"table",6),T(5,7),y(6,Ve,2,0,"th",8)(7,Ie,3,1,"td",9),D(),T(8,10),y(9,Ne,2,0,"th",11)(10,ke,2,1,"td",12),D(),T(11,13),y(12,Be,2,0,"th",11)(13,ze,2,1,"td",12),D(),T(14,14),y(15,Oe,2,0,"th",11)(16,Ue,5,1,"td",12),D(),T(17,15),y(18,qe,2,0,"th",11)(19,Ge,5,1,"td",12),D(),T(20,16),y(21,je,2,0,"th",11)(22,Qe,11,0,"td",12),D(),y(23,Xe,1,0,"tr",17)(24,We,1,0,"tr",18)(25,Je,7,1,"tr",19),p(),d(26,"mat-paginator",20),R("page",function(){b(e);let t=S();return P(t.updateDisplayedData())}),p()()()}if(n&2){let e=S();E("@fadeAnimation",void 0),h(),E("inputFields",e.inputFields)("showExportButton",!0)("showAddButton",!1),h(),E("@fadeAnimation",void 0),h(2),E("dataSource",e.dataSource),h(19),E("matHeaderRowDef",e.displayedColumns),h(),E("matRowDefColumns",e.displayedColumns),h(2),E("length",e.filteredData.length)("pageSize",10)("pageSizeOptions",ee(12,Ye))("showFirstLastButtons",!0)}}var yt=(()=>{class n{reportsService;dialog;snackBar;inputFields=[{type:"text",label:"Search Programs",key:"search"}];displayedColumns=["index","programCode","programName","yearLevel","section","action"];dataSource=new ye;filteredData=[];academicYear="";semester="";isLoading=!0;paginator;constructor(e,i,t){this.reportsService=e,this.dialog=i,this.snackBar=t}ngOnInit(){this.fetchProgramsData()}ngAfterViewInit(){this.dataSource.paginator=this.paginator}fetchProgramsData(){this.isLoading=!0,this.reportsService.getProgramSchedulesReport().subscribe({next:e=>{let i=e.programs_schedule_reports.programs.map(t=>({program_id:t.program_id,program_code:t.program_code,program_title:t.program_title,year_levels:t.year_levels.map(o=>({year_level:o.year_level,sections:o.sections.map(r=>({section_name:r.section_name,schedules:r.schedules}))})),year_levels_selected:"All",section_selected:"All"}));this.academicYear=`${e.programs_schedule_reports.year_start}-${e.programs_schedule_reports.year_end}`,this.semester=this.getSemesterDisplay(e.programs_schedule_reports.semester),this.isLoading=!1,this.dataSource.data=i,this.filteredData=[...i],this.dataSource.paginator=this.paginator},error:e=>{this.isLoading=!1,console.error("Error fetching programs data:",e),this.snackBar.open("Failed to load programs data. Please try again later.","Close",{duration:5e3})}})}getSemesterDisplay(e){switch(e){case 1:return"1st Semester";case 2:return"2nd Semester";case 3:return"Summer Semester";default:return"Unknown Semester"}}getRowIndex(e){return this.paginator?e+1+this.paginator.pageIndex*this.paginator.pageSize:e+1}onInputChange(e){let i=e.search?e.search.trim().toLowerCase():"";i===""?this.dataSource.data=this.filteredData:this.dataSource.data=this.filteredData.filter(t=>t.program_code.toLowerCase().includes(i)||t.program_title.toLowerCase().includes(i))}onExportAll(){let e=[];if(this.filteredData.forEach(t=>{t.year_levels.forEach(o=>{o.sections.forEach(r=>{let s=`${t.program_code} - Year ${o.year_level} - Section ${r.section_name}`;e.push({title:s,scheduleData:r.schedules})})})}),e.length===0){this.snackBar.open("No schedule data available to export.","Close",{duration:5e3});return}let i=t=>this.createCombinedPdf().output("blob");this.dialog.open(z,{maxWidth:"90vw",width:"100%",data:{exportType:"all",entity:"program",scheduleGroups:e,customTitle:"All Program Schedules",academicYear:this.academicYear,semester:this.semester,generatePdfFunction:i,previewMode:!0},disableClose:!0})}onOpenDialog(e,i){let t=[],o="",r=[];if(i==="yearLevel")r=["All",...e.year_levels.map(m=>m.year_level).map(String)],t=[{label:"Year Level",formControlName:"yearLevel",type:"select",options:r,required:!0}],o="Select Year Level";else if(i==="section"){if(e.year_levels_selected==="All")r=["All",...Array.from(new Set(e.year_levels.flatMap(m=>m.sections.map(a=>a.section_name))))];else{let c=e.year_levels.find(m=>m.year_level.toString()===e.year_levels_selected);c?r=["All",...c.sections.map(a=>a.section_name)]:r=["All"]}t=[{label:"Section",formControlName:"section",type:"select",options:r,required:!0}],o="Select Section"}let s={title:o,fields:t,isEdit:!1,initialValue:{[i==="yearLevel"?"yearLevel":"section"]:i==="yearLevel"?e.year_levels_selected:e.section_selected}};this.dialog.open(Ee,{data:s}).afterClosed().subscribe(c=>{c&&(i==="yearLevel"?(e.year_levels_selected=c.yearLevel,e.section_selected="All"):i==="section"&&(e.section_selected=c.section))})}onView(e){let i=e.year_levels_selected,t=e.section_selected,o=[];if(i==="All")e.year_levels.forEach(s=>{let l=s.year_level,c=[];if(t==="All")c=s.sections;else{let m=s.sections.find(a=>a.section_name===t);m&&(c=[m])}c.forEach(m=>{let a=`Year Level ${l} - Section ${m.section_name}`;o.push({title:a,scheduleData:m.schedules})})});else{let s=e.year_levels.find(l=>l.year_level.toString()===i);if(s){let l=[];if(t==="All")l=s.sections;else{let c=s.sections.find(m=>m.section_name===t);c&&(l=[c])}l.forEach(c=>{let m=`Year Level ${s.year_level} - Section ${c.section_name}`;o.push({title:m,scheduleData:c.schedules})})}}let r=s=>this.createPdfBlob(e);this.dialog.open(z,{maxWidth:"90vw",width:"100%",data:{entity:"program",scheduleGroups:o,customTitle:`${e.program_title} (${e.program_code})`,academicYear:this.academicYear,semester:this.semester,generatePdfFunction:r,previewMode:!0},disableClose:!0})}onExportSingle(e){let i=e.year_levels_selected??"All",t=e.section_selected??"All",o=this.createPdfBlob(e),r;if(i==="All"&&t==="All")r=`${e.program_code.replace(/\s+/g,"_")}_schedule_report.pdf`;else{let c=i!=="All"?`${i}`:"",m=t!=="All"?`${t.replace(/\s+/g,"_")}`:"";r=`${e.program_code.replace(/\s+/g,"_")}_${c}-${m}_schedule_report.pdf`}let s=URL.createObjectURL(o),l=document.createElement("a");l.href=s,l.download=r,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(s)}createCombinedPdf(){let e=new B("landscape","mm","a4"),i=e.internal.pageSize.width,t=10,o=15,r=22;return this.filteredData.length===0?(console.error("No data available to export."),e):(this.filteredData.forEach((s,l)=>{s.year_levels.forEach((c,m)=>{c.sections.forEach((a,f)=>{(l>0||m>0||f>0)&&e.addPage();let $=this.drawHeader(e,o,i,t,r,`${s.program_code} - Year ${c.year_level} - Section ${a.section_name}`,`For Academic Year ${this.academicYear}, ${this.semester}`);this.drawScheduleTable(e,a.schedules??[],$,t,i)})})}),e)}createPdfBlob(e){let i=new B("landscape","mm","a4"),t=i.internal.pageSize.width,o=10,r=15,s=22;if(e.year_levels.length===0)return console.error("No data available to export."),new Blob;let l=e.year_levels_selected,c=e.section_selected,m=e.year_levels.filter(f=>l==="All"||f.year_level.toString()===l),a=!0;return m.forEach(f=>{f.sections.filter(C=>c==="All"||C.section_name===c).forEach(C=>{a?a=!1:i.addPage();let x=this.drawHeader(i,r,t,o,s,`${e.program_code} - Year ${f.year_level} - Section ${C.section_name}`,`For Academic Year ${this.academicYear}, ${this.semester}`);this.drawScheduleTable(i,C.schedules??[],x,o,t)})}),(m.length===0||m.every(f=>f.sections.length===0))&&console.error("No matching year levels or sections found for the selected options."),i.output("blob")}drawHeader(e,i,t,o,r,s,l){let c="https://iantuquib.weebly.com/uploads/5/9/7/7/59776029/2881282_orig.png",m=t/25+25;e.addImage(c,"PNG",m,i-5,r,r),e.setFontSize(12),e.setFont("helvetica","bold"),e.text("POLYTECHNIC UNIVERSITY OF THE PHILIPPINES \u2013 TAGUIG BRANCH",t/2,i,{align:"center"});let a=i+5;return e.setFontSize(10),e.setFont("helvetica","normal"),e.text("Gen. Santos Ave. Upper Bicutan, Taguig City",t/2,a,{align:"center"}),a+=10,e.setFontSize(12),e.setFont("helvetica","bold"),e.text(s,t/2,a,{align:"center"}),a+=8,l&&(e.setFontSize(10),e.setFont("helvetica","normal"),e.text(l,t/2,a,{align:"center"}),a+=8),e.setDrawColor(0,0,0),e.setLineWidth(.5),e.line(o,a,t-o,a),a+=7,a}drawScheduleTable(e,i,t,o,r){let s=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],l=(r-o*2)/s.length,m=e.internal.pageSize.height-o,a=t,f=a,$=()=>(e.addPage(),a=this.drawHeader(e,15,r,o,22,e.getNumberOfPages()>1?"Room Schedule (Continued)":"Room Schedule",this.getAcademicYearSubtitle(i[0])),s.forEach((C,x)=>{let g=o+x*l;e.setFillColor(128,0,0),e.setTextColor(255,255,255),e.rect(g,a,l,10,"F"),e.setFontSize(10),e.setFont("helvetica","bold"),e.text(C,g+l/2,a+7,{align:"center"})}),a+=12,a);s.forEach((C,x)=>{let g=o+x*l;e.setFillColor(128,0,0),e.setTextColor(255,255,255),e.rect(g,a,l,10,"F"),e.setFontSize(10),e.setFont("helvetica","bold"),e.text(C,g+l/2,a+7,{align:"center"})}),a+=12,s.forEach((C,x)=>{let g=o+x*l,w=a,O=i.filter(v=>v.day===C).sort((v,U)=>this.timeToMinutes(v.start_time)-this.timeToMinutes(U.start_time));O.length>0&&O.forEach(v=>{w+35>m&&(s.forEach((I,L)=>{let N=o+L*l;e.setDrawColor(200,200,200),e.setLineWidth(.5),e.line(N,t,N,f)}),e.line(r-o,t,r-o,f),w=$(),f=w);let Le=this.formatTime(v.start_time),Me=this.formatTime(v.end_time),q=[v.course_details.course_code,v.course_details.course_title,v.faculty_name,`${Le} - ${Me}`];e.setFillColor(240,240,240),e.rect(g,w,l,35,"F");let Y=w+5;q.forEach((I,L)=>{if(e.setTextColor(0),e.setFontSize(9),e.setFont((L<=1,"helvetica"),L<=1?"bold":"normal"),e.splitTextToSize(I,l-10).forEach(k=>{e.text(k,g+5,Y),Y+=5}),L===q.length-1){let k=e.getTextWidth(I);e.setDrawColor(0,0,0),e.setLineWidth(.2),e.line(g+5,Y-4,g+5+k,Y-4)}}),w+=40,w>f&&(f=w)})}),s.forEach((C,x)=>{let g=o+x*l;e.setDrawColor(200,200,200),e.setLineWidth(.5),e.line(g,t,g,f)}),e.line(r-o,t,r-o,f),e.line(o,f,r-o,f)}formatTime(e){let[i,t]=e.split(":").map(Number),o=i>=12?"PM":"AM";return`${i%12||12}:${t.toString().padStart(2,"0")} ${o}`}timeToMinutes(e){let[i,t]=e.split(":").map(Number);return i*60+t}getAcademicYearSubtitle(e){return`For Academic Year ${e.academicYear}, ${e.semester}`}updateDisplayedData(){console.log("Page changed")}static \u0275fac=function(i){return new(i||n)(H(ce),H(ne),H(Pe))};static \u0275cmp=G({type:n,selectors:[["app-report-programs"]],viewQuery:function(i,t){if(i&1&&X(V,5),i&2){let o;W(o=J())&&(t.paginator=o.first)}},standalone:!0,features:[Z],decls:3,vars:1,consts:[[1,"report-container"],[1,"loading-wrapper"],[1,"report-header-container"],[3,"export","inputChange","inputFields","showExportButton","showAddButton"],[1,"report-table-container"],[1,"table-container"],["mat-table","",1,"custom-table",3,"dataSource"],["matColumnDef","index"],["mat-header-cell","","class","custom-header index",4,"matHeaderCellDef"],["mat-cell","","class","index",4,"matCellDef"],["matColumnDef","programCode"],["mat-header-cell","","class","custom-header",4,"matHeaderCellDef"],["mat-cell","","class","custom-cell",4,"matCellDef"],["matColumnDef","programName"],["matColumnDef","yearLevel"],["matColumnDef","section"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[4,"matNoDataRow"],["aria-label","Select page",1,"custom-paginator",3,"page","length","pageSize","pageSizeOptions","showFirstLastButtons"],["mat-header-cell","",1,"custom-header","index"],["mat-cell","",1,"index"],["mat-header-cell","",1,"custom-header"],["mat-cell","",1,"custom-cell"],["mat-button","",1,"prim-button",3,"click"],["mat-button","",1,"sec-ripple","view-button",3,"click"],["mat-button","",1,"sec-ripple","export-button",3,"click"],["mat-header-row",""],["mat-row",""],[1,"no-data-cell"],[1,"flex-cell"],[1,"no-data-text"],["mat-symbol","info"]],template:function(i,t){i&1&&(d(0,"div",0),y(1,He,2,0,"div",1)(2,Ke,27,13),p()),i&2&&(h(),Q(t.isLoading?1:2))},dependencies:[te,ve,me,pe,he,_e,de,ge,ue,fe,Ce,Se,xe,De,V,be,we,re,ae,Te,ie,Re,le,oe],data:{animation:[se]}})}return n})();export{yt as ReportProgramsComponent};