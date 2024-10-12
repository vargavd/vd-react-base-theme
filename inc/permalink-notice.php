<?php

/****************************************
 * SET PERMALINKS TO POSTNAME ON THEME SWITCH
 ***************************************/


// create permalink notice on theme switch
function vd_react_base_set_permalinks() {
  update_option('vd_react_base_permalinks_notice', '1');
}
add_action('after_switch_theme', 'vd_react_base_set_permalinks');


// display dashboard notice until it is dismissed
function vd_react_base_permalinks_notice() {
  $permalink_structure = get_option('permalink_structure');
  
  if ($permalink_structure !== '') {
    return;
  }
  
  $notice_state = get_option('vd_react_base_permalinks_notice');

  if ($notice_state == '1') {
    echo '<div class="notice notice-warning is-dismissible vd-react-theme-permalink-notice">';
    echo '  <p>';
    echo '    <strong>VD React Theme:</strong><br />';
    echo '    Remember to change permalink structure to any other then \'Plain\'. <a href="' . admin_url('options-permalink.php') . '">Settings > Permalinks</a>';
    echo '  </p>';
    echo '</div>';
  }
}
add_action('admin_notices', 'vd_react_base_permalinks_notice');


// add javascript to dashboard
function vd_react_base_permalinks_notice_script() {
  ?>
  <script>
    jQuery(document).ready(function($) {
      setTimeout(function () {        
        $('.vd-react-theme-permalink-notice .notice-dismiss').on('click', function() {
          $.post(ajaxurl, {
            action: 'vd_react_base_dismiss_permalinks_notice'
          });
        });
      }, 1000);
    });
  </script>
  <?php
}
add_action('admin_footer', 'vd_react_base_permalinks_notice_script');


// dismiss notice in ajax
function vd_react_base_dismiss_permalinks_notice() {
  delete_option('vd_react_base_permalinks_notice');
}
add_action('wp_ajax_vd_react_base_dismiss_permalinks_notice', 'vd_react_base_dismiss_permalinks_notice');