"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[6233,1703],{81703:(C,r,o)=>{o.d(r,{f:()=>v}),o(61750);var p=o(77176),e=o(45608),c=o(98678),m=o(37315),g=o(73357);let v=(()=>{class i{constructor(_,s){this.angulartics2=_,this.referrerService=s}ngOnInit(){this.sub=this.referrerService.getReferrer().pipe((0,p.q)(1)).subscribe(_=>{this.angulartics2.eventTrack.next({action:"page_view",properties:{object:this.object,referrer:_}})})}ngOnDestroy(){(0,e.Uh)(this.sub)&&this.sub.unsubscribe()}}return i.\u0275fac=function(_){return new(_||i)(c.\u0275\u0275directiveInject(m.b),c.\u0275\u0275directiveInject(g.V))},i.\u0275cmp=c.\u0275\u0275defineComponent({type:i,selectors:[["ds-view-tracker"]],inputs:{object:"object"},decls:1,vars:0,template:function(_,s){1&_&&c.\u0275\u0275text(0,"\xa0\n")},styles:["[_nghost-%COMP%]{display:none}"]}),i})()},46233:(C,r,o)=>{o.r(r),o.d(r,{CollectionPageComponent:()=>W});var f=o(92593),p=o(58106),e=o(98678),c=o(35103),m=o(56080),g=o(64719),v=o(87657),i=o(12955),d=o(41966),_=o(81703),s=o(74487),E=o(22369),u=o(62832),h=o(10825),P=o(87635),I=o(96342);function y(t,a){if(1&t&&(e.\u0275\u0275element(0,"ds-comcol-page-logo",17),e.\u0275\u0275pipe(1,"async")),2&t){const n=e.\u0275\u0275nextContext(4);let l;e.\u0275\u0275property("logo",null==(l=e.\u0275\u0275pipeBind1(1,2,n.logoRD$))?null:l.payload)("alternateText","Collection Logo")}}function D(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"div",20)(1,"h3",21),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(4,"ds-viewable-collection",22),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext().ngVar,l=e.\u0275\u0275nextContext(4);e.\u0275\u0275property("@fadeIn",void 0),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,6,"collection.page.browse.recent.head")),e.\u0275\u0275advance(2),e.\u0275\u0275property("config",l.paginationConfig)("sortConfig",l.sortConfig)("objects",n)("hideGear",!0)}}function O(t,a){1&t&&(e.\u0275\u0275element(0,"ds-error",23),e.\u0275\u0275pipe(1,"translate")),2&t&&e.\u0275\u0275propertyInterpolate("message",e.\u0275\u0275pipeBind1(1,1,"error.recent-submissions"))}function T(t,a){1&t&&(e.\u0275\u0275element(0,"ds-themed-loading",23),e.\u0275\u0275pipe(1,"translate")),2&t&&e.\u0275\u0275propertyInterpolate("message",e.\u0275\u0275pipeBind1(1,1,"loading.recent-submissions"))}function M(t,a){1&t&&(e.\u0275\u0275elementStart(0,"div",24),e.\u0275\u0275text(1),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(2,1,"collection.page.browse.recent.empty")," "))}function x(t,a){if(1&t&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,D,5,8,"div",18),e.\u0275\u0275template(2,O,2,3,"ds-error",4),e.\u0275\u0275template(3,T,2,3,"ds-themed-loading",4),e.\u0275\u0275template(4,M,3,3,"div",19),e.\u0275\u0275elementContainerEnd()),2&t){const n=a.ngVar;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==n?null:n.hasSucceeded),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==n?null:n.hasFailed),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!n||n.isLoading),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!(null!=n&&n.isLoading)&&0===(null==n||null==n.payload?null:n.payload.page.length))}}function B(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"footer",25),e.\u0275\u0275element(1,"ds-comcol-page-content",11),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext().ngIf;e.\u0275\u0275advance(1),e.\u0275\u0275property("content",n.copyrightText)("hasInnerHtml",!0)}}function R(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275element(1,"ds-view-tracker",5),e.\u0275\u0275elementStart(2,"div",6)(3,"header",7),e.\u0275\u0275element(4,"ds-comcol-page-header",8),e.\u0275\u0275template(5,y,2,4,"ds-comcol-page-logo",9),e.\u0275\u0275element(6,"ds-themed-comcol-page-handle",10)(7,"ds-comcol-page-content",11)(8,"ds-comcol-page-content",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"ds-dso-edit-menu"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"section",13),e.\u0275\u0275element(11,"ds-themed-comcol-page-browse-by",14),e.\u0275\u0275template(12,x,5,4,"ng-container",15),e.\u0275\u0275pipe(13,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(14,B,2,2,"footer",16),e.\u0275\u0275elementEnd()),2&t){const n=a.ngIf,l=e.\u0275\u0275nextContext(3);e.\u0275\u0275advance(1),e.\u0275\u0275property("object",n),e.\u0275\u0275advance(3),e.\u0275\u0275property("name",l.dsoNameService.getName(n)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",l.logoRD$),e.\u0275\u0275advance(1),e.\u0275\u0275property("content",n.handle)("title","collection.page.handle"),e.\u0275\u0275advance(1),e.\u0275\u0275property("content",n.introductoryText)("hasInnerHtml",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("content",n.sidebarText)("hasInnerHtml",!0)("title","collection.page.news"),e.\u0275\u0275advance(3),e.\u0275\u0275property("id",n.id)("contentType",n.type),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngVar",e.\u0275\u0275pipeBind1(13,14,l.itemRD$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",n.copyrightText)}}function L(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275template(1,R,15,16,"div",3),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext().ngVar;e.\u0275\u0275property("@fadeInOut",void 0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==n?null:n.payload)}}function U(t,a){1&t&&(e.\u0275\u0275element(0,"ds-error",23),e.\u0275\u0275pipe(1,"translate")),2&t&&e.\u0275\u0275propertyInterpolate("message",e.\u0275\u0275pipeBind1(1,1,"error.collection"))}function A(t,a){1&t&&(e.\u0275\u0275element(0,"ds-themed-loading",23),e.\u0275\u0275pipe(1,"translate")),2&t&&e.\u0275\u0275propertyInterpolate("message",e.\u0275\u0275pipeBind1(1,1,"loading.collection"))}function K(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"div",2),e.\u0275\u0275template(1,L,2,2,"div",3),e.\u0275\u0275template(2,U,2,3,"ds-error",4),e.\u0275\u0275template(3,A,2,3,"ds-themed-loading",4),e.\u0275\u0275elementEnd()),2&t){const n=a.ngVar;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==n?null:n.hasSucceeded),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==n?null:n.hasFailed),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==n?null:n.isLoading)}}let W=(()=>{class t extends f.CollectionPageComponent{}return t.\u0275fac=function(){let a;return function(l){return(a||(a=e.\u0275\u0275getInheritedFactory(t)))(l||t)}}(),t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ds-collection-page"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:3,vars:3,consts:[[1,"container"],["class","collection-page",4,"ngVar"],[1,"collection-page"],[4,"ngIf"],[3,"message",4,"ngIf"],[3,"object"],[1,"d-flex","flex-row","border-bottom","mb-4","pb-4"],[1,"comcol-header","mr-auto"],[3,"name"],[3,"logo","alternateText",4,"ngIf"],[3,"content","title"],[3,"content","hasInnerHtml"],[3,"content","hasInnerHtml","title"],[1,"comcol-page-browse-section"],[3,"id","contentType"],[4,"ngVar"],["class","border-top my-5 pt-4",4,"ngIf"],[3,"logo","alternateText"],["class","mt-4",4,"ngIf"],["class","alert alert-info w-100","role","alert",4,"ngIf"],[1,"mt-4"],[1,"sr-only"],[3,"config","sortConfig","objects","hideGear"],[3,"message"],["role","alert",1,"alert","alert-info","w-100"],[1,"border-top","my-5","pt-4"]],template:function(n,l){1&n&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275template(1,K,4,3,"div",1),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("ngVar",e.\u0275\u0275pipeBind1(2,1,l.collectionRD$)))},dependencies:[c.O5,m.g,g.q,v.Z,i.c,d.g,_.f,s.v,E.U,u.e,h.g,P.g,c.Ov,I.X$],data:{animation:[p.Ji,p.Ic]},changeDetection:0}),t})()}}]);