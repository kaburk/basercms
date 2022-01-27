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

namespace BaserCore\Controller\Admin;

use BaserCore\Utility\BcUtil;
use Cake\Event\EventInterface;
use BaserCore\Utility\BcSiteConfig;
use BaserCore\Vendor\CKEditorStyleParser;
use BaserCore\Service\PageServiceInterface;
use BaserCore\Service\SiteServiceInterface;
use BaserCore\Service\ContentServiceInterface;
use BaserCore\Service\SiteConfigServiceInterface;
use BaserCore\Controller\Admin\BcAdminAppController;
use BaserCore\Annotation\NoTodo;
use BaserCore\Annotation\Checked;
use BaserCore\Annotation\UnitTest;
use BaserCore\Annotation\Note;
/**
 * PagesController
 */
class PagesController extends BcAdminAppController
{

	/**
	 * コンポーネント
	 *
	 * @var array
	 * @deprecated useViewCache 5.0.0 since 4.0.0
	 *    CakePHP3では、ビューキャッシュは廃止となるため、別の方法に移行する
	 */
	// TODO ucmitz 未移行
	/* >>>
	public $components = ['BcAuth', 'Cookie', 'BcAuthConfigure', 'BcEmail', 'BcContents' => ['useForm' => true, 'useViewCache' => true]];
    <<< */

    /**
     * initialize
     * @return void
     * @checked
     * @noTodo
     * @unitTest
     */
    public function initialize(): void
    {
        parent::initialize();
        $this->loadComponent('BaserCore.BcAdminContents');
    }

	/**
	 * beforeFilter
	 *
	 * @return void
     * @checked
     * @noTodo
     * @unitTest
	 */
	public function beforeFilter(EventInterface $event)
	{
		parent::beforeFilter($event);
        if (BcSiteConfig::get('editor') && BcSiteConfig::get('editor') !== 'none') {
            $this->viewBuilder()->setHelpers(["BaserCore." . BcSiteConfig::get('editor'), 'BaserCore.BcGooglemaps', 'BaserCore.BcText', 'BaserCore.BcFreeze']);
        }
	}

	/**
	 * 固定ページ情報登録
	 *
	 * @return mixed json|false
	 */
	public function admin_ajax_add()
	{
		$this->autoRender = false;
		if (!$this->request->data) {
			$this->ajaxError(500, __d('baser', '無効な処理です。'));
		}

		// EVENT Pages.beforeAdd
		$event = $this->dispatchEvent('beforeAdd', [
			'data' => $this->request->data
		]);
		if ($event !== false) {
			$this->request->data = $event->result === true? $event->data['data'] : $event->result;
		}

		$data = $this->Page->save($this->request->data);
		if (!$data) {
			$this->ajaxError(500, $this->Page->validationErrors);
			return false;
		}
		// EVENT Pages.afterAdd
		$this->dispatchEvent('afterAdd', [
			'data' => $data
		]);
		$site = $siteService->findById($data['Content']['site_id'])->first();
		$url = $this->Content->getUrl($data['Content']['url'], true, $site->useSubDomain);
		$message = sprintf(
			__d(
				'baser',
				"固定ページ「%s」を追加しました。\n%s"
			),
			$this->request->data['Content']['title'],
			urldecode($url)
		);
		$this->BcMessage->setSuccess($message, true, false);
		return json_encode($data['Content']);
	}

