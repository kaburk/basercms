<?php
/**
 * baserCMS :  Based Website Development Project <https://basercms.net>
 * Copyright (c) NPO baser foundation <https://baserfoundation.org/>
 *
 * @copyright     Copyright (c) NPO baser foundation
 * @link          https://basercms.net baserCMS Project
 * @since         5.0.0
 * @license       https://basercms.net/license/index.html MIT License
 */

namespace BcCustomContent\Model\Entity;

use BcCcFile\View\Helper\BcCcFileHelper;
use Cake\I18n\FrozenDate;
use Cake\ORM\Entity;
use Cake\ORM\TableRegistry;
use Cake\View\View;
use BaserCore\Annotation\UnitTest;
use BaserCore\Annotation\NoTodo;
use BaserCore\Annotation\Checked;

/**
 * CustomEntry
 *
 * @property int $custom_table_id
 * @property int $parent_id
 * @property int $lft
 * @property int $rght
 * @property int $level
 * @property string $title
 * @property string $name
 * @property bool $status
 * @property int creator_id
 * @property \Cake\I18n\Date $published
 * @property \Cake\I18n\Date $publish_begin
 * @property \Cake\I18n\Date $publish_end
 * @property CustomTable $custom_table
 */
class CustomEntry extends Entity
{

    /**
     * JSON シリアライズ
     *
     * ファイルタイプのカスタムフィールドについて、そのまま読み込めるURLを
     * `_{フィールド名}` として追加する
     * @return array
     * @checked
     * @noTodo
     * @unitTest
     */
    public function jsonSerialize(): array
    {
        $data = parent::jsonSerialize();
        try {
            $entriesTable = TableRegistry::getTableLocator()->get('BcCustomContent.CustomEntries');
            if (empty($entriesTable->links)) return $data;
            $BcCcFile = new BcCcFileHelper(new View());
            foreach($entriesTable->links as $link) {
                if ($link->custom_field->type !== 'BcCcFile') continue;
                if (!empty($this->custom_table_id) && $link->custom_table_id !== $this->custom_table_id) continue;
                $fieldValue = $this->{$link->name};
                $data['_' . $link->name] = $fieldValue? $BcCcFile->get($fieldValue, $link, ['output' => 'url']) : '';
            }
        } catch (\Throwable) {
        }
        return $data;
    }

}
