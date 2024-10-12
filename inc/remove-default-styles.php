<?php

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