	/**
	 * 固定ページ新規追加
	 *
	 * @param int $parentContentId 親コンテンツID
	 * @return void
	 */
	public function admin_add($parentContentId, $name = '')
	{
		if (!$parentContentId) {
			$this->BcMessage->setError(__d('baser', '無効なIDです。'));
			$this->redirect(['plugin' => false, 'admin' => true, 'controller' => 'contents', 'action' => 'index']);
		}

		if ($this->request->is(['post', 'put'])) {
			if ($this->Page->isOverPostSize()) {
				$this->BcMessage->setError(__d('baser', '送信できるデータ量を超えています。合計で %s 以内のデータを送信してください。', ini_get('post_max_size')));
				$this->redirect(['contents', 'action' => 'index']);
			}

			// EVENT Pages.beforeAdd
			$event = $this->dispatchEvent('beforeAdd', [
				'data' => $this->request->data
			]);
			if ($event !== false) {
				$this->request->data = $event->result === true? $event->data['data'] : $event->result;
			}

			$this->Page->set($this->request->data);
			if ($data = $this->Page->save()) {

				// 完了メッセージ
				$site = $siteService->findById($data['Content']['site_id'])->first();
				$url = $this->Content->getUrl($data['Content']['url'], true, $site->useSubDomain);
				$this->BcMessage->setSuccess(sprintf(__d('baser', "固定ページ「%s」を登録しました。\n%s"), $data['Content']['name'], urldecode($url)));

				// EVENT Pages.afterAdd
				$this->dispatchEvent('afterAdd', [
					'data' => $data
				]);

				// 同固定ページへリダイレクト
				$this->redirect(['action' => 'edit', $this->Page->id]);
				return;
			}

			$this->BcMessage->setError(__d('baser', '入力エラーです。内容を修正してください。'));
		} else {
			$this->request->data = $this->Page->getDefaultValue($parentContentId, $name);
			if(!$this->request->data) {
				$this->BcMessage->setError(__d('baser', '無効な処理です。'));
				$this->redirect(['plugin' => false, 'admin' => true, 'controller' => 'contents', 'action' => 'index']);
				return;
			}
		}

		// エディタオプション
		$editorOptions = ['editorDisableDraft' => true];
		if (BcSiteConfig::get('editor_styles')) {
			App::uses('CKEditorStyleParser', 'Vendor');
			$CKEditorStyleParser = new CKEditorStyleParser();
			$editorOptions = array_merge($editorOptions, [
				'editorStylesSet' => 'default',
				'editorStyles' => [
					'default' => $CKEditorStyleParser->parse(BcSiteConfig::get('editor_styles'))
				]
			]);
		}

		// ページテンプレートリスト
		$theme = [BcSiteConfig::get('theme')];
		$site = $siteService->findById($this->request->data['Content']['site_id'])->first();
		if (!empty($site) && $site->theme && $site->theme != BcSiteConfig::get('theme')) {
			$theme[] = $site->theme;
		}
		$pageTemplateList = [];
		$publishLink = '';
		$this->set(compact('editorOptions', 'pageTemplateList', 'publishLink'));

		$this->pageTitle = __d('baser', '固定ページ情報新規追加');
		$this->help = 'pages_form';
		$this->render('form');
	}

	/**
	 * [ADMIN] 固定ページ情報編集
     * @param int $id (page_id)
	 * @param PageServiceInterface $pageService
	 * @param ContentServiceInterface $contentService
	 * @param SiteServiceInterface $siteService
	 * @param SiteConfigServiceInterface $siteConfigService
	 * @return void
     * @checked
     * @unitTest
	 */
	public function edit($id, PageServiceInterface $pageService, ContentServiceInterface $contentService, SiteServiceInterface $siteService, SiteConfigServiceInterface $siteConfigService)
	{
		if (!$id && empty($this->request->getData())) {
			$this->BcMessage->setError(__d('baser', '無効なIDです。'));
			$this->redirect(['controller' => 'contents', 'action' => 'index']);
		}
        $page = $pageService->get($id);
		if ($this->request->is(['patch', 'post', 'put'])) {
			if (BcUtil::isOverPostSize()) {
				$this->BcMessage->setError(__d('baser', '送信できるデータ量を超えています。合計で %s 以内のデータを送信してください。', ini_get('post_max_size')));
				$this->redirect(['action' => 'edit', $id]);
			}
			// EVENT Pages.beforeEdit
			$event = $this->dispatchEvent('beforeEdit', [
				'request' => $this->request,
			]);
			if ($event !== false) {
				$this->request = ($event->getResult() === null || $event->getResult() === true)? $event->getData('request') : $event->getResult();
			}

            try {
                $this->request = $this->request->withData('Page.content', $this->request->getData('Content'));
                $page = $pageService->update($page, $this->request->getData('Page'));
                // TODO cumitz: clearViewCache()がないため一時的にコメントアウト
                if ($contentService->isChangedStatus($id, $this->request->getData('Content'))) {
					// clearViewCache();
				} else {
					// clearViewCache($this->request->getData('Content.url'));
				}

				// 完了メッセージ
				$site = $siteService->findById($page->content->site_id)->first();
				$url = $contentService->getUrl($page->content->url, true, $site->useSubDomain);
				// EVENT Pages.afterEdit
				$this->dispatchEvent('afterEdit', [
					'request' => $this->request,
				]);
                $this->BcMessage->setSuccess(sprintf(__d('baser', "固定ページ「%s」を更新しました。\n%s"), rawurldecode($page->content->name), urldecode($url)));
				// 同固定ページへリダイレクト
				return $this->redirect(['action' => 'edit', $id]);
            }  catch (\Exception $e) {
                $this->BcMessage->setError('保存中にエラーが発生しました。入力内容を確認してください。');
            }
		} else {
			$this->request = $this->request->withData("Page", $page);
			if (!$this->request->getData()) {
				$this->BcMessage->setError(__d('baser', '無効な処理です。'));
				$this->redirect(['controller' => 'contents', 'action' => 'index']);
			}
		}

		// 公開リンク
		$publishLink = '';
		if ($page->content->status) {
			$site = $siteService->findById($page->content->site_id)->first();
			$publishLink = $contentService->getUrl($page->content->url, true, $site->useSubDomain);
		}
		// エディタオプション
		$editorOptions = ['editorDisableDraft' => false];
        $editorStyles = $siteConfigService->getValue('editor_styles');
		if ($editorStyles) {
			$CKEditorStyleParser = new CKEditorStyleParser();
			$editorOptions = array_merge($editorOptions, [
				'editorStylesSet' => 'default',
				'editorStyles' => [
					'default' => $CKEditorStyleParser->parse($editorStyles)
				]
			]);
		}
		// ページテンプレートリスト
		$theme = [$siteConfigService->getValue('theme')];
		$site = $siteService->findById($page->content->site_id)->first();
		if (!empty($site) && $site->theme && $site->theme != $theme[0]) {
			$theme[] = $site->theme;
		}
		$pageTemplateList = $pageService->getPageTemplateList($page->content->id, $theme);
        $contentEntities = [
            'Page' => $page,
            'Content' => $page->content,
        ];
        $editor = $siteConfigService->getValue('editor');
        $editor_enter_br = $siteConfigService->getValue('editor_enter_br');
		$this->set(compact('editorOptions', 'pageTemplateList', 'publishLink', 'contentEntities', 'page', 'editor', 'editor_enter_br'));
		$this->render('form');
	}

