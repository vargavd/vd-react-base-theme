<?php

add_filter('vd_react_base_app_content', function($content) {
    return '<div id="app"></div>';
});

include "inc/location-content-type.php";

include "inc/enqueue-scripts-styles.php";

include "inc/import-locations-rest-endpoint.php";

include "inc/location-meta-box.php";
