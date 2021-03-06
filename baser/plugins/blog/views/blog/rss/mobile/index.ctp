<?php
/* SVN FILE: $Id$ */
/**
 * [MOBILE] RSS
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
 * @package			baser.plugins.blog.views
 * @since			Baser v 0.1.0
 * @version			$Revision$
 * @modifiedby		$LastChangedBy$
 * @lastmodified	$Date$
 * @license			http://basercms.net/license/index.html
 */
?>
<?php
if($posts){
	echo $rss->items($posts,'transformRSS');
}
function transformRSS($data) {
	return array(
		'title' => $data['BlogPost']['name'],
		'link' => Router::url('/'.Configure::read('AgentPrefix.currentAlias').'/'.$data['BlogContent']['name'].'/archives/'.$data['BlogPost']['no']),
		'guid' => Router::url('/'.Configure::read('AgentPrefix.currentAlias').'/'.$data['BlogContent']['name'].'/archives/'.$data['BlogPost']['no']),
		'category' => $data['BlogCategory']['title'],
		'description' => $data['BlogPost']['content'],
		'pubDate' => $data['BlogPost']['posts_date']
	);
}
?>