/*! For license information please see edit.bundle.js.LICENSE.txt */
$((function(){$("input[type=text]").each((function(){$(this).keypress((function(e){return!e.which||13!==e.which}))})),$("#BtnSave").click((function(){return"undefined"!=typeof editor_contents_tmp&&editor_contents_tmp.execCommand("synchronize"),$("#PageMode").val("save"),$.bcToken.check((function(){$("#PageAdminEditForm").submit()}),{useUpdate:!1,hideLoader:!1}),!1}))}));
//# sourceMappingURL=edit.bundle.js.map