<?php

/****************************************
 * DISABLE 404 STATUS
 ***************************************/

function vd_react_base_disable_404_status($header, $code, $description, $protocol)
{
  return intval($code) === 404 ? "{$protocol} 200 {" . get_status_header_desc(200) . "}" : $header;
}
add_filter('status_header', 'vd_react_base_disable_404_status', 999, 4);