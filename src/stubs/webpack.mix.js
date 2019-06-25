let mix = require('laravel-mix');

require('laravel-mix-tailwind');

mix.react('resources/js/app.js', 'js')
   .sass('resources/sass/app.scss', 'css')
   .tailwind();