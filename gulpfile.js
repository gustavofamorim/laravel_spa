const elixir = require('laravel-elixir');
require('laravel-elixir-browserify-official');
require('laravel-elixir-vue-2');
require('laravel-elixir-vueify');

elixir(mix => {
    mix.sass('app.scss')
       .webpack('app.js')
       .browserify('main.js')
       .styles([
            './node_modules/normalize.css/normalize.css'
        ]);
});
