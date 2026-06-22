<?php
declare(strict_types=1);

use BaserCore\Database\Migration\BcMigration;

class AddIndexesForBlogTagPerformance extends BcMigration
{
    /**
     * Up Method.
     * @return void
     */
    public function up()
    {
        $this->table('blog_posts_blog_tags')
            ->addIndex(['blog_tag_id', 'blog_post_id'], ['name' => 'blog_posts_blog_tags_tag_post'])
            ->addIndex(['blog_post_id', 'blog_tag_id'], ['name' => 'blog_posts_blog_tags_post_tag'])
            ->update();

        $this->table('blog_tags')
            ->addIndex(['name'], ['name' => 'blog_tags_name'])
            ->update();
    }

    /**
     * Down Method.
     * @return void
     */
    public function down()
    {
        $this->table('blog_posts_blog_tags')
            ->removeIndexByName('blog_posts_blog_tags_tag_post')
            ->removeIndexByName('blog_posts_blog_tags_post_tag')
            ->update();

        $this->table('blog_tags')
            ->removeIndexByName('blog_tags_name')
            ->update();
    }
}
