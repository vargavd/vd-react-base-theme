<?php

/****************************************
 * Enqueue theme style css.
 ****************************************/


function vd_react_base_scripts() {
  // default theme style.css
  wp_enqueue_style( 'vd-react-base-style', get_stylesheet_uri(), array() );


  // load react application, with dynamic versioning and no dependencies
  // $script_path = '/build/index.js';
  // wp_enqueue_script('st-main-script', get_stylesheet_directory_uri() . $script_path, array(), filemtime(get_stylesheet_directory() . $script_path), true);
  // wp_localize_script('st-main-script', 'stInfos', array(
  //     'baseUrl' => get_home_url()
  // ));
}
add_action('wp_enqueue_scripts', 'vd_react_base_scripts', 9999);