	/**
	 * [ADMIN] 固定ページファイルを登録する
	 *
	 * @return void
	 */
	public function admin_entry_page_files()
	{
		$this->_checkSubmitToken();
		$pagesPath = APP . 'View' . DS . 'Pages';
		$result = $this->Page->entryPageFiles($pagesPath);
		clearAllCache();
		$this->BcMessage->setInfo(
			sprintf(__d('baser', '%s ページ中 %s ページの新規登録、 %s ページの更新、 %s フォルダの新規登録、 %s フォルダの更新に成功しました。'), $result['all'], $result['insert'], $result['update'], $result['insert_folder'], $result['update_folder'])
		);
		$this->redirect(['controller' => 'tools', 'action' => 'index']);
	}

	/**
	 * [ADMIN] 固定ページファイルを登録する
	 *
	 * @return void
	 */
	public function admin_write_page_files()
	{
		$this->_checkSubmitToken();
		if ($this->Page->createAllPageTemplate()) {
			$this->BcMessage->setInfo(__d('baser', '固定ページテンプレートの書き出しに成功しました。'));
		} else {
			$this->BcMessage->setError(__d('baser', "固定ページテンプレートの書き出しに失敗しました。\n表示できないページは固定ページ管理より更新処理を行ってください。"));
		}
		clearViewCache();
		$this->redirect(['controller' => 'tools', 'action' => 'index']);
	}

	/**
	 * コピー
	 *
	 * @return bool
	 */
	public function admin_ajax_copy()
	{
		$this->autoRender = false;
		if (!$this->request->data) {
			$this->ajaxError(500, __d('baser', '無効な処理です。'));
		}
		$user = $this->BcAuth->user();
		$data = $this->Page->copy(
			$this->request->data['entityId'],
			$this->request->data['parentId'],
			$this->request->data['title'],
			$user['id'],
			$this->request->data['siteId']
		);
		if (!$data) {
			$this->ajaxError(500, $this->Page->validationErrors);
			return false;
		}

		$message = sprintf(__d('baser', '固定ページのコピー「%s」を追加しました。'), $this->request->data['title']);
		$this->BcMessage->setSuccess($message, true, false);
		return json_encode($data['Content']);
	}

	/**
	 * 一覧の表示用データをセットする
	 *
	 * @return void
	 */
	protected function _setAdminIndexViewData()
	{
		$user = $this->BcAuth->user();
		$allowOwners = [];
		if (!empty($user)) {
			$allowOwners = ['', $user['user_group_id']];
		}
		if (!isset($this->passedArgs['sortmode'])) {
			$this->passedArgs['sortmode'] = false;
		}
		$this->set('users', $this->Page->getControlSource('user_id'));
		$this->set('allowOwners', $allowOwners);
		$this->set('sortmode', $this->passedArgs['sortmode']);
	}

}
