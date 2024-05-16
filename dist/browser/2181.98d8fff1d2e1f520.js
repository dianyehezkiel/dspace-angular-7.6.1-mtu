"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[2181],{92181:(S,r,_)=>{_.r(r),_.d(r,{FileSectionComponent:()=>F});var p=_(17605),s=_(24296),e=_(98678),l=_(35103),d=_(87657),m=_(52153),c=_(50122),f=_(41966),g=_(69721),C=_(96342);function u(t,a){if(1&t&&e.\u0275\u0275element(0,"span",10),2&t){const n=e.\u0275\u0275nextContext(4);e.\u0275\u0275propertyInterpolate("innerHTML",n.separator,e.\u0275\u0275sanitizeHtml)}}function v(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"ds-themed-file-download-link",8)(1,"span"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"span"),e.\u0275\u0275text(4),e.\u0275\u0275pipe(5,"dsFileSize"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(6,u,1,1,"span",9),e.\u0275\u0275elementEnd()),2&t){const n=a.$implicit,i=a.last,o=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("bitstream",n)("item",o.item),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(o.dsoNameService.getName(n)),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" (",e.\u0275\u0275pipeBind1(5,5,null==n?null:n.sizeBytes),")"),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!i)}}function E(t,a){1&t&&(e.\u0275\u0275element(0,"ds-themed-loading",11),e.\u0275\u0275pipe(1,"translate")),2&t&&(e.\u0275\u0275propertyInterpolate("message",e.\u0275\u0275pipeBind1(1,2,"loading.default")),e.\u0275\u0275property("showMessage",!1))}function x(t,a){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",12)(1,"button",13),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(n);const o=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(o.getNextPage())}),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()()}2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,1,"item.page.bitstreams.view-more")))}function I(t,a){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",14)(1,"button",15),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(n);const o=e.\u0275\u0275nextContext(3);return o.currentPage=void 0,e.\u0275\u0275resetView(o.getNextPage())}),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()()}2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,1,"item.page.bitstreams.collapse")))}function M(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"ds-metadata-field-wrapper",2),e.\u0275\u0275pipe(1,"translate"),e.\u0275\u0275elementStart(2,"div",3),e.\u0275\u0275template(3,v,7,7,"ds-themed-file-download-link",4),e.\u0275\u0275template(4,E,2,4,"ds-themed-loading",5),e.\u0275\u0275template(5,x,4,3,"div",6),e.\u0275\u0275template(6,I,4,3,"div",7),e.\u0275\u0275elementEnd()()),2&t){const n=e.\u0275\u0275nextContext().ngVar,i=e.\u0275\u0275nextContext();e.\u0275\u0275property("label",e.\u0275\u0275pipeBind1(1,5,i.label)),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngForOf",n),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.isLoading),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!i.isLastPage),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.isLastPage&&1!=i.currentPage)}}function P(t,a){if(1&t&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,M,7,7,"ds-metadata-field-wrapper",1),e.\u0275\u0275elementContainerEnd()),2&t){const n=a.ngVar;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n?null:n.length)>0)}}let F=(()=>{class t extends s.FileSectionComponent{}return t.\u0275fac=function(){let a;return function(i){return(a||(a=e.\u0275\u0275getInheritedFactory(t)))(i||t)}}(),t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ds-item-page-file-section"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:2,vars:3,consts:[[4,"ngVar"],[3,"label",4,"ngIf"],[3,"label"],[1,"file-section"],[3,"bitstream","item",4,"ngFor","ngForOf"],[3,"message","showMessage",4,"ngIf"],["class","mt-1","id","view-more",4,"ngIf"],["class","mt-1","id","collapse",4,"ngIf"],[3,"bitstream","item"],[3,"innerHTML",4,"ngIf"],[3,"innerHTML"],[3,"message","showMessage"],["id","view-more",1,"mt-1"],[1,"bitstream-view-more","btn","btn-outline-secondary","btn-sm",3,"click"],["id","collapse",1,"mt-1"],[1,"bitstream-collapse","btn","btn-outline-secondary","btn-sm",3,"click"]],template:function(n,i){1&n&&(e.\u0275\u0275template(0,P,2,1,"ng-container",0),e.\u0275\u0275pipe(1,"async")),2&n&&e.\u0275\u0275property("ngVar",e.\u0275\u0275pipeBind1(1,1,i.bitstreams$))},dependencies:[l.sg,l.O5,d.Z,m.n,c.t,f.g,l.Ov,g.p,C.X$],encapsulation:2,data:{animation:[p.Fc]}}),t})()}}]);