"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[4136],{24136:($,g,i)=>{i.r(g),i.d(g,{FullFileSectionComponent:()=>R});var I=i(39034),v=(i(13005),i(46533)),O=i(24296),u=i(45180),h=i(21160),P=i(27303),C=i(65384),t=i(45608),S=i(81323),f=i(8842),M=i(16441),e=i(98678),x=i(96342),E=i(35103),B=i(78530),D=i(18639),y=i(52153),T=i(50122),F=i(41966),L=i(69721);function A(a,_){if(1&a&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"dt",12),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"dd",13),e.\u0275\u0275text(5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()),2&a){const n=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,2,"item.page.filesection.description")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(n.firstMetadataValue("dc.description"))}}function U(a,_){if(1&a&&(e.\u0275\u0275elementStart(0,"div",7)(1,"div",8),e.\u0275\u0275element(2,"ds-themed-thumbnail",9),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",10)(5,"dl",11)(6,"dt",12),e.\u0275\u0275text(7),e.\u0275\u0275pipe(8,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"dd",13),e.\u0275\u0275text(10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"dt",12),e.\u0275\u0275text(12),e.\u0275\u0275pipe(13,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"dd",13),e.\u0275\u0275text(15),e.\u0275\u0275pipe(16,"dsFileSize"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"dt",12),e.\u0275\u0275text(18),e.\u0275\u0275pipe(19,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"dd",13),e.\u0275\u0275text(21),e.\u0275\u0275pipe(22,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(23,A,6,4,"ng-container",2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(24,"div",14)(25,"ds-themed-file-download-link",15),e.\u0275\u0275text(26),e.\u0275\u0275pipe(27,"translate"),e.\u0275\u0275elementEnd()()()),2&a){const n=_.$implicit,r=e.\u0275\u0275nextContext(4);let m,p;e.\u0275\u0275advance(2),e.\u0275\u0275property("thumbnail",null==(m=e.\u0275\u0275pipeBind1(3,11,n.thumbnail))?null:m.payload),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(8,13,"item.page.filesection.name")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(r.dsoNameService.getName(n)),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(13,15,"item.page.filesection.size")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(16,17,n.sizeBytes)),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(19,19,"item.page.filesection.format")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(null==(p=e.\u0275\u0275pipeBind1(22,21,n.format))||null==p.payload?null:p.payload.description),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",n.hasMetadata("dc.description")),e.\u0275\u0275advance(2),e.\u0275\u0275property("bitstream",n)("item",r.item),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(27,23,"item.page.filesection.download")," ")}}function W(a,_){if(1&a&&(e.\u0275\u0275elementStart(0,"ds-pagination",5),e.\u0275\u0275template(1,U,28,25,"div",6),e.\u0275\u0275elementEnd()),2&a){const n=e.\u0275\u0275nextContext(2).ngVar,r=e.\u0275\u0275nextContext();e.\u0275\u0275property("hideGear",!0)("hidePagerWhenSinglePage",!0)("paginationOptions",r.originalOptions)("pageInfoState",n)("collectionSize",null==n?null:n.totalElements)("retainScrollPosition",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",null==n?null:n.page)}}function o(a,_){if(1&a&&(e.\u0275\u0275elementStart(0,"div")(1,"h5",3),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,W,2,7,"ds-pagination",4),e.\u0275\u0275elementEnd()),2&a){const n=e.\u0275\u0275nextContext().ngVar;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,2,"item.page.filesection.original.bundle")),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",(null==n||null==n.page?null:n.page.length)>0)}}function d(a,_){if(1&a&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275template(1,o,5,4,"div",2),e.\u0275\u0275elementEnd()),2&a){const n=_.ngVar,r=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.hasValuesInBundle(n))}}function l(a,_){if(1&a&&(e.\u0275\u0275elementStart(0,"div",17)(1,"div",8),e.\u0275\u0275element(2,"ds-themed-thumbnail",9),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",10)(5,"dl",11)(6,"dt",12),e.\u0275\u0275text(7),e.\u0275\u0275pipe(8,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"dd",13),e.\u0275\u0275text(10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"dt",12),e.\u0275\u0275text(12),e.\u0275\u0275pipe(13,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"dd",13),e.\u0275\u0275text(15),e.\u0275\u0275pipe(16,"dsFileSize"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"dt",12),e.\u0275\u0275text(18),e.\u0275\u0275pipe(19,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"dd",13),e.\u0275\u0275text(21),e.\u0275\u0275pipe(22,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"dt",12),e.\u0275\u0275text(24),e.\u0275\u0275pipe(25,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"dd",13),e.\u0275\u0275text(27),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(28,"div",14)(29,"ds-themed-file-download-link",15),e.\u0275\u0275text(30),e.\u0275\u0275pipe(31,"translate"),e.\u0275\u0275elementEnd()()()),2&a){const n=_.$implicit,r=e.\u0275\u0275nextContext(4);let m,p;e.\u0275\u0275advance(2),e.\u0275\u0275property("thumbnail",null==(m=e.\u0275\u0275pipeBind1(3,12,n.thumbnail))?null:m.payload),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(8,14,"item.page.filesection.name")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(r.dsoNameService.getName(n)),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(13,16,"item.page.filesection.size")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(16,18,n.sizeBytes)),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(19,20,"item.page.filesection.format")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(null==(p=e.\u0275\u0275pipeBind1(22,22,n.format))||null==p.payload?null:p.payload.description),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(25,24,"item.page.filesection.description")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(n.firstMetadataValue("dc.description")),e.\u0275\u0275advance(2),e.\u0275\u0275property("bitstream",n)("item",r.item),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(31,26,"item.page.filesection.download")," ")}}function s(a,_){if(1&a&&(e.\u0275\u0275elementStart(0,"ds-pagination",5),e.\u0275\u0275template(1,l,32,28,"div",16),e.\u0275\u0275elementEnd()),2&a){const n=e.\u0275\u0275nextContext(2).ngVar,r=e.\u0275\u0275nextContext();e.\u0275\u0275property("hideGear",!0)("hidePagerWhenSinglePage",!0)("paginationOptions",r.licenseOptions)("pageInfoState",n)("collectionSize",null==n?null:n.totalElements)("retainScrollPosition",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",null==n?null:n.page)}}function c(a,_){if(1&a&&(e.\u0275\u0275elementStart(0,"div")(1,"h5",3),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,s,2,7,"ds-pagination",4),e.\u0275\u0275elementEnd()),2&a){const n=e.\u0275\u0275nextContext().ngVar;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,2,"item.page.filesection.license.bundle")),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",(null==n||null==n.page?null:n.page.length)>0)}}function K(a,_){if(1&a&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275template(1,c,5,4,"div",2),e.\u0275\u0275elementEnd()),2&a){const n=_.ngVar,r=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.hasValuesInBundle(n))}}let R=(()=>{class a extends O.FileSectionComponent{constructor(n,r,m,p,z,V){super(n,r,m,z,V),this.notificationsService=r,this.translateService=m,this.paginationService=p,this.dsoNameService=z,this.appConfig=V,this.originalOptions=Object.assign(new u.r,{id:"obo",currentPage:1,pageSize:this.appConfig.item.bitstream.pageSize}),this.licenseOptions=Object.assign(new u.r,{id:"lbo",currentPage:1,pageSize:this.appConfig.item.bitstream.pageSize})}ngOnInit(){this.initialize()}initialize(){this.originals$=this.paginationService.getCurrentPagination(this.originalOptions.id,this.originalOptions).pipe((0,h.w)(n=>this.bitstreamDataService.findAllByItemAndBundleName(this.item,"ORIGINAL",{elementsPerPage:n.pageSize,currentPage:n.currentPage},!0,!0,(0,v.l)("format"),(0,v.l)("thumbnail"))),(0,P.b)(n=>{(0,t.Uh)(n.errorMessage)&&this.notificationsService.error(this.translateService.get("file-section.error.header"),`${n.statusCode} ${n.errorMessage}`)})),this.licenses$=this.paginationService.getCurrentPagination(this.licenseOptions.id,this.licenseOptions).pipe((0,h.w)(n=>this.bitstreamDataService.findAllByItemAndBundleName(this.item,"LICENSE",{elementsPerPage:n.pageSize,currentPage:n.currentPage},!0,!0,(0,v.l)("format"),(0,v.l)("thumbnail"))),(0,P.b)(n=>{(0,t.Uh)(n.errorMessage)&&this.notificationsService.error(this.translateService.get("file-section.error.header"),`${n.statusCode} ${n.errorMessage}`)}))}hasValuesInBundle(n){return(0,t.Uh)(n)&&!(0,t.xb)(n.page)}ngOnDestroy(){this.paginationService.clearPagination(this.originalOptions.id),this.paginationService.clearPagination(this.licenseOptions.id)}}return a.\u0275fac=function(n){return new(n||a)(e.\u0275\u0275directiveInject(I.J),e.\u0275\u0275directiveInject(C.T),e.\u0275\u0275directiveInject(x.sK),e.\u0275\u0275directiveInject(S.N),e.\u0275\u0275directiveInject(f._),e.\u0275\u0275directiveInject(M.q))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ds-item-page-full-file-section"]],inputs:{item:"item"},features:[e.\u0275\u0275InheritDefinitionFeature],decls:6,vars:9,consts:[[3,"label"],[4,"ngVar"],[4,"ngIf"],[1,"simple-view-element-header"],[3,"hideGear","hidePagerWhenSinglePage","paginationOptions","pageInfoState","collectionSize","retainScrollPosition",4,"ngIf"],[3,"hideGear","hidePagerWhenSinglePage","paginationOptions","pageInfoState","collectionSize","retainScrollPosition"],["class","file-section row mb-3",4,"ngFor","ngForOf"],[1,"file-section","row","mb-3"],[1,"col-3"],[3,"thumbnail"],[1,"col-7"],[1,"row"],[1,"col-md-4"],[1,"col-md-8"],[1,"col-2"],[3,"bitstream","item"],["class","file-section row",4,"ngFor","ngForOf"],[1,"file-section","row"]],template:function(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"ds-metadata-field-wrapper",0),e.\u0275\u0275pipe(1,"translate"),e.\u0275\u0275template(2,d,2,1,"div",1),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275template(4,K,2,1,"div",1),e.\u0275\u0275pipe(5,"async"),e.\u0275\u0275elementEnd()),2&n){let m,p;e.\u0275\u0275property("label",e.\u0275\u0275pipeBind1(1,3,r.label)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngVar",null==(m=e.\u0275\u0275pipeBind1(3,5,r.originals$))?null:m.payload),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngVar",null==(p=e.\u0275\u0275pipeBind1(5,7,r.licenses$))?null:p.payload)}},dependencies:[E.sg,E.O5,B.Q,D.z,y.n,T.t,F.g,E.Ov,L.p,x.X$],styles:["@media screen and (min-width: 768px){dt[_ngcontent-%COMP%]{text-align:right}}"]}),a})()},24296:($,g,i)=>{i.r(g),i.d(g,{FileSectionComponent:()=>W});var I=i(35841),b=i(39034),O=(i(13005),i(45608)),u=i(65384),h=i(10572),P=i(16441),C=i(8842),t=i(98678),S=i(96342),f=i(35103),M=i(87657),e=i(52153),x=i(50122),E=i(41966),B=i(69721);function D(o,d){if(1&o&&t.\u0275\u0275element(0,"span",10),2&o){const l=t.\u0275\u0275nextContext(4);t.\u0275\u0275propertyInterpolate("innerHTML",l.separator,t.\u0275\u0275sanitizeHtml)}}function y(o,d){if(1&o&&(t.\u0275\u0275elementStart(0,"ds-themed-file-download-link",8)(1,"span"),t.\u0275\u0275text(2),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"span"),t.\u0275\u0275text(4),t.\u0275\u0275pipe(5,"dsFileSize"),t.\u0275\u0275elementEnd(),t.\u0275\u0275template(6,D,1,1,"span",9),t.\u0275\u0275elementEnd()),2&o){const l=d.$implicit,s=d.last,c=t.\u0275\u0275nextContext(3);t.\u0275\u0275property("bitstream",l)("item",c.item),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(c.dsoNameService.getName(l)),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate1(" (",t.\u0275\u0275pipeBind1(5,5,null==l?null:l.sizeBytes),")"),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",!s)}}function T(o,d){1&o&&(t.\u0275\u0275element(0,"ds-themed-loading",11),t.\u0275\u0275pipe(1,"translate")),2&o&&(t.\u0275\u0275propertyInterpolate("message",t.\u0275\u0275pipeBind1(1,2,"loading.default")),t.\u0275\u0275property("showMessage",!1))}function F(o,d){if(1&o){const l=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",12)(1,"button",13),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(l);const c=t.\u0275\u0275nextContext(3);return t.\u0275\u0275resetView(c.getNextPage())}),t.\u0275\u0275text(2),t.\u0275\u0275pipe(3,"translate"),t.\u0275\u0275elementEnd()()}2&o&&(t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(3,1,"item.page.bitstreams.view-more")))}function L(o,d){if(1&o){const l=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",14)(1,"button",15),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(l);const c=t.\u0275\u0275nextContext(3);return c.currentPage=void 0,t.\u0275\u0275resetView(c.getNextPage())}),t.\u0275\u0275text(2),t.\u0275\u0275pipe(3,"translate"),t.\u0275\u0275elementEnd()()}2&o&&(t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(3,1,"item.page.bitstreams.collapse")))}function A(o,d){if(1&o&&(t.\u0275\u0275elementStart(0,"ds-metadata-field-wrapper",2),t.\u0275\u0275pipe(1,"translate"),t.\u0275\u0275elementStart(2,"div",3),t.\u0275\u0275template(3,y,7,7,"ds-themed-file-download-link",4),t.\u0275\u0275template(4,T,2,4,"ds-themed-loading",5),t.\u0275\u0275template(5,F,4,3,"div",6),t.\u0275\u0275template(6,L,4,3,"div",7),t.\u0275\u0275elementEnd()()),2&o){const l=t.\u0275\u0275nextContext().ngVar,s=t.\u0275\u0275nextContext();t.\u0275\u0275property("label",t.\u0275\u0275pipeBind1(1,5,s.label)),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngForOf",l),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",s.isLoading),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",!s.isLastPage),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",s.isLastPage&&1!=s.currentPage)}}function U(o,d){if(1&o&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275template(1,A,7,7,"ds-metadata-field-wrapper",1),t.\u0275\u0275elementContainerEnd()),2&o){const l=d.ngVar;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",(null==l?null:l.length)>0)}}let W=(()=>{class o{constructor(l,s,c,K,R){this.bitstreamDataService=l,this.notificationsService=s,this.translateService=c,this.dsoNameService=K,this.appConfig=R,this.label="item.page.files",this.separator="<br/>",this.pageSize=this.appConfig.item.bitstream.pageSize}ngOnInit(){this.getNextPage()}getNextPage(){this.isLoading=!0,void 0===this.currentPage?(this.currentPage=1,this.bitstreams$=new I.X([])):this.currentPage++,this.bitstreamDataService.findAllByItemAndBundleName(this.item,"ORIGINAL",{currentPage:this.currentPage,elementsPerPage:this.pageSize}).pipe((0,h.hC)()).subscribe(l=>{if(l.errorMessage)this.notificationsService.error(this.translateService.get("file-section.error.header"),`${l.statusCode} ${l.errorMessage}`);else if((0,O.Uh)(l.payload)){const s=this.bitstreams$.getValue();this.bitstreams$.next([...s,...l.payload.page]),this.isLoading=!1,this.isLastPage=this.currentPage===l.payload.totalPages}})}}return o.\u0275fac=function(l){return new(l||o)(t.\u0275\u0275directiveInject(b.J),t.\u0275\u0275directiveInject(u.T),t.\u0275\u0275directiveInject(S.sK),t.\u0275\u0275directiveInject(C._),t.\u0275\u0275directiveInject(P.q))},o.\u0275cmp=t.\u0275\u0275defineComponent({type:o,selectors:[["ds-item-page-file-section"]],inputs:{item:"item"},decls:2,vars:3,consts:[[4,"ngVar"],[3,"label",4,"ngIf"],[3,"label"],[1,"file-section"],[3,"bitstream","item",4,"ngFor","ngForOf"],[3,"message","showMessage",4,"ngIf"],["class","mt-1","id","view-more",4,"ngIf"],["class","mt-1","id","collapse",4,"ngIf"],[3,"bitstream","item"],[3,"innerHTML",4,"ngIf"],[3,"innerHTML"],[3,"message","showMessage"],["id","view-more",1,"mt-1"],[1,"bitstream-view-more","btn","btn-outline-secondary","btn-sm",3,"click"],["id","collapse",1,"mt-1"],[1,"bitstream-collapse","btn","btn-outline-secondary","btn-sm",3,"click"]],template:function(l,s){1&l&&(t.\u0275\u0275template(0,U,2,1,"ng-container",0),t.\u0275\u0275pipe(1,"async")),2&l&&t.\u0275\u0275property("ngVar",t.\u0275\u0275pipeBind1(1,1,s.bitstreams$))},dependencies:[f.sg,f.O5,M.Z,e.n,x.t,E.g,f.Ov,B.p,S.X$],encapsulation:2}),o})()}}]);