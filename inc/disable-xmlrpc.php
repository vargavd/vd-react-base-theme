<?php

/****************************************
 * Disable XML-RPC
 ***************************************/

add_filter('xmlrpc_enabled', '__return_false');
remove_action('wp_head', 'rsd_link');