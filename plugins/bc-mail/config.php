<?php
/**
 * baserCMS :  Based Website Development Project <https://basercms.net>
 * Copyright (c) baserCMS User Community <https://basercms.net/community/>
 *
 * @copyright     Copyright (c) baserCMS User Community
 * @link          https://basercms.net baserCMS Project
 * @since         5.0.0
 * @license       http://basercms.net/license/index.html MIT License
 */

return [
    'type' => 'CorePlugin',
    'title' => __d('baser', 'メールフォーム'),
    'description' => __d('baser', '複数設置可能の高機能メールフォーム'),
    'author' => 'baserCMS User Community',
    'url' => 'https://basercms.net',
    'adminLink' => ['plugin' => 'mail', 'controller' => 'mail_configs', 'action' => 'form'],
    'installMessage' => ''
];