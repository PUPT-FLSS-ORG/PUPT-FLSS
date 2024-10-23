import{a as C}from"./chunk-XOQFDSMO.js";import{a as V,b as F}from"./chunk-JLIX64RS.js";import{c as H}from"./chunk-VORQTW3B.js";import"./chunk-FVBRAVME.js";import"./chunk-L2D7AHNW.js";import"./chunk-POHCU53O.js";import{a as B}from"./chunk-RIFQ5WEN.js";import"./chunk-DXFFT4B6.js";import{a as G}from"./chunk-UJ255QIO.js";import"./chunk-MXV4M2BO.js";import"./chunk-4N6BO7AP.js";import{a as U}from"./chunk-SUK6Z7P5.js";import{a as j,c as R,d as A,e as $,f as q,h as N}from"./chunk-RU375CWH.js";import"./chunk-KXJUWRJT.js";import{a as Z}from"./chunk-SB5MWYDA.js";import"./chunk-EMZRNCIP.js";import"./chunk-DKHW3YWA.js";import{r as T,t as z}from"./chunk-2T5SWUVG.js";import{Ba as b,Cb as o,Db as i,Eb as c,Ib as L,Nb as g,Pb as m,T as p,Wa as d,Xa as a,Zb as r,_b as v,bb as w,f as _,gc as E,ha as P,mb as x,mc as D,nc as I,qa as h,ra as f,rb as S,w as O,xb as k,z as M,za as y}from"./chunk-NSU275EB.js";import"./chunk-ODN5LVDJ.js";function K(l,Q){if(l&1){let n=L();o(0,"div",22)(1,"span",24),g("click",function(){h(n);let t=m();return f(t.toggleTheme())}),c(2,"span",25),D(3,"async"),r(4," Switch Theme "),i(),o(5,"span",26),g("click",function(){h(n);let t=m();return f(t.logout())}),c(6,"span",27),r(7," Logout "),i()()}if(l&2){let n=m();d(2),S("mat-symbol",I(3,1,n.themeService.isDarkTheme$)?"light_mode":"dark_mode")}}var pe=(()=>{class l{el;renderer;router;ngZone;themeService;authService;dialog;cookieService;destroy$=new _;isInitialLoad=!0;resizeObserver;documentClickListener;isDropdownOpen=!1;facultyName="";facultyEmail="";constructor(n,e,t,s,u,W,Y,J){this.el=n,this.renderer=e,this.router=t,this.ngZone=s,this.themeService=u,this.authService=W,this.dialog=Y,this.cookieService=J}ngOnInit(){this.loadFacultyInfo()}ngAfterViewInit(){this.setupSlider(),this.router.events.pipe(M(n=>n instanceof j),p(this.destroy$)).subscribe(()=>{setTimeout(()=>this.updateSliderPosition(),0)}),setTimeout(()=>this.updateSliderPosition(),0),this.ngZone.runOutsideAngular(()=>{O(window,"resize").pipe(p(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>{this.updateSliderPosition()})})}),this.setupResizeObserver(),this.setupDocumentClickListener()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.resizeObserver&&this.resizeObserver.disconnect(),this.removeDocumentClickListener()}loadFacultyInfo(){this.facultyName=this.cookieService.get("user_name"),this.facultyEmail=this.cookieService.get("faculty_email")}toggleDropdown(n){n.stopPropagation(),this.isDropdownOpen=!this.isDropdownOpen}closeDropdown(){this.isDropdownOpen=!1}toggleTheme(){this.themeService.toggleTheme()}setupSlider(){this.el.nativeElement.querySelector(".header-navbar").querySelectorAll("a").forEach(t=>{t.addEventListener("click",()=>{this.isInitialLoad=!1,this.updateSliderPosition()})})}setupResizeObserver(){let n=this.el.nativeElement.querySelector(".header-navbar");this.resizeObserver=new ResizeObserver(()=>{this.ngZone.run(()=>{this.updateSliderPosition()})}),this.resizeObserver.observe(n)}setupDocumentClickListener(){this.documentClickListener=this.renderer.listen("document","click",n=>{let e=this.el.nativeElement.querySelector(".dropdown-menu"),t=this.el.nativeElement.querySelector(".profile-icon");!e?.contains(n.target)&&!t?.contains(n.target)&&this.ngZone.run(()=>{this.closeDropdown()})})}removeDocumentClickListener(){this.documentClickListener&&this.documentClickListener()}updateSliderPosition(){let n=this.el.nativeElement.querySelector(".header-navbar"),e=n.querySelector(".slider"),t=n.querySelector("a.active");t?this.isInitialLoad?(this.renderer.setStyle(e,"transition","none"),this.renderer.setStyle(e,"width",`${t.offsetWidth}px`),this.renderer.setStyle(e,"left",`${t.offsetLeft}px`),this.renderer.setStyle(e,"opacity","1"),this.renderer.setStyle(e,"transform","scale(1)"),e.offsetHeight,this.renderer.removeStyle(e,"transition")):(this.renderer.setStyle(e,"width",`${t.offsetWidth}px`),this.renderer.setStyle(e,"left",`${t.offsetLeft}px`),this.renderer.setStyle(e,"opacity","1"),this.renderer.setStyle(e,"transform","scale(1)")):(this.renderer.setStyle(e,"opacity","0"),this.renderer.setStyle(e,"transform","scale(0.95)")),this.isInitialLoad=!1}logout(){this.dialog.open(C,{data:{title:"Log Out",content:"Are you sure you want to log out? This will end your current session.",actionText:"Log Out",cancelText:"Cancel",action:"Log Out"},disableClose:!0,panelClass:"dialog-base"}).afterClosed().subscribe(e=>{if(console.log("Dialog result:",e),e==="Log Out"){let t=this.dialog.open(C,{data:{title:"Logging Out",content:"Currently logging you out...",showProgressBar:!0},disableClose:!0});this.authService.logout().subscribe({next:s=>{console.log("Logout successful",s),this.authService.clearCookies(),t.close(),this.router.navigate(["/login"])},error:s=>{console.error("Logout failed",s),t.close()}})}})}static \u0275fac=function(e){return new(e||l)(a(b),a(w),a(A),a(y),a(B),a(U),a(H),a(Z))};static \u0275cmp=P({type:l,selectors:[["app-main"]],standalone:!0,features:[E],decls:34,vars:3,consts:[[1,"faculty-main-container"],[1,"faculty-main-header"],[1,"header-name"],["src","assets/images/pup_taguig_logo.svg","alt","University Logo",1,"university-logo"],[1,"header-text"],[1,"university-name"],[1,"system-name"],[1,"header-navbar"],[1,"slider"],["routerLink","home","routerLinkActive","active"],["mat-symbol","home"],[1,"nav-text"],["routerLink","preferences","routerLinkActive","active"],["mat-symbol","settings"],["routerLink","load-and-schedule","routerLinkActive","active"],["mat-symbol","calendar_month"],[1,"header-account"],[1,"account-text"],[1,"account-name"],[1,"account-email"],[1,"profile-dropdown"],["src","assets/images/default_profile_icon.png","alt","Profile Icon","matTooltip","Click to open settings","matTooltipPosition","below",1,"profile-icon",3,"click"],[1,"dropdown-menu"],[1,"faculty-main-content"],["matRipple","",1,"dropdown-item",3,"click"],[3,"mat-symbol"],["matRipple","",1,"dropdown-item","logout",3,"click"],["mat-symbol","logout"]],template:function(e,t){e&1&&(o(0,"div",0)(1,"header",1)(2,"div",2),c(3,"img",3),o(4,"div",4)(5,"div",5),r(6,"PUP \u2013 TAGUIG BRANCH"),i(),o(7,"div",6),r(8,"FACULTY LOADING & SCHEDULING"),i()()(),o(9,"nav",7),c(10,"div",8),o(11,"a",9),c(12,"span",10),o(13,"span",11),r(14,"Home"),i()(),o(15,"a",12),c(16,"span",13),o(17,"span",11),r(18,"Set Preferences"),i()(),o(19,"a",14),c(20,"span",15),o(21,"span",11),r(22,"Load and Schedule"),i()()(),o(23,"div",16)(24,"div",17)(25,"div",18),r(26),i(),o(27,"div",19),r(28),i()(),o(29,"div",20)(30,"img",21),g("click",function(u){return t.toggleDropdown(u)}),i(),x(31,K,8,3,"div",22),i()()(),o(32,"main",23),c(33,"router-outlet"),i()()),e&2&&(d(26),v(t.facultyName),d(2),v(t.facultyEmail),d(3),k(t.isDropdownOpen?31:-1))},dependencies:[N,R,$,q,z,T,F,V,G],styles:["*[_ngcontent-%COMP%]{color:var(--neutral-base);transition:background-color .3s ease;transition:background-color .3s ease,color .3s ease}.faculty-main-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:none;justify-content:none;gap:var(--spacing-xl);height:100%;box-sizing:border-box;padding:var(--spacing-2xl);background-color:var(--main-bg)}.faculty-main-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:stretch;justify-content:space-between;gap:var(--spacing-lg);width:100%}.faculty-main-header[_ngcontent-%COMP%]   .header-name[_ngcontent-%COMP%], .faculty-main-header[_ngcontent-%COMP%]   .header-navbar[_ngcontent-%COMP%], .faculty-main-header[_ngcontent-%COMP%]   .header-account[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:0;max-width:fit-content}.faculty-main-header[_ngcontent-%COMP%]   .header-name[_ngcontent-%COMP%]{flex:0 1 auto;min-width:0;gap:var(--spacing-md)}.faculty-main-header[_ngcontent-%COMP%]   .header-name[_ngcontent-%COMP%]   .university-logo[_ngcontent-%COMP%]{width:3.5rem;height:auto;flex-shrink:0}.faculty-main-header[_ngcontent-%COMP%]   .header-name[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]{min-width:0;display:flex;flex-direction:column;justify-content:center;gap:var(--spacing-xxs)}.faculty-main-header[_ngcontent-%COMP%]   .header-name[_ngcontent-%COMP%]   .university-name[_ngcontent-%COMP%], .faculty-main-header[_ngcontent-%COMP%]   .header-name[_ngcontent-%COMP%]   .system-name[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;font-family:var(--font-header);font-size:var(--font-size-md);font-weight:600;white-space:nowrap}.faculty-main-header[_ngcontent-%COMP%]   .header-name[_ngcontent-%COMP%]   .university-name[_ngcontent-%COMP%]{color:var(--primary-one)}.faculty-main-header[_ngcontent-%COMP%]   .header-navbar[_ngcontent-%COMP%]{flex:0 1 auto;align-self:center;align-items:stretch;gap:var(--spacing-md);background-color:var(--neutral-mid);border-radius:var(--border-radius-xl);position:relative;display:flex}.faculty-main-header[_ngcontent-%COMP%]   .header-navbar[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;background-color:var(--primary-one);border-radius:var(--border-radius-xl);transition:all .3s cubic-bezier(.25,1,.5,1);opacity:0;transform-origin:center}.faculty-main-header[_ngcontent-%COMP%]   .header-navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:var(--spacing-sm);text-decoration:none;padding:var(--spacing-md) var(--spacing-lg);color:var(--neutral-base);font-weight:500;border-radius:var(--border-radius-xl);position:relative;z-index:1;transition:color .3s ease;cursor:pointer}.faculty-main-header[_ngcontent-%COMP%]   .header-navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.faculty-main-header[_ngcontent-%COMP%]   .header-navbar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#fff;transition:color .3s ease}.faculty-main-header[_ngcontent-%COMP%]   .header-navbar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   span.material-symbols-rounded[_ngcontent-%COMP%], .faculty-main-header[_ngcontent-%COMP%]   .header-navbar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%]{color:#fff}.faculty-main-header[_ngcontent-%COMP%]   .header-navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.active){transition:color .3s ease}.faculty-main-header[_ngcontent-%COMP%]   .header-navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active){color:var(--primary-one)}.faculty-main-header[_ngcontent-%COMP%]   .header-navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active)   span.material-symbols-rounded[_ngcontent-%COMP%], .faculty-main-header[_ngcontent-%COMP%]   .header-navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active)   .nav-text[_ngcontent-%COMP%]{color:var(--primary-one)}.faculty-main-header[_ngcontent-%COMP%]   .header-account[_ngcontent-%COMP%]{flex:0 1 auto;gap:var(--spacing-md);display:flex;align-items:center;justify-content:flex-end;min-width:0}.faculty-main-header[_ngcontent-%COMP%]   .header-account[_ngcontent-%COMP%]   .account-text[_ngcontent-%COMP%]{font-size:var(--font-size-md);text-align:right;min-width:0;flex:1;overflow:hidden}.faculty-main-header[_ngcontent-%COMP%]   .header-account[_ngcontent-%COMP%]   .account-text[_ngcontent-%COMP%]   .account-name[_ngcontent-%COMP%], .faculty-main-header[_ngcontent-%COMP%]   .header-account[_ngcontent-%COMP%]   .account-text[_ngcontent-%COMP%]   .account-email[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.faculty-main-header[_ngcontent-%COMP%]   .header-account[_ngcontent-%COMP%]   .account-text[_ngcontent-%COMP%]   .account-name[_ngcontent-%COMP%]{font-weight:600}.faculty-main-header[_ngcontent-%COMP%]   .header-account[_ngcontent-%COMP%]   .account-text[_ngcontent-%COMP%]   .account-email[_ngcontent-%COMP%]{opacity:var(--opacity-semi-opaque)}.faculty-main-header[_ngcontent-%COMP%]   .header-account[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:0;position:relative}.faculty-main-header[_ngcontent-%COMP%]   .header-account[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%]   .profile-icon[_ngcontent-%COMP%]{width:3rem;height:3rem;border-radius:50%;cursor:pointer;transition:all .3s ease;border:2px solid transparent;background-clip:padding-box,border-box;background-origin:padding-box,border-box;background-image:linear-gradient(to bottom,var(--neutral-light),var(--neutral-light)),linear-gradient(90deg,var(--gradient-light-start) 0%,var(--gradient-light-end) 100%)}.faculty-main-header[_ngcontent-%COMP%]   .header-account[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%]   .profile-icon[_ngcontent-%COMP%]:hover{box-shadow:0 0 0 3px var(--neutral-hover)}.faculty-main-header[_ngcontent-%COMP%]   .header-account[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{position:absolute;top:100%;right:0;background-color:var(--neutral-light);box-shadow:var(--shadow-level-1);border-radius:var(--border-radius-md);z-index:15}.faculty-main-header[_ngcontent-%COMP%]   .header-account[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:flex;align-items:center;gap:var(--spacing-xs);padding:var(--spacing-md) var(--spacing-md);color:var(--neutral-base);transition:background-color .3s ease;border-radius:var(--border-radius-sm);font-weight:500;-webkit-user-select:none;user-select:none;cursor:pointer}.faculty-main-header[_ngcontent-%COMP%]   .header-account[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover{background-color:var(--neutral-option)}.faculty-main-header[_ngcontent-%COMP%]   .header-account[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item.logout[_ngcontent-%COMP%], .faculty-main-header[_ngcontent-%COMP%]   .header-account[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item.logout[_ngcontent-%COMP%]   span.material-symbols-rounded[_ngcontent-%COMP%]{color:var(--primary-text)}.faculty-main-header[_ngcontent-%COMP%]   .header-account[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item.logout[_ngcontent-%COMP%]:hover{background-color:var(--primary-fade)}.faculty-main-header[_ngcontent-%COMP%]   .header-account[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   span.material-symbols-rounded[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:var(--font-size-lg);font-weight:500}.faculty-main-content[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none;height:100%;overflow-y:auto}.faculty-main-content[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:var(--opacity-semi-transparent);z-index:9999;padding:var(--spacing-lg);border-radius:var(--border-radius-base)}@media screen and (max-width: 800px){.nav-text[_ngcontent-%COMP%]{display:none}}"]})}return l})();export{pe as MainComponent};