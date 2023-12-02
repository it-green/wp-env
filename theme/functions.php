<?php
// cssとjsの反映
add_action('wp_enqueue_scripts', 'get_styles_script');
function get_styles_script()
{
  // import style
  wp_enqueue_style('style', get_template_directory_uri() . "/assets/css/style.css", array(), false, 'all');
  // import script
  wp_enqueue_script('script', get_template_directory_uri() . '/assets/js/script.js', array(), false, true);
  // import google fonts
  wp_enqueue_style('google-fonts-noto-sans', 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap', array(), false, 'all');
  wp_enqueue_style('google-fonts-robot', 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap', array(), false, 'all');
}

// 画像パスを生成するための関数
function getImgPath($file_name)
{
  echo get_template_directory_uri() . '/assets/images/' . $file_name;
}
