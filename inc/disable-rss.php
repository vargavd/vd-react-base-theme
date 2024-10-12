<?php

/****************************************
 * DISABLE RSS FEEDS
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