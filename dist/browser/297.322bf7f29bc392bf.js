"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[297],{50297:(b,l,r)=>{r.r(l),r.d(l,{MediaViewerVideoComponent:()=>v});var c=r(11707),e=r(98678),s=r(35103),a=r(65706),p=r(96342);function m(i,o){if(1&i&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275element(1,"track",4),e.\u0275\u0275elementContainerEnd()),2&i){const t=o.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("src",t.src,e.\u0275\u0275sanitizeUrl)("label",t.langLabel)("srclang",t.srclang)}}function _(i,o){if(1&i&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,m,2,3,"ng-container",3),e.\u0275\u0275elementContainerEnd()),2&i){const t=o.ngIf;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",t)}}function u(i,o){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",12),e.\u0275\u0275listener("click",function(){const C=e.\u0275\u0275restoreView(t).index,V=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(V.selectedMedia(C))}),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()}if(2&i){const t=o.$implicit,n=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",n.dsoNameService.getName(t.bitstream)," ")}}function g(i,o){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",5)(1,"button",6),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const d=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(d.prevMedia())}),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"button",7),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const d=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(d.nextMedia())}),e.\u0275\u0275text(5),e.\u0275\u0275pipe(6,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"div",8)(8,"button",9),e.\u0275\u0275text(9),e.\u0275\u0275pipe(10,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"div",10),e.\u0275\u0275template(12,u,2,1,"button",11),e.\u0275\u0275elementEnd()()()}if(2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("disabled",0===t.currentIndex),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(3,6,"media-viewer.previous")," "),e.\u0275\u0275advance(2),e.\u0275\u0275property("disabled",t.currentIndex===t.medias.length-1),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(6,8,"media-viewer.next")," "),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(10,10,"media-viewer.playlist")," "),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngForOf",t.medias)}}let v=(()=>{class i extends c.MediaViewerVideoComponent{}return i.\u0275fac=function(){let o;return function(n){return(o||(o=e.\u0275\u0275getInheritedFactory(i)))(n||i)}}(),i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["ds-media-viewer-video"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:3,vars:4,consts:[["crossorigin","anonymous","id","singleVideo","preload","none","controls","",3,"src","poster"],[4,"ngIf"],["class","buttons",4,"ngIf"],[4,"ngFor","ngForOf"],[3,"src","label","srclang"],[1,"buttons"],[1,"btn","btn-primary","previous",3,"disabled","click"],[1,"btn","btn-primary","next",3,"disabled","click"],["ngbDropdown","",1,"d-inline-block"],["id","dropdownBasic1","ngbDropdownToggle","",1,"btn","btn-outline-primary","playlist"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic1"],["ngbDropdownItem","","class","list-element",3,"click",4,"ngFor","ngForOf"],["ngbDropdownItem","",1,"list-element",3,"click"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"video",0),e.\u0275\u0275template(1,_,2,1,"ng-container",1),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(2,g,13,12,"div",2)),2&t&&(e.\u0275\u0275property("src",n.medias[n.currentIndex].bitstream._links.content.href,e.\u0275\u0275sanitizeUrl)("poster",n.medias[n.currentIndex].thumbnail||n.replacements[n.medias[n.currentIndex].format],e.\u0275\u0275sanitizeUrl),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.getMediaCap(n.medias[n.currentIndex].bitstream.name,n.captions)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.medias?null:n.medias.length)>1))},dependencies:[s.sg,s.O5,a.jt,a.iD,a.Vi,a.TH,p.X$],styles:["video[_ngcontent-%COMP%]{width:100%;height:auto;max-width:340px}.buttons[_ngcontent-%COMP%]{display:flex;gap:.25rem}"]}),i})()}}]);