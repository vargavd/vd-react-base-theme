<?php
/**
 * VD React Base Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package VD_React_Base_Theme
 */



/****************************************
 * Redirection * to home
 ***************************************/
function vd_react_base_redirect_to_home() {
  if (!is_home()) {
    wp_redirect(get_bloginfo('home'));
    exit;
  }
}
add_action('template_redirect', 'vd_react_base_redirect_to_home');



/****************************************
 * Enqueue theme style css.
 ****************************************/
function vd_react_base_scripts() {
  // default theme style.css
  wp_enqueue_style( 'vd-react-base-style', get_stylesheet_uri(), array() );

  // dequeue
  // wp_deregister_style('dashicons');


  // load react application, with dynamic versioning and no dependencies
  // $script_path = '/build/index.js';
  // wp_enqueue_script('st-main-script', get_stylesheet_directory_uri() . $script_path, array(), filemtime(get_stylesheet_directory() . $script_path), true);
  // wp_localize_script('st-main-script', 'stInfos', array(
  //     'baseUrl' => get_home_url()
  // ));
}
add_action('wp_enqueue_scripts', 'vd_react_base_scripts', 9999);



/****************************************
 * Disable Gutenberg Editor
 ***************************************/
add_filter('use_block_editor_for_post', '__return_false', 10);



/****************************************
 * Disable XML-RPC
 ***************************************/
add_filter('xmlrpc_enabled', '__return_false');
remove_action('wp_head', 'rsd_link');



/****************************************
 * REMOVE RSS FEEDS
 ***************************************/
function vd_react_base_disable_feed() {
  wp_die(__( 'No feed available'));
}
add_action('do_feed', 'vd_react_base_disable_feed', 1);
add_action('do_feed_rdf', 'vd_react_base_disable_feed', 1);
add_action('do_feed_rss', 'vd_react_base_disable_feed', 1);
add_action('do_feed_rss2', 'vd_react_base_disable_feed', 1);
add_action('do_feed_atom', 'vd_react_base_disable_feed', 1);
add_action('do_feed_rss2_comments', 'vd_react_base_disable_feed', 1);
add_action('do_feed_atom_comments', 'vd_react_base_disable_feed', 1);
remove_action( 'wp_head', 'feed_links_extra', 3 );
remove_action( 'wp_head', 'feed_links', 2 );



/****************************************
 * REMOVE ADMIN BAR
 ***************************************/
add_filter('show_admin_bar', '__return_false');



/****************************************
 * REMOVE WP EMOJI
 ***************************************/
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');



/****************************************
 * REMOVE DEFAULT STYLES
 ***************************************/
function vd_react_base_remove_default_styles() {
  // wp-bloc-library
  wp_deregister_style('wp-block-library');
  wp_deregister_style('wp-block-library-theme');
  wp_deregister_style('classic-theme-styles');
  wp_deregister_style('global-styles');

}
add_action('wp_enqueue_scripts', 'vd_react_base_remove_default_styles');



/****************************************
 * REMOVE WORDPRESS VERSION
 ***************************************/
remove_action('wp_head', 'wp_generator');