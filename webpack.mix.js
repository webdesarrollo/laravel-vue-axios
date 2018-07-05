let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js([
      'resources/assets/js/jquery-3.3.1.slim.min.js',
      'resources/assets/js/toastr.js',
      'resources/assets/js/popper.min.js',
      'resources/assets/js/bootstrap.min.js',
      'resources/assets/js/all.js',
      'resources/assets/js/vue.js',
      'resources/assets/js/axios.js',
      'resources/assets/js/app.js',
   ], 'public/js/app.js');

mix.styles([
   'resources/assets/css/bootstrap.min.css',
   'resources/assets/css/all.css'
], 'public/css/app.css');
