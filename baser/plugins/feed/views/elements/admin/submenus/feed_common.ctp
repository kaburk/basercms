<?php
/* SVN FILE: $Id$ */
/**
 * [ADMIN] フィード設定共通メニュー
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
 * @package			baser.plugins.feed.views
 * @since			Baser v 0.1.0
 * @version			$Revision$
 * @modifiedby		$LastChangedBy$
 * @lastmodified	$Date$
 * @license			http://basercms.net/license/index.html
 */
?>

<div class="side-navi">
	<h2>フィード設定<br />
		共通メニュー</h2>
	<ul>
		<li><?php $baser->link('フィード設定一覧',array('action' => 'index')) ?></li>
		<li><?php $baser->link('新規フィード設定を登録',array('action' => 'add')) ?></li>
<?php if($this->params['controller'] == 'feed_configs' && $this->action == 'admin_index'): ?>
		<li><?php $baser->link('キャッシュを削除', array('action' => 'delete_cache'), null, 'フィードのキャッシュを削除します。いいですか？') ?></li>
<?php endif ?>
	</ul>
</div>
