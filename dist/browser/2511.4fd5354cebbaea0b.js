"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[2511],{62511:(B,l,o)=>{o.r(l),o.d(l,{DsoEditMetadataComponent:()=>O});var _=o(32984),e=o(98678),r=o(35103),p=o(87586),c=o(2594),m=o(64333),u=o(64144),v=o(27863),f=o(12013),b=o(23707),x=o(96343),g=o(96342);function C(n,i){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",20),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(a.reinstate())}),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275element(3,"i",21),e.\u0275\u0275elementStart(4,"span",6),e.\u0275\u0275text(5),e.\u0275\u0275pipe(6,"translate"),e.\u0275\u0275elementEnd()()}if(2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("disabled",e.\u0275\u0275pipeBind1(1,3,t.saving$))("title",e.\u0275\u0275pipeBind1(2,5,t.dsoType+".edit.metadata.reinstate-button")),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate1("\xa0",e.\u0275\u0275pipeBind1(6,7,t.dsoType+".edit.metadata.reinstate-button"),"")}}function E(n,i){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",22),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(a.discard())}),e.\u0275\u0275pipe(1,"translate"),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275element(3,"i",23),e.\u0275\u0275elementStart(4,"span",6),e.\u0275\u0275text(5),e.\u0275\u0275pipe(6,"translate"),e.\u0275\u0275elementEnd()()}if(2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("title",e.\u0275\u0275pipeBind1(1,3,t.dsoType+".edit.metadata.discard-button"))("disabled",!t.hasChanges||e.\u0275\u0275pipeBind1(2,5,t.saving$)),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate1("\xa0",e.\u0275\u0275pipeBind1(6,7,t.dsoType+".edit.metadata.discard-button"),"")}}function y(n,i){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",24)(1,"div",25)(2,"ds-metadata-field-selector",26),e.\u0275\u0275listener("mdFieldChange",function(a){e.\u0275\u0275restoreView(t);const s=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(s.newMdField=a)}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"div",27)(4,"div",11),e.\u0275\u0275element(5,"ds-dso-edit-metadata-value-headers",28),e.\u0275\u0275elementStart(6,"ds-dso-edit-metadata-value",29),e.\u0275\u0275listener("confirm",function(a){e.\u0275\u0275restoreView(t);const s=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(s.confirmNewValue(a))})("remove",function(){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(a.form.newValue=void 0)})("undo",function(){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(a.form.newValue=void 0)}),e.\u0275\u0275elementEnd()()()()}if(2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(2),e.\u0275\u0275property("dsoType",t.dsoType)("mdField",t.newMdField)("autofocus",!0),e.\u0275\u0275advance(3),e.\u0275\u0275property("dsoType",t.dsoType),e.\u0275\u0275advance(1),e.\u0275\u0275property("dso",t.dso)("mdValue",t.form.newValue)("dsoType",t.dsoType)("saving$",t.savingOrLoadingFieldValidation$)("isOnlyValue",!0)}}function T(n,i){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",34),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext().$implicit,s=e.\u0275\u0275nextContext(2);return s.form.resetOrder(a),e.\u0275\u0275resetView(s.onValueSaved())}),e.\u0275\u0275text(1),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(2,1,t.dsoType+".edit.metadata.reset-order-button")," ")}}function M(n,i){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",24)(1,"div",30)(2,"span",31),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,T,3,3,"div",32),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"ds-dso-edit-metadata-field-values",33),e.\u0275\u0275listener("valueSaved",function(){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(a.onValueSaved())}),e.\u0275\u0275elementEnd()()}if(2&n){const t=i.$implicit,d=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(t),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",d.form.hasOrderChanges(t)),e.\u0275\u0275advance(1),e.\u0275\u0275property("dso",d.dso)("form",d.form)("dsoType",d.dsoType)("saving$",d.saving$)("draggingMdField$",d.draggingMdField$)("mdField",t)}}function w(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275element(1,"ds-alert",35),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("content",t.dsoType+".edit.metadata.empty")("type",t.AlertTypeEnum.Info)}}function D(n,i){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",36),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(a.reinstate())}),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275element(3,"i",21),e.\u0275\u0275text(4),e.\u0275\u0275pipe(5,"translate"),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("disabled",e.\u0275\u0275pipeBind1(1,3,t.saving$))("title",e.\u0275\u0275pipeBind1(2,5,t.dsoType+".edit.metadata.reinstate-button")),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(5,7,t.dsoType+".edit.metadata.reinstate-button")," ")}}function V(n,i){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",37),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(a.discard())}),e.\u0275\u0275pipe(1,"translate"),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275element(3,"i",23),e.\u0275\u0275text(4),e.\u0275\u0275pipe(5,"translate"),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("title",e.\u0275\u0275pipeBind1(1,3,t.dsoType+".edit.metadata.discard-button"))("disabled",!t.hasChanges||e.\u0275\u0275pipeBind1(2,5,t.saving$)),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(5,7,t.dsoType+".edit.metadata.discard-button")," ")}}function h(n,i){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",2)(1,"div",3)(2,"button",4),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(a.add())}),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275pipe(4,"translate"),e.\u0275\u0275element(5,"i",5),e.\u0275\u0275elementStart(6,"span",6),e.\u0275\u0275text(7),e.\u0275\u0275pipe(8,"translate"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(9,C,7,9,"button",7),e.\u0275\u0275elementStart(10,"button",8),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(a.submit())}),e.\u0275\u0275pipe(11,"async"),e.\u0275\u0275pipe(12,"translate"),e.\u0275\u0275element(13,"i",9),e.\u0275\u0275elementStart(14,"span",6),e.\u0275\u0275text(15),e.\u0275\u0275pipe(16,"translate"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(17,E,7,9,"button",10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"div",11),e.\u0275\u0275pipe(19,"translate"),e.\u0275\u0275element(20,"ds-dso-edit-metadata-headers",12),e.\u0275\u0275template(21,y,7,9,"div",13),e.\u0275\u0275template(22,M,6,8,"div",14),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(23,w,2,2,"div",1),e.\u0275\u0275elementStart(24,"div",15)(25,"div",16),e.\u0275\u0275template(26,D,6,9,"button",17),e.\u0275\u0275elementStart(27,"button",18),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(a.submit())}),e.\u0275\u0275pipe(28,"async"),e.\u0275\u0275pipe(29,"translate"),e.\u0275\u0275element(30,"i",9),e.\u0275\u0275text(31),e.\u0275\u0275pipe(32,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(33,V,6,9,"button",19),e.\u0275\u0275elementEnd()()()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("disabled",t.form.newValue||e.\u0275\u0275pipeBind1(3,18,t.saving$))("title",e.\u0275\u0275pipeBind1(4,20,t.dsoType+".edit.metadata.add-button")),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate1("\xa0",e.\u0275\u0275pipeBind1(8,22,t.dsoType+".edit.metadata.add-button"),""),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",t.isReinstatable),e.\u0275\u0275advance(1),e.\u0275\u0275property("disabled",!t.hasChanges||e.\u0275\u0275pipeBind1(11,24,t.saving$))("title",e.\u0275\u0275pipeBind1(12,26,t.dsoType+".edit.metadata.save-button")),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate1("\xa0",e.\u0275\u0275pipeBind1(16,28,t.dsoType+".edit.metadata.save-button"),""),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!t.isReinstatable),e.\u0275\u0275advance(1),e.\u0275\u0275attribute("aria-label",e.\u0275\u0275pipeBind1(19,30,"item.edit.head")),e.\u0275\u0275advance(2),e.\u0275\u0275property("dsoType",t.dsoType),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.form.newValue),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",t.form.fieldKeys),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.isEmpty&&!t.form.newValue),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",t.isReinstatable),e.\u0275\u0275advance(1),e.\u0275\u0275property("disabled",!t.hasChanges||e.\u0275\u0275pipeBind1(28,32,t.saving$))("title",e.\u0275\u0275pipeBind1(29,34,t.dsoType+".edit.metadata.save-button")),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(32,36,t.dsoType+".edit.metadata.save-button")," "),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!t.isReinstatable)}}function I(n,i){1&n&&e.\u0275\u0275element(0,"ds-loading")}let O=(()=>{class n extends _.DsoEditMetadataComponent{}return n.\u0275fac=function(){let i;return function(d){return(i||(i=e.\u0275\u0275getInheritedFactory(n)))(d||n)}}(),n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ds-dso-edit-metadata"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:2,vars:2,consts:[["class","item-metadata",4,"ngIf"],[4,"ngIf"],[1,"item-metadata"],[1,"button-row","top","d-flex","my-2","space-children-mr","ml-gap"],["id","dso-add-btn",1,"mr-auto","btn","btn-success",3,"disabled","title","click"],[1,"fas","fa-plus"],[1,"d-none","d-sm-inline"],["class","btn btn-warning ml-1","id","dso-reinstate-btn",3,"disabled","title","click",4,"ngIf"],["id","dso-save-btn",1,"btn","btn-primary","ml-1",3,"disabled","title","click"],[1,"fas","fa-save"],["class","btn btn-danger ml-1","id","dso-discard-btn",3,"title","disabled","click",4,"ngIf"],["role","table"],[3,"dsoType"],["class","d-flex flex-row ds-field-row","role","row",4,"ngIf"],["class","d-flex flex-row ds-field-row","role","row",4,"ngFor","ngForOf"],[1,"button-row","bottom","d-inline-block","w-100"],[1,"mt-2","float-right","space-children-mr","ml-gap"],["class","btn btn-warning",3,"disabled","title","click",4,"ngIf"],[1,"btn","btn-primary",3,"disabled","title","click"],["class","btn btn-danger",3,"title","disabled","click",4,"ngIf"],["id","dso-reinstate-btn",1,"btn","btn-warning","ml-1",3,"disabled","title","click"],[1,"fas","fa-undo-alt"],["id","dso-discard-btn",1,"btn","btn-danger","ml-1",3,"title","disabled","click"],[1,"fas","fa-times"],["role","row",1,"d-flex","flex-row","ds-field-row"],["role","rowheader",1,"lbl-cell","ds-success"],[3,"dsoType","mdField","autofocus","mdFieldChange"],["role","cell",1,"flex-grow-1","ds-drop-list"],["role","presentation",3,"dsoType"],[3,"dso","mdValue","dsoType","saving$","isOnlyValue","confirm","remove","undo"],["role","rowheader",1,"lbl-cell"],[1,"dont-break-out","preserve-line-breaks"],["class","btn btn-warning reset-order-button mt-2 w-100",3,"click",4,"ngIf"],["role","cell",1,"flex-grow-1",3,"dso","form","dsoType","saving$","draggingMdField$","mdField","valueSaved"],[1,"btn","btn-warning","reset-order-button","mt-2","w-100",3,"click"],[3,"content","type"],[1,"btn","btn-warning",3,"disabled","title","click"],[1,"btn","btn-danger",3,"title","disabled","click"]],template:function(t,d){1&t&&(e.\u0275\u0275template(0,h,34,38,"div",0),e.\u0275\u0275template(1,I,1,0,"ds-loading",1)),2&t&&(e.\u0275\u0275property("ngIf",d.form),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!d.form))},dependencies:[r.sg,r.O5,p.w,c.LoadingComponent,m.V,u.M,v.J,f.i,b.V,x.LoadingComponent,r.Ov,g.X$],styles:[".lbl-cell[_ngcontent-%COMP%]{min-width:var(--ds-dso-edit-field-width);max-width:var(--ds-dso-edit-field-width);background-color:var(--bs-gray-100);font-weight:700;padding:1rem;border:1px solid var(--bs-gray-200)}.lbl-cell.ds-success[_ngcontent-%COMP%]{background-color:var(--bs-success-bg);border:1px solid var(--bs-success)}.ds-field-row[_ngcontent-%COMP%]{border:1px solid var(--bs-gray-400)}.reset-order-button[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),n})()}}]);