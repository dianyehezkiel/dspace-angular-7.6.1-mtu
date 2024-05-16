"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=1975,exports.ids=[1975],exports.modules={91975:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SearchSettingsComponent:()=>SearchSettingsComponent});var _core_shared_search_search_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(39185),_my_dspace_page_my_dspace_page_component__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(12448),__webpack_require__(40370),__webpack_require__(14892)),_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(69169),_angular_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(86209),_angular_router__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(16088),_angular_common__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(65159),_angular_forms__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(32189),_sidebar_sidebar_dropdown_component__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(84554),_page_size_selector_page_size_selector_component__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(47315),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(4330);function SearchSettingsComponent_ds_sidebar_dropdown_5_option_1_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_7__.TgZ(0,"option",4),_angular_core__WEBPACK_IMPORTED_MODULE_7__._uU(1),_angular_core__WEBPACK_IMPORTED_MODULE_7__.ALo(2,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_7__.qZA()),2&rf){const sortOptionsEntry_r2=ctx.$implicit,ctx_r1=_angular_core__WEBPACK_IMPORTED_MODULE_7__.oxw(2);_angular_core__WEBPACK_IMPORTED_MODULE_7__.Q6J("value",sortOptionsEntry_r2.field+","+sortOptionsEntry_r2.direction.toString())("selected",sortOptionsEntry_r2.field===(null==ctx_r1.currentSortOption?null:ctx_r1.currentSortOption.field)&&sortOptionsEntry_r2.direction===(null==ctx_r1.currentSortOption?null:ctx_r1.currentSortOption.direction)?"selected":null),_angular_core__WEBPACK_IMPORTED_MODULE_7__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_7__.hij(" ",_angular_core__WEBPACK_IMPORTED_MODULE_7__.lcZ(2,3,"sorting."+sortOptionsEntry_r2.field+"."+sortOptionsEntry_r2.direction)," ")}}function SearchSettingsComponent_ds_sidebar_dropdown_5_Template(rf,ctx){if(1&rf){const _r4=_angular_core__WEBPACK_IMPORTED_MODULE_7__.EpF();_angular_core__WEBPACK_IMPORTED_MODULE_7__.TgZ(0,"ds-sidebar-dropdown",2),_angular_core__WEBPACK_IMPORTED_MODULE_7__.NdJ("change",__name(function($event){_angular_core__WEBPACK_IMPORTED_MODULE_7__.CHM(_r4);const ctx_r3=_angular_core__WEBPACK_IMPORTED_MODULE_7__.oxw();return _angular_core__WEBPACK_IMPORTED_MODULE_7__.KtG(ctx_r3.reloadOrder($event))},"SearchSettingsComponent_ds_sidebar_dropdown_5_Template_ds_sidebar_dropdown_change_0_listener")),_angular_core__WEBPACK_IMPORTED_MODULE_7__.YNc(1,SearchSettingsComponent_ds_sidebar_dropdown_5_option_1_Template,3,5,"option",3),_angular_core__WEBPACK_IMPORTED_MODULE_7__.qZA()}if(2&rf){const ctx_r0=_angular_core__WEBPACK_IMPORTED_MODULE_7__.oxw();_angular_core__WEBPACK_IMPORTED_MODULE_7__.Q6J("id","search-sidebar-sort")("label","search.sidebar.settings.sort-by"),_angular_core__WEBPACK_IMPORTED_MODULE_7__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_7__.Q6J("ngForOf",ctx_r0.sortOptionsList)}}__name(SearchSettingsComponent_ds_sidebar_dropdown_5_option_1_Template,"SearchSettingsComponent_ds_sidebar_dropdown_5_option_1_Template"),__name(SearchSettingsComponent_ds_sidebar_dropdown_5_Template,"SearchSettingsComponent_ds_sidebar_dropdown_5_Template");class SearchSettingsComponent{constructor(service,route,router,paginationService,searchConfigurationService){this.service=service,this.route=route,this.router=router,this.paginationService=paginationService,this.searchConfigurationService=searchConfigurationService}reloadOrder(event){const values=event.target.value.split(",");this.paginationService.updateRoute(this.searchConfigurationService.paginationID,{sortField:values[0],sortDirection:values[1],page:1})}}__name(SearchSettingsComponent,"SearchSettingsComponent"),SearchSettingsComponent.\u0275fac=__name(function(t){return new(t||SearchSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__.Y36(_core_shared_search_search_service__WEBPACK_IMPORTED_MODULE_0__.o),_angular_core__WEBPACK_IMPORTED_MODULE_7__.Y36(_angular_router__WEBPACK_IMPORTED_MODULE_8__.gz),_angular_core__WEBPACK_IMPORTED_MODULE_7__.Y36(_angular_router__WEBPACK_IMPORTED_MODULE_8__.F0),_angular_core__WEBPACK_IMPORTED_MODULE_7__.Y36(_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_4__.N),_angular_core__WEBPACK_IMPORTED_MODULE_7__.Y36(_my_dspace_page_my_dspace_page_component__WEBPACK_IMPORTED_MODULE_3__.SEARCH_CONFIG_SERVICE))},"SearchSettingsComponent_Factory"),SearchSettingsComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_7__.Xpm({type:SearchSettingsComponent,selectors:[["ds-search-settings"]],inputs:{currentSortOption:"currentSortOption",sortOptionsList:"sortOptionsList"},decls:7,vars:4,consts:[[1,"result-order-settings"],[3,"id","label","change",4,"ngIf"],[3,"id","label","change"],[3,"value","selected",4,"ngFor","ngForOf"],[3,"value","selected"]],template:__name(function(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_7__.ynx(0),_angular_core__WEBPACK_IMPORTED_MODULE_7__.TgZ(1,"h3"),_angular_core__WEBPACK_IMPORTED_MODULE_7__._uU(2),_angular_core__WEBPACK_IMPORTED_MODULE_7__.ALo(3,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_7__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_7__.TgZ(4,"div",0),_angular_core__WEBPACK_IMPORTED_MODULE_7__.YNc(5,SearchSettingsComponent_ds_sidebar_dropdown_5_Template,2,3,"ds-sidebar-dropdown",1),_angular_core__WEBPACK_IMPORTED_MODULE_7__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_7__._UZ(6,"ds-page-size-selector"),_angular_core__WEBPACK_IMPORTED_MODULE_7__.BQk()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_7__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_7__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_7__.lcZ(3,2,"search.sidebar.settings.title")),_angular_core__WEBPACK_IMPORTED_MODULE_7__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_7__.Q6J("ngIf",ctx.sortOptionsList))},"SearchSettingsComponent_Template"),dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_9__.sg,_angular_common__WEBPACK_IMPORTED_MODULE_9__.O5,_angular_forms__WEBPACK_IMPORTED_MODULE_10__.YN,_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Kr,_sidebar_sidebar_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.N,_page_size_selector_page_size_selector_component__WEBPACK_IMPORTED_MODULE_6__.k,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.X$],styles:[".setting-option[_ngcontent-%COMP%]{border:1px solid var(--bs-light)}"]})}};