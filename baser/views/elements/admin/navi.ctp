<?php
/* SVN FILE: $Id$ */
/**
 * [ADMIN] ナビゲーション
 *
 * PHP versions 4 and 5
 *
 * BaserCMS :  Based Website Development Project <http://basercms.net>
 * Copyright 2008 - 2011, Catchup, Inc.
 *								1-19-4 ikinomatsubara, fukuoka-shi 
 *								fukuoka, Japan 819-0055
 *
 * @copyright		Copyright 2008 - 2011, Catchup, Inc.
 * @link			http://basercms.net BaserCMS Project
 * @package			baser.views
 * @since			Baser v 0.1.0
 * @version			$Revision$
 * @modifiedby		$LastChangedBy$
 * @lastmodified	$Date$
 * @license			http://basercms.net/license/index.html
 */
if ($this->viewPath != 'dashboard'){
	$baser->addCrumb('ダッシュボード',array('plugin'=>null,'controller'=>'dashboard'));
}
if (!empty($navis)){
	foreach($navis as $key => $navi){
		$baser->addCrumb($key,$navi);
	}
}
if ($title_for_element){
	$baser->addCrumb('<strong>'.$title_for_element.'</strong>');
}
$baser->crumbs(' &gt; ');
?>