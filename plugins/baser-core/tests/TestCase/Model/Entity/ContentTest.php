<?php
/**
 * baserCMS :  Based Website Development Project <https://basercms.net>
 * Copyright (c) NPO baser foundation <https://baserfoundation.org/>
 *
 * @copyright     Copyright (c) NPO baser foundation
 * @link          https://basercms.net baserCMS Project
 * @since         5.1.0
 * @license       https://basercms.net/license/index.html MIT License
 */

namespace BaserCore\Test\TestCase\Model\Entity;

use BaserCore\Model\Entity\Content;
use BaserCore\TestSuite\BcTestCase;

/**
 * Class ContentTest
 */
class ContentTest extends BcTestCase
{

    /**
     * test _get_eyecatch
     */
    public function test_get_eyecatch()
    {
        // アイキャッチが設定されている場合、そのまま読み込めるURLを取得できる
        $content = new Content([
            'id' => 1,
            'eyecatch' => 'test.png'
        ]);
        $result = $this->execPrivateMethod($content, '_get_eyecatch', []);
        $this->assertTextContains('/files/contents/test.png', $result);

        // アイキャッチが設定されていない場合、空文字を返す
        $content = new Content([
            'id' => 2
        ]);
        $result = $this->execPrivateMethod($content, '_get_eyecatch', []);
        $this->assertEquals('', $result);
    }

}
