"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[9022,22],{60022:(E,g,o)=>{o.r(g),o.d(g,{ComcolPageBrowseByComponent:()=>p});var O=o(48358),t=o(25584),u=o(42620),m=o(10572),C=o(1081),e=o(98678),_=o(67522),B=o(35103),d=o(5476),r=o(96342);function s(i,c){if(1&i&&(e.\u0275\u0275elementStart(0,"a",8),e.\u0275\u0275text(1),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275elementEnd()),2&i){const n=c.$implicit;e.\u0275\u0275property("routerLink",n.routerLink)("queryParams",n.params),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(2,3,n.label))}}function l(i,c){if(1&i&&(e.\u0275\u0275elementStart(0,"option",9),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()),2&i){const n=c.$implicit,a=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngValue",n.id),e.\u0275\u0275attribute("selected",e.\u0275\u0275pipeBind1(1,3,a.currentOptionId$)===n.id?"selected":null),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,5,n.label))}}let p=(()=>{class i{constructor(n,a,y){this.route=n,this.router=a,this.browseService=y}ngOnInit(){this.browseService.getBrowseDefinitions().pipe((0,m.hC)()).subscribe(n=>{n.hasSucceeded&&(this.allOptions=n.payload.page.map(a=>({id:a.id,label:`browse.comcol.by.${a.id}`,routerLink:`/browse/${a.id}`,params:{scope:this.id}})),"collection"===this.contentType?this.allOptions=[{id:this.id,label:"collection.page.browse.recent.head",routerLink:(0,u.MI)(this.id)},...this.allOptions]:"community"===this.contentType&&(this.allOptions=[{id:this.id,label:"community.all-lists.head",routerLink:(0,t.Ke)(this.id)},...this.allOptions]))}),this.currentOptionId$=this.route.params.pipe((0,O.U)(n=>n.id))}onSelectChange(n){const a=this.allOptions.find(y=>y.id===n);this.router.navigate([a.routerLink],{queryParams:a.params})}}return i.\u0275fac=function(n){return new(n||i)(e.\u0275\u0275directiveInject(_.gz),e.\u0275\u0275directiveInject(_.F0),e.\u0275\u0275directiveInject(C.I))},i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["ds-comcol-page-browse-by"]],inputs:{id:"id",contentType:"contentType"},decls:11,vars:8,consts:[[1,"comcol-browse-label","h5"],["aria-label","Browse Community or Collection",1,"comcol-browse","mb-4"],[1,"d-none","d-sm-block"],[1,"list-group","list-group-horizontal"],["class","list-group-item","routerLinkActive","active",3,"routerLink","queryParams",4,"ngFor","ngForOf"],[1,"d-block","d-sm-none"],["name","browse-type","aria-label","Browse Community or Collection",1,"form-control",3,"ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],["routerLinkActive","active",1,"list-group-item",3,"routerLink","queryParams"],[3,"ngValue"]],template:function(n,a){1&n&&(e.\u0275\u0275elementStart(0,"h2",0),e.\u0275\u0275text(1),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"nav",1)(4,"div",2)(5,"div",3),e.\u0275\u0275template(6,s,3,5,"a",4),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(7,"div",5)(8,"select",6),e.\u0275\u0275listener("ngModelChange",function(P){return a.onSelectChange(P)}),e.\u0275\u0275pipe(9,"async"),e.\u0275\u0275template(10,l,4,7,"option",7),e.\u0275\u0275elementEnd()()()),2&n&&(e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(2,4,"browse.comcol.head")),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngForOf",a.allOptions),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngModel",e.\u0275\u0275pipeBind1(9,6,a.currentOptionId$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",a.allOptions))},dependencies:[B.sg,d.YN,d.Kr,d.EJ,d.JJ,d.On,_.rH,_.Od,B.Ov,r.X$]}),i})()},49022:(E,g,o)=>{o.r(g),o.d(g,{ComcolPageBrowseByComponent:()=>d});var O=o(60022),t=o(98678),u=o(35103),m=o(5476),C=o(67522),e=o(96342);function _(r,s){if(1&r&&(t.\u0275\u0275elementStart(0,"a",8),t.\u0275\u0275text(1),t.\u0275\u0275pipe(2,"translate"),t.\u0275\u0275elementEnd()),2&r){const l=s.$implicit;t.\u0275\u0275property("routerLink",l.routerLink)("queryParams",l.params),t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(2,3,l.label))}}function B(r,s){if(1&r&&(t.\u0275\u0275elementStart(0,"option",9),t.\u0275\u0275pipe(1,"async"),t.\u0275\u0275text(2),t.\u0275\u0275pipe(3,"translate"),t.\u0275\u0275elementEnd()),2&r){const l=s.$implicit,p=t.\u0275\u0275nextContext();t.\u0275\u0275property("ngValue",l.id),t.\u0275\u0275attribute("selected",t.\u0275\u0275pipeBind1(1,3,p.currentOptionId$)===l.id?"selected":null),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(3,5,l.label))}}let d=(()=>{class r extends O.ComcolPageBrowseByComponent{}return r.\u0275fac=function(){let s;return function(p){return(s||(s=t.\u0275\u0275getInheritedFactory(r)))(p||r)}}(),r.\u0275cmp=t.\u0275\u0275defineComponent({type:r,selectors:[["ds-comcol-page-browse-by"]],features:[t.\u0275\u0275InheritDefinitionFeature],decls:11,vars:8,consts:[[1,"comcol-browse-label","h5"],["aria-label","Browse Community or Collection",1,"comcol-browse","mb-4"],[1,"d-none","d-sm-block"],[1,"list-group","list-group-horizontal"],["class","list-group-item","routerLinkActive","active",3,"routerLink","queryParams",4,"ngFor","ngForOf"],[1,"d-block","d-sm-none"],["name","browse-type","aria-label","Browse Community or Collection",1,"form-control",3,"ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],["routerLinkActive","active",1,"list-group-item",3,"routerLink","queryParams"],[3,"ngValue"]],template:function(l,p){1&l&&(t.\u0275\u0275elementStart(0,"h2",0),t.\u0275\u0275text(1),t.\u0275\u0275pipe(2,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"nav",1)(4,"div",2)(5,"div",3),t.\u0275\u0275template(6,_,3,5,"a",4),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(7,"div",5)(8,"select",6),t.\u0275\u0275listener("ngModelChange",function(c){return p.onSelectChange(c)}),t.\u0275\u0275pipe(9,"async"),t.\u0275\u0275template(10,B,4,7,"option",7),t.\u0275\u0275elementEnd()()()),2&l&&(t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(2,4,"browse.comcol.head")),t.\u0275\u0275advance(5),t.\u0275\u0275property("ngForOf",p.allOptions),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngModel",t.\u0275\u0275pipeBind1(9,6,p.currentOptionId$)),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngForOf",p.allOptions))},dependencies:[u.sg,m.YN,m.Kr,m.EJ,m.JJ,m.On,C.rH,C.Od,u.Ov,e.X$]}),r})()}}]);