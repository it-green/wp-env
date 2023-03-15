<?php
// cssとjsの反映
add_action('wp_enqueue_scripts', 'get_styles_script');
function get_styles_script() {
  // import style
  wp_enqueue_style('main', get_template_directory_uri() . "/assets/css/main.css", array(), false, 'all');
}