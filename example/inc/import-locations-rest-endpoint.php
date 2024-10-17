<?php

function add_taxonomy_to_location($term_name, $taxonomy, $post_id) {
  $term_name = sanitize_text_field($term_name);
  $taxonomy = sanitize_text_field($taxonomy);
  $post_id = intval($post_id);

  $term = get_term_by('name', $term_name, $taxonomy);

  if (!$term) {
    $term_data = wp_insert_term($term_name, $taxonomy);
    $term = get_term_by('id', $term_data['term_id'], $taxonomy);
  }

  wp_set_object_terms($post_id, array(intval($term->term_id)), $taxonomy, true);
}

function vd_react_base_import_location($req) {
  $response = array(
    'error' => '',
    'message' => ''
  );
  
  $location = $req['location'];

  $title = sanitize_text_field($location['title']);
  $text = sanitize_text_field($location['introText']);
  $taxonomyATerms = $location['taxonomyATerms'];
  $taxonomyBTerms = $location['taxonomyBTerms'];
  $taxonomyCTerms = $location['taxonomyCTerms'];
  $taxonomyDTerms = $location['taxonomyDTerms'];
  $lat = sanitize_text_field($location['lat']);
  $lng = sanitize_text_field($location['lng']);

  $slug = strtolower(str_replace(' ', '-', $title));

  // CHECK IF POST EXISTS
  if (get_page_by_path($slug, OBJECT, 'location')) {
    $response['message'] = "Location already exists with this slug '$slug'";
    return $response;
  }

  // POST CREATION
  $created_post = wp_insert_post(array(
    'post_title' => $title,
    'post_name' => $slug,
    'post_content' => $text,
    'post_status' => 'publish',
    'post_type' => 'location'
  ));

  if (is_wp_error($created_post)) {
    $response['message'] = $created_post->get_error_message();
    return new WP_REST_Response($response, 500);
  }

  // ADD LATITUDE/LONGITUDE
  update_post_meta($created_post, '_latitude', $lat);
  update_post_meta($created_post, '_longitude', $lng);

  // TAXONOMY A TERMS
  if (is_array($taxonomyATerms)) {
    foreach ($taxonomyATerms as $term) {
      add_taxonomy_to_location(sanitize_text_field($term), 'location_taxonomy_A', $created_post);
    }
  }

  // TAXONOMY B TERMS
  foreach ($taxonomyBTerms as $term) {
    add_taxonomy_to_location($term, 'location_taxonomy_B', $created_post);
  }

  // TAXONOMY C TERMS
  foreach ($taxonomyCTerms as $term) {
    add_taxonomy_to_location($term, 'location_taxonomy_C', $created_post);
  }

  // TAXONOMY D TERMS
  foreach ($taxonomyDTerms as $term) {
    add_taxonomy_to_location($term, 'location_taxonomy_D', $created_post);
  }

  $response['location'] = $created_post;

  return new WP_REST_Response($response, 200);
}

add_action('rest_api_init', function () {
  register_rest_route( 'vd-react-base-theme/v1', 'import-location', array(
      'methods' => 'POST',
      'callback' => 'vd_react_base_import_location',
      'permission_callback' => '__return_true'
  ));
});
