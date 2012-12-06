<?php
/* SVN FILE: $Id$ */
/**
 * [PUBLISH] ページナビゲーション
 *
 * PHP versions 4 and 5
 *
 * baserCMS :  Based Website Development Project <http://basercms.net>
 * Copyright 2008 - 2011, Catchup, Inc.
 *								1-19-4 ikinomatsubara, fukuoka-shi
 *								fukuoka, Japan 819-0055
 *
 * @copyright		Copyright 2008 - 2011, Catchup, Inc.
 * @link			http://basercms.net baserCMS Project
 * @package			baser.views
 * @since			Baser v 0.1.0
 * @version			$Revision$
 * @modifiedby		$LastChangedBy$
 * @lastmodified	$Date$
 * @license			http://basercms.net/license/index.html
 */
if(!isset($page) || !$page->contensNaviAvailable()) {
	return;
}
?>

<div id="ContentsNavi">
	<?php $page->prevLink() ?>
	&nbsp;｜&nbsp;
	<?php $page->nextLink() ?>
</div>