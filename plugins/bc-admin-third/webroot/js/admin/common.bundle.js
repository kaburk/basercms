!function(e){function t(t){for(var r,a,i=t[0],s=t[1],l=t[2],b=0,u=[];b<i.length;b++)a=i[b],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&u.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(d&&d(t);u.length;)u.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=s;c.push([0,15]),n()}([function(e,t,n){"use strict";n.r(t);n(1),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13)},,,,,function(e,t){
/**
 * baserCMS :  Based Website Development Project <https://basercms.net>
 * Copyright (c) baserCMS User Community <https://basercms.net/community/>
 *
 * @copyright     Copyright (c) baserCMS User Community
 * @link          https://basercms.net baserCMS Project
 * @since         5.0.0
 * @license       http://basercms.net/license/index.html MIT License
 */
!function(e){e.baseUrl=function(){return e("#AdminScript").attr("data-baseUrl")}}(jQuery)},function(e,t){
/**
 * baserCMS :  Based Website Development Project <https://basercms.net>
 * Copyright (c) baserCMS User Community <https://basercms.net/community/>
 *
 * @copyright     Copyright (c) baserCMS User Community
 * @link          https://basercms.net baserCMS Project
 * @since         5.0.0
 * @license       http://basercms.net/license/index.html MIT License
 */
!function(e){e.bcUtil={disabledHideMessage:!1,baseUrl:null,baserCorePrefix:null,adminPrefix:null,adminBaseUrl:null,apiBaseUrl:null,ajaxLoaderPath:null,ajaxLoaderSmallPath:null,init:function(t){var n=e("#AdminScript");e.bcUtil.baseUrl=n.attr("data-baseUrl"),e.bcUtil.baserCorePrefix=n.attr("data-baserCorePrefix"),e.bcUtil.adminPrefix=n.attr("data-adminPrefix"),e.bcUtil.ajaxLoaderPath=n.attr("data-ajaxLoaderPath"),e.bcUtil.ajaxLoaderSmallPath=n.attr("data-ajaxLoaderSmallPath"),void 0!==t.baseUrl&&(e.bcUtil.baseUrl=t.baseUrl),void 0!==t.baserCorePrefix&&(e.bcUtil.baserCorePrefix=t.baserCorePrefix),void 0!==t.adminPrefix&&(e.bcUtil.adminPrefix=t.adminPrefix),void 0!==t.ajaxLoaderPath&&(e.bcUtil.ajaxLoaderPath=t.ajaxLoaderPath),void 0!==t.ajaxLoaderSmallPath&&(e.bcUtil.ajaxLoaderSmallPath=t.ajaxLoaderSmallPath),e.bcUtil.adminBaseUrl=e.bcUtil.baseUrl+e.bcUtil.baserCorePrefix+e.bcUtil.adminPrefix+"/",e.bcUtil.apiBaseUrl=e.bcUtil.baseUrl+e.bcUtil.baserCorePrefix+"/api/"},showAlertMessage:function(t){e.bcUtil.hideMessage(),e("#BcSystemMessage").removeClass("notice-messge alert-message").addClass("alert-message").html(t),e("#BcMessageBox").fadeIn(500)},showNoticeMessage:function(t){e.bcUtil.hideMessage(),e("#BcSystemMessage").removeClass("notice-messge alert-message").addClass("notice-message").html(t),e("#BcMessageBox").fadeIn(500)},hideMessage:function(){e.bcUtil.disabledHideMessage||(e("#BcMessageBox").fadeOut(200),e("#AlertMessage").fadeOut(200),e("#MessageBox").fadeOut(200))},showLoader:function(t,n,r){switch((null==t||"none"!=t&&null==n)&&(t="over"),t){case"over":e("#Waiting").show();break;case"inner":var o=e("<div>").css({"text-align":"center"}).attr("id",r),c=e("<img>").attr("src",e.bcUtil.ajaxLoaderPath);o.html(c),e(n).html(o);break;case"after":c=e("<img>").attr("src",e.bcUtil.ajaxLoaderSmallPath).attr("id",r);e(n).after(c);break;case"target":e(n).show()}},hideLoader:function(t,n,r){switch((null==t||"none"!=t&&null==n)&&(t="over"),t){case"over":e("#Waiting").hide();break;case"inner":case"after":e("#"+r).remove();break;case"target":e(n).show()}},ajax:function(t,n,r){var o,c,a;r||(r={});var i=!0;void 0!==r.loaderType&&(o=r.loaderType,delete r.loaderType),void 0!==r.loaderSelector&&(c=r.loaderSelector,delete r.loaderSelector,a=c.replace(/\./g,"").replace(/#/g,"").replace(/\s/g,"")+"loaderkey"),void 0!==r.hideLoader&&(i=r.hideLoader,delete r.loaderType);var s={url:t,headers:{Authorization:e.bcJwt.accessToken},type:"POST",dataType:"html",beforeSend:function(){e.bcUtil.showLoader(o,c,a)},complete:function(){i&&e.bcUtil.hideLoader(o,c,a)},error:function(t,n,r){e.bcUtil.showAjaxError("処理に失敗しました。",t,r)},success:n};return r&&e.extend(s,r),e.ajax(s)},showAjaxError:function(t,n,r){var o="";void 0!==n&&n.status&&(o="<br />("+n.status+") "),void 0!==n&&n.responseJSON&&(o+=n.responseJSON.message),void 0!==n&&n.responseText?o+=n.responseText:void 0!==r&&(o+=r),e.bcUtil.showAlertMessage(t+o)}}}(jQuery)},function(e,t){
/**
 * baserCMS :  Based Website Development Project <https://basercms.net>
 * Copyright (c) baserCMS User Community <https://basercms.net/community/>
 *
 * @copyright     Copyright (c) baserCMS User Community
 * @link          https://basercms.net baserCMS Project
 * @since         5.0.0
 * @license       http://basercms.net/license/index.html MIT License
 */
!function(e){e.bcToken={key:null,requested:!1,requesting:!1,url:null,defaultUrl:"/baser/baser-core/bc_form/get_token?requestview=false",init:function(){this.setTokenUrl()},check:function(t,n){if(this.requesting)var r=setInterval((function(){e.bcToken.requesting||(clearInterval(r),t&&e.bcToken.execCallback(t,n))}),100);else this.key?t&&this.execCallback(t,n):this.update(n).done((function(){t&&e.bcToken.execCallback(t,n)}))},execCallback:function(t,n){var r={useUpdate:!0};n=void 0!==n?e.extend(r,n):r;var o=t();n.useUpdate&&(n.hideLoader=!0,n.loaderType="none",o?o.always((function(){e.bcToken.update(n)})):this.update(n))},update:function(t){var n={type:"GET"};return t=void 0!==t?e.extend(n,t):n,this.requesting=!0,e.bcUtil.ajax(e.baseUrl()+this.url,(function(t){e.bcToken.key=t,e.bcToken.requesting=!1,e('input[name="_csrfToken"]').val(e.bcToken.key)}),e.extend(!0,{},t))},getForm:function(t,n,r){var o=e("<form/>");o.attr("action",t).attr("method","post"),this.check((function(){o.append(e.bcToken.getHiddenToken()),n(o)}),r)},getHiddenToken:function(){return e('<input name="_csrfToken" type="hidden">').val(this.key)},submitToken:function(t){this.getForm(t,(function(t){e("body").append(t),t.submit()}),{useUpdate:!1,hideLoader:!1})},replaceLinkToSubmitToken:function(t){e(t).each((function(){if(e(this).attr("onclick")){var t=e(this).attr("onclick").match(/if \(confirm\("(.+?)"\)/);t&&(e(this).attr("data-confirm-message",t[1]),e(this).get(0).onclick="",e(this).removeAttr("onclick"))}})),e(t).click((function(){if(e(this).attr("data-confirm-message")){var t=e(this).attr("data-confirm-message");if(t=JSON.parse('"'+t+'"').replace(/\\n/g,"\n"),!confirm(t))return!1}return e.bcToken.submitToken(e(this).attr("href")),!1}))},setTokenUrl:function(e){return this.url=null!=e?e:this.defaultUrl,this}}}(jQuery)},function(e,t){
/**
 * baserCMS :  Based Website Development Project <https://basercms.net>
 * Copyright (c) baserCMS User Community <https://basercms.net/community/>
 *
 * @copyright     Copyright (c) baserCMS User Community
 * @link          https://basercms.net baserCMS Project
 * @since         5.0.0
 * @license       http://basercms.net/license/index.html MIT License
 */
!function(e){e.bcSortable={updateSortUrl:null,init:function(t){this.updateSortUrl=t.updateSortUrl;var n=e(".sort-handle"),r=e(".sort-table");n.unbind();try{e(r).sortable("destroy")}catch(e){}var o={scroll:!0,items:"tr.sortable",opacity:1,zIndex:55,containment:"body",tolerance:"pointer",distance:5,cursor:"move",handle:".sort-handle",placeholder:"ui-sortable-placeholder",revert:100,start:this.sortStartHandler,update:this.sortUpdateHandler};n.css("cursor","move"),r.sortable(o),n.click((function(e){e.stopPropagation()}))},sortStartHandler:function(t,n){e(".ui-sortable-placeholder").css("height",n.item.height())},sortUpdateHandler:function(t,n){var r=n.item,o=e(".sort-table tr.sortable").index(r)+1-r.attr("id").replace("Row",""),c=e(".sort-table"),a=e("#AlertMessage"),i=e("<form/>").hide(),s=e("<input/>").attr("type","hidden").attr("name","Sort[id]").val(r.find(".id").val()),l=e("<input/>").attr("type","hidden").attr("name","Sort[offset]").val(o);i.append(s).append(l),e.bcToken.check((function(){i.append(e.bcToken.getHiddenToken());var t=i.serialize();return i.find('input[name="_csrfToken"]').remove(),e.ajax({url:e.bcSortable.updateSortUrl,headers:{Authorization:e.bcJwt.accessToken},type:"POST",data:t,dataType:"text",beforeSend:function(){a.fadeOut(200),e("#flashMessage").fadeOut(200),e.bcUtil.showLoader()},success:function(t){"1"===t?c.find("tr.sortable").each((function(t,n){e(this).attr("id","Row"+(t+1))})):(c.sortable("cancel"),a.html(bcI18n.commonSortSaveFailedMessage),a.fadeIn(500))},error:function(e,t,n){var r="";r=404===e.status?"<br>"+bcI18n.commonNotFoundProgramMessage:e.responseText?"<br>"+e.responseText:"<br>"+n,c.sortable("cancel"),a.html(bcI18n.commonSortSaveFailedMessage+"("+e.status+")"+r),a.fadeIn(500)},complete:function(){e.bcUtil.hideLoader()}})}),{hideLoader:!1})}}}(jQuery)},function(e,t){function n(e){void 0!==e.attr("checked")?$(e).parent().parent().addClass("selectedrow"):$(e).parent().parent().removeClass("selectedrow")}
/**
 * baserCMS :  Based Website Development Project <https://basercms.net>
 * Copyright (c) baserCMS Users Community <https://basercms.net/community/>
 *
 * @copyright       Copyright (c) baserCMS Users Community
 * @link            https://basercms.net baserCMS Project
 * @since           baserCMS v 2.0.0
 * @license         https://basercms.net/license/index.html
 */
!function(e){function t(){var t=e.bcBatch.config;e(t.methodSelect).val()?e(t.executeButton).removeAttr("disabled"):e(t.executeButton).prop("disabled",!0)}e.bcBatch={config:{batchUrl:"",listTable:"#ListTable",executeButton:"#BtnApplyBatch",methodSelect:"#listtool-batch",checkAll:"#listtool-checkall",targetCheckbox:".batch-targets",alertBox:"#AlertMessage",loader:"#Waiting",flashBox:"#flashMessage"},init:function(t){return t&&e.extend(e.bcBatch.config,t),this.initList(),this},initList:function(){var r=e.bcBatch.config;e(e.bcBatch.config.executeButton).unbind(),e(e.bcBatch.config.methodSelect).unbind(),e(r.listTable+" "+r.targetCheckbox).unbind(),e(r.checkAll).unbind(),e(e.bcBatch.config.executeButton).click((function(){if(!e(r.targetCheckbox+":checked").length)return alert(bcI18n.commonSelectDataFailedMessage),!1;e(r.methodSelect).val();if(!confirm(bcI18n.batchConfirmMessage))return!1;var t=e("<form/>").append(e(r.methodSelect).clone().val(e(r.methodSelect).val()));return e(r.targetCheckbox+":checked").each((function(){var n=e(this).attr("name").replace(/ListTool\[batch_targets\]\[([0-9]*)\]/,"$1");n&&t.append(e('<input name="ListTool[batch_targets][]" type="hidden">').val(n))})),e.bcToken.check((function(){return t.append(e('<input name="_csrfToken" type="hidden">').val(e.bcToken.key)),e.ajax({url:r.batchUrl,headers:{Authorization:e.bcJwt.accessToken},type:"POST",data:t.serialize(),dataType:"text",beforeSend:function(){e(r.alertBox).fadeOut(200),e(r.flashBox).parent().fadeOut(200),e.bcUtil.showLoader()},success:function(n){n?location.reload():(e.bcToken.key=null,e.bcUtil.hideLoader(),t.remove(),e(r.alertBox).html(bcI18n.commonBatchExecFailedMessage),e(r.alertBox).fadeIn(500))},error:function(n,o,c){e.bcToken.key=null;var a="";a=404===n.status?"<br>"+bcI18n.commonNotFoundProgramMessage:n.responseText?"<br>"+n.responseText:"<br>"+c,e.bcUtil.hideLoader(),t.remove(),e(r.alertBox).html(bcI18n.commonBatchExecFailedMessage+"("+n.status+")"+a),e(r.alertBox).fadeIn(500)}})}),{useUpdate:!1,hideLoader:!1}),!1})),e(e.bcBatch.config.methodSelect).change(t),e(r.listTable+" tbody td").click((function(){var t=e(this).parent().find(r.targetCheckbox);return t.prop("checked")?t.prop("checked",!1):t.prop("checked",!0),n(t),!1})),e(r.listTable+" tbody td a").click((function(t){"colorbox"!==e(this).attr("rel")&&t.stopPropagation()})),e(r.listTable+" "+r.targetCheckbox).click((function(e){e.stopPropagation()})),e(r.listTable+" "+r.targetCheckbox).change((function(){n(e(this))})),e(r.checkAll).change((function(){e(this).prop("checked")?e(r.listTable+" "+r.targetCheckbox).prop("checked",!0):e(r.listTable+" "+r.targetCheckbox).prop("checked",!1),e.bcBatch.initRowSelected()})),t(),e.bcBatch.initRowSelected()},initRowSelected:function(){var t=e.bcBatch.config;e(t.listTable+" "+t.targetCheckbox).each((function(){e(this).prop("checked")?e(this).parent().parent().addClass("selectedrow"):e(this).parent().parent().removeClass("selectedrow")}))}}}(jQuery)},function(e,t){
/**
 * baserCMS :  Based Website Development Project <https://basercms.net>
 * Copyright (c) baserCMS Users Community <https://basercms.net/community/>
 *
 * @copyright       Copyright (c) baserCMS Users Community
 * @link            https://basercms.net baserCMS Project
 * @since           baserCMS v 4.0.0
 * @license         https://basercms.net/license/index.html
 */
!function(e){e.bcTree={shiftOnAnchor:!1,ctrlOnAnchor:!1,contextmenuAddOnly:!1,settings:[],dropTarget:null,dragTarget:null,treeDom:null,jsTree:null,listDisplayed:null,beforeParentId:null,beforePosition:null,config:{isAdmin:!1,isUseMoveContents:!1,adminPrefix:"admin",editInIndexDisabled:!1},_inited:!1,init:function(t){t&&e.extend(e.bcTree.config,t),e.bcTree._inited=!0},load:function(){if(e.bcUtil.showLoader(),e.bcTree._inited){var t=e("#viewsetting-mode").val();if("index"==t){var n=e("#viewsetting-site-id").val();null==n&&(n=0),e.bcUtil.adminBaseUrl+"baser-core/contents/index?site_id="+n+"&list_type=1"}else"trash"==t&&e.bcUtil.adminBaseUrl+"baser-core/contents/trash_index";e.bcTree.listDisplayed=getNowDateTime(),e.bcTree.destroy(),e.bcTree._init(),e(e.bcTree).trigger("loaded"),e.bcUtil.hideLoader()}},_init:function(){if(!e("#ContentsTreeList").length)return!1;e.bcTree.settings=e.parseJSON(e("#bcmanagecontent").val()),e.bcTree.treeDom=e("#ContentsTreeList"),e.bcTree.createTree(),e.bcTree.jsTree=e.bcTree.treeDom.jstree(!0),e.bcTree.jsTree.settings.core.force_text=!0,e.bcTree.treeDom.bind("move_node.jstree",(function(t,n){e.bcTree.beforeParentId=n.old_parent,e.bcTree.beforePosition=n.old_position})),e.bcTree.treeDom.bind("dblclick",e.bcTree.updateShiftAndCtrlOnAnchor),e.bcTree.treeDom.bind("dblclick.jstree",(function(t){if("trash"==e("#viewsetting-mode").val())return!1;var n=e(t.target).closest("li").attr("id"),r=e.bcTree.jsTree.get_node(n).data.jstree;("default"==r.type||r.alias)&&(null!=e.bcTree.settings[r.contentType]&&e.bcTree.settings[r.contentType].editDisabled||(r.alias?e.bcTree.openUrl(e.bcUtil.adminBaseUrl+"baser-core/contents/edit_alias/"+r.contentId):null==e.bcTree.settings[r.contentType]?e.bcTree.openUrl(e.bcTree.createLink(e.baseUrl()+"/"+e.bcTree.config.baserCorePrefix+e.bcTree.config.adminPrefix+"/contents/edit",r.contentId,r.contentParentId,r.contentEntityId)):void 0!==e.bcTree.settings[r.contentType].url.dblclick?e.bcTree.openUrl(e.bcTree.createLink(e.bcTree.settings[r.contentType].url.dblclick,r.contentId,r.contentParentId,r.contentEntityId)):e.bcTree.openUrl(e.bcTree.createLink(e.bcTree.settings[r.contentType].url.edit,r.contentId,r.contentParentId,r.contentEntityId))))})),e.bcTree.treeDom.on("show_contextmenu.jstree",(function(){e("ul.jstree-contextmenu li").each((function(){e.bcTree.isAliasMenuByLabel(e.trim(e(this).text()))&&e(this).find("a i").after('<i class="icon-alias-layerd"></i>'),e.bcTree.isAddMenuByLabel(e.trim(e(this).text()))&&e(this).find("a i").after('<i class="icon-add-layerd"></i>')}))})),e.bcTree.treeDom.on("after_open.jstree",(function(t){e.bcTree.refreshTree()})),e.bcTree.treeDom.on("set_text.jstree",(function(t){e.bcTree.refreshTree()})),e.bcTree.treeDom.on("ready.jstree",(function(t){e.bcTree.treeDom.show(),e.bcTree.refreshTree()}))},destroy:function(){e.bcTree.treeDom&&(e.bcTree.treeDom.unbind("dblclick"),e.bcTree.treeDom.unbind("dblclick.jstree"),e.bcTree.treeDom.unbind("show_contextmenu.jstree"),e.bcTree.treeDom.unbind("after_open.jstree"),e.bcTree.treeDom.unbind("set_text.jstree"),e.bcTree.treeDom.unbind("ready.jstree"),e.bcTree.treeDom.remove()),e.bcTree.shiftOnAnchor=!1,e.bcTree.ctrlOnAnchor=!1,e.bcTree.contextmenuAddOnly=!1,e.bcTree.settings=[],e.bcTree.dropTarget=null,e.bcTree.dragTarget=null,e.bcTree.treeDom=null,e.bcTree.jsTree=null},createTree:function(){e.bcTree.treeDom.jstree({core:{themes:{name:"proton",stripes:!0,variant:"large"},multiple:!1,force_text:!1,check_callback:function(t,n,r,o,c){if("move_node"==t)return!!e.bcTree.config.isUseMoveContents&&("folder"!=r.type||r.data.jstree.alias||n.data.jstree.contentSiteRoot?(e.bcTree.dropTarget=null,e.bcTree.dragTarget=null,!1):(e.bcTree.dropTarget=r,e.bcTree.dragTarget=n,!0))}},plugins:["dnd","changed","state","wholerow","contextmenu","types"],dnd:{large_drop_target:!0},types:{default:{},folder:{}},state:{key:"jstree-"+e("#viewsetting-site-id").val(),events:"open_all.jstree close_all.jstree changed.jstree open_node.jstree close_node.jstree check_node.jstree uncheck_node.jstree"},contextmenu:{show_at_node:!1,items:function(t){var n,r=t.data.jstree,o=e("#viewsetting-mode").val();n="folder"!=r.type||t.data.jstree.alias?e.bcTree.jsTree.get_node(e.bcTree.jsTree.get_parent(t)):t;var c=!1,a=!1;null==e.bcTree.settings[r.contentType]?e.bcTree.settings[r.contentType]={url:e.bcTree.settings.Default.url}:(c=r.editDisabled,a=r.manageDisabled);var i,s={};1==r.status&&r.contentFullUrl&&!e.bcTree.contextmenuAddOnly&&"index"==o&&e.extend(!0,s,{view:{label:bcI18n.bcTreeCheck,icon:"bca-icon--preview",action:function(t){e.bcTree.openUrl(r.contentFullUrl,!0)}}}),e.bcTree.config.editInIndexDisabled||c||r.contentSiteRoot||"index"!=o||e.bcTree.contextmenuAddOnly||r.related||(0==r.status?e.extend(!0,s,{publish:{label:bcI18n.bcTreePublish,icon:"bca-icon--publish",action:function(n){e.bcToken.check((function(){return e.ajax({url:e.bcUtil.apiBaseUrl+"baser-core/contents/change_status",headers:{Authorization:e.bcJwt.accessToken},type:"PATCH",data:{id:r.contentId,status:"publish",type:r.contentType,siteId:r.contentSiteId,_csrfToken:e.bcToken.key},dataType:"json",beforeSend:function(){e.bcUtil.hideMessage(),e.bcUtil.showLoader()},success:function(n){t.data.jstree.status=!0,e.bcTree.refreshTree()},error:function(t,n,r){e.bcUtil.showAjaxError(bcI18n.commonChangePublishFailedMessage,t,r)},complete:function(){e.bcUtil.hideLoader()}})}),{hideLoader:!1})}}}):1==r.status&&e.extend(!0,s,{unpublish:{label:bcI18n.bcTreeUnpublish,icon:"bca-icon--unpublish",action:function(n){e.bcToken.check((function(){return e.ajax({url:e.bcUtil.apiBaseUrl+"baser-core/contents/change_status",headers:{Authorization:e.bcJwt.accessToken},type:"PATCH",data:{id:r.contentId,status:"unpublish",type:r.contentType,siteId:r.contentSiteId,_csrfToken:e.bcToken.key},dataType:"json",beforeSend:function(){e.bcUtil.hideMessage(),e.bcUtil.showLoader()},success:function(n){t.data.jstree.status=!1,e.bcTree.refreshTree()},error:function(t,n,r){e.bcUtil.showAjaxError(bcI18n.commonChangePublishFailedMessage,t,r)},complete:function(){e.bcUtil.hideLoader()}})}),{hideLoader:!1})}}})),a||e.bcTree.contextmenuAddOnly||void 0===e.bcTree.settings[r.contentType].url.manage||"index"!=o||r.alias||e.extend(!0,s,{manage:{label:bcI18n.bcTreeManage,icon:"bca-icon--th-list",action:function(t){e.bcTree.openUrl(e.bcTree.createLink(e.bcTree.settings[r.contentType].url.manage,r.contentId,r.contentParentId,r.contentEntityId))}}}),e.bcTree.config.editInIndexDisabled||c||e.bcTree.contextmenuAddOnly||r.contentSiteRoot||"index"!=o||r.related||e.extend(!0,s,{rename:{label:bcI18n.bcTreeRename,icon:"bca-icon--rename",action:function(n){e.bcTree.renameContent(t,t.text)}}}),c||e.bcTree.contextmenuAddOnly||"index"!=o||e.extend(!0,s,{edit:{label:bcI18n.bcTreeEdit,icon:"bca-icon--edit",action:function(n){t.data.jstree.alias?e.bcTree.openUrl(e.bcUtil.adminBaseUrl+"baser-core/contents/edit_alias/"+r.contentId):e.bcTree.openUrl(e.bcTree.createLink(e.bcTree.settings[r.contentType].url.edit,r.contentId,r.contentParentId,r.contentEntityId))}}}),c||e.bcTree.contextmenuAddOnly||"ContentFolder"==r.contentType||r.alias||null==e.bcTree.settings[r.contentType].url.copy||"index"!=o||e.extend(!0,s,{copy:{label:bcI18n.bcTreeCopy,icon:"bca-icon--copy",action:function(r){e.bcTree.copyContent(n,t)}}}),i=r.alias?bcI18n.bcTreeDelete:bcI18n.bcTreeToTrash,e.bcTree.config.editInIndexDisabled||c||r.deleteDisabled||e.bcTree.contextmenuAddOnly||r.contentSiteRoot||"index"!=o||e.extend(!0,s,{delete:{label:i,icon:"bca-icon--delete",action:function(n){var o=bcI18n.bcTreeConfirmToTrash;r.alias&&(o=bcI18n.bcTreeConfirmDeleteAlias),confirm(o)&&e.bcTree.deleteContent(t)}}}),"trash"==o&&e.extend(!0,s,{return:{_disabled:c,label:"戻す",icon:"bca-icon--undo",action:function(n){r.alias?e.ajax({url:e.bcUtil.apiBaseUrl+"baser-core/contents/exists/"+r.contentAliasId,headers:{Authorization:e.bcJwt.accessToken},type:"GET",dataType:"json",beforeSend:function(){e.bcUtil.hideMessage(),e.bcUtil.showLoader()},complete:function(){e.bcUtil.hideLoader()}}).done((function(n){n.exists?e.bcTree.returnContent(t):e.bcUtil.showAjaxError(bcI18n.bcTreeAlertMessage1)})):e.bcTree.returnContent(t)}},empty:{_disabled:!e.bcTree.config.isAdmin,label:bcI18n.bcTreeEmptyTrash,icon:"bca-icon--ban",action:function(t){confirm(bcI18n.bcTreeConfirmMessage1)&&e.bcToken.check((function(){return e.ajax({url:e.bcUtil.apiBaseUrl+"baser-core/contents/trash_empty",headers:{Authorization:e.bcJwt.accessToken},type:"DELETE",dataType:"json",data:{empty:!0,_csrfToken:e.bcToken.key},beforeSend:function(){e.bcUtil.hideMessage(),e.bcUtil.showLoader()},success:function(t){if(t){var n=[];e("li.jstree-node").each((function(t){n.push(e.bcTree.jsTree.get_node(this))})),e.bcTree.jsTree.delete_node(n),e.bcUtil.showNoticeMessage(decodeURI(t.message)),e("#DataList").html('<div class="tree-empty">'+bcI18n.bcTreeInfoMessage1+"</div>")}},error:function(t,n,r){e.bcUtil.showAjaxError(bcI18n.bcTreeAlertMessage2,t,r)},complete:function(){e.bcUtil.hideLoader()}})}),{hideLoader:!1})}}});var l=e.extend(!0,{},e.bcTree.settings);if(delete l.Default,t.data.jstree.alias&&delete l.ContentAlias,"index"==o){var d={},b=1;e.each(l,(function(t,o){7==b&&(d.Etc={separator_before:!1,separator_after:!1,label:"その他...",submenu:{}}),b<=6?o.addDisabled||(d[t]=e.bcTree.createMenu(o,n,r,b)):o.addDisabled||(d.Etc.submenu[t]=e.bcTree.createMenu(o,n,r,b)),b++})),e.extend(!0,s,d)}return s}}})},isAddMenuByLabel:function(t){var n=e.bcTree.jsTree.get_node(e.bcTree.jsTree.get_selected()),r=e.extend(!0,{},e.bcTree.settings);delete r.Default,n.data.jstree.alias&&delete r.ContentAlias;var o=1,c=!1;return e.each(r,(function(e){t==o+"."+this.title&&(c=!0),o++})),c},isAliasMenuByLabel:function(t){var n=e.bcTree.jsTree.get_node(e.bcTree.jsTree.get_selected()),r=e.extend(!0,{},e.bcTree.settings);delete r.Default,n.data.jstree.alias&&delete r.ContentAlias;var o=1,c=!1;return e.each(r,(function(e){return"Default"==e||(!(!n.data.jstree.alias||"ContentLink"!=e)||(t==o+"."+this.title&&!this.multiple&&this.exists&&(c=!0),void o++))})),c},refreshTree:function(t){void 0===t&&(t=!1);var n=e.bcTree.jsTree.get_json("#",{flat:!0});sort=1,e(n).each((function(){e.bcTree.jsTree.get_node(this.id).data.jstree.sort=sort,sort++})),e("li.jstree-node").each((function(n){var r=e.bcTree.jsTree.get_node(this);t&&(r.data.jstree.contentFullUrl=!1),e(this).find("div.jstree-wholerow").each((function(){return e(this).removeClass("jstree-unpublish-odd jstree-unpublish-even jstree-publish-odd jstree-publish-even"),!1})),0==r.data.jstree.status?n%2==0?e(this).find("div.jstree-wholerow").each((function(){return e(this).addClass("jstree-unpublish-odd"),!1})):e(this).find("div.jstree-wholerow").each((function(){return e(this).addClass("jstree-unpublish-even"),!1})):n%2==0?e(this).find("div.jstree-wholerow").each((function(){return e(this).addClass("jstree-publish-odd"),!1})):e(this).find("div.jstree-wholerow").each((function(){return e(this).addClass("jstree-publish-even"),!1})),r.data.jstree.alias&&e(this).find("a i.jstree-icon:first").after('<span class="alias"></span>'),e(this).find("a.jstree-anchor:first").after('<span class="function"></span>'),e(this).find(".content-name").remove(),r.data.jstree.name&&e(this).find("a.jstree-anchor:first").after('<span class="content-name">( '+r.data.jstree.name+" )</span>")})),e("span.function").on("click",(function(t){return e.bcTree.jsTree.deselect_all(),e.bcTree.jsTree.select_node(e.bcTree.jsTree.get_node(e(this).parent().attr("id"))),e.bcTree.jsTree.show_contextmenu(e.bcTree.jsTree.get_selected(),t.pageX,t.pageY),!1})),e("span.function").on("contextmenu",(function(t){return e.bcTree.jsTree.deselect_all(),e.bcTree.jsTree.select_node(e.bcTree.jsTree.get_node(e(this).parent().attr("id"))),e.bcTree.jsTree.show_contextmenu(e.bcTree.jsTree.get_selected(),t.pageX,t.pageY),!1})),e.bcTree.config.isUseMoveContents&&e(".jstree-icon").css("cursor","move")},returnContent:function(t){e.bcToken.check((function(){return e(location).prop("href",e.bcUtil.adminBaseUrl+"baser-core/contents/trash_return/"+t.data.jstree.contentId)}),{hideLoader:!1})},openUrl:function(t,n){n=void 0!==n&&n,e.bcTree.ctrlOnAnchor||n?window.open(t):e.bcTree.shiftOnAnchor?window.open(t,"_blank"):window.location.href=t},createMenu:function(t,n,r,o){var c,a,i="default",s=null,l=bcI18n.bcTreeNewTitle.sprintf(t.title),d=t.plugin,b=t.type,u=null;if(c=a=t.url.icon?t.url.icon:t.icon,"ContentFolder"==t.type){var T=!0;i="folder"}else if("ContentLink"==t.type)var f=!0;else"ContentAlias"==t.type?(c=r.icon,s=r.contentId,d=r.contentPlugin,b=r.contentType,l=bcI18n.bcTreeAliasTitle.sprintf(r.contentTitle),u=r.contentEntityId):!t.multiple&&t.exists&&(l=bcI18n.bcTreeAliasTitle.sprintf(t.existsTitle));return{label:"<span style='display:none'>"+o+".</span>"+t.title,icon:a,separator_before:T,separator_after:f,action:function(){e.bcTree.createContent(n,{type:i,icon:c,contentParentId:n.data.jstree.contentId,contentTitle:l,contentPlugin:d,contentType:b,contentSiteId:n.data.jstree.contentSiteId,contentAliasId:s,contentEntityId:u})}}},createContent:function(t,n){var r={icon:null,type:"default",status:!1,contentId:null,contentParentId:null,contentTitle:bcI18n.bcTreeUnNamedTitle,contentPlugin:null,contentType:null,contentEntityId:null,contentFullUrl:null,contentSiteId:null,contentAliasId:null};e.extend(!0,r,n),n=r;var o="";if(!e.bcTree.settings[n.contentType].multiple&&e.bcTree.settings[n.contentType].exists||n.contentAliasId){o=e.bcUtil.apiBaseUrl+"baser-core/contents/add_alias",n.alias=!0;var c={aliasId:n.contentAliasId,aliasName:n.contentTitle}}else{o=e.bcUtil.apiBaseUrl+"baser-core/contentFolders/add";c={folder_template:"",page_template:""}}var a=e.bcTree.jsTree.create_node(t,{text:n.contentTitle,data:{jstree:n}}),i=e.bcTree.jsTree.get_node(a);e.bcTree.jsTree.edit(i,n.contentTitle,(function(t){var r={parent_id:n.contentParentId,title:t.text,plugin:n.contentPlugin,type:n.contentType,site_id:n.contentSiteId,alias_id:n.contentAliasId,entity_id:n.contentEntityId};c.content=r,e.bcToken.check((function(){return c._csrfToken=e.bcToken.key,e.ajax({url:o,headers:{Authorization:e.bcJwt.accessToken},type:"POST",data:c,dataType:"json",beforeSend:function(){e.bcUtil.hideMessage(),e.bcUtil.showLoader()},success:function(r){e.bcUtil.showNoticeMessage(r.message),e.bcTree.settings[n.contentType].exists=!0,e.bcTree.settings[n.contentType].existsTitle=t.text,n.contentId=r.content.id,n.contentEntityId=r.content.entity_id,n.name=decodeURIComponent(r.content.name),i.data.jstree=n,e.bcTree.refreshTree()},error:function(t,n,r){e.bcUtil.showAjaxError(bcI18n.bcTreeAlertMessage6,t,r),e.bcTree.jsTree.delete_node(i),e.bcUtil.hideLoader()}}).then((function(){return e.bcUtil.ajax(e.bcUtil.apiBaseUrl+"baser-core/contents/get_full_url/"+n.contentId,{},{type:"GET",dataType:"json"}).done((function(e){n.contentFullUrl=e.fullUrl,i.data.jstree=n,"ContentFolder"==n.contentType&&(i.type="folder")}))}))}),{hideLoader:!1})}))},deleteContent:function(t){var n=t.data.jstree;e.bcToken.check((function(){return e.ajax({url:e.bcUtil.apiBaseUrl+"baser-core/contents/delete",headers:{Authorization:e.bcJwt.accessToken},type:"POST",data:{contentId:n.contentId,entityId:n.contentEntityId,alias:n.alias,_csrfToken:e.bcToken.key},dataType:"json",beforeSend:function(){e.bcUtil.hideMessage(),e.bcUtil.showLoader()},success:function(t){e.bcUtil.showNoticeMessage(t.message),e.bcTree.refreshTree(),e.bcToken.key=null,e.bcTree.load(),location.reload()},error:function(t,n,r){e.bcToken.key=null,e.bcUtil.showAjaxError(bcI18n.bcTreeAlertMessage4,t,r),e.bcUtil.hideLoader()}})}),{useUpdate:!1,hideLoader:!1})},copyContent:function(t,n){var r=e.extend(!0,{},n.data.jstree);r.contentTitle=bcI18n.bcTreeCopyTitle.sprintf(r.contentTitle),r.status=!1,e.bcToken.check((function(){return e.ajax({url:e.bcTree.settings[r.contentType].url.copy,headers:{Authorization:e.bcJwt.accessToken},type:"POST",data:{contentId:r.contentId,entityId:r.contentEntityId,title:r.contentTitle,parentId:r.contentParentId,siteId:r.contentSiteId,_csrfToken:e.bcToken.key},dataType:"json",beforeSend:function(){e.bcUtil.hideMessage(),e.bcUtil.showLoader()},success:function(n){e.bcToken.key=null,e.bcTree.settings[r.contentType].exists=!0,e.bcTree.settings[r.contentType].existsTitle=r.contentTitle,r.contentId=n.id,r.contentEntityId=n.entity_id,r.contentTitle=r.contentTitle.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),e.ajax(e.bcUtil.apiBaseUrl+"baser-core/contents/get_full_url/"+r.contentId,{headers:{Authorization:e.bcJwt.accessToken},type:"GET",dataType:"json"}).done((function(n){r.contentFullUrl=n.fullUrl;var o=e.bcTree.jsTree.create_node(t,{text:r.contentTitle,data:{jstree:r}}),c=e.bcTree.jsTree.get_node(o);c.data.jstree=r,"ContentFolder"==r.contentType&&(c.type="folder"),e.bcUtil.hideLoader(),e.bcTree.renameContent(c,r.contentTitle,!0)}))},error:function(t,n,r){e.bcToken.key=null,e.bcUtil.showAjaxError(bcI18n.commonCopyFailedMessage,t,r),e.bcUtil.hideLoader()}})}),{useUpdate:!1,hideLoader:!1})},renameContent:function(t,n,r){void 0===r&&(r=!1);var o=n;e.bcTree.jsTree.edit(t,o,(function(r){var c=r.text;if(e.bcTree.jsTree.rename_node(r,c),o===c)return!1;e.bcToken.check((function(){return e.ajax({url:e.bcUtil.apiBaseUrl+"baser-core/contents/rename",headers:{Authorization:e.bcJwt.accessToken},type:"PATCH",dataType:"json",data:{id:t.data.jstree.contentId,title:c,_csrfToken:e.bcToken.key},beforeSend:function(){e.bcUtil.hideMessage(),e.bcUtil.showLoader()},success:function(n){e.bcUtil.showNoticeMessage(n.message),e.bcTree.settings[t.data.jstree.contentType].existsTitle=r.text,r.data.jstree.contentFullUrl=n.url},error:function(t,o,c){e.bcTree.jsTree.rename_node(r,n),e.bcUtil.showAjaxError(bcI18n.bcTreeAlertMessage5,t,c)},complete:function(){e.bcUtil.hideLoader()}})}),{hideLoader:!1})}))},createLink:function(e,t,n,r){var o=e;return r&&(o+="/"+r),t&&(o+="/content_id:"+t),n&&(o+="/parent_id:"+n),o},orderContent:function(t,n){e.bcTree.changeNormalCursor();var r=!1,o=e.bcTree.jsTree.get_node(n.element);o||(o=e.bcTree.dragTarget),o||(r=!0);var c=o.data.jstree.sort;e.bcTree.refreshTree();var a=o.data.jstree.sort-c;if(0==a&&(e.bcTree.dropTarget||(r=!0),o.data.jstree.contentParentId==e.bcTree.dropTarget.data.jstree.contentId&&(r=!0)),r||!confirm(bcI18n.commonSortSaveConfirmMessage))return o.parent!=e.bcTree.beforeParentId||a>=0?e.bcTree.jsTree.move_node(o,e.bcTree.beforeParentId,e.bcTree.beforePosition):e.bcTree.jsTree.move_node(o,e.bcTree.beforeParentId,e.bcTree.beforePosition+1),e.bcTree.refreshTree(),!1;e.bcTree.dropTarget&&e.bcTree.jsTree.open_node(e.bcTree.dropTarget);var i=e.bcTree.jsTree.get_node(e.bcTree.jsTree.get_next_dom(o,!0)),s=null;i&&(s=i.data.jstree.contentId),e.bcToken.check((function(){return e.ajax({url:e.bcUtil.apiBaseUrl+"baser-core/contents/move",headers:{Authorization:e.bcJwt.accessToken},type:"PATCH",data:{origin:{id:o.data.jstree.contentId,parentId:o.data.jstree.contentParentId,type:o.data.jstree.contentType,entityId:o.data.jstree.contentEntityId},target:{id:s,parentId:e.bcTree.dropTarget.data.jstree.contentId,siteId:e.bcTree.dropTarget.data.jstree.contentSiteId},listDisplayed:e.bcTree.listDisplayed,_csrfToken:e.bcToken.key},dataType:"json",beforeSend:function(){e.bcUtil.hideMessage(),e.bcUtil.showLoader()},success:function(t){o.data.jstree.contentFullUrl=t.url,e.bcTree.refreshTree(!0),o.data.jstree.contentParentId=e.bcTree.dropTarget.data.jstree.contentId,e.bcUtil.showNoticeMessage(t.message),e.bcUtil.hideLoader()},error:function(t,n,r){e.bcUtil.showAjaxError(bcI18n.commonSortSaveFailedMessage,t,r),e.bcTree.load()},complete:function(){}})}),{hideLoader:!1})},showMenuByOuter:function(t){return e.bcTree.contextmenuAddOnly=!0,e.bcTree.jsTree.get_selected().length||e.bcTree.jsTree.select_node(e.bcTree.jsTree.get_json()),e.bcTree.jsTree.show_contextmenu(e.bcTree.jsTree.get_selected(),t.pageX,t.pageY),e.bcTree.contextmenuAddOnly=!1,!1},updateShiftAndCtrlOnAnchor:function(t){e.bcTree.shiftOnAnchor=t.shiftKey,e.bcTree.ctrlOnAnchor=t.ctrlKey||t.metaKey},changeDnDCursor:function(){e("#ContentsTreeList .jstree-wholerow").css("cursor","move"),e("#ContentsTreeList .jstree-anchor").css("cursor","move"),e("#ContentsTreeList .function").css("cursor","move"),e("#ContentsTreeList .jstree-ocl").css("cursor","move")},changeNormalCursor:function(){e("#ContentsTreeList .jstree-wholerow").css("cursor","pointer"),e("#ContentsTreeList .jstree-anchor").css("cursor","pointer"),e("#ContentsTreeList .function").css("cursor","pointer"),e("#ContentsTreeList .jstree-ocl").css("cursor","pointer")}}}(jQuery)},function(e,t){
/**
 * baserCMS :  Based Website Development Project <https://basercms.net>
 * Copyright (c) baserCMS Users Community <https://basercms.net/community/>
 *
 * @copyright       Copyright (c) baserCMS Users Community
 * @link            https://basercms.net baserCMS Project
 * @since           baserCMS v 2.0.0
 * @license         https://basercms.net/license/index.html
 */
!function(e){e.bcConfirm={config:{title:bcI18n.bcConfirmTitle1,message:bcI18n.bcConfirmAlertMessage1,defaultCancel:!0,ok:null},show:function(t){e.extend(e.bcConfirm.config,t),e("<div />").html(e.bcConfirm.config.message).dialog({modal:!0,title:e.bcConfirm.config.title,width:"50%",buttons:{"キャンセル":function(){e(this).dialog("close")},OK:function(){e(this).dialog("close"),"function"==typeof e.bcConfirm.config.ok?e.bcConfirm.config.ok():alert(bcI18n.bcConfirmAlertMessage2)}}})}}}(jQuery)},function(e,t){
/**
 * baserCMS :  Based Website Development Project <https://basercms.net>
 * Copyright (c) baserCMS User Community <https://basercms.net/community/>
 *
 * @copyright     Copyright (c) baserCMS User Community
 * @link          https://basercms.net baserCMS Project
 * @since         5.0.0
 * @license       http://basercms.net/license/index.html MIT License
 */
!function(e){e.bcJwt={accessToken:null,init:function(){var e=localStorage.getItem("refreshToken");e&&this.getToken(e)},login:function(t,n){e.ajax({url:e.bcUtil.apiBaseUrl+"baser-core/users/login.json",type:"post",async:!1,data:{email:t,password:n},dataType:"json"}).done(function(e){e&&this.setToken(e.access_token,e.refresh_token)}.bind(this)).fail((function(){alert("システムエラーが発生しました。ブラウザをリロードしてください。")}))},getToken:function(t){e.ajax({url:e.bcUtil.apiBaseUrl+"baser-core/users/refresh_token.json",type:"get",async:!1,headers:{Authorization:t,"Content-Type":"application/json"},dataType:"json"}).done(function(e){e?this.setToken(e.access_token,e.refresh_token):alert("APIトークンが取得できませんでした。ブラウザをリロードしてください。")}.bind(this)).fail((function(e){401===e.response.status&&localStorage.setItem("refreshToken","")}))},setToken:function(e,t){this.accessToken=e,localStorage.setItem("refreshToken",t)},logout:function(){this.removeToken()},removeToken:function(){localStorage.setItem("refreshToken",null),this.accessToken=null}}}(jQuery)},function(e,t){
/**
 * baserCMS :  Based Website Development Project <https://basercms.net>
 * Copyright (c) baserCMS User Community <https://basercms.net/community/>
 *
 * @copyright     Copyright (c) baserCMS User Community
 * @link          https://basercms.net baserCMS Project
 * @since         5.0.0
 * @license       http://basercms.net/license/index.html MIT License
 */
window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector('[data-js-tmpl="AdminMenu"]'),t=document.getElementById("AdminMenu"),n=null;try{n=JSON.parse(t?t.textContent:"{}")}catch(e){window.console&&console.warn("管理メニューのデータが破損しています（JSONデータが不正です）")}if(e&&n&&n.menuList&&n.menuList.length){var r=[],o=[];n.menuList.forEach((function(e,t){"system"===e.type?o.push(e):r.push(e)})),e.hidden=!1;var c=o.some((function(e){return e.current||e.expanded})),a=new Vue({el:e,data:{systemExpanded:c,baseURL:$.baseUrl(),currentSiteId:n.currentSiteId,contentList:r,isSystemSettingPage:c,systemList:o},methods:{openSystem:function(){a.systemExpanded=!a.systemExpanded}}})}else window.console&&console.warn("データが空のため、管理メニューは表示されませんでした")}))}]);
//# sourceMappingURL=common.bundle.js.map