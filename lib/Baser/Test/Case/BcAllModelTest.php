<?php
/**
 * baserCMS :  Based Website Development Project <https://basercms.net>
 * Copyright (c) baserCMS Users Community <https://basercms.net/community/>
 *
 * @copyright       Copyright (c) baserCMS Users Community
 * @link            https://basercms.net baserCMS Project
 * @package         Baser.Test.Case
 * @since           baserCMS v 4.0.0
 * @license         https://basercms.net/license/index.html
 */

/**
 * run all baser model tests
 *
 * @package Baser.Test.Case
 */
class BcAllModelTest extends CakeTestSuite
{

	/**
	 * Suite define the tests for this suite
	 *
	 * @return CakeTestSuite
	 */
	public static function suite()
	{
		$suite = new CakeTestSuite('All Model tests');
		$suite->addTestDirectory(BASER_TEST_CASES . DS . 'Model' . DS);
		return $suite;
	}

}