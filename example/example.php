<?php

add_action('wp_enqueue_scripts', function () {
  // MAPBOX
  wp_enqueue_style('mapbox-style', 'https://api.mapbox.com/mapbox-gl-js/v3.7.0/mapbox-gl.css', NULL);
  wp_enqueue_script('mapbox-script', 'https://api.mapbox.com/mapbox-gl-js/v3.7.0/mapbox-gl.js', NULL, NULL, true);

  $script_path = '/example/dist/bundle.js';

  wp_enqueue_script('vd-react-base-example-script', get_stylesheet_directory_uri() . $script_path, array('mapbox-script'), filemtime(get_stylesheet_directory() . $script_path), true);
  wp_localize_script('vd-react-base-example-script', 'vdReactBaseInfos', array(
      'baseUrl' => get_home_url()
  ));
});

