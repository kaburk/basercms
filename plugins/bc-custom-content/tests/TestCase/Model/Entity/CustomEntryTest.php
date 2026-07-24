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

namespace BcCustomContent\Test\TestCase\Model\Entity;

use BaserCore\TestSuite\BcTestCase;
use BcCustomContent\Model\Entity\CustomEntry;
use BcCustomContent\Model\Table\CustomEntriesTable;
use BcCustomContent\Test\Factory\CustomFieldFactory;
use BcCustomContent\Test\Factory\CustomLinkFactory;
use Cake\ORM\TableRegistry;

/**
 * Class CustomEntryTest
 */
class CustomEntryTest extends BcTestCase
{

    /**
     * Tear down
     */
    public function tearDown(): void
    {
        /** @var CustomEntriesTable $entriesTable */
        $entriesTable = TableRegistry::getTableLocator()->get('BcCustomContent.CustomEntries');
        $entriesTable->links = null;
        parent::tearDown();
    }

    /**
     * test jsonSerialize
     */
    public function test_jsonSerialize()
    {
        // ファイルタイプのカスタムフィールドとカスタムリンクを準備
        CustomFieldFactory::make([
            'id' => 1,
            'title' => '写真',
            'name' => 'photo',
            'type' => 'BcCcFile',
            'status' => true
        ])->persist();
        CustomLinkFactory::make([
            'id' => 1,
            'custom_table_id' => 1,
            'custom_field_id' => 1,
            'name' => 'photo',
            'title' => '写真'
        ])->persist();

        /** @var CustomEntriesTable $entriesTable */
        $entriesTable = TableRegistry::getTableLocator()->get('BcCustomContent.CustomEntries');
        $entriesTable->setLinks(1);

        // ファイルフィールドに値がある場合、そのまま読み込めるURLが `_{フィールド名}` として追加される
        $entry = new CustomEntry([
            'id' => 1,
            'custom_table_id' => 1,
            'title' => 'test',
            'photo' => '2023/09/test.jpg'
        ]);
        $data = $entry->jsonSerialize();
        $this->assertEquals('/files/bc_custom_content/1/custom_entries/2023/09/test.jpg', $data['_photo']);

        // ファイルフィールドに値がない場合、空文字となる
        $entry = new CustomEntry([
            'id' => 2,
            'custom_table_id' => 1,
            'title' => 'test2'
        ]);
        $data = $entry->jsonSerialize();
        $this->assertEquals('', $data['_photo']);
    }

    /**
     * test jsonSerialize リンク未設定の場合
     */
    public function test_jsonSerializeWithoutLinks()
    {
        // カスタムリンクが設定されていない場合、通常のシリアライズ結果のまま
        $entry = new CustomEntry([
            'id' => 1,
            'custom_table_id' => 1,
            'title' => 'test',
            'photo' => '2023/09/test.jpg'
        ]);
        $data = $entry->jsonSerialize();
        $this->assertArrayNotHasKey('_photo', $data);
        $this->assertEquals('2023/09/test.jpg', $data['photo']);
    }

}
