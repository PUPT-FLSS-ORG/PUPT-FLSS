import{a as v,b as ot}from"./chunk-R7WH3GYF.js";import{a as Q,b as j,c as q,d as U,e as J,f as K,g as W,h as X,i as Y,j as Z,k as tt,l as et,m as nt}from"./chunk-OJYR24EB.js";import{a as it,b as at}from"./chunk-6AWQUBPH.js";import{a as L}from"./chunk-XOQFDSMO.js";import{c as N}from"./chunk-VORQTW3B.js";import{a as z,c as A}from"./chunk-L2D7AHNW.js";import{a as $}from"./chunk-UJ255QIO.js";import{k as F,t as R}from"./chunk-2T5SWUVG.js";import{$b as p,Ab as S,Bb as H,Cb as i,Db as l,Eb as x,Fb as M,Gb as w,Ib as h,Nb as f,Pb as o,Tb as D,Ub as B,Vb as E,Wa as c,Xa as P,Zb as s,_b as y,gc as G,ha as O,hc as I,ic as V,jc as T,mb as d,qa as _,qb as k,ra as b,rb as m,xb as g,ya as C}from"./chunk-NSU275EB.js";var rt=(e,a)=>a.key,lt=(e,a)=>({sticky:e,"top-left-radius":a}),ct=(e,a)=>({"status-active":e,"status-inactive":a}),st=e=>({sticky:e}),dt=()=>[5,10,25,50];function mt(e,a){if(e&1&&(i(0,"mat-icon"),s(1),l()),e&2){let t=o(2);c(),y(t.tableHeadingButtonIcon)}}function ut(e,a){if(e&1){let t=h();i(0,"div",0)(1,"h2",11),s(2),l(),i(3,"button",12),f("click",function(){_(t);let r=o();return b(r.onTableHeadingButtonClick())}),d(4,mt,2,1,"mat-icon"),s(5),l()()}if(e&2){let t=o();c(2),y(t.tableHeadingTitle),c(2),g(t.tableHeadingButtonIcon?4:-1),c(),p(" ",t.tableHeadingButtonText," ")}}function pt(e,a){if(e&1&&(i(0,"th",15),s(1),l()),e&2){let t=o().$implicit,n=o();m("ngClass",T(2,lt,n.isHeaderSticky,n.isFirstColumn(t.key))),c(),p(" ",t.label," ")}}function gt(e,a){if(e&1&&s(0),e&2){let t=o().index,n=o(2);p(" ",n.getIndex(t)," ")}}function _t(e,a){if(e&1&&(i(0,"span",17),s(1),l()),e&2){let t=o().$implicit,n=o().$implicit;m("ngClass",T(2,ct,t[n.key]==="Active"||t[n.key]==="Available",t[n.key]==="Inactive"||t[n.key]==="Unavailable")),c(),p(" ",t[n.key]," ")}}function bt(e,a){if(e&1&&s(0),e&2){let t=o().$implicit,n=o().$implicit;p(" ",t[n.key]," ")}}function Ct(e,a){if(e&1&&(i(0,"td",16),d(1,gt,1,1)(2,_t,2,5,"span",17)(3,bt,1,1),l()),e&2){let t=o().$implicit;c(),g(t.key==="index"?1:t.key==="status"?2:3)}}function xt(e,a){if(e&1&&(M(0,3),d(1,pt,2,5,"th",13)(2,Ct,4,1,"td",14),w()),e&2){let t=a.$implicit;m("matColumnDef",t.key)}}function ft(e,a){if(e&1&&(i(0,"th",18),s(1," Actions "),l()),e&2){let t=o();m("ngClass",V(1,st,t.isHeaderSticky))}}function ht(e,a){if(e&1){let t=h();i(0,"button",24),f("click",function(){_(t);let r=o().$implicit,u=o();return b(u.onView(r))}),i(1,"mat-icon"),s(2,"visibility"),l(),i(3,"span"),s(4,"View"),l()()}}function vt(e,a){if(e&1){let t=h();i(0,"td",19)(1,"div",20),d(2,ht,5,0,"button",21),i(3,"button",22),f("click",function(){let r=_(t).$implicit,u=o();return b(u.onEdit(r))}),i(4,"mat-icon"),s(5,"edit"),l(),i(6,"span"),s(7,"Edit"),l()(),i(8,"button",23),f("click",function(){let r=_(t).$implicit,u=o();return b(u.onDelete(r))}),i(9,"mat-icon"),s(10,"delete"),l(),i(11,"span"),s(12,"Delete"),l()()()()}if(e&2){let t=o();c(2),g(t.showViewButton?2:-1)}}function Mt(e,a){if(e&1&&(i(0,"tr")(1,"td",25)(2,"div",26),x(3,"span",27),i(4,"span"),s(5),l()()()()),e&2){let t=o();c(),k("colspan",t.displayedColumns.length),c(4),p(" No ",t.tableName," found.")}}function wt(e,a){e&1&&x(0,"tr",28)}function yt(e,a){e&1&&x(0,"tr",29)}function Tt(e,a){if(e&1&&(i(0,"div",10),x(1,"mat-paginator",30),l()),e&2){let t=o();c(),m("length",t.data.length)("pageSize",25)("pageSizeOptions",I(4,dt))("showFirstLastButtons",t.showFirstLastButtons)}}var jt=(()=>{class e{dialog;columns=[];set data(t){this._data=t,this.dataSource.data=this._data}get data(){return this._data}displayedColumns=[];showViewButton=!1;isHeaderSticky=!0;showTableHeading=!1;tableHeadingTitle="";tableHeadingButtonText="";tableHeadingButtonIcon="";tableName="";edit=new C;delete=new C;view=new C;tableHeadingButtonClick=new C;_data=[];dataSource=new nt([]);showFirstLastButtons=!0;paginator;constructor(t){this.dialog=t}ngOnInit(){this.dataSource.data=this.data,this.displayedColumns.includes("action")||this.displayedColumns.push("action")}ngAfterViewInit(){this.paginator?(this.dataSource.paginator=this.paginator,this.paginator.page.subscribe(()=>{this.dataSource.paginator=this.paginator})):console.error("Paginator is not defined")}getIndex(t){return this.paginator?this.paginator.pageIndex*this.paginator.pageSize+t+1:t+1}isFirstColumn(t){return this.columns.length>0&&this.columns[0].key===t}onEdit(t){this.edit.emit(t)}onView(t){this.view.emit(t)}onTableHeadingButtonClick(){this.tableHeadingButtonClick.emit()}onDelete(t){this.dialog.open(L,{data:{title:"Confirm Delete",content:"Are you sure you want to delete this? This action cannot be undone.",actionText:"Delete",cancelText:"Cancel",action:"delete"}}).afterClosed().subscribe(r=>{r==="delete"&&this.delete.emit(t)})}static \u0275fac=function(n){return new(n||e)(P(N))};static \u0275cmp=O({type:e,selectors:[["app-table-generic"]],viewQuery:function(n,r){if(n&1&&D(v,5),n&2){let u;B(u=E())&&(r.paginator=u.first)}},inputs:{columns:"columns",data:"data",displayedColumns:"displayedColumns",showViewButton:"showViewButton",isHeaderSticky:"isHeaderSticky",showTableHeading:"showTableHeading",tableHeadingTitle:"tableHeadingTitle",tableHeadingButtonText:"tableHeadingButtonText",tableHeadingButtonIcon:"tableHeadingButtonIcon",tableName:"tableName"},outputs:{edit:"edit",delete:"delete",view:"view",tableHeadingButtonClick:"tableHeadingButtonClick"},standalone:!0,features:[G],decls:12,vars:5,consts:[[1,"table-heading"],[1,"table-container"],["mat-table","",1,"custom-table",3,"dataSource"],[3,"matColumnDef"],["matColumnDef","action"],["mat-header-cell","","class","custom-header action",3,"ngClass",4,"matHeaderCellDef"],["mat-cell","","class","custom-cell action-cell",4,"matCellDef"],[4,"matNoDataRow"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"paginator-container"],[1,"heading-title"],["mat-button","",1,"heading-button",3,"click"],["mat-header-cell","","class","custom-header common",3,"ngClass",4,"matHeaderCellDef"],["mat-cell","","class","custom-cell",4,"matCellDef"],["mat-header-cell","",1,"custom-header","common",3,"ngClass"],["mat-cell","",1,"custom-cell"],[1,"status-badge",3,"ngClass"],["mat-header-cell","",1,"custom-header","action",3,"ngClass"],["mat-cell","",1,"custom-cell","action-cell"],[1,"action-buttons"],["mat-button","",1,"ter-ripple","view-button"],["mat-button","",1,"sec-ripple","edit-button",3,"click"],["mat-button","",1,"delete-button",3,"click"],["mat-button","",1,"ter-ripple","view-button",3,"click"],[1,"no-data-row"],[1,"no-data-text"],["mat-symbol","info"],["mat-header-row",""],["mat-row",""],[1,"custom-table-paginator",3,"length","pageSize","pageSizeOptions","showFirstLastButtons"]],template:function(n,r){n&1&&(d(0,ut,6,3,"div",0),i(1,"div",1)(2,"table",2),S(3,xt,3,1,"ng-container",3,rt),M(5,4),d(6,ft,2,3,"th",5)(7,vt,13,1,"td",6),w(),d(8,Mt,6,2,"tr",7)(9,wt,1,0,"tr",8)(10,yt,1,0,"tr",9),l(),d(11,Tt,2,5,"div",10),l()),n&2&&(g(r.showTableHeading?0:-1),c(2),m("dataSource",r.dataSource),c(),H(r.columns),c(6),m("matHeaderRowDef",r.displayedColumns),c(),m("matRowDefColumns",r.displayedColumns),c(),g(r.dataSource.data.length?11:-1))},dependencies:[R,F,et,Q,q,W,U,j,X,J,K,Y,Z,tt,ot,v,at,it,A,z,$],styles:[".table-heading[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:0;margin-bottom:1rem}.table-heading[_ngcontent-%COMP%]   .heading-title[_ngcontent-%COMP%]{color:var(--primary-one);font-weight:500;margin:0}.table-heading[_ngcontent-%COMP%]   .heading-button[_ngcontent-%COMP%]{color:var(--primary-text)}.table-container[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none;display:flex;flex-direction:column;background-color:var(--neutral-light);border-radius:var(--border-radius-md);max-height:50rem}.table-container[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.table-container[_ngcontent-%COMP%]   .custom-table[_ngcontent-%COMP%]{transition:background-color .3s ease;background-color:var(--neutral-light);border-radius:var(--border-radius-md)}.table-container[_ngcontent-%COMP%]   .no-data-row[_ngcontent-%COMP%]{text-align:center;padding:var(--spacing-md);color:var(--neutral-base);border-radius:0 0 var(--border-radius-md) var(--border-radius-md)}.table-container[_ngcontent-%COMP%]   .custom-header[_ngcontent-%COMP%]{text-wrap:nowrap;background-color:var(--primary-one);color:#fff;font-weight:500;text-align:center}.table-container[_ngcontent-%COMP%]   .custom-header.sticky[_ngcontent-%COMP%]{position:sticky;top:0;z-index:2}.table-container[_ngcontent-%COMP%]   .custom-header.action[_ngcontent-%COMP%]{border-top-right-radius:var(--border-radius-md)}.table-container[_ngcontent-%COMP%]   .custom-header.top-left-radius[_ngcontent-%COMP%]{border-top-left-radius:var(--border-radius-md)}.table-container[_ngcontent-%COMP%]   .custom-cell[_ngcontent-%COMP%]{text-align:center;padding:var(--spacing-xs)}.table-container[_ngcontent-%COMP%]   .custom-cell[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%]{padding:var(--spacing-xxs) var(--spacing-xs);border-radius:var(--border-radius-xs);font-weight:500}.table-container[_ngcontent-%COMP%]   .custom-cell[_ngcontent-%COMP%]   .status-active[_ngcontent-%COMP%]{color:var(--green-primary);background-color:var(--green-fade)}.table-container[_ngcontent-%COMP%]   .custom-cell[_ngcontent-%COMP%]   .status-inactive[_ngcontent-%COMP%]{color:var(--primary-text-lighter);background-color:var(--primary-fade)}.table-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:flex-start;justify-content:center;gap:0}.table-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%]{color:var(--neutral-button-lighter)}.table-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%]:hover{background-color:var(--neutral-option)}.table-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%]{color:var(--secondary-text)}.table-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%]:hover{background-color:var(--secondary-hover)}.table-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%]{color:var(--primary-text)}.table-container[_ngcontent-%COMP%]   .custom-table-paginator[_ngcontent-%COMP%]{transition:background-color .3s ease;padding:var(--spacing-md);background-color:var(--neutral-light);border-radius:0 0 var(--border-radius-md) var(--border-radius-md)}"]})}return e})();export{jt as a};