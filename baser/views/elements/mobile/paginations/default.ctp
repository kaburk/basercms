<?php
/* SVN FILE: $Id$ */
/**
 * [MOBILE] ページネーション
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
if(!empty($paginator)){
	$this->passedArgs['action'] = str_replace('mobile_','',$this->passedArgs['action']);
	$this->passedArgs['plugin'] = '';
	$paginator->options = array('url' => $this->passedArgs);
	if($paginator->counter(array('format'=>'%pages%'))>1){
		echo $paginator->prev('<<', null, null, null).'&nbsp;';
		echo $paginator->numbers(array('separator'=>'&nbsp;','modulus'=>4)).'&nbsp;';
		echo $paginator->next('>>', null, null, null);
	}
}
?>