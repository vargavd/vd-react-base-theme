<?php

// -----------------------------------------
// REGISTER LOCATION POST TYPE AND RELATED TAXONOMIES
add_action( 'init', function () {
  $taxonomies = array();
  function register_taxonomy_for_location($letter, &$taxonomies) {
    register_taxonomy( "location_taxonomy_$letter", null, array(
      'labels' => array(
        'name'                       => __( "Taxonomy${letter}s", 'textdomain' ),
        'singular_name'              => __( "Taxonomy${letter}", 'textdomain' ),
        'search_items'               => __( "Search Taxonomy${letter}s", 'textdomain' ),
        'popular_items'              => __( "Popular Taxonomy${letter}s", 'textdomain' ),
        'all_items'                  => __( "All Taxonomy${letter}s", 'textdomain' ),
        'parent_item'                => null,
        'parent_item_colon'          => null,
        'edit_item'                  => __( "Edit Taxonomy${letter}", 'textdomain' ),
        'update_item'                => __( "Update Taxonomy${letter}", 'textdomain' ),
        'add_new_item'               => __( "Add New Taxonomy${letter}", 'textdomain' ),
        'new_item_name'              => __( "New Taxonomy${letter} Name", 'textdomain' ),
        'separate_items_with_commas' => __( "Separate Taxonomy${letter}s with commas", 'textdomain' ),
        'add_or_remove_items'        => __( "Add or remove Taxonomy${letter}s", 'textdomain' ),
        'choose_from_most_used'      => __( "Choose from the most used Taxonomy${letter}s", 'textdomain' ),
        'not_found'                  => __( "No Taxonomy${letter}s found.", 'textdomain' ),
        'menu_name'                  => __( "Taxonomy${letter}s", 'textdomain' ),
      ),
      'hierarchical'          => true,
      'show_ui'               => true,
      'show_admin_column'     => true,
      'show_in_rest'          => true,
      //'update_count_callback' => '_update_post_term_count',
      'query_var'             => true,
      'rewrite'               => array( 'slug' => "location_$letter" ),
      'show_in_rest'          => true
    ));

    array_push($taxonomies, "location_taxonomy_$letter");
  }

  register_taxonomy_for_location('A', $taxonomies);
  register_taxonomy_for_location('B', $taxonomies);
  register_taxonomy_for_location('C', $taxonomies);
  register_taxonomy_for_location('D', $taxonomies);

  register_post_type( 'location',
    array(
      'labels' => array(
        'name'                  => __( 'Locations', 'textdomain' ),
        'singular_name'         => __( 'Location', 'textdomain' ),
        'menu_name'             => __( 'Locations', 'textdomain' ),
        'name_admin_bar'        => __( 'Location', 'textdomain' ),
        'add_new'               => __( 'Add New', 'textdomain' ),
        'add_new_item'          => __( 'Add New Location', 'textdomain' ),
        'new_item'              => __( 'New Location', 'textdomain' ),
        'edit_item'             => __( 'Edit Location', 'textdomain' ),
        'view_item'             => __( 'View Location', 'textdomain' ),
        'all_items'             => __( 'All Locations', 'textdomain' ),
        'search_items'          => __( 'Search Locations', 'textdomain' ),
        'parent_item_colon'     => __( 'Parent Locations:', 'textdomain' ),
        'not_found'             => __( 'No Locations found.', 'textdomain' ),
        'not_found_in_trash'    => __( 'No Locations found in Trash.', 'textdomain' ),
      ),
      'public'         => true,
      'show_in_rest'  => true,
      'has_archive'    => false,
      'rewrite'        => array(
        'slug'       => 'location',
        'with_front' => true
      ),
      'query_var'      => 'location',
      'taxonomies'     => $taxonomies,
      'supports'       => array('title', 'editor', 'thumbnail'),
    )
  );
});


// -----------------------------------------
// GET "ALL" LOCATIONS VIE REST API
// TODO: This is a hack to get all locations, but won't work for large datasets. Should create a custom endpoint to handle this, according to documentation.
add_filter( 'rest_location_query', function( $args ) {
  $args['posts_per_page'] = 1000;
  return $args;
}, 10, 1);


// -----------------------------------------
// ADD LATITUDE AND LONGITUDE META FIELDS TO REST
add_action( 'rest_api_init', function () {
  register_rest_field( 'location', '_latitude', array(
    'get_callback' => function( $location ) {
        return get_post_meta($location['id'], '_latitude', true);
    }
  ));

  register_rest_field( 'location', '_longitude', array(
    'get_callback' => function( $location ) {
        return get_post_meta($location['id'], '_longitude', true);
    }
  ));
});

