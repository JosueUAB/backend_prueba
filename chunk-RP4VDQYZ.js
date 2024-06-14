import{a as Ie,b as _e,d as De,e as Ne,g as Ve,j as h,l as Me,o as Pe,q as je,r as Ae,s as Ge,t as Re,x as Oe}from"./chunk-RB3RUY6Z.js";import{$ as o,$d as Ee,Aa as H,B as P,Ba as Q,Cc as he,Da as U,Ea as q,Ga as J,Ha as Y,I as C,Ia as z,La as K,Ld as ke,Ma as W,N as j,Na as X,O as A,Oa as F,P as G,Pa as n,Q as R,Qa as Z,Ra as y,Sa as ee,U as O,Wb as ce,Xc as fe,Ya as te,Za as b,Zc as ye,_a as E,_c as ve,aa as f,ab as B,ad as Ce,ae as v,bb as ie,bd as ge,be as x,cb as oe,cd as Se,ce as Be,da as L,dd as Te,de as w,ee as k,fb as ne,fd as Fe,fe as I,gd as be,hc as pe,id as xe,ja as $,jd as we,mb as re,n as M,na as c,ob as ae,pc as me,qb as se,rb as le,ua as g,va as S,wa as T,xa as e,ya as i,yc as de,za as d,zc as ue}from"./chunk-O3ZUDSFI.js";import{a as D,b as N,c as V}from"./chunk-YIEKTC7C.js";var Qe=["*"],_=(()=>{let r=class r extends v{constructor(l,a,s,p){super(l,a,s,p),this.hostElement=l,this.renderer=a,this.toasterService=s,this.changeDetectorRef=p,this.closeButton=!0,this.title=""}};r.\u0275fac=function(a){return new(a||r)(f(O),f(L),f(Ee),f(ne))},r.\u0275cmp=C({type:r,selectors:[["app-toast-simple"]],inputs:{closeButton:"closeButton",title:"title"},standalone:!0,features:[te([{provide:v,useExisting:P(()=>r)}]),$,b],ngContentSelectors:Qe,decls:12,vars:6,consts:[["toastBody",""],[3,"closeButton"],["focusable","false","height","20","preserveAspectRatio","xMidYMid slice","role","img","width","20","xmlns","http://www.w3.org/2000/svg",1,"rounded","me-2"],["fill","#007aff","height","100%","width","100%"],[3,"cToastClose"],[1,"mb-1"],["thin","",3,"value"]],template:function(a,s){if(a&1&&(J(),H(0),e(1,"c-toast-header",1),G(),e(2,"svg",2),d(3,"rect",3),i(),R(),e(4,"strong"),n(5),i()(),e(6,"c-toast-body",4,0)(8,"p",5),n(9),i(),Y(10),d(11,"c-progress",6),i(),Q()),a&2){let p,m=F(7);o(),c("closeButton",s.closeButton),o(4),Z(s.title),o(),c("cToastClose",m.toast),o(3),ee("This is a dynamic toast no ",m.toast==null?null:m.toast.index," ",m.toast==null?null:m.toast.clock,""),o(2),c("value",25*((p=m.toast==null?null:m.toast.clock)!==null&&p!==void 0?p:1))}},dependencies:[w,x,Be,ke],styles:["[_nghost-%COMP%]{display:block;overflow:hidden}"]});let t=r;return t})();var Ue=()=>({position:"relative"}),qe=()=>({display:"contents"});function Je(t,r){if(t&1&&d(0,"c-toaster",2),t&2){let u=r.$implicit;z("placement",u),c("ngClass","p-3")}}function Ye(t,r){if(t&1&&(e(0,"option",12),n(1),i()),t&2){let u=r.$implicit;c("ngValue",u),o(),y(" ",u," ")}}function ze(t,r){if(t&1&&(e(0,"option",12),n(1),i()),t&2){let u=r.$implicit;c("ngValue",u),o(),y(" ",u," ")}}var Le=function(t){return t[""]="",t.primary="primary",t.secondary="secondary",t.success="success",t.info="info",t.warning="warning",t.danger="danger",t.dark="dark",t.light="light",t}(Le||{}),pt=(()=>{let r=class r{constructor(){this.positions=Object.values(k),this.position=k.TopEnd,this.positionStatic=k.Static,this.colors=Object.keys(Le),this.autohide=!0,this.delay=5e3,this.fade=!0,this.toasterForm=new Ve({autohide:new h(this.autohide),delay:new h({value:this.delay,disabled:!this.autohide}),position:new h(this.position),fade:new h({value:!0,disabled:!1}),closeButton:new h(!0),color:new h("")}),this.formChanges=this.toasterForm.valueChanges.pipe(ce(),M(l=>l.autohide!==this.autohide))}ngOnInit(){this.formChanges.subscribe(l=>{this.autohide=l.autohide,this.position=l.position,this.fade=l.fade;let a=this.toasterForm?.get("delay");this.autohide?a?.enable():a?.disable(),this.delay=a?.enabled?l.timeout:this.delay})}addToast(){let l=this.toasterForm.value;this.viewChildren.filter(s=>s.placement===this.toasterForm.value.position).forEach(s=>{let p=`Toast ${l.color} ${l.position}`,m=V(N(D({},l),{title:p}),[]),$e=s.addToast(_,m,{});$e.instance.closeButton=m.closeButton})}};r.\u0275fac=function(a){return new(a||r)},r.\u0275cmp=C({type:r,selectors:[["app-toasters"]],viewQuery:function(a,s){if(a&1&&K(I,5),a&2){let p;W(p=X())&&(s.viewChildren=p)}},standalone:!0,features:[b],decls:68,vars:24,consts:[["toast",""],["xs","12"],["position","fixed",3,"ngClass","placement"],["lg","6","sm","12"],["cForm","",3,"formGroup"],[1,"my-2","mt-4"],["cFormCheckInput","","formControlName","autohide","id","autohide","type","checkbox"],["cFormCheckLabel","","for","autohide"],["cInputGroupText",""],["cFormControl","","formControlName","delay","id","delay",3,"type"],[1,"my-2"],["cSelect","","formControlName","position"],[3,"ngValue"],["cSelect","","formControlName","color"],["cFormCheckInput","","formControlName","fade","id","fade","type","checkbox"],["cFormCheckLabel","","for","fade"],["cFormCheckInput","","formControlName","closeButton","id","close","type","checkbox"],["cFormCheckLabel","","for","close"],["cButton","","color","success",1,"m-1",3,"click"],["lg","6","sm","12",1,"mt-3",3,"ngStyle"],[3,"placement","ngStyle"],["color","danger",3,"autohide","fade","visible"],["color","dark",3,"fade","visible"],[3,"closeButton"],["cTextColor","secondary"],["color","secondary",3,"autohide","fade","visible","title"],[1,"mt-3"]],template:function(a,s){if(a&1){let p=U();e(0,"c-row")(1,"c-col",1),S(2,Je,1,2,"c-toaster",2,g),B(4,"slice"),e(5,"c-card")(6,"c-card-header"),n(7," Toaster "),i(),e(8,"c-card-body")(9,"c-container")(10,"c-row")(11,"c-col",3)(12,"form",4)(13,"h5"),n(14,"Add toast with following props:"),i(),e(15,"c-form-check",5),d(16,"input",6),e(17,"label",7),n(18," Toast autohide "),i()(),e(19,"c-input-group")(20,"span",8),n(21,"Delay"),i(),d(22,"input",9),i(),e(23,"c-input-group",10)(24,"span",8),n(25,"Position"),i(),e(26,"select",11),S(27,Ye,2,2,"option",12,g),i()(),e(29,"c-input-group",10)(30,"span",8),n(31,"Color"),i(),e(32,"select",13),S(33,ze,2,2,"option",12,g),i()(),e(35,"c-form-check",10),d(36,"input",14),e(37,"label",15),n(38,"Fade"),i()(),e(39,"c-form-check",10),d(40,"input",16),e(41,"label",17),n(42,"Close Button"),i()(),d(43,"hr"),e(44,"button",18),q("click",function(){return j(p),A(s.addToast())}),n(45," Add toast "),i()()(),e(46,"c-col",19)(47,"c-toaster",20)(48,"c-toast",21)(49,"c-toast-header"),n(50,"Toast title"),i(),e(51,"c-toast-body"),n(52,"This is a static toast in a static toaster"),i()(),e(53,"c-toast",22)(54,"c-toast-header",23),n(55,"Toast title"),i(),e(56,"c-toast-body",24),n(57,"This is a static toast in a static toaster"),i()(),e(58,"app-toast-simple",25,0),n(60),i()()()()()()(),e(61,"c-card",26)(62,"c-card-body")(63,"c-row")(64,"c-col")(65,"p"),n(66),B(67,"json"),i()()()()()()()}if(a&2){let p=F(59);o(2),T(oe(4,17,s.positions,1)),o(10),c("formGroup",s.toasterForm),o(10),c("type","number"),o(5),T(s.positions),o(6),T(s.colors),o(13),c("ngStyle",E(22,Ue)),o(),c("placement",s.positionStatic)("ngStyle",E(23,qe)),o(),c("autohide",!1)("fade",!0)("visible",!0),o(5),c("fade",!0)("visible",!0),o(),c("closeButton",!1),o(4),c("autohide",!1)("fade",!0)("visible",!0)("title","App Toast"),o(2),y(" This is a toast in static positioned App toaster! ",p.index," "),o(6),y("Form value: ",ie(67,20,s.toasterForm.value),"")}},dependencies:[we,xe,I,re,me,de,he,ue,be,Oe,Me,Ge,Re,_e,Ie,Ae,De,Ne,Pe,je,fe,ge,Se,Ce,ye,Fe,Te,ve,pe,ae,v,w,x,_,se,le]});let t=r;return t})();export{Le as Colors,pt as ToastersComponent};
