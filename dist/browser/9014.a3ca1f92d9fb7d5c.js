"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[9014],{89014:(u,l,n)=>{n.r(l),n.d(l,{CreateCommunityParentSelectorComponent:()=>p});var s=n(18174),e=n(98678),i=n(46182),m=n(96342);let p=(()=>{class o extends s.CreateCommunityParentSelectorComponent{}return o.\u0275fac=function(){let r;return function(t){return(r||(r=e.\u0275\u0275getInheritedFactory(o)))(t||o)}}(),o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["ds-create-community-parent-selector"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:21,vars:15,consts:[[1,"modal-header"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"btn","btn-outline-primary","btn-lg","btn-block",3,"click"],[1,"position-relative","py-1","my-3","font-weight-normal"],["id","create-community-or-separator",1,"text-center","position-absolute","w-100"],[1,"px-4","bg-white"],[1,"px-2"],[3,"currentDSOId","types","sort","onSelect"]],template:function(a,t){1&a&&(e.\u0275\u0275elementStart(0,"div")(1,"div",0),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementStart(4,"button",1),e.\u0275\u0275listener("click",function(){return t.close()}),e.\u0275\u0275elementStart(5,"span",2),e.\u0275\u0275text(6,"\xd7"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(7,"div",3)(8,"button",4),e.\u0275\u0275listener("click",function(){return t.selectObject(void 0)}),e.\u0275\u0275text(9),e.\u0275\u0275pipe(10,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"h3",5),e.\u0275\u0275element(12,"hr"),e.\u0275\u0275elementStart(13,"div",6)(14,"span",7),e.\u0275\u0275text(15),e.\u0275\u0275pipe(16,"translate"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(17,"h5",8),e.\u0275\u0275text(18),e.\u0275\u0275pipe(19,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"ds-dso-selector",9),e.\u0275\u0275listener("onSelect",function(d){return t.selectObject(d)}),e.\u0275\u0275elementEnd()()()),2&a&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("",e.\u0275\u0275pipeBind1(3,7,"dso-selector."+t.action+"."+t.objectType.toString().toLowerCase()+".head")," "),e.\u0275\u0275advance(7),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(10,9,"dso-selector.create.community.top-level")),e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(16,11,"dso-selector.create.community.or-divider")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(19,13,"dso-selector.create.community.sub-level")),e.\u0275\u0275advance(2),e.\u0275\u0275property("currentDSOId",null==t.dsoRD?null:t.dsoRD.payload.uuid)("types",t.selectorTypes)("sort",t.defaultSort))},dependencies:[i.O,m.X$],styles:["#create-community-or-separator[_ngcontent-%COMP%]{top:0}"]}),o})()}}]);