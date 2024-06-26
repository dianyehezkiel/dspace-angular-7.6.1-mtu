"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=1254,exports.ids=[1254],exports.modules={51254:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SubscriptionsPageRoutingModule:()=>SubscriptionsPageRoutingModule});var router=__webpack_require__(16088),common=__webpack_require__(65159),shared_module=__webpack_require__(47013),fesm2020_forms=__webpack_require__(32189),core=__webpack_require__(86209),operators=(__webpack_require__(12403),__webpack_require__(72827),__webpack_require__(96846)),empty_util=__webpack_require__(59501),confirmation_modal_component=__webpack_require__(27973),subscriptions_data_service=__webpack_require__(38359),community_page_routing_paths=__webpack_require__(50093),collection_page_routing_paths=__webpack_require__(67328),item_page_routing_paths=__webpack_require__(50306),subscription_modal_component=__webpack_require__(4474),dso_name_service=__webpack_require__(17306),ng_bootstrap=__webpack_require__(23506),themed_type_badge_component=__webpack_require__(70063),ngx_translate_core=__webpack_require__(4330);const _c1=__name(function(a0,a1){return[a0,a1]},"_c1");function SubscriptionViewComponent_ng_container_1_Template(rf,ctx){if(1&rf&&(core.ynx(0),core._UZ(1,"ds-themed-type-badge",10),core.TgZ(2,"p")(3,"a",11),core._uU(4),core.qZA()(),core.BQk()),2&rf){const ctx_r0=core.oxw();core.xp6(1),core.Q6J("object",ctx_r0.dso),core.xp6(2),core.Q6J("routerLink",core.WLB(3,_c1,ctx_r0.getPageRoutePrefix(),ctx_r0.dso.id)),core.xp6(1),core.Oqu(ctx_r0.dsoNameService.getName(ctx_r0.dso))}}function SubscriptionViewComponent_ng_container_2_Template(rf,ctx){1&rf&&(core.ynx(0),core.TgZ(1,"p",12),core._uU(2),core.ALo(3,"translate"),core.qZA(),core.TgZ(4,"p",13),core._uU(5),core.ALo(6,"translate"),core.qZA(),core.BQk()),2&rf&&(core.xp6(2),core.Oqu(core.lcZ(3,2,"subscriptions.table.not-available")),core.xp6(3),core.Oqu(core.lcZ(6,4,"subscriptions.table.not-available-message")))}function SubscriptionViewComponent_span_4_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"span",14),core._uU(1),core.qZA()),2&rf){const ctx_r2=core.oxw();core.xp6(1),core.Oqu(ctx_r2.subscription.subscriptionType)}}function SubscriptionViewComponent_ng_container_6_span_1_span_3_Template(rf,ctx){1&rf&&(core.TgZ(0,"span"),core._uU(1,","),core.qZA())}function SubscriptionViewComponent_ng_container_6_span_1_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"span"),core._uU(1),core.ALo(2,"translate"),core.YNc(3,SubscriptionViewComponent_ng_container_6_span_1_span_3_Template,2,0,"span",1),core.qZA()),2&rf){const parameterList_r5=ctx.$implicit,i_r6=ctx.index,ctx_r4=core.oxw(2);core.xp6(1),core.hij(" ",core.lcZ(2,2,"subscriptions.frequency."+parameterList_r5.value),""),core.xp6(2),core.Q6J("ngIf",i_r6<ctx_r4.subscription.subscriptionParameterList.length-1)}}function SubscriptionViewComponent_ng_container_6_Template(rf,ctx){if(1&rf&&(core.ynx(0),core.YNc(1,SubscriptionViewComponent_ng_container_6_span_1_Template,4,4,"span",15),core.BQk()),2&rf){const ctx_r3=core.oxw();core.xp6(1),core.Q6J("ngForOf",ctx_r3.subscription.subscriptionParameterList)}}__name(SubscriptionViewComponent_ng_container_1_Template,"SubscriptionViewComponent_ng_container_1_Template"),__name(SubscriptionViewComponent_ng_container_2_Template,"SubscriptionViewComponent_ng_container_2_Template"),__name(SubscriptionViewComponent_span_4_Template,"SubscriptionViewComponent_span_4_Template"),__name(SubscriptionViewComponent_ng_container_6_span_1_span_3_Template,"SubscriptionViewComponent_ng_container_6_span_1_span_3_Template"),__name(SubscriptionViewComponent_ng_container_6_span_1_Template,"SubscriptionViewComponent_ng_container_6_span_1_Template"),__name(SubscriptionViewComponent_ng_container_6_Template,"SubscriptionViewComponent_ng_container_6_Template");class SubscriptionViewComponent{constructor(modalService,subscriptionService,dsoNameService){this.modalService=modalService,this.subscriptionService=subscriptionService,this.dsoNameService=dsoNameService,this.reload=new core.vpe}getPageRoutePrefix(){let routePrefix;switch(this.dso.type.toString()){case"community":routePrefix=(0,community_page_routing_paths.A0)();break;case"collection":routePrefix=(0,collection_page_routing_paths.E5)();break;case"item":routePrefix=(0,item_page_routing_paths.TO)()}return routePrefix}deleteSubscriptionPopup(subscription){if((0,empty_util.Uh)(subscription.id)){const modalRef=this.modalService.open(confirmation_modal_component.Y);modalRef.componentInstance.dso=this.dso,modalRef.componentInstance.headerLabel="confirmation-modal.delete-subscription.header",modalRef.componentInstance.infoLabel="confirmation-modal.delete-subscription.info",modalRef.componentInstance.cancelLabel="confirmation-modal.delete-subscription.cancel",modalRef.componentInstance.confirmLabel="confirmation-modal.delete-subscription.confirm",modalRef.componentInstance.brandColor="danger",modalRef.componentInstance.confirmIcon="fas fa-trash",modalRef.componentInstance.response.pipe((0,operators.qn)(1)).subscribe(confirm=>{confirm&&this.subscriptionService.deleteSubscription(subscription.id).subscribe(res=>{this.reload.emit()})})}}openSubscriptionModal(){this.modalRef=this.modalService.open(subscription_modal_component.W),this.modalRef.componentInstance.dso=this.dso,this.modalRef.componentInstance.subscription=this.subscription,this.modalRef.componentInstance.updateSubscription.pipe((0,operators.qn)(1)).subscribe(subscription=>{this.subscription=subscription})}}__name(SubscriptionViewComponent,"SubscriptionViewComponent"),SubscriptionViewComponent.\u0275fac=__name(function(t){return new(t||SubscriptionViewComponent)(core.Y36(ng_bootstrap.FF),core.Y36(subscriptions_data_service.D),core.Y36(dso_name_service._))},"SubscriptionViewComponent_Factory"),SubscriptionViewComponent.\u0275cmp=core.Xpm({type:SubscriptionViewComponent,selectors:[["","ds-subscription-view",""]],inputs:{subscription:"subscription",dso:"dso",eperson:"eperson"},outputs:{reload:"reload"},attrs:["ds-subscription-view",""],decls:15,vars:11,consts:[[1,"dso-info"],[4,"ngIf"],["class","subscription-type",4,"ngIf"],[1,"subscription-parameters"],[1,"subscription-actions"],[1,"btn-group","edit-field"],[1,"btn","btn-outline-primary","btn-sm","access-control-editEPersonButton",3,"disabled","title","click"],[1,"fas","fa-edit","fa-fw"],[1,"btn","btn-outline-danger","btn-sm","access-control-deleteEPersonButton",3,"title","click"],[1,"fas","fa-trash-alt","fa-fw"],[3,"object"],[3,"routerLink"],[1,"my-0"],[1,"text-muted","my-0"],[1,"subscription-type"],[4,"ngFor","ngForOf"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"td",0),core.YNc(1,SubscriptionViewComponent_ng_container_1_Template,5,6,"ng-container",1),core.YNc(2,SubscriptionViewComponent_ng_container_2_Template,7,6,"ng-container",1),core.qZA(),core.TgZ(3,"td"),core.YNc(4,SubscriptionViewComponent_span_4_Template,2,1,"span",2),core.qZA(),core.TgZ(5,"td",3),core.YNc(6,SubscriptionViewComponent_ng_container_6_Template,2,1,"ng-container",1),core.qZA(),core.TgZ(7,"td",4)(8,"div",5)(9,"button",6),core.NdJ("click",__name(function($event){return $event.preventDefault(),ctx.openSubscriptionModal()},"SubscriptionViewComponent_Template_button_click_9_listener")),core.ALo(10,"translate"),core._UZ(11,"i",7),core.qZA(),core.TgZ(12,"button",8),core.NdJ("click",__name(function(){return ctx.deleteSubscriptionPopup(ctx.subscription)},"SubscriptionViewComponent_Template_button_click_12_listener")),core.ALo(13,"translate"),core._UZ(14,"i",9),core.qZA()()()),2&rf&&(core.xp6(1),core.Q6J("ngIf",!!ctx.dso),core.xp6(1),core.Q6J("ngIf",!ctx.dso),core.xp6(2),core.Q6J("ngIf",!!ctx.subscription),core.xp6(2),core.Q6J("ngIf",!!ctx.subscription),core.xp6(3),core.Q6J("disabled",!ctx.dso)("title",core.lcZ(10,7,"subscriptions.table.edit")),core.xp6(3),core.Q6J("title",core.lcZ(13,9,"subscriptions.table.delete")))},"SubscriptionViewComponent_Template"),dependencies:[common.sg,common.O5,router.rH,themed_type_badge_component.o,ngx_translate_core.X$]});subscription_modal_component.W;class SubscriptionsModule{}__name(SubscriptionsModule,"SubscriptionsModule"),SubscriptionsModule.\u0275fac=__name(function(t){return new(t||SubscriptionsModule)},"SubscriptionsModule_Factory"),SubscriptionsModule.\u0275mod=core.oAB({type:SubscriptionsModule}),SubscriptionsModule.\u0275inj=core.cJS({imports:[common.ez,ng_bootstrap.bz,fesm2020_forms.UX,ngx_translate_core.aw,router.Bz,shared_module.m]});class SubscriptionsPageModule{}__name(SubscriptionsPageModule,"SubscriptionsPageModule"),SubscriptionsPageModule.\u0275fac=__name(function(t){return new(t||SubscriptionsPageModule)},"SubscriptionsPageModule_Factory"),SubscriptionsPageModule.\u0275mod=core.oAB({type:SubscriptionsPageModule}),SubscriptionsPageModule.\u0275inj=core.cJS({imports:[common.ez,shared_module.m,SubscriptionsModule]});var cjs=__webpack_require__(93489),paginated_list_model=__webpack_require__(16733),pagination_component_options_model=__webpack_require__(89860),pagination_service=__webpack_require__(69169),page_info_model=__webpack_require__(96906),auth_service=__webpack_require__(22410),shared_operators=__webpack_require__(53829),alert_component=__webpack_require__(74369),themed_loading_component=__webpack_require__(24442),pagination_component=__webpack_require__(83170),var_directive=__webpack_require__(61562);function SubscriptionsPageComponent_ds_themed_loading_8_Template(rf,ctx){1&rf&&core._UZ(0,"ds-themed-loading")}function SubscriptionsPageComponent_ng_container_10_ds_pagination_1_tr_18_Template(rf,ctx){if(1&rf){const _r8=core.EpF();core.TgZ(0,"tr",13),core.NdJ("reload",__name(function(){core.CHM(_r8);const ctx_r7=core.oxw(3);return core.KtG(ctx_r7.refresh())},"SubscriptionsPageComponent_ng_container_10_ds_pagination_1_tr_18_Template_tr_reload_0_listener")),core.ALo(1,"async"),core.ALo(2,"async"),core.qZA()}if(2&rf){const subscription_r6=ctx.$implicit;let tmp_0_0,tmp_1_0;core.Q6J("dso",null==(tmp_0_0=core.lcZ(1,3,null==subscription_r6?null:subscription_r6.resource))?null:tmp_0_0.payload)("eperson",null==(tmp_1_0=core.lcZ(2,5,null==subscription_r6?null:subscription_r6.eperson))||null==tmp_1_0.payload?null:tmp_1_0.payload.id)("subscription",subscription_r6)}}function SubscriptionsPageComponent_ng_container_10_ds_pagination_1_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"ds-pagination",7)(1,"div",8)(2,"table",9)(3,"thead")(4,"tr")(5,"th",10),core._uU(6),core.ALo(7,"translate"),core.qZA(),core.TgZ(8,"th",11),core._uU(9),core.ALo(10,"translate"),core.qZA(),core.TgZ(11,"th",11),core._uU(12),core.ALo(13,"translate"),core.qZA(),core.TgZ(14,"th",11),core._uU(15),core.ALo(16,"translate"),core.qZA()()(),core.TgZ(17,"tbody"),core.YNc(18,SubscriptionsPageComponent_ng_container_10_ds_pagination_1_tr_18_Template,3,7,"tr",12),core.qZA()()()()),2&rf){const subscriptions_r2=core.oxw().ngVar,ctx_r3=core.oxw();core.Q6J("paginationOptions",ctx_r3.config)("collectionSize",null==subscriptions_r2||null==subscriptions_r2.pageInfo?null:subscriptions_r2.pageInfo.totalElements)("hideGear",!0)("hidePagerWhenSinglePage",!0),core.xp6(6),core.Oqu(core.lcZ(7,9,"subscriptions.table.dso")),core.xp6(3),core.Oqu(core.lcZ(10,11,"subscriptions.table.subscription_type")),core.xp6(3),core.Oqu(core.lcZ(13,13,"subscriptions.table.subscription_frequency")),core.xp6(3),core.Oqu(core.lcZ(16,15,"subscriptions.table.action")),core.xp6(3),core.Q6J("ngForOf",null==subscriptions_r2?null:subscriptions_r2.page)}}function SubscriptionsPageComponent_ng_container_10_ds_alert_3_Template(rf,ctx){1&rf&&(core.TgZ(0,"ds-alert",14),core._uU(1),core.ALo(2,"translate"),core.qZA()),2&rf&&(core.Q6J("type","alert-info"),core.xp6(1),core.hij(" ",core.lcZ(2,2,"subscriptions.table.empty.message")," "))}function SubscriptionsPageComponent_ng_container_10_Template(rf,ctx){if(1&rf&&(core.ynx(0),core.YNc(1,SubscriptionsPageComponent_ng_container_10_ds_pagination_1_Template,19,17,"ds-pagination",5),core.ALo(2,"async"),core.YNc(3,SubscriptionsPageComponent_ng_container_10_ds_alert_3_Template,3,4,"ds-alert",6),core.ALo(4,"async"),core.BQk()),2&rf){const subscriptions_r2=ctx.ngVar,ctx_r1=core.oxw();core.xp6(1),core.Q6J("ngIf",(null==subscriptions_r2||null==subscriptions_r2.pageInfo?null:subscriptions_r2.pageInfo.totalElements)>0&&!core.lcZ(2,2,ctx_r1.loading$)),core.xp6(2),core.Q6J("ngIf",0==(null==subscriptions_r2||null==subscriptions_r2.pageInfo?null:subscriptions_r2.pageInfo.totalElements)&&!core.lcZ(4,4,ctx_r1.loading$))}}__name(SubscriptionsPageComponent_ds_themed_loading_8_Template,"SubscriptionsPageComponent_ds_themed_loading_8_Template"),__name(SubscriptionsPageComponent_ng_container_10_ds_pagination_1_tr_18_Template,"SubscriptionsPageComponent_ng_container_10_ds_pagination_1_tr_18_Template"),__name(SubscriptionsPageComponent_ng_container_10_ds_pagination_1_Template,"SubscriptionsPageComponent_ng_container_10_ds_pagination_1_Template"),__name(SubscriptionsPageComponent_ng_container_10_ds_alert_3_Template,"SubscriptionsPageComponent_ng_container_10_ds_alert_3_Template"),__name(SubscriptionsPageComponent_ng_container_10_Template,"SubscriptionsPageComponent_ng_container_10_Template");class SubscriptionsPageComponent{constructor(paginationService,authService,subscriptionService){this.paginationService=paginationService,this.authService=authService,this.subscriptionService=subscriptionService,this.subscriptions$=new cjs.BehaviorSubject((0,paginated_list_model.b)(new page_info_model.S,[])),this.config=Object.assign(new pagination_component_options_model.r,{id:"elp",pageSize:10,currentPage:1}),this.loading$=new cjs.BehaviorSubject(!1),this.sub=null}ngOnInit(){this.ePersonId$=this.authService.getAuthenticatedUserFromStore().pipe((0,operators.qn)(1),(0,operators.UI)(ePerson=>ePerson.id),(0,cjs.shareReplay)()),this.retrieveSubscriptions()}retrieveSubscriptions(){this.sub=this.paginationService.getCurrentPagination(this.config.id,this.config).pipe((0,cjs.combineLatestWith)(this.ePersonId$),(0,operators.bw)(()=>this.loading$.next(!0)),(0,operators.wt)(([currentPagination,ePersonId])=>this.subscriptionService.findByEPerson(ePersonId,{currentPage:currentPagination.currentPage,elementsPerPage:currentPagination.pageSize})),(0,shared_operators.f1)()).subscribe(res=>{res.hasSucceeded&&this.subscriptions$.next(res.payload),this.loading$.next(!1)})}refresh(){(0,empty_util.Uh)(this.sub)&&this.sub.unsubscribe(),this.retrieveSubscriptions()}ngOnDestroy(){(0,empty_util.Uh)(this.sub)&&this.sub.unsubscribe()}}__name(SubscriptionsPageComponent,"SubscriptionsPageComponent"),SubscriptionsPageComponent.\u0275fac=__name(function(t){return new(t||SubscriptionsPageComponent)(core.Y36(pagination_service.N),core.Y36(auth_service.e8),core.Y36(subscriptions_data_service.D))},"SubscriptionsPageComponent_Factory"),SubscriptionsPageComponent.\u0275cmp=core.Xpm({type:SubscriptionsPageComponent,selectors:[["ds-subscriptions-page"]],decls:12,vars:9,consts:[[1,"container"],[1,"row"],[1,"col-md-12","m-40"],[4,"ngIf"],[4,"ngVar"],[3,"paginationOptions","collectionSize","hideGear","hidePagerWhenSinglePage",4,"ngIf"],["data-test","empty-alert",3,"type",4,"ngIf"],[3,"paginationOptions","collectionSize","hideGear","hidePagerWhenSinglePage"],[1,"table-responsive"],["id","formats","data-test","subscription-table",1,"table","table-striped","table-hover"],["scope","col",2,"width","50%"],["scope","col"],["ds-subscription-view","",3,"dso","eperson","subscription","reload",4,"ngFor","ngForOf"],["ds-subscription-view","",3,"dso","eperson","subscription","reload"],["data-test","empty-alert",3,"type"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),core._uU(4),core.ALo(5,"translate"),core.qZA(),core.TgZ(6,"div",1)(7,"div",2),core.YNc(8,SubscriptionsPageComponent_ds_themed_loading_8_Template,1,0,"ds-themed-loading",3),core.ALo(9,"async"),core.YNc(10,SubscriptionsPageComponent_ng_container_10_Template,5,6,"ng-container",4),core.ALo(11,"async"),core.qZA()()()()()),2&rf&&(core.xp6(4),core.Oqu(core.lcZ(5,3,"subscriptions.title")),core.xp6(4),core.Q6J("ngIf",core.lcZ(9,5,ctx.loading$)),core.xp6(2),core.Q6J("ngVar",core.lcZ(11,7,ctx.subscriptions$)))},"SubscriptionsPageComponent_Template"),dependencies:[common.sg,common.O5,alert_component.w,themed_loading_component.Z,pagination_component.Q,var_directive.g,SubscriptionViewComponent,common.Ov,ngx_translate_core.X$]});class SubscriptionsPageRoutingModule{}__name(SubscriptionsPageRoutingModule,"SubscriptionsPageRoutingModule"),SubscriptionsPageRoutingModule.\u0275fac=__name(function(t){return new(t||SubscriptionsPageRoutingModule)},"SubscriptionsPageRoutingModule_Factory"),SubscriptionsPageRoutingModule.\u0275mod=core.oAB({type:SubscriptionsPageRoutingModule}),SubscriptionsPageRoutingModule.\u0275inj=core.cJS({imports:[SubscriptionsPageModule,router.Bz.forChild([{path:"",data:{title:"subscriptions.title"},children:[{path:"",component:SubscriptionsPageComponent}]}])]})}};