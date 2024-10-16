<?php

function vd_react_base_import_location($req) {
  // $response = array(
  //   'status' => 'success',
  //   'errors' => array(),
  //   'messages' => array(),
  //   'categories' => array(),
  //   'tags' => array()
  // );

  // function add_error(&$response, $error_message) {
  //   array_push($response['errors'], $error_message);
  //   $response['status'] = 'error';
  // }
  
  // $project = $req['project'];

  // $title = $project['title'];
  // $slug = $project['url'];
  // $project_categories = $project['project_categories'];
  // $project_tags = $project['project_tags'];
  // $pubDate = $project['pubDate'];

  // // return $project;

  // // CHECK IF POST EXISTS
  // if (get_page_by_path($slug, OBJECT, 'project')) {
  //   array_push($response['messages'], 'Post already exists with this: ' . $slug);
  //   return $response;
  // }

  // // META INFOS
  // $meta_infos = sivananda_get_meta_information("https://sivananda.hu/project/" . $slug);

  // // IMAGE UPLOAD
  // $attachment_id = null;

  // if (array_key_exists('image', $meta_infos)) {
  //   $attachment_id = sivananda_download_image_to_media_library($meta_infos['image']);
  
  //   if (is_wp_error($attachment_id)) {
  //     add_error($response, 'Error in adding image to media library: ' . $attachment_id->get_error_message());
  //     return $response;
  //   }
  // } else {
  //   array_push($response['messages'], "No OG Image found for '$slug'.");
  //   // return $response; // No need to return, we can still create the post without image
  // }

  // // POST CREATION
  // $post_id = wp_insert_post(array(
  //   'post_title' => $title,
  //   'post_name' => $slug,
  //   'post_content' => '',
  //   'post_status' => 'publish',
  //   'post_date' => $pubDate,
  //   'post_type' => 'project'
  // ));

  // if (is_wp_error($post_id)) {
  //   add_error($response, 'Error in creating project: ' . $post_id->get_error_message());
  //   return $response;
  // }

  // // CATEGORIES
  // foreach ($project_categories as $category) {
  //   $category_name = $category['label'];
  //   $category_slug = $category['slug'];
  //   $term = get_term_by('slug', $category_slug, 'project_category');
    
  //   if (!$term) {
  //     array_push($response['messages'], 'Did not find category, needed to be added: ' . $category_slug);
  //     $term_data = wp_insert_term($category_name, 'project_category');

  //     $term = get_term($term_data['term_id'], 'project_category');
  //   }

  //   wp_set_object_terms($post_id, array(intval($term->term_id)), 'project_category', true);
  // }

  // // TAGS
  // foreach ($project_tags as $tag) {
  //   $tag_name = $tag['label'];
  //   $tag_slug = $tag['slug'];
  //   $term = get_term_by('slug', $tag_slug, 'project_tag');
    
  //   if (!$term) {
  //     array_push($response['messages'], 'Did not find tag, needed to be added: ' . $tag_slug);
  //     $term_data = wp_insert_term($tag_name, 'project_tag');

  //     $term = get_term($term_data['term_id'], 'project_tag');
  //   }

  //   wp_set_object_terms($post_id, array(intval($term->term_id)), 'project_tag', true);
  // }

  // // ADD ATTACHMENT TO POST
  // if (!is_wp_error($attachment_id)) {
  //   set_post_thumbnail($post_id, $attachment_id);
  // }

  // // ADD EXCERPT
  // if (array_key_exists('description', $meta_infos)) {
  //   $excerpt = $meta_infos['description'];
  //   $excerpt = strip_tags($excerpt);
  //   $excerpt = wp_strip_all_tags($excerpt);

  //   wp_update_post(array(
  //     'ID' => $post_id,
  //     'post_excerpt' => $excerpt
  //   ));
  // }


  // $response['project'] = $project;

  // return $response;
}

add_action('rest_api_init', function () {
  register_rest_route( 'vd-react-base-theme/v1', 'import-location', array(
      'methods' => 'POST',
      'callback' => 'vd_react_base_import_location',
      'permission_callback' => '__return_true'
  ));
});
