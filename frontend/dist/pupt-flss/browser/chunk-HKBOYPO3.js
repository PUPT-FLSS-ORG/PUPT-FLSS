import{l as O}from"./chunk-OJYR24EB.js";import{a as A}from"./chunk-AY56TXUB.js";import{a as R,b as U}from"./chunk-6AWQUBPH.js";import{a as T,b as S}from"./chunk-VORQTW3B.js";import{a as I,c as F}from"./chunk-L2D7AHNW.js";import{a as L}from"./chunk-6QI4QBU5.js";import{d as M}from"./chunk-KXJUWRJT.js";import{t as w}from"./chunk-2T5SWUVG.js";import{Cb as a,Db as o,Eb as g,Ib as h,Nb as v,Pb as s,Tb as y,Ub as E,Vb as P,Wa as r,Xa as p,Zb as d,_b as b,gc as D,ha as C,mb as f,qa as x,ra as _,rb as u,xb as c}from"./chunk-NSU275EB.js";var j=["pdfIframe"];function k(i,m){i&1&&(a(0,"div",2),g(1,"app-loading"),o())}function z(i,m){if(i&1&&(a(0,"span",5),d(1),o()),i&2){let e=s(2);r(),b(e.subtitle)}}function B(i,m){i&1&&(a(0,"div",7),g(1,"iframe",12,0),o())}function V(i,m){i&1&&(a(0,"div",8),g(1,"iframe",12,0),o())}function N(i,m){if(i&1){let e=h();a(0,"div",3)(1,"h2",4),d(2),o(),f(3,z,2,1,"span",5),o(),a(4,"div",6),f(5,B,3,0,"div",7)(6,V,3,0,"div",8),o(),a(7,"div",9)(8,"button",10),v("click",function(){x(e);let n=s();return _(n.closeDialog())}),d(9,"Close"),o(),a(10,"button",11),v("click",function(){x(e);let n=s();return _(n.downloadPdf())}),a(11,"mat-icon"),d(12,"print"),o(),d(13," Download PDF "),o()()}if(i&2){let e=s();u("@fadeAnimation",void 0),r(2),b(e.title),r(),c(e.subtitle?3:-1),r(),u("@fadeAnimation",void 0),r(),c(e.exportType==="all"?5:-1),r(),c(e.exportType==="single"?6:-1),r(),u("@fadeAnimation",void 0)}}var ne=(()=>{class i{dialogRef;data;sanitizer;title="";subtitle="";isLoading=!0;exportType="single";pdfBlobUrl=null;pdfIframe;constructor(e,t,n){this.dialogRef=e,this.data=t,this.sanitizer=n}ngOnInit(){this.initializeExportData()}ngAfterViewInit(){this.handlePdfPreview()}initializeExportData(){this.exportType=this.data.exportType||"single",this.setTitleAndSubtitle(),this.isLoading=!1}setTitleAndSubtitle(){let{customTitle:e,entityData:t,subtitle:n}=this.data;t?(this.title=t.name||t.title||e||"Export to PDF",this.subtitle=this.getSubtitle(t)):(this.title=e||"Export to PDF",this.subtitle=n||"")}getSubtitle(e){return e.academic_year&&e.semester_label?`For Academic Year ${e.academic_year}, ${e.semester_label}`:e.description?e.description:""}handlePdfPreview(){this.data.generatePdfFunction&&setTimeout(()=>this.renderPdfPreview(),0)}renderPdfPreview(){let e=this.data.generatePdfFunction?.(!0);if(e){let t=URL.createObjectURL(e);this.pdfBlobUrl=this.sanitizer.bypassSecurityTrustResourceUrl(t),this.pdfIframe?.nativeElement?this.pdfIframe.nativeElement.src=t:console.error("No PDF iframe element found.")}else console.error("PDF Blob is undefined or null.")}downloadPdf(){let e=this.data.generatePdfFunction?.(!1);if(e){let t;this.data.generateFileNameFunction?t=this.data.generateFileNameFunction():t=`${this.title.replace(/ /g,"_").toLowerCase()}.pdf`;let n=URL.createObjectURL(e),l=document.createElement("a");l.href=n,l.download=t,l.click(),URL.revokeObjectURL(n)}}closeDialog(){this.dialogRef.close()}static \u0275fac=function(t){return new(t||i)(p(T),p(S),p(M))};static \u0275cmp=C({type:i,selectors:[["app-dialog-export"]],viewQuery:function(t,n){if(t&1&&y(j,5),t&2){let l;E(l=P())&&(n.pdfIframe=l.first)}},standalone:!0,features:[D],decls:3,vars:1,consts:[["pdfIframe",""],[1,"dialog-export-container"],[1,"loading-wrapper"],[1,"entity-info"],[1,"dialog-title"],[1,"dialog-subtitle"],[1,"dialog-export-pdf-container"],[1,"export-all"],[1,"export-single"],[1,"dialog-actions"],["mat-button","",3,"click"],["mat-flat-button","",3,"click"],[1,"pdf-iframe"]],template:function(t,n){t&1&&(a(0,"div",1),f(1,k,2,0,"div",2)(2,N,14,7),o()),t&2&&(r(),c(n.isLoading?1:2))},dependencies:[w,A,O,F,I,U,R],styles:[".dialog-export-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:var(--spacing-md);padding:var(--spacing-lg);height:100%}.dialog-title[_ngcontent-%COMP%]{margin:0;padding:0;border:0;box-sizing:border-box;font-weight:600;color:var(--primary-text)}.dialog-subtitle[_ngcontent-%COMP%]{color:var(--primary-text)}.dialog-export-pdf-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:0}.dialog-actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;gap:var(--spacing-sm)}.dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:var(--primary-text)}"],data:{animation:[L]}})}return i})();export{ne as a};