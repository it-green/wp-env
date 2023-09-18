<?php
// cssとjsの反映
add_action('wp_enqueue_scripts', 'get_styles_script');
function get_styles_script() {
  // import style
  wp_enqueue_style('main', get_template_directory_uri() . "/assets/css/main.css", array(), false, 'all');
  // import google fonts
  wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap', array(), false, 'all');
}