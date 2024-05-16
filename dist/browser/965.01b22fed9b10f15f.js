(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[965],{18057:(I,L,t)=>{"use strict";t.r(L),t.d(L,{CommunityListPageComponent:()=>c});var d=t(98678),m=t(34712),u=t(96342);let c=(()=>{class f{}return f.\u0275fac=function(x){return new(x||f)},f.\u0275cmp=d.\u0275\u0275defineComponent({type:f,selectors:[["ds-community-list-page"]],decls:5,vars:3,consts:[[1,"container"]],template:function(x,r){1&x&&(d.\u0275\u0275elementStart(0,"div",0)(1,"h1"),d.\u0275\u0275text(2),d.\u0275\u0275pipe(3,"translate"),d.\u0275\u0275elementEnd(),d.\u0275\u0275element(4,"ds-themed-community-list"),d.\u0275\u0275elementEnd()),2&x&&(d.\u0275\u0275advance(2),d.\u0275\u0275textInterpolate(d.\u0275\u0275pipeBind1(3,1,"communityList.title")))},dependencies:[m.J,u.X$],encapsulation:2}),f})()},80965:(I,L,t)=>{"use strict";t.r(L),t.d(L,{CommunityListPageModule:()=>b});var d=t(35103),m=t(57999),c=(t(18057),t(67522)),f=t(37566),p=t(80804),x=t(4682),r=t(98678);function D(l,P){}const v=["*"];let e=(()=>{class l extends x.F{getComponentName(){return"CommunityListPageComponent"}importThemedComponent(S){return t(94015)(`./${S}/app/community-list-page/community-list-page.component`)}importUnthemedComponent(){return Promise.resolve().then(t.bind(t,18057))}}return l.\u0275fac=function(){let P;return function(M){return(P||(P=r.\u0275\u0275getInheritedFactory(l)))(M||l)}}(),l.\u0275cmp=r.\u0275\u0275defineComponent({type:l,selectors:[["ds-themed-community-list-page"]],features:[r.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:v,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(S,M){1&S&&(r.\u0275\u0275projectionDef(),r.\u0275\u0275template(0,D,0,0,"ng-template",null,0,r.\u0275\u0275templateRefExtractor),r.\u0275\u0275elementStart(2,"div",null,1),r.\u0275\u0275projection(4),r.\u0275\u0275elementEnd())},encapsulation:2}),l})();var O=t(76457);let W=(()=>{class l{}return l.\u0275fac=function(S){return new(S||l)},l.\u0275mod=r.\u0275\u0275defineNgModule({type:l}),l.\u0275inj=r.\u0275\u0275defineInjector({providers:[p.rv],imports:[c.Bz.forChild([{path:"",component:e,pathMatch:"full",resolve:{breadcrumb:O.t},data:{title:"communityList.tabTitle",breadcrumbKey:"communityList"}}]),f.nZ]}),l})();t(18394),t(34712);let b=(()=>{class l{}return l.\u0275fac=function(S){return new(S||l)},l.\u0275mod=r.\u0275\u0275defineNgModule({type:l}),l.\u0275inj=r.\u0275\u0275defineInjector({imports:[d.ez,m.m,W,f.nZ,f.nZ]}),l})()},80804:(I,L,t)=>{"use strict";t.d(L,{rv:()=>a});var d=t(89702),m=t(53426),u=t(9237),c=t(48358),f=t(77007),p=t(21160),x=t(50401),r=t(66234),D=t(87483),v=t(45608),e=t(20942),O=t(95445),W=t(59542),R=t(25584),A=t(42620),F=t(10572),b=t(46533);class l{}var P=t(6144),S=t(16441),M=t(40396),$=t(98678);const B=i=>(0,m.a)([...i]).pipe((0,c.U)(n=>[].concat(...n)),(0,f.h)(n=>n.every(o=>(0,v.Uh)(o)))),V=(i,n,o,s,g)=>({isExpandable$:n,name:i.name,id:i.id,level:o,isExpanded:s,parent:g,payload:i,isShowMoreNode:!1,route:i instanceof r.S?(0,R.Ke)(i.id):(0,A.MI)(i.id)}),K=(i,n,o)=>({isExpandable$:(0,u.of)(!1),name:"Show More Flatnode",id:i,level:n,isExpanded:!1,parent:o,payload:new l,isShowMoreNode:!0}),Z=i=>i.communityList,X=(0,d.P1)(Z,i=>i.expandedNodes),k=(0,d.P1)(Z,i=>i.loadingNode);let a=(()=>{class i{constructor(o,s,g,h){this.appConfig=o,this.communityDataService=s,this.collectionDataService=g,this.store=h,this.configOnePage=Object.assign(new P.R,{elementsPerPage:1}),this.pageSize=o.communityList.pageSize}saveCommunityListStateToStore(o,s){this.store.dispatch(new W.Q(o,s))}getExpandedNodesFromStore(){return this.store.select(X)}getLoadingNodeFromStore(){return this.store.select(k)}loadCommunities(o,s){const g=o.currentPage,h=[];for(let C=1;C<=g;C++){const E=Object.assign({},o,{currentPage:C});h.push(this.getTopCommunities(E))}return(0,m.a)([...h]).pipe((0,c.U)(C=>{const E=C.map(z=>z.page),U=[].concat(...E);let j=new D.S;return C&&C.length>0&&(j=Object.assign({},C[0].pageInfo,{currentPage:g})),(0,e.b)(j,U)})).pipe((0,p.w)(C=>this.transformListOfCommunities(C,0,null,s)))}getTopCommunities(o){return this.communityDataService.findTop({currentPage:o.currentPage,elementsPerPage:this.pageSize,sort:{field:o.sort.field,direction:o.sort.direction}},(0,b.l)("subcommunities",{findListOptions:this.configOnePage}),(0,b.l)("collections",{findListOptions:this.configOnePage})).pipe((0,F.xw)(),(0,c.U)(s=>s.payload))}transformListOfCommunities(o,s,g,h){if((0,v.UE)(o.page)){let y=o.currentPage;(0,v.UE)(g)&&(y=h.find(E=>E.id===g.id).currentCommunityPage);let C=o.page.map(E=>this.transformCommunity(E,s,g,h));return y<o.totalPages&&y===o.currentPage&&(C=[...C,(0,u.of)([K(`community-${(0,M.Z)()}`,s,g)])]),B(C)}return(0,u.of)([])}transformCommunity(o,s,g,h){let y=!1;(0,v.UE)(h)&&(y=(0,v.Uh)(h.find(j=>j.id===o.id)));const C=this.getIsExpandable(o),E=V(o,C,s,y,g);let U=[(0,u.of)([E])];if(y){const j=h.find(N=>N.id===o.id).currentCommunityPage;let z=[];for(let N=1;N<=j;N++){const Q=this.communityDataService.findByParent(o.uuid,{elementsPerPage:this.pageSize,currentPage:N},(0,b.l)("subcommunities",{findListOptions:this.configOnePage}),(0,b.l)("collections",{findListOptions:this.configOnePage})).pipe((0,F.hC)(),(0,p.w)(T=>(0,v.Uh)(T)&&(0,v.Uh)(T.payload)?this.transformListOfCommunities(T.payload,s+1,E,h):(0,u.of)([])));z=[...z,Q]}U=[...U,B(z)];const J=h.find(N=>N.id===o.id).currentCollectionPage;let H=[];for(let N=1;N<=J;N++){const Q=this.collectionDataService.findByParent(o.uuid,{elementsPerPage:this.pageSize,currentPage:N}).pipe((0,F.hC)(),(0,c.U)(T=>{if((0,v.Uh)(T)&&(0,v.Uh)(T.payload)){let G=T.payload.page.map(Y=>V(Y,(0,u.of)(!1),s+1,!1,E));return J<T.payload.totalPages&&J===T.payload.currentPage&&(G=[...G,K(`collection-${(0,M.Z)()}`,s+1,E)]),G}return[]}));H=[...H,Q]}U=[...U,B(H)]}return B(U)}getIsExpandable(o){let s,g,h;return s=this.communityDataService.findByParent(o.uuid,this.configOnePage).pipe((0,c.U)(y=>!(!(0,v.Uh)(y)||!(0,v.Uh)(y.payload))&&y.payload.totalElements>0)),g=this.collectionDataService.findByParent(o.uuid,this.configOnePage).pipe((0,c.U)(y=>!(!(0,v.Uh)(y)||!(0,v.Uh)(y.payload))&&y.payload.totalElements>0)),h=(0,m.a)(s,g).pipe((0,c.U)(([y,C])=>y||C)),h}}return i.\u0275fac=function(o){return new(o||i)($.\u0275\u0275inject(S.q),$.\u0275\u0275inject(x.w),$.\u0275\u0275inject(O.W),$.\u0275\u0275inject(d.yh))},i.\u0275prov=$.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac}),i})()},18394:(I,L,t)=>{"use strict";t.r(L),t.d(L,{CommunityListComponent:()=>k});var d=t(77176),m=t(42281),u=t(80804),c=t(45608),f=t(35841),p=t(90410);class x{constructor(i){this.communityListService=i,this.communityList$=new f.X([]),this.loading$=new f.X(!1)}connect(i){return this.communityList$.asObservable()}loadCommunities(i,n){this.loading$.next(!0),(0,c.Uh)(this.subLoadCommunities)&&this.subLoadCommunities.unsubscribe(),this.subLoadCommunities=this.communityListService.loadCommunities(i,n).pipe((0,p.x)(()=>this.loading$.next(!1))).subscribe(o=>{this.communityList$.next(o)})}disconnect(i){this.communityList$.complete(),this.loading$.complete()}}var r=t(37566),D=t(6144),v=t(8842),e=t(98678),O=t(35103),W=t(67522),R=t(87657),A=t(38678),F=t(9121),b=t(96342);function l(a,i){1&a&&e.\u0275\u0275element(0,"ds-themed-loading",5)}function P(a,i){if(1&a){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",14),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(n);const s=e.\u0275\u0275nextContext().$implicit,g=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(g.getNextPage(s))}),e.\u0275\u0275element(1,"i",15),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()}2&a&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(3,1,"communityList.showMore")," "))}function S(a,i){1&a&&e.\u0275\u0275element(0,"ds-themed-loading",5)}function M(a,i){if(1&a&&(e.\u0275\u0275elementStart(0,"cdk-tree-node",6)(1,"div",7)(2,"button",8),e.\u0275\u0275element(3,"span",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",10),e.\u0275\u0275template(5,P,4,3,"button",11),e.\u0275\u0275pipe(6,"async"),e.\u0275\u0275template(7,S,1,0,"ds-themed-loading",0),e.\u0275\u0275pipe(8,"async"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(9,"div",12),e.\u0275\u0275element(10,"div",13),e.\u0275\u0275elementEnd()()),2&a){const n=i.$implicit,o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",!e.\u0275\u0275pipeBind1(6,2,o.dataSource.loading$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(8,4,n===o.loadingNode&&o.dataSource.loading$))}}function $(a,i){if(1&a&&(e.\u0275\u0275elementStart(0,"span",27),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&a){const n=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n.payload.archivedItemsCount)}}function B(a,i){if(1&a&&(e.\u0275\u0275elementStart(0,"div",13)(1,"button",28),e.\u0275\u0275element(2,"span",18),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"ds-truncatable-part",29)(4,"span"),e.\u0275\u0275text(5),e.\u0275\u0275elementEnd()()()),2&a){const n=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275classMap(n.isExpanded?"fa fa-chevron-down":"fa fa-chevron-right"),e.\u0275\u0275advance(1),e.\u0275\u0275property("id",n.id)("minLines",3),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(n.payload.shortDescription)}}function V(a,i){if(1&a&&(e.\u0275\u0275elementStart(0,"div",30)(1,"button",28),e.\u0275\u0275element(2,"span",18),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(3,"ds-themed-loading",5),e.\u0275\u0275elementEnd()),2&a){const n=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275classMap(n.isExpanded?"fa fa-chevron-down":"fa fa-chevron-right")}}function K(a,i){if(1&a){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"cdk-tree-node",16)(1,"div",7)(2,"button",17),e.\u0275\u0275listener("click",function(){const g=e.\u0275\u0275restoreView(n).$implicit,h=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(h.toggleExpanded(g))}),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275pipe(4,"async"),e.\u0275\u0275element(5,"span",18),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"div",19)(7,"span",20)(8,"a",21),e.\u0275\u0275text(9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"span",22),e.\u0275\u0275text(11,"\xa0"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(12,$,2,1,"span",23),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(13,"ds-truncatable",24)(14,"div",12),e.\u0275\u0275template(15,B,6,6,"div",25),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(16,V,4,3,"div",26),e.\u0275\u0275pipe(17,"async"),e.\u0275\u0275elementEnd()}if(2&a){const n=i.$implicit,o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("title","toggle "+o.dsoNameService.getName(n.payload))("ngClass",e.\u0275\u0275pipeBind1(3,13,o.hasChild(null,n))?"visible":"invisible"),e.\u0275\u0275attribute("aria-label","toggle "+o.dsoNameService.getName(n.payload))("data-test",e.\u0275\u0275pipeBind1(4,15,o.hasChild(null,n))?"expand-button":""),e.\u0275\u0275advance(3),e.\u0275\u0275classMap(n.isExpanded?"fa fa-chevron-down":"fa fa-chevron-right"),e.\u0275\u0275advance(3),e.\u0275\u0275property("routerLink",n.route),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",o.dsoNameService.getName(n.payload)," "),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",n.payload.archivedItemsCount>=0),e.\u0275\u0275advance(1),e.\u0275\u0275property("id",n.id),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",n.payload.shortDescription),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(17,17,n===o.loadingNode&&o.dataSource.loading$))}}function Z(a,i){if(1&a&&(e.\u0275\u0275elementStart(0,"div",13)(1,"button",28),e.\u0275\u0275element(2,"span",18),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"ds-truncatable-part",29)(4,"span"),e.\u0275\u0275text(5),e.\u0275\u0275elementEnd()()()),2&a){const n=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275classMap(n.isExpanded?"fa fa-chevron-down":"fa fa-chevron-right"),e.\u0275\u0275advance(1),e.\u0275\u0275property("id",n.id)("minLines",3),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(n.payload.shortDescription)}}function X(a,i){if(1&a&&(e.\u0275\u0275elementStart(0,"cdk-tree-node",31)(1,"div",7)(2,"button",8),e.\u0275\u0275element(3,"span",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"h6",10)(5,"a",21),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(7,"ds-truncatable",24)(8,"div",12),e.\u0275\u0275template(9,Z,6,6,"div",25),e.\u0275\u0275elementEnd()()()),2&a){const n=i.$implicit,o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("routerLink",n.route),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",o.dsoNameService.getName(n.payload)," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("id",n.id),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",n.payload.shortDescription)}}let k=(()=>{class a{constructor(n,o){this.communityListService=n,this.dsoNameService=o,this.expandedNodes=[],this.treeControl=new r.C2(s=>s.level,s=>!0),this.trackBy=(s,g)=>g.id,this.paginationConfig=new D.R,this.paginationConfig.elementsPerPage=2,this.paginationConfig.currentPage=1,this.paginationConfig.sort=new m.o("dc.title",m.S.ASC)}ngOnInit(){this.dataSource=new x(this.communityListService),this.communityListService.getLoadingNodeFromStore().pipe((0,d.q)(1)).subscribe(n=>{this.loadingNode=n}),this.communityListService.getExpandedNodesFromStore().pipe((0,d.q)(1)).subscribe(n=>{this.expandedNodes=[...n],this.dataSource.loadCommunities(this.paginationConfig,this.expandedNodes)})}ngOnDestroy(){this.communityListService.saveCommunityListStateToStore(this.expandedNodes,this.loadingNode)}hasChild(n,o){return o.isExpandable$}isShowMore(n,o){return o.isShowMoreNode}toggleExpanded(n){this.loadingNode=n,n.isExpanded?(this.expandedNodes=this.expandedNodes.filter(o=>o.id!==n.id),n.isExpanded=!1):(this.expandedNodes.push(n),n.isExpanded=!0,(0,c.xb)(n.currentCollectionPage)&&(n.currentCollectionPage=1),(0,c.xb)(n.currentCommunityPage)&&(n.currentCommunityPage=1)),this.dataSource.loadCommunities(this.paginationConfig,this.expandedNodes)}getNextPage(n){this.loadingNode=n,null!=n.parent?(n.id.startsWith("collection")&&this.expandedNodes.find(s=>n.parent.id===s.id).currentCollectionPage++,n.id.startsWith("community")&&this.expandedNodes.find(s=>n.parent.id===s.id).currentCommunityPage++):this.paginationConfig.currentPage++,this.dataSource.loadCommunities(this.paginationConfig,this.expandedNodes)}}return a.\u0275fac=function(n){return new(n||a)(e.\u0275\u0275directiveInject(u.rv),e.\u0275\u0275directiveInject(v._))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ds-community-list"]],decls:6,vars:9,consts:[["class","ds-themed-loading",4,"ngIf"],[3,"dataSource","treeControl","trackBy"],["cdkTreeNodePadding","","class","example-tree-node show-more-node",4,"cdkTreeNodeDef","cdkTreeNodeDefWhen"],["cdkTreeNodePadding","","class","example-tree-node expandable-node",4,"cdkTreeNodeDef","cdkTreeNodeDefWhen"],["cdkTreeNodePadding","","class","example-tree-node childless-node",4,"cdkTreeNodeDef","cdkTreeNodeDefWhen"],[1,"ds-themed-loading"],["cdkTreeNodePadding","",1,"example-tree-node","show-more-node"],[1,"btn-group"],["type","button","cdkTreeNodeToggle","",1,"btn","btn-default"],["aria-hidden","true",1,"fa","fa-chevron-right","invisible"],[1,"align-middle","pt-2"],["class","btn btn-outline-primary btn-sm","role","button",3,"click",4,"ngIf"],["cdkTreeNodePadding","",1,"text-muted"],[1,"d-flex"],["role","button",1,"btn","btn-outline-primary","btn-sm",3,"click"],[1,"fas","fa-angle-down"],["cdkTreeNodePadding","",1,"example-tree-node","expandable-node"],["type","button","cdkTreeNodeToggle","",1,"btn","btn-default",3,"title","ngClass","click"],["aria-hidden","true"],[1,"d-flex","flex-row"],[1,"align-middle","pt-2","lead"],[1,"lead",3,"routerLink"],[1,"pr-2"],["class","badge badge-pill badge-secondary align-top archived-items-lead",4,"ngIf"],[3,"id"],["class","d-flex",4,"ngIf"],["class","d-flex","cdkTreeNodePadding","",4,"ngIf"],[1,"badge","badge-pill","badge-secondary","align-top","archived-items-lead"],["type","button",1,"btn","btn-default","invisible"],[3,"id","minLines"],["cdkTreeNodePadding","",1,"d-flex"],["cdkTreeNodePadding","",1,"example-tree-node","childless-node"]],template:function(n,o){1&n&&(e.\u0275\u0275template(0,l,1,0,"ds-themed-loading",0),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275elementStart(2,"cdk-tree",1),e.\u0275\u0275template(3,M,11,6,"cdk-tree-node",2),e.\u0275\u0275template(4,K,18,19,"cdk-tree-node",3),e.\u0275\u0275template(5,X,10,4,"cdk-tree-node",4),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(1,7,o.dataSource.loading$)&&!o.loadingNode),e.\u0275\u0275advance(2),e.\u0275\u0275property("dataSource",o.dataSource)("treeControl",o.treeControl)("trackBy",o.trackBy),e.\u0275\u0275advance(1),e.\u0275\u0275property("cdkTreeNodeDefWhen",o.isShowMore),e.\u0275\u0275advance(1),e.\u0275\u0275property("cdkTreeNodeDefWhen",o.hasChild),e.\u0275\u0275advance(1),e.\u0275\u0275property("cdkTreeNodeDefWhen",!(o.hasChild&&o.isShowMore)))},dependencies:[O.mk,O.O5,W.rH,R.Z,A.n,F.L,r.rO,r.XJ,r.Ud,r._0,r.Hs,O.Ov,b.X$],encapsulation:2}),a})()},34712:(I,L,t)=>{"use strict";t.d(L,{J:()=>f});var d=t(4682),m=t(98678);function u(p,x){}const c=["*"];let f=(()=>{class p extends d.F{getComponentName(){return"CommunityListComponent"}importThemedComponent(r){return t(65978)(`./${r}/app/community-list-page/community-list/community-list.component`)}importUnthemedComponent(){return Promise.resolve().then(t.bind(t,18394))}}return p.\u0275fac=function(){let x;return function(D){return(x||(x=m.\u0275\u0275getInheritedFactory(p)))(D||p)}}(),p.\u0275cmp=m.\u0275\u0275defineComponent({type:p,selectors:[["ds-themed-community-list"]],features:[m.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:c,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(r,D){1&r&&(m.\u0275\u0275projectionDef(),m.\u0275\u0275template(0,u,0,0,"ng-template",null,0,m.\u0275\u0275templateRefExtractor),m.\u0275\u0275elementStart(2,"div",null,1),m.\u0275\u0275projection(4),m.\u0275\u0275elementEnd())},encapsulation:2}),p})()},94015:(I,L,t)=>{var d={"./custom/app/community-list-page/community-list-page.component":[74480,4480]};function m(u){if(!t.o(d,u))return Promise.resolve().then(()=>{var p=new Error("Cannot find module '"+u+"'");throw p.code="MODULE_NOT_FOUND",p});var c=d[u],f=c[0];return t.e(c[1]).then(()=>t(f))}m.keys=()=>Object.keys(d),m.id=94015,I.exports=m},65978:(I,L,t)=>{var d={"./custom/app/community-list-page/community-list/community-list.component":[72192,2192]};function m(u){if(!t.o(d,u))return Promise.resolve().then(()=>{var p=new Error("Cannot find module '"+u+"'");throw p.code="MODULE_NOT_FOUND",p});var c=d[u],f=c[0];return t.e(c[1]).then(()=>t(f))}m.keys=()=>Object.keys(d),m.id=65978,I.exports=m}}]);