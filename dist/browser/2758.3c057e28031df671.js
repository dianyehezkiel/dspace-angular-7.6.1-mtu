"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[2758],{82758:(P,i,a)=>{a.r(i),a.d(i,{BreadcrumbsComponent:()=>B});var l=a(2098),e=a(98678),o=a(35103),_=a(65706),d=a(67522),p=a(41966),u=a(96342);function b(t,n){1&t&&e.\u0275\u0275elementContainer(0)}function s(t,n){1&t&&e.\u0275\u0275elementContainer(0)}function g(t,n){if(1&t&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,s,1,0,"ng-container",6),e.\u0275\u0275elementContainerEnd()),2&t){const r=n.$implicit,c=n.last;e.\u0275\u0275nextContext(2);const m=e.\u0275\u0275reference(4),E=e.\u0275\u0275reference(6);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngTemplateOutlet",c?E:m)("ngTemplateOutletContext",r)}}const C=function(){return{text:"home.breadcrumbs",url:"/"}};function v(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"nav",4)(1,"ol",5),e.\u0275\u0275template(2,b,1,0,"ng-container",6),e.\u0275\u0275template(3,g,2,2,"ng-container",7),e.\u0275\u0275elementEnd()()),2&t){const r=e.\u0275\u0275nextContext().ngVar,c=e.\u0275\u0275reference(4),m=e.\u0275\u0275reference(6);e.\u0275\u0275advance(2),e.\u0275\u0275property("ngTemplateOutlet",(null==r?null:r.length)>0?c:m)("ngTemplateOutletContext",e.\u0275\u0275pureFunction0(3,C)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",r)}}function f(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"li",8)(1,"div",9)(2,"a",10),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275text(4),e.\u0275\u0275pipe(5,"translate"),e.\u0275\u0275elementEnd()()()),2&t){const r=n.text,c=n.url;e.\u0275\u0275advance(2),e.\u0275\u0275property("routerLink",c)("ngbTooltip",e.\u0275\u0275pipeBind1(3,3,r)),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(5,5,r))}}function O(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"li",11)(1,"div",9)(2,"div",12),e.\u0275\u0275text(3),e.\u0275\u0275pipe(4,"translate"),e.\u0275\u0275elementEnd()()()),2&t){const r=n.text;e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(4,1,r))}}function x(t,n){if(1&t&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,v,4,4,"nav",1),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275template(3,f,6,7,"ng-template",null,2,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275template(5,O,5,3,"ng-template",null,3,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementContainerEnd()),2&t){const r=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(2,1,r.showBreadcrumbs$))}}let B=(()=>{class t extends l.BreadcrumbsComponent{}return t.\u0275fac=function(){let n;return function(c){return(n||(n=e.\u0275\u0275getInheritedFactory(t)))(c||t)}}(),t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ds-breadcrumbs"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:2,vars:3,consts:[[4,"ngVar"],["aria-label","breadcrumb","class","nav-breadcrumb",4,"ngIf"],["breadcrumb",""],["activeBreadcrumb",""],["aria-label","breadcrumb",1,"nav-breadcrumb"],[1,"container","breadcrumb","my-0"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngFor","ngForOf"],[1,"breadcrumb-item"],[1,"breadcrumb-item-limiter"],["placement","bottom",1,"text-truncate",3,"routerLink","ngbTooltip"],["aria-current","page",1,"breadcrumb-item","active"],[1,"text-truncate"]],template:function(r,c){1&r&&(e.\u0275\u0275template(0,x,7,3,"ng-container",0),e.\u0275\u0275pipe(1,"async")),2&r&&e.\u0275\u0275property("ngVar",e.\u0275\u0275pipeBind1(1,1,c.breadcrumbs$))},dependencies:[o.sg,o.O5,o.tP,_._L,d.rH,p.g,o.Ov,u.X$],styles:['@charset "UTF-8";.nav-breadcrumb[_ngcontent-%COMP%]{background-color:var(--ds-breadcrumb-bg)}.breadcrumb[_ngcontent-%COMP%]{border-radius:0;padding-bottom:calc(var(--ds-content-spacing) / 2);padding-top:calc(var(--ds-content-spacing) / 2);background-color:var(--ds-breadcrumb-bg)}li.breadcrumb-item[_ngcontent-%COMP%]{display:flex}.breadcrumb-item-limiter[_ngcontent-%COMP%]{display:inline-block;max-width:var(--ds-breadcrumb-max-length)}.breadcrumb-item-limiter[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{max-width:100%;display:block}li.breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--ds-breadcrumb-link-color)}li.breadcrumb-item.active[_ngcontent-%COMP%]{color:var(--ds-breadcrumb-link-active-color)}.breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]:before{content:"\\2022"!important}.breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]:before{display:block}']}),t})()}}]);