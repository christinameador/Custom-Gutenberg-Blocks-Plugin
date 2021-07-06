<?php

/**
 * Plugin Name: Top Hat
 * Plugin URI: https://github.com/gianthat/top-hat-plugin
 * Description: This is a plugin to add core Top Hat blocks to the Block Editor.
 * Version: 1.0.0
 * Author: Giant Hat
 *
 */

if( ! defined( 'ABSPATH' ) ) {
  exit;
}

function tophat_blocks_register_block_type($block, $options = array()) {
  register_block_type(
    'tophat-blocks/' . $block,
    array_merge(
      array(
        'editor_script' => 'tophat-blocks-editor-script',
        'editor_style' => 'tophat-blocks-editor-style',
        'script' => 'tophat-blocks-script',
        'style' => 'tophat-blocks-style',
      ),
      $options
    )
  );
}

function tophat_blocks_register() {

  wp_register_script(
    'tophat-blocks-editor-script',
    plugins_url('dist/editor.js', __FILE__),
    array('wp-blocks','wp-i18n', 'wp-element', 'wp-editor', 'wp-components')
  );

  wp_register_script(
    'tophat-blocks-script',
    plugins_url('dist/script.js', __FILE__),
    array('jquery')
  );

  wp_register_style(
    'tophat-blocks-editor-style',
    plugins_url('dist/editor.css', __FILE__),
    array('wp-edit-blocks')
  );

  wp_register_style(
    'tophat-blocks-style',
    plugins_url('dist/style.css', __FILE__),
    array('wp-edit-blocks')
  );

  tophat_blocks_register_block_type('button-block');
  tophat_blocks_register_block_type('top-hat-button-block');
}

add_action('init', 'tophat_blocks_register');