<?php

// ADD META BOX TO LOCATION
add_action( 'add_meta_boxes', function () {
  add_meta_box(
    'geolocation_fields_meta_box',
    'Geolocation Fields',
    function ($location) {
      wp_nonce_field('vd_react_base_location_nonce_action', 'vd_react_base_location_nonce');

      $latitude = get_post_meta($location->ID, '_latitude', true);
      
      echo '<label for="latitude" style="margin-right: 19px;">Latitude:</label>';
      echo '<input type="text" id="latitude" name="latitude" value="' . esc_attr($latitude) . '"/><br /><br />';

      $longitude = get_post_meta($location->ID, '_longitude', true);
      
      echo '<label for="longitude" style="margin-right: 10px;">longitude:</label>';
      echo '<input type="text" id="longitude" name="longitude" value="' . esc_attr($longitude) . '"/>';
    },
    'location',
    'normal',
    'default'
  );
});

// SAVE META BOX DATA
add_action( 'save_post', function ($post_id) {
  if (!isset($_POST['vd_react_base_location_nonce'])) {
    return $post_id;
  }

  $nonce = $_POST['vd_react_base_location_nonce'];

  if (!wp_verify_nonce( $nonce, 'vd_react_base_location_nonce_action')) {
    return $post_id;
  }

  if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
    return $post_id;
  }

  if (!current_user_can( 'edit_post', $post_id)) {
    return $post_id;
  }

  $latitude = sanitize_text_field($_POST['latitude']);
  update_post_meta($post_id, '_latitude', $latitude);

  $longitude = sanitize_text_field($_POST['longitude']);
  update_post_meta($post_id, '_longitude', $longitude);
});

