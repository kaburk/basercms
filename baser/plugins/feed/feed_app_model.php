<?php
/* SVN FILE: $Id$ */
/**
 * RSSリーダーモデル基底クラス
 *
 * PHP versions 4 and 5
 *
 * baserCMS :  Based Website Development Project <http://basercms.net>
 * Copyright 2008 - 2011, baserCMS Users Community <http://sites.google.com/site/baserusers/>
 *
 * @copyright		Copyright 2008 - 2011, baserCMS Users Community
 * @link			http://basercms.net baserCMS Project
 * @package			baser.plugins.feed
 * @since			baserCMS v 0.1.0
 * @version			$Revision$
 * @modifiedby		$LastChangedBy$
 * @lastmodified	$Date$
 * @license			http://basercms.net/license/index.html
 */
/**
 * includes
 */
/**
 * RSSリーダーモデル基底クラス
 *
 * @package			baser.plugins.feed
 */
class FeedAppModel extends AppModel {
/**
 * The name of the DataSource connection that this Model uses
 *
 * @var		string
 * @access 	public
 */
	var $useDbConfig = 'plugin';
/**
 * プラグイン名
 *
 * @var		string
 * @access 	public
 */
	var $plugin = 'Feed';
}
